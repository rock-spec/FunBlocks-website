import { Locale } from "@/i18n.config"
import SupabaseInstance from "../../supabase"

const supabase = SupabaseInstance.getSupabaseInstance()

type filterSchema = {
    query?: string
    locale: Locale
}

const getAllArticles = async (filter: filterSchema) => {
    const locale = filter?.locale
    const searchQuery = filter?.query

    let query = supabase.from("articles").select(
        `articleid, isHome, categoryid, 
            content(
                title_${locale}, description_${locale}, content_${locale}, image, publishdate, author:authorid(name), game:gameid(gameid, engineid, gamestudioid, blockchainid)
            )`
    )

    if (searchQuery) {
        query = query.ilike(`content.title_${locale}`, `%${searchQuery}%`)
    }

    const { data, error } = await query

    if (error) {
        throw new Error("Error fetching articles: " + error.message)
    }

    if (searchQuery) {
        // search
        const filteredData = data.filter((item) => item.content !== null)
        return filteredData || []
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

const getFeaturedArticlesData = async (locale: Locale) => {
    const { data, error } = await supabase
        .from("articles")
        .select(`articleid,content(title_${locale},image)`)
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
