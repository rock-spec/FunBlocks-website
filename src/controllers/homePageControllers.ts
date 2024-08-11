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
        .limit(3)

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

const getFeaturedArticles = async (locale: string) => {
    const { data, error } = await supabase
        .from("articles")
        .select(
            `articleid, publishdate,games:content_gameids(gameid, game(gameid, engineid, gamestudioid, blockchainid, engine(logo, pic))), content(contentid, image, title_en, title_zh, description_en, description_zh, author(*))`
        )
        .eq("isHome", true)

    if (error) {
        console.log(error, "error in article")

        throw new Error("Error fetching articles: " + error.message)
    }

    return data || []
}

const getFeturedVideos = async () => {
    const { data, error } = await supabase
        .from("videos")
        .select("videoid,video_name,summary,media_url")
        .eq("isHome", true)
        .limit(4)

    if (error) {
        console.log(error)
        throw new Error("Error fetching videos: " + error.message)
    }
    console.log(data)

    return data || []
}

const getfeaturedEvents = async () => {
    const { data, error } = await supabase
        .from("events")
        .select(
            "eventid, pic,title, startdate, enddate, joinurl, game(gameid,engineid,gamestudioid,blockchainid)"
        )
        .eq("isHome", true)
        .limit(4)

    if (error) {
        console.log(error)
        throw new Error("Error fetching events: " + error.message)
    }

    return data || []
}

const getHomeData = async (locale: string) => {
    const [featuredNews, games, articles, videos, events, latestNews] = await Promise.allSettled([
        getfeaturedNews(locale),
        getFeaturedGames(),
        getFeaturedArticles(locale),
        getFeturedVideos(),
        getfeaturedEvents(),
        getLatestNews(locale),
    ])

    return {
        featuredNews,
        games,
        articles,
        videos,
        events,
        latestNews,
    }
}

export default getHomeData
