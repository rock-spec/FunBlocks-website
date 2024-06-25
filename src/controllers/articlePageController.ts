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
    const { locale, query, categoryid, sort, page, pageSize } = filter;


    let queryBuilder = supabase.from("articles").select(
        `articleid, publishdate,
            content(
                title_en, title_zh, description_en,description_zh, content_en,content_zh, image, author:authorid(name), game:gameid(gameid, engineid, gamestudioid, blockchainid)
            )`
    )
    if (categoryid) queryBuilder = queryBuilder.eq("categoryid", categoryid)
    if (query) queryBuilder = queryBuilder.ilike(`content.title_${locale}`, `%${query}%`)
    if (sort) queryBuilder = queryBuilder.order("publishdate", { ascending: false }) // Add sorting by publishdate in descending order
    queryBuilder = queryBuilder.range(page * pageSize, (page + 1) * pageSize - 1); // Apply pagination

    const { data, error } = await queryBuilder
    if (error) throw new Error("Error fetching articles: " + error.message)

    if (query) {
        const filteredData = data.filter((item) => item.content !== null)
        return filteredData || []
    }
    return data || []
}

const getFeaturedGameData = async () => {
    const { data, error } = await supabase.from("game").select("*").limit(5)
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




// import { Locale } from "@/i18n.config"
// import SupabaseInstance from "../../supabase"

// const supabase = SupabaseInstance.getSupabaseInstance()

// type filterSchema = {
//     query?: string
//     categoryid?: string
//     sort?: string
//     locale: Locale
//     page: number // Page number for pagination
//     pageSize: number // Number of items per page
  
// }

// const getAllArticles = async (filter: filterSchema) => {
//     const locale = filter?.locale
//     const searchQuery = filter?.query
//     const categoryid = filter?.categoryid
//     const sort = filter?.sort

//     let query = supabase.from("articles").select(
//         `articleid, publishdate,
//             content(
//                 title_en, title_zh, description_en,description_zh, content_en,content_zh, image, author:authorid(name), game:gameid(gameid, engineid, gamestudioid, blockchainid)
//             )`
//     )
//     if (categoryid) query = query.eq("categoryid", categoryid)
//     if (searchQuery) query = query.ilike(`content.title_${locale}`, `%${searchQuery}%`)
//     if (sort) query = query.order("publishdate", { ascending: false }) // Add sorting by publishdate in descending order
//     const { data, error } = await query
//     if (error) throw new Error("Error fetching articles: " + error.message)

//     if (searchQuery) {
//         const filteredData = data.filter((item) => item.content !== null)
//         return filteredData || []
//     }
//     return data || []
// }

// const getFeaturedGameData = async () => {
//     const { data, error } = await supabase.from("game").select("*").range(0, 5)
//     if (error) {
//         throw new Error("Error fetching games: " + error.message)
//     }

//     return data || []
// }

// const getFeaturedArticlesData = async (locale: Locale) => {
//     const { data, error } = await supabase
//         .from("articles")
//         .select(`articleid,content(title_en, title_zh,image)`)
//         .range(0, 5)
//     if (error) {
//         throw new Error("Error fetching articles: " + error.message)
//     }

//     return data || []
// }

// export const getarticlesData = async (filter: filterSchema) => {
//     const articles = await getAllArticles(filter)
//     const featuredGames = await getFeaturedGameData()
//     return { articles, featuredGames }
// }

// export const getfeaturedArticles = async (locale: Locale) => {
//     const featuredArticles = await getFeaturedArticlesData(locale)
//     return { featuredArticles }
// }
