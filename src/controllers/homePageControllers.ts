import SupabaseInstance from "../../supabase"
import { type Locale } from "@/i18n.config"

const supabase = SupabaseInstance.getSupabaseInstance()

const getNews = async (locale: string) => {
    const { data, error } = await supabase
        .from("news")
        .select(`newsid,content(title_${locale},image,game(gameid,engineid,gamestudioid,blockchainid))`)
        .eq("isHome", true)

    if (error) {
        throw new Error("Error fetching news: " + error.message)
    }

    return data || []
}

const getGames = async () => {
    const { data, error } = await supabase.from("game").select("*").eq("isHome", true)

    if (error) {
        throw new Error("Error fetching games: " + error.message)
    }

    return data || []
}

const getArticles = async (locale: string) => {
    const { data, error } = await supabase
        .from("articles")
        .select(
            `articleid,content(contentid,image, title_${locale}, description_${locale}, publishdate,author(*),game(gameid,engineid,gamestudioid,blockchainid,engine(logo,pic)))`
        )
        .eq("isHome", true)

    if (error) {
        throw new Error("Error fetching articles: " + error.message)
    }

    return data || []
}

const getVideos = async () => {
    const { data, error } = await supabase
        .from("videos")
        .select("videoid,video_name,summary,media_url")
        .range(0, 3)

    if (error) {
        throw new Error("Error fetching videos: " + error.message)
    }

    return data || []
}

const getEvents = async () => {
    const { data, error } = await supabase
        .from("events")
        .select("*,game(gameid,engineid,gamestudioid,blockchainid)")
        .eq("isHome", true)

    if (error) {
        throw new Error("Error fetching events: " + error.message)
    }

    return data || []
}

const getHomeData = async (locale: string) => {
    const news = await getNews(locale)
    const games = await getGames()
    const articles = await getArticles(locale)
    const videos = await getVideos()
    const events = await getEvents()

    return {
        news,
        games,
        articles,
        videos,
        events,
    }
}

export default getHomeData
