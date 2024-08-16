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
        .select(
            "gameid, game_name, website, game_desc, game_desc_zh, pic, logo, engineid, gamestudioid, blockchainid"
        )
        .eq("gameid", game_id)

    if (error) {
        throw new Error("Error fetching games: " + error.message)
    }

    return data || []
}

// export const getRelatedArticles = async (game_id: string, locale: Locale) => {
//     console.log(game_id)
//     const { data, error } = await supabase
//         .from("articles")
//         .select(
//             `*, category(name), content(title_en, title_zh, description_en, description_zh, image, game(gameid), author(name))`
//         )
//         .eq("content.gameid", game_id)

//     if (error) {
//         console.error("Error fetching articles:", error.message)
//         throw new Error("Error fetching articles: " + error.message)
//     }
//     const filteredData = data.filter((article) => article.content !== null)
//     return filteredData || []
// }

export const getRelatedArticles = async (game_id: string, locale: Locale) => {
    const { data, error } = await supabase
        .from("content_gameids")
        .select(
            `articles(*, content(title_en, title_zh, description_en, description_zh, image, author(name)))`
        )
        .eq("gameid", game_id)

    if (error) {
        console.log("🚀 ~ getRelatedArticles ~ error:", error)
        throw new Error("Error fetching articles: " + error.message)
    }
    // const filteredData = data.filter((article) => article.content !== null)
    return data || []
}

export const getRelatedEvents = async (game_id: string) => {
    const { data, error } = await supabase
        .from("events")
        .select("eventid,title_en, title_zh,pic,joinurl,startdate,enddate, timezone,game(gameid)")
        .eq("gameid", game_id)

    if (error) {
        console.log(error)
        throw new Error("Error fetching games: " + error.message)
    }

    return data || []
}

export const getRelatedNews = async (game_id: string, locale: Locale) => {
    const { data, error } = await supabase
        .from("news")
        .select(`*,content(title_en, title_zh, image, game!content_gameid_fkey(gameid), author(name))`)
        .eq("content.gameid", game_id)
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
    if (data) {
        data.push({ categoryid: "", name: "All" })
    }
    if (error) {
        throw new Error("Error fetching videos: " + error.message)
    }

    return data || []
}

export const getGameRelatedData = async (gameids: any, locale: Locale) => {
    const decodedGameIds = gameids.map((gameid: any) => decodeURIComponent(gameid))
    const results = await Promise.all(
        decodedGameIds.map(async (game_id: any) => {
            const [game, relatedArticles, relatedNews, relatedVideos, relatedEvents, featuredArticles] =
                await Promise.allSettled([
                    getGameData(game_id),
                    getRelatedArticles(game_id, locale),
                    getRelatedNews(game_id, locale),
                    getRelatedVideos(game_id),
                    getRelatedEvents(game_id),
                    getfeaturedArticles(locale),
                ])

            return {
                game_id,
                game,
                relatedArticles,
                relatedNews,
                relatedVideos,
                relatedEvents,
                featuredArticles,
            }
        })
    )
    return results
}

export const getGameRelatedDataForOthers: any = async (gameid: any, locale: Locale) => {
    const decodedGameId = decodeURIComponent(gameid)

    const [game, relatedArticles, relatedNews, relatedVideos, relatedEvents, featuredArticles] =
        await Promise.allSettled([
            getGameData(decodedGameId),
            getRelatedArticles(decodedGameId, locale),
            getRelatedNews(decodedGameId, locale),
            getRelatedVideos(decodedGameId),
            getRelatedEvents(decodedGameId),
            getfeaturedArticles(locale),
        ])

    return {
        gameid,
        game,
        relatedArticles,
        relatedNews,
        relatedVideos,
        relatedEvents,
        featuredArticles,
    }
}
