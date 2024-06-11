import SupabaseInstance from "../../supabase"
import { type Locale } from "@/i18n.config"

const supabase = SupabaseInstance.getSupabaseInstance()

export const getGameData = async (game_id: string) => {
    const { data, error } = await supabase
        .from("game")
        .select("gameid, game_name, game_desc, pic, engineid, gamestudioid, blockchainid")
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
            `*,content(title_${locale}, description_${locale}, image, publishdate,game(gameid),author(name))`
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
        .select(`*,content(title_${locale},image,game(gameid),author(name))`)
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

export const getGameRelatedData = async (gameid: string, locale: Locale) => {
    const game_id = decodeURIComponent(gameid)

    const [game, relatedArticles, relatedNews, relatedVideos, relatedEvents] = await Promise.allSettled([
        getGameData(game_id),
        getRelatedArticles(game_id, locale),
        getRelatedNews(game_id, locale),
        getRelatedVideos(game_id),
        getRelatedEvents(game_id),
    ])

    return {
        game,
        relatedArticles,
        relatedNews,
        relatedVideos,
        relatedEvents,
    }

    // const game_id = decodeURIComponent(gameid)
    // const game = await getGameData(game_id)
    // const relatedArticles = await getRelatedArticles(game_id, locale)
    // const relatedNews = await getRelatedNews(game_id, locale)
    // const relatedVideos = await getRelatedVideos(game_id)
    // const relatedEvents = await getRelatedEvents(game_id)

    // return {
    //     game,
    //     relatedArticles,
    //     relatedNews,
    //     relatedVideos,
    //     relatedEvents,
    // }
}
