import SupabaseInstance from "../../supabase"
import { type Locale } from "@/i18n.config"
import { getFeaturedGames } from "./featuredController"

const supabase = SupabaseInstance.getSupabaseInstance()

type filterSchema = {
    query?: string
    categoryid?: string
    sort?: string
    locale: Locale
    page: number
    pageSize: number
}

const getAllNews = async (filter: filterSchema) => {
    const { locale, query, categoryid, sort, page, pageSize } = filter

    let queryBuilder = supabase
        .from("news")
        .select(
            `newsid,publishdate, category(*), content(title_en, title_zh, description_en, description_zh, image, author(name),game(gameid,engineid,gamestudioid,blockchainid))`
        )
        .not(`content.title_${locale}`, "is", null)
        .not("content", "is", null)
    if (categoryid) queryBuilder = queryBuilder.eq("categoryid", categoryid)
    if (query) queryBuilder = queryBuilder.ilike(`content.title_${locale}`, `%${query}%`)
    if (sort) queryBuilder = queryBuilder.order("publishdate", { ascending: false })
    queryBuilder = queryBuilder.range(page * pageSize, (page + 1) * pageSize - 1)

    const { data, error } = await queryBuilder
    if (error) throw new Error("Error fetching articles: " + error.message)
    if (query) {
        const filteredData = data.filter((item) => item.content !== null)
        return filteredData || []
    }
    return data || []
}

export const getNewsData = async (filter: filterSchema) => {
    const [news, featuredGames] = await Promise.allSettled([getAllNews(filter), getFeaturedGames()])

    return { news, featuredGames }
}
