import SupabaseInstance from "../../supabase"
const supabase = SupabaseInstance.getSupabaseInstance()
import { type Locale } from "@/i18n.config"

const calculateStartDate = (filter?: string): Date | null => {
    const currentDate = new Date()
    let startDate: Date | null = null

    switch (filter) {
        case "lastday":
            startDate = new Date(currentDate)
            startDate.setDate(currentDate.getDate() - 1)
            break
        case "lastweek":
            startDate = new Date(currentDate)
            startDate.setDate(currentDate.getDate() - 7)
            break
        case "lastmonth":
            startDate = new Date(currentDate)
            startDate.setMonth(currentDate.getMonth() - 1)
            break
        case "anytime":
        default:
            startDate = null
            break
    }
    return startDate
}

const getGames = async (query: string, filter?: string) => {
    const startDate = calculateStartDate(filter)
    let gamesQuery = supabase.from("game").select("*, engine(*)").ilike("game_name", `%${query}%`)
    if (startDate) {
        gamesQuery = gamesQuery.gte("publishdate", startDate.toISOString())
    }
    const { data, error } = await gamesQuery
    if (error) {
        throw new Error("Error fetching games: " + error.message)
    }
    return data || []
}

const getNews = async (query: string, locale: Locale, filter?: string) => {
    const startDate = calculateStartDate(filter)
    let queryBuilder = supabase
        .from("news")
        .select(
            `newsid,publishdate,content(title_en,title_zh,description_en,description_zh,image,author(*),game(gameid,engineid,gamestudioid,blockchainid))`
        )
        .ilike(`content.title_${locale}`, `%${query}%`)

    if (startDate) {
        queryBuilder = queryBuilder.gte("publishdate", startDate.toISOString())
    }
    const { data, error } = await queryBuilder
    if (error) {
        throw new Error("Error fetching news: " + error.message)
    }
    return data || []
}

const getArticles = async (query: string, locale: Locale, filter?: string) => {
    const startDate = calculateStartDate(filter)
    let articlesQuery = supabase
        .from("articles")
        .select(
            `articleid, publishdate, content(title_en,title_zh,description_en,description_zh,image,author(*),game(gameid,engineid))`
        )
        .ilike(`content.title_${locale}`, `%${query}%`)
    if (startDate) {
        articlesQuery = articlesQuery.gte("publishdate", startDate.toISOString())
    }
    const { data, error } = await articlesQuery
    if (error) {
        throw new Error("Error fetching articles: " + error.message)
    }
    return data || []
}

const getVideos = async (query: string, filter?: string) => {
    const startDate = calculateStartDate(filter)
    let videosQuery = supabase
        .from("videos")
        .select("videoid, video_name, summary, media_url")
        .ilike("video_name", `%${query}%`)
    if (startDate) {
        videosQuery = videosQuery.gte("publishdate", startDate.toISOString())
    }
    const { data, error } = await videosQuery
    if (error) {
        throw new Error("Error fetching videos: " + error.message)
    }
    return data || []
}

const getEvents = async (query: string, locale: Locale, filter?: string) => {
    const startDate = calculateStartDate(filter)
    let eventsQuery = supabase
        .from("events")
        .select("*,game(gameid,engineid,gamestudioid,blockchainid)")
        .ilike(`title_${locale}`, `%${query}%`)
    if (startDate) {
        eventsQuery = eventsQuery.gte("publishdate", startDate.toISOString())
    }
    const { data, error } = await eventsQuery
    if (error) {
        throw new Error("Error fetching events: " + error.message)
    }
    return data || []
}

const getSearchData = async (query: string, locale: Locale, filter?: string) => {
    try {
        const results = await Promise.allSettled([
            getNews(query, locale, filter),
            getGames(query),
            getArticles(query, locale),
            getVideos(query),
            getEvents(query, locale),
        ])

        const [news, games, articles, videos, events] = results.map((result) =>
            result.status === "fulfilled" ? result.value : []
        )

        return {
            news,
            games,
            articles,
            videos,
            events,
        }
    } catch (error) {
        return null
    }
}

export default getSearchData

// import SupabaseInstance from "../../supabase"
// const supabase = SupabaseInstance.getSupabaseInstance()
// import { type Locale } from "@/i18n.config"

// const getGames = async (query: string) => {
//     const { data, error } = await supabase.from("game").select("*,engine(*)").ilike("game_name", `%${query}%`)

//     if (error) {
//         throw new Error("Error fetching games: " + error.message)
//     }

//     return data || []
// }

// const getNews = async (query: string, locale: Locale, filter?: string) => {
//     const { data, error } = await supabase
//         .from("news")
//         .select(
//             `newsid,publishdate,content(title_en,title_zh,description_en,description_zh,image, author(*),game(gameid,engineid,gamestudioid,blockchainid))`
//         )
//         .ilike(`content.title_${locale}`, `%${query}%`)
//     if (error) {
//         console.log("🚀 ~ getNews ~ error:", error)
//         throw new Error("Error fetching news: " + error.message)
//     }

//     return data || []
// }

// const getArticles = async (query: string, locale: Locale) => {
//     const { data, error } = await supabase
//         .from("articles")
//         .select(
//             `articleid, publishdate, content(title_en,title_zh,description_en,description_zh,image, author(*),game(gameid,engineid))`
//         )
//         .ilike(`content.title_${locale}`, `%${query}%`)

//     if (error) {
//         throw new Error("Error fetching articles: " + error.message)
//     }
//     return data || []
// }

// const getVideos = async (query: string) => {
//     const { data, error } = await supabase
//         .from("videos")
//         .select("videoid,video_name,summary,media_url")
//         .ilike("video_name", `%${query}%`)

//     if (error) {
//         throw new Error("Error fetching videos: " + error.message)
//     }
//     return data || []
// }

// const getEvents = async (query: string, locale: Locale) => {
//     const { data, error } = await supabase
//         .from("events")
//         .select("*,game(gameid,engineid,gamestudioid,blockchainid)")
//         .ilike(`title_${locale}`, `%${query}%`)

//     if (error) {
//         throw new Error("Error fetching events: " + error.message)
//     }
//     return data || []
// }

// const getSearchData = async (query: string, locale: Locale, filter?: string) => {
//     try {
//         const results = await Promise.allSettled([
//             getNews(query, locale, filter),
//             getGames(query),
//             getArticles(query, locale),
//             getVideos(query),
//             getEvents(query, locale),
//         ])

//         const [news, games, articles, videos, events] = results.map((result) =>
//             result.status === "fulfilled" ? result.value : []
//         )

//         return {
//             news,
//             games,
//             articles,
//             videos,
//             events,
//         }
//     } catch (error) {
//         return null
//     }
// }

// export default getSearchData
