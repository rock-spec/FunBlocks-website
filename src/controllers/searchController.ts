import SupabaseInstance from "../../supabase"
const supabase = SupabaseInstance.getSupabaseInstance()
import { type Locale } from "@/i18n.config"

const getGames = async (query: string) => {
    const { data, error } = await supabase.from("game").select("*").ilike("game_name", `%${query}%`)

    if (error) {
        throw new Error("Error fetching games: " + error.message)
    }

    return data || []
}

const getNews = async (query: string, locale: Locale) => {
    const { data, error } = await supabase
        .from("news")
        .select(
            `newsid,content(title_${locale},description_${locale},image, publishdate, author(*),game(gameid,engineid,gamestudioid,blockchainid))`
        )
        .ilike(`content.title_${locale}`, `%${query}%`)

    if (error) {
        throw new Error("Error fetching news: " + error.message)
    }

    return data || []
}

const getArticles = async (query: string, locale: Locale) => {
    const { data, error } = await supabase
        .from("articles")
        .select(
            `articleid,content(title_${locale},description_${locale},image, publishdate, author(*),game(gameid,engineid))`
        )
        .ilike(`content.title_${locale}`, `%${query}%`)

    if (error) {
        throw new Error("Error fetching articles: " + error.message)
    }
    return data || []
}

const getVideos = async (query: string) => {
    const { data, error } = await supabase
        .from("videos")
        .select("videoid,video_name,summary,media_url")
        .ilike("video_name", `%${query}%`)

    if (error) {
        throw new Error("Error fetching videos: " + error.message)
    }

    return data || []
}

const getEvents = async (query: string) => {
    const { data, error } = await supabase
        .from("events")
        .select("*,game(gameid,engineid,gamestudioid,blockchainid)")
        .ilike("title", `%${query}%`)

    if (error) {
        throw new Error("Error fetching events: " + error.message)
    }

    return data || []
}

const getSearchData = async (query: string, locale: Locale) => {
    console.log(locale)

    try {
        const results = await Promise.allSettled([
            getNews(query, locale),
            getGames(query),
            getArticles(query, locale),
            getVideos(query),
            getEvents(query),
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
