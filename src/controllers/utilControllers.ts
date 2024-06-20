import SupabaseInstance from "../../supabase"
import { type Locale } from "@/i18n.config"
import { getfeaturedArticles } from "./articlePageController"

const supabase = SupabaseInstance.getSupabaseInstance()

type FilterOptions = {
    query?: string
}

export const getGameData = async (game_id: string) => {
    const { data, error } = await supabase
        .from("game")
        .select("gameid, game_name, website, game_desc, pic, engineid, gamestudioid, blockchainid")
        .eq("gameid", game_id)

    if (error) {
        throw new Error("Error fetching games: " + error.message)
    }

    return data || []
}

export const getRelatedArticles = async (game_id: string, locale: Locale) => {
    const { data, error } = await supabase
        .from("articles")
        .select(
            `*,category(name),content(title_en, title_zh, description_en, description_en, image,game(gameid),author(name))`
        )
        .eq("content.gameid", game_id) //Filter through referenced table

    if (error) {
        throw new Error("Error fetching games: " + error.message)
    }

    return data.filter((article) => article.content !== null) || []
}

export const getRelatedEvents = async (game_id: string) => {
    const { data, error } = await supabase
        .from("events")
        .select("eventid,title,pic,joinurl,startdate,enddate, timezone,game(gameid)")
        .eq("gameid", game_id)

    if (error) {
        throw new Error("Error fetching games: " + error.message)
    }

    return data || []
}

export const getRelatedNews = async (game_id: string, locale: Locale) => {
    const { data, error } = await supabase
        .from("news")
        .select(`*,content(title_en, title_zh,image,game(gameid),author(name))`)
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

export const getCategories = async () => {
    const { data, error } = await supabase.from("category").select("*")

    if (error) {
        throw new Error("Error fetching videos: " + error.message)
    }

    return data || []
}

export const getGameRelatedData = async (gameid: string, locale: Locale) => {
    const game_id = decodeURIComponent(gameid)

    const [game, relatedArticles, relatedNews, relatedVideos, relatedEvents, featuredArticles] = await Promise.allSettled([
        getGameData(game_id),
        getRelatedArticles(game_id, locale),
        getRelatedNews(game_id, locale),
        getRelatedVideos(game_id),
        getRelatedEvents(game_id),
        getfeaturedArticles(locale)
    ])

    return {
        game,
        relatedArticles,
        relatedNews,
        relatedVideos,
        relatedEvents,
        featuredArticles
    }
}
