import { Locale } from "@/i18n.config"
import SupabaseInstance from "../../supabase"

const supabase = SupabaseInstance.getSupabaseInstance()

const getAllArticles = async (locale: Locale) => {
    const { data, error } = await supabase
        .from("articles")
        .select(
            `*,content(title_${locale}, description_${locale},content_${locale} ,image, publishdate ,author(name),game(gameid,engineid,gamestudioid,blockchainid))`
        )
    if (error) {
        throw new Error("Error fetching articles: " + error.message)
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

const getFeaturedArticlesData = async () => {
    const { data, error } = await supabase
        .from("articles")
        .select("articleid,content(title,image)")
        .range(0, 5)

    if (error) {
        throw new Error("Error fetching articles: " + error.message)
    }

    return data || []
}

export const getarticlesData = async (locale: Locale) => {
    const articles = await getAllArticles(locale)
    const featuredGames = await getFeaturedGameData()

    return { articles, featuredGames }
}

export const getfeaturedArticles = async () => {
    const featuredArticles = await getFeaturedArticlesData()
    return { featuredArticles }
}
