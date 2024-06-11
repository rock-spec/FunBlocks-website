import SupabaseInstance from "../../supabase"
import { type Locale } from "@/i18n.config"

const supabase = SupabaseInstance.getSupabaseInstance()

const getfeaturedNews = async (locale: string) => {
    const { data, error } = await supabase
        .from("news")
        .select(`newsid,content(title_${locale},image,game(gameid,engineid,gamestudioid,blockchainid))`)
        .eq("isHome", true)
        .limit(3)

    if (error) {
        throw new Error("Error fetching news: " + error.message)
    }

    return data || []
}

const getLatestNews = async (locale: string) => {
    try {
        const { data, error } = await supabase
            .from("news")
            .select(
                `newsid, content(title_${locale}, image, game(gameid, game_name, engineid, gamestudioid, blockchainid))`
            )
            .order("content_id->publishdate", { ascending: false })
            .limit(5)

        if (error) {
            console.log(error)

            throw new Error("Error fetching news: " + error.message)
        }

        return data || []
    } catch (error) {
        console.error(error) // Log the error for debugging
        return []
    }
}

const getFeaturedGames = async () => {
    const { data, error } = await supabase
        .from("game")
        .select("gameid, game_name, pic, engineid, gamestudioid, blockchainid")
        .eq("isHome", true)
        .limit(5)
    if (error) {
        throw new Error("Error fetching games: " + error.message)
    }

    return data || []
}

const getFeaturedArticles = async (locale: string) => {
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

const getFeturedVideos = async () => {
    const { data, error } = await supabase
        .from("videos")
        .select("videoid,video_name,summary,media_url")
        .range(0, 4)

    if (error) {
        throw new Error("Error fetching videos: " + error.message)
    }

    return data || []
}

const getfeaturedEvents = async () => {
    const { data, error } = await supabase
        .from("events")
        .select(
            "eventid, pic,title, startdate, enddate, joinurl, game(gameid,engineid,gamestudioid,blockchainid)"
        )
        .eq("isHome", true)
        .limit(2)

    if (error) {
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
