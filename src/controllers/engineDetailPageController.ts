import { Locale } from "@/i18n.config"
import SupabaseInstance from "../../supabase"

const supabase = SupabaseInstance.getSupabaseInstance()

const getEngineDetail = async (engine_id: string) => {
    const { data, error } = await supabase.from("engine").select("*").eq("engineid", engine_id)

    if (error) {
        throw new Error("Error fetching engine: " + error.message)
    }
    return data || []
}

const getRelatedGames = async (engine_id: string) => {
    const { data, error } = await supabase
        .from("game")
        .select(
            "gameid, game_name, game_desc, pic, game_desc_zh, engine(engineid, logo), gamestudioid, blockchainid"
        )
        .eq("engineid", engine_id)

    if (error) {
        throw new Error("Error fetching engine: " + error.message)
    }    
    return data || []
}

export const getRelatedNews = async (engineId: string, locale: Locale) => {
    const { data, error } = await supabase
        .from("news")
        .select(`*,content(title_en, title_zh, image, game!content_gameid_fkey(gameid), author(name))`)
        .eq("content.engineid", engineId)
    if (error) {
        throw new Error("Error fetching games: " + error.message)
    }

    return data.filter((news) => news.content !== null) || []
}

export const getRelatedArticles = async (engineId: string, locale: Locale) => {
    const { data, error } = await supabase
        .from("articles")
        .select(
            `*, category(name), content(title_en, title_zh, description_en, description_zh, image, game(gameid), author(name))`
        )
        .eq("content.engineid", engineId)

    if (error) {
        console.error("Error fetching articles:", error.message)
        throw new Error("Error fetching articles: " + error.message)
    }
    const filteredData = data.filter((article) => article.content !== null)
    return filteredData || []
}



export const getEngineDetailPageData = async ({ id, locale }: { id: string; locale: Locale }) => {
    const engineId = id

    const [enginesResult, relatedGamesResult, relatedNewsResult, relatedArticlesResult] =
        await Promise.allSettled([
            getEngineDetail(engineId),
            getRelatedGames(engineId),
            getRelatedNews(engineId, locale),
            getRelatedArticles(engineId, locale),
        ])

    const engines = enginesResult.status === "fulfilled" ? enginesResult.value : null
    const relatedGames = relatedGamesResult.status === "fulfilled" ? relatedGamesResult.value : []
    const relatedNews = relatedNewsResult.status === "fulfilled" ? relatedNewsResult.value : []
    const relatedArticles = relatedArticlesResult.status === "fulfilled" ? relatedArticlesResult.value : []

    return { engines, relatedNews, relatedGames, relatedArticles }
}
