import { Locale } from "@/i18n.config"
import SupabaseInstance from "../../supabase"

const supabase = SupabaseInstance.getSupabaseInstance()

interface Event {
    eventid: string
    pic: string
    startdate: string
    enddate: string
    type: string | null
    detail: string
    address: string
    categories: string[] | null
    gameid: string
    title: string
}

const eventData = async (event_id: string) => {
    const { data, error } = await supabase.from("events").select("*").eq("eventid", event_id)
    if (error) {
        throw new Error("Error fetching events: " + error.message)
    }
    return <Event>(data[0] as unknown) || []
}

const getRelatedArticles = async (event_id: string, locale: Locale) => {
    const { data, error } = await supabase
        .from("articles")
        .select(`*,content!inner(title_${locale},  description_${locale}, image, author(name))`)
        .eq("content.eventid", event_id)
        .not(`content.title_${locale}`, "is", null)
        .limit(5)

    if (error) {
        throw new Error("Error fetching articles: " + error.message)
    }

    return data || []
}

const getRelatedNews = async (event_id: string, locale: Locale) => {
    const { data, error } = await supabase
        .from("news")
        .select(`*,content!inner(title_${locale}, description_${locale}, image, author(name))`)
        .eq("content.eventid", event_id)
        .not(`content.title_${locale}`, "is", null)
        .limit(5)
    if (error) {
        throw new Error("Error fetching articles: " + error.message)
    }
    console.log(data)

    return data || []
}

export const getRelatedGames = async (game_id: string) => {
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

const getEventRelatedData = async (event_id: string, game_id: string, locale: Locale) => {
    const results = await Promise.allSettled([
        getRelatedArticles(event_id, locale),
        getRelatedNews(event_id, locale),
        getRelatedGames(game_id),
    ])

    const relatedArticles = results[0].status === "fulfilled" ? results[0].value : null
    const relatedNews = results[1].status === "fulfilled" ? results[1].value : null
    const relatedGames = results[2].status === "fulfilled" ? results[2].value : null

    return { relatedArticles, relatedNews, relatedGames }
}

export const getEventDetailPageData = async ({ id, locale }: { id: string; locale: Locale }) => {
    const eventId = id
    const event: Event = await eventData(eventId)
    const gameId = event.gameid
    const relatedData = await getEventRelatedData(eventId, gameId, locale)

    return { event, relatedData }
}
