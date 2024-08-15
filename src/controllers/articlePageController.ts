import { Locale } from "@/i18n.config"
import SupabaseInstance from "../../supabase"

const supabase = SupabaseInstance.getSupabaseInstance()

type filterSchema = {
    query?: string
    categoryid?: string
    sort?: string
    locale: Locale
    page: number
    pageSize: number
}

const getAllArticles = async (filter: filterSchema) => {
    const { locale, query, categoryid, sort, page, pageSize } = filter

    let queryBuilder = supabase
        .from("articles")
        .select(
            `articleid, publishdate,games:content_gameids(gameid), content(contentid, image, title_en, title_zh, description_en, description_zh, author(*))`
        )
    queryBuilder = queryBuilder.not(`content.title_${locale}`, "is", null)
    if (categoryid) queryBuilder = queryBuilder.eq("categoryid", categoryid)
    if (query) queryBuilder = queryBuilder.ilike(`content.title_${locale}`, `%${query}%`)
    if (sort) queryBuilder = queryBuilder.order("publishdate", { ascending: false })
    queryBuilder = queryBuilder.range(page * pageSize, (page + 1) * pageSize - 1)

    const { data, error } = await queryBuilder
    if (error) throw new Error("Error fetching articles: " + error.message)

    const filteredData = data.filter((item) => item.content !== null)
    return filteredData || []
}

const getFeaturedGameData = async () => {
    const { data, error } = await supabase.from("game").select("*").limit(5)
    if (error) {
        throw new Error("Error fetching games: " + error.message)
    }

    return data || []
}

// const getFeaturedArticlesData = async (locale: Locale) => {
//     const { data, error } = await supabase
//         .from("articles")
//         .select(`articleid,content(title_en, title_zh,image)`)
//         .range(0, 5)

//     if (error) {
//         throw new Error("Error fetching articles: " + error.message)
//     }

//     return data || []
//     // queryBuilder = queryBuilder.not(`content.title_${locale}`, "is", null)
// }

const getFeaturedArticlesData = async (locale: Locale) => {
    let queryBuilder = supabase
        .from("articles")
        .select(`articleid,content(title_en, title_zh,image)`)
        .range(0, 5)
    queryBuilder = queryBuilder.not(`content.title_${locale}`, "is", null)

    const { data, error } = await queryBuilder

    if (error) {
        console.log("🚀 ~ getFeaturedArticlesData ~ error:", error)
        throw new Error("Error fetching articles: " + error.message)
    }
    const filteredData = data.filter((item) => item.content !== null)
    return filteredData || []
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

