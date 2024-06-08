import SupabaseInstance from "../../supabase"
import { type Locale } from "@/i18n.config"

const supabase = SupabaseInstance.getSupabaseInstance()

const getAllNews = async (locale: Locale) => {
    locale
    const { data, error } = await supabase
        .from("news")
        .select(
            `newsid, category, content(title_${locale}, description_${locale}, publishdate, image, author(name),game(gameid,engineid,gamestudioid,blockchainid))`
        )
    if (error) {
        throw new Error("Error fetching news: " + error.message)
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

export const getNewsData = async (locale: Locale) => {
    const news = await getAllNews(locale)
    const featuredGames = await getFeaturedGameData()

    return { news, featuredGames }
}
