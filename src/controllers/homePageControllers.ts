import SupabaseInstance from "../../supabase"
// import { type Locale } from "@/i18n.config"
import { getFeaturedGames } from "./featuredController"

const supabase = SupabaseInstance.getSupabaseInstance()

const getfeaturedNews = async (locale: string) => {
    const { data, error } = await supabase
        .from("news")
        .select(
            `newsid, content(title_en, title_zh, image, game!content_gameid_fkey(gameid, game_name, engineid, gamestudioid, blockchainid))`
        )
        .eq("isHome", true)
        .not(`content.title_${locale}`, "is", null)
        .not("content", "is", null)
        .limit(6)

    if (error) {
        console.log(error)
        throw new Error("Error fetching news: " + error.message)
    }

    return data || []
}

const getLatestNews = async (locale: string) => {
    try {
        const { data, error } = await supabase

            .from("news")
            .select(
                `newsid, content(title_en, title_zh, image, game!content_gameid_fkey(gameid, game_name, engineid, gamestudioid, blockchainid))`
            )
            .order("content_id->publishdate", { ascending: false })
            .limit(3)
        if (error) {
            console.log(error)

            throw new Error("Error fetching news: " + error.message)
        }

        return data || []
    } catch (error) {
        console.error(error)
        return []
    }
}

const getFeatured = async (locale: string) => {
    try {
        const { data, error } = await supabase

            .from("featured")
            .select(
                `featuredid, title, image, url, game(gameid, game_name, engineid, gamestudioid, blockchainid)`
            )
            .order("created_at", { ascending: false })
            .limit(3)
        if (error) {
            console.log(error)

            throw new Error("Error fetching news: " + error.message)
        }

        return data || []
    } catch (error) {
        console.error(error)
        return []
    }
}

const getFeaturedArticles = async (locale: string) => {
    const { data, error } = await supabase
        .from("articles")
        .select(
            `articleid, publishdate,games:content_gameids(gameid), content(contentid, image, title_en, title_zh, description_en, description_zh, author(*))`
        )
        .eq("isHome", true)
        .not(`content.title_${locale}`, "is", null)
        .not("content", "is", null)
        .limit(3)

    if (error) {
        console.log(error, "error in article")
        throw new Error("Error fetching articles: " + error.message)
    }
    return data || []
}

const getFeturedVideos = async (locale?: string) => {
    const { data, error } = await supabase
        .from("videos")
        .select("videoid,video_name,summary,media_url")
        .eq("isHome", true)
        .eq("language", locale)
        .limit(4)

    if (error) {
        console.log(error)
        throw new Error("Error fetching videos: " + error.message)
    }
    return data || []
}

const getfeaturedEvents = async (locale: string) => {
    const { data, error } = await supabase
        .from("events")
        .select("*")
        .eq("isHome", true)
        .not(`title_${locale}`, "is", null)
        .limit(4)

    if (error) {
        console.log(error)
        throw new Error("Error fetching events: " + error.message)
    }

    return data || []
}

const getHomeData = async (locale: string) => {
    const [featuredNews, games, articles, videos, events, featured] = await Promise.allSettled([
        getfeaturedNews(locale),
        getFeaturedGames(),
        getFeaturedArticles(locale),
        getFeturedVideos(locale),
        getfeaturedEvents(locale),
        // getLatestNews(locale),
        getFeatured(locale),
    ])

    return {
        featuredNews,
        games,
        articles,
        videos,
        events,
        featured,
    }
}

export default getHomeData
