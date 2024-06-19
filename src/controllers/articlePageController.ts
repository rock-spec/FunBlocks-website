import { Locale } from "@/i18n.config"
import SupabaseInstance from "../../supabase"

const supabase = SupabaseInstance.getSupabaseInstance()

type filterSchema = {
    query?: string
    categoryid?: string
    sort?: string
    locale: Locale
}

const getAllArticles = async (filter: filterSchema) => {
    const locale = filter?.locale
    const searchQuery = filter?.query
    const categoryid = filter?.categoryid
    const sort = filter?.sort

    let query = supabase.from("articles").select(
        `articleid, publishdate,
            content(
                title_en, title_zh, description_en,description_zh, content_en,content_zh, image, author:authorid(name), game:gameid(gameid, engineid, gamestudioid, blockchainid)
            )`
    )
    if (categoryid) query = query.eq("categoryid", categoryid)
    if (searchQuery) query = query.ilike(`content.title_${locale}`, `%${searchQuery}%`)
    if (sort) query = query.order("publishdate", { ascending: false }) // Add sorting by publishdate in descending order
    const { data, error } = await query
    if (error) throw new Error("Error fetching articles: " + error.message)

    // let sortedData = data
    // if (sort) {
    //     sortedData = data.sort(
    //         (a, b) =>
    //             new Date(b?.content?.publishdate).getTime() - new Date(a?.content?.publishdate).getTime()
    //     )
    // }
    if (searchQuery) {
        const filteredData = data.filter((item) => item.content !== null)
        return filteredData || []
    }
    return data || []
}

const getFeaturedGameData = async () => {
    const { data, error } = await supabase.from("game").select("*").range(0, 5)
    if (error) {
        throw new Error("Error fetching games: " + error.message)
    }

    return data || []
}

const getFeaturedArticlesData = async (locale: Locale) => {
    const { data, error } = await supabase
        .from("articles")
        .select(`articleid,content(title_en, title_zh,image)`)
        .range(0, 5)
    if (error) {
        throw new Error("Error fetching articles: " + error.message)
    }

    return data || []
}

export const getarticlesData = async (filter: filterSchema) => {
    const articles = await getAllArticles(filter)
    const featuredGames = await getFeaturedGameData()

    return { articles, featuredGames }
}

export const getfeaturedArticles = async (locale: Locale) => {
    const featuredArticles = await getFeaturedArticlesData(locale)
    return { featuredArticles }
}
