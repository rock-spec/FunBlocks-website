import SupabaseInstance from "../../supabase"
import { type Locale } from "@/i18n.config"
import { getFeaturedGames } from "./featuredController"

const supabase = SupabaseInstance.getSupabaseInstance()

const getAllNews = async (locale: Locale) => {
    locale
    const { data, error } = await supabase
        .from("news")
        .select(
            `newsid, category(*), content(title_en, title_zh, description_en, description_zh, publishdate, image, author(name),game(gameid,engineid,gamestudioid,blockchainid))`
        )
    if (error) {
        throw new Error("Error fetching news: " + error.message)
    }
    return data || []
}

export const getNewsData = async (locale: Locale) => {
    const [news, featuredGames] = await Promise.allSettled([getAllNews(locale), getFeaturedGames()])

    return { news, featuredGames }
}
