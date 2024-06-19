import { Locale } from "@/i18n.config"
import SupabaseInstance from "../../supabase"
import { getGameRelatedData } from "./utilControllers"

const supabase = SupabaseInstance.getSupabaseInstance()

interface Game {
    gameid: string
    game_name: string
    game_desc: string
    website: string
    play_now_button: string
    game_twitter: string
    testnet_or_mainnet: string
    blog: string
    github: string
    pic: string
    logo: string
    engineid: string
    gamestudioid: string
    blockchainid: string
}

const getEngineDetail = async (engine_id: string) => {
    const { data, error } = await supabase.from("engine").select("*").eq("engineid", engine_id)

    if (error) {
        throw new Error("Error fetching engine: " + error.message)
    }

    return data || []
}

const getRelatedGames = async (engine_id: string) => {
    const { data, error } = await supabase.from("game").select("*").eq("engineid", engine_id)

    if (error) {
        throw new Error("Error fetching engine: " + error.message)
    }

    return data || []
}

async function fetchGameRelatedData(relatedGames: Game[], locale: Locale): Promise<any[]> {
    const promises = relatedGames.map((game) => getGameRelatedData(game.gameid, locale))
    return Promise.allSettled(promises)
}

function extractRelatedVideos(jsonData: any[]): any[] {
    const relatedVideos: any[] = []
    let videosArray: any[] = []
    if (jsonData[0]?.relatedVideos?.status === "fulfilled") videosArray = jsonData[0]?.relatedVideos?.value
    relatedVideos.push(...videosArray)
    return relatedVideos
}

function extractRelatedEvents(jsonData: any[]): any[] {
    const relatedEvents: any[] = []
    let eventsArray: any[] = []
    if (jsonData[0]?.relatedEvents?.status === "fulfilled") eventsArray = jsonData[0]?.relatedEvents?.value
    relatedEvents.push(...eventsArray)
    return relatedEvents
}

function extractRelatedContent(jsonData: any, contentType: string): any[] {

    const relatedContent: any[] = []
    const contentArray = jsonData[0]?.value?.[contentType]?.value || []

    contentArray.forEach((contentItem: any) => {
        // Create a new object containing content, newsid, and articleid
        console.log(contentItem?.publishdate)

        const itemWithIds = {
            publishdate: contentItem?.publishdate,
            content: contentItem?.content,
            newsid: contentItem?.newsid,
            articleid: contentItem?.articleid,
        }
        relatedContent.push(itemWithIds)
    })
    return relatedContent
}

function extractAllGames(jsonData: any): any[] {
    const allGames: any[] = []

    // Iterate through each entry in relatedData
    if (jsonData.status === "fulfilled") {
        jsonData?.value.forEach((entry: any) => {
            // Extract game information from the "game" object
            const gameInfo = entry?.game[0] // Assuming there's only one game object in each entry
            allGames.push(gameInfo)
        })
    }

    return allGames || []
}

export const getEngineDetailPageData = async ({ id = "Enjin", locale }: { id: string; locale: Locale }) => {
    const engineId = id
    const engines = await getEngineDetail(engineId)
    const relatedGames = await getRelatedGames(engineId)
    const relatedData = await fetchGameRelatedData(relatedGames, locale)

    let relatedArticles: any = []
    let relatedVideos: any = []
    let relatedNews: any = []
    let relatedEvents: any = []
    // let allGames: any = []

    if (relatedData[0]?.status === "fulfilled") {
        relatedArticles = extractRelatedContent(relatedData, "relatedArticles")
        relatedVideos = extractRelatedVideos(relatedData)
        relatedNews = extractRelatedContent(relatedData, "relatedNews")

    }

    return { engines, relatedArticles, relatedVideos, relatedNews, relatedEvents, relatedGames }
}

