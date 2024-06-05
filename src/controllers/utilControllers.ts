import SupabaseInstance from "../../supabase"
import { type Locale } from "@/i18n.config"

const supabase = SupabaseInstance.getSupabaseInstance()

export const getGameData = async (game_id: string) => {
    const { data, error } = await supabase.from("game").select("*").eq("gameid", game_id)

    if (error) {
        throw new Error("Error fetching games: " + error.message)
    }

    return data || []
}

export const getRelatedArticles = async (game_id: string, locale: Locale) => {
    const { data, error } = await supabase
        .from("articles")
        .select(
            `*,content(title_${locale}, description_${locale}, image, publishdate,game(*),user(username))`
        )
        .eq("content.gameid", game_id) //Filter through referenced table

    if (error) {
        throw new Error("Error fetching games: " + error.message)
    }

    return data.filter((article) => article.content !== null) || []
}

export const getRelatedEvents = async (game_id: string) => {
    const { data, error } = await supabase.from("events").select("*,game(*)").eq("gameid", game_id)

    if (error) {
        throw new Error("Error fetching games: " + error.message)
    }

    return data || []
}

export const getRelatedNews = async (game_id: string, locale: Locale) => {
    const { data, error } = await supabase
        .from("news")
        .select(`*,content(title_${locale},image,game(*),user(*))`)
        .eq("content.gameid", game_id) //Filter through referenced table

    if (error) {
        throw new Error("Error fetching games: " + error.message)
    }

    return data.filter((news) => news.content !== null) || []
}

export const getRelatedVideos = async (game_id: string) => {
    const { data, error } = await supabase
        .from("videos")
        .select("videoid,video_name,summary,media_url")
        .eq("gameid", game_id)

    if (error) {
        throw new Error("Error fetching videos: " + error.message)
    }

    return data || []
}

export const getGameRelatedData = async (game_id: string, locale: Locale) => {
    const game = await getGameData(game_id)
    const relatedArticles = await getRelatedArticles(game_id, locale)
    const relatedNews = await getRelatedNews(game_id, locale)
    const relatedVideos = await getRelatedVideos(game_id)
    const relatedEvents = await getRelatedEvents(game_id)

    return {
        game,
        relatedArticles,
        relatedNews,
        relatedVideos,
        relatedEvents,
    }
}
