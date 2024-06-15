import SupabaseInstance from "../../supabase"
import { type Locale } from "@/i18n.config"
import { getFeaturedGames } from "./featuredController"

const supabase = SupabaseInstance.getSupabaseInstance()

type filterSchema = {
    query?: string
    categoryid?: string
    sort?: string
    locale: Locale
}

// const getAllNews = async (filter: filterSchema) => {
//     locale
//     const { data, error } = await supabase
//         .from("news")
//         .select(
//             `newsid, category(*), content(title_en, title_zh, description_en, description_zh, publishdate, image, author(name),game(gameid,engineid,gamestudioid,blockchainid))`
//         )
//     if (error) {
//         throw new Error("Error fetching news: " + error.message)
//     }
//     return data || []
// }

const getAllNews = async (filter: filterSchema) => {
    const locale = filter?.locale
    const searchQuery = filter?.query
    const categoryid = filter?.categoryid
    const sort = filter?.sort

    let query = supabase
        .from("news")
        .select(
            `newsid, category(*), content(title_en, title_zh, description_en, description_zh, publishdate, image, author(name),game(gameid,engineid,gamestudioid,blockchainid))`
        )
    if (categoryid) query = query.eq("categoryid", categoryid)
    if (searchQuery) query = query.ilike(`content.title_${locale}`, `%${searchQuery}%`)
    if (sort) query = query.order("content_id->publishdate", { ascending: false }) // Add sorting by publishdate in descending order
    const { data, error } = await query
    if (error) throw new Error("Error fetching articles: " + error.message)
    if (searchQuery) {
        const filteredData = data.filter((item) => item.content !== null)
        return filteredData || []
    }
    return data || []
}

export const getNewsData = async (filter: filterSchema) => {
    const [news, featuredGames] = await Promise.allSettled([getAllNews(filter), getFeaturedGames()])

    return { news, featuredGames }
}
