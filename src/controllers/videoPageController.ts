import { Locale } from "@/i18n.config"
import SupabaseInstance from "../../supabase"

const supabase = SupabaseInstance.getSupabaseInstance()

type filterSchema = {
    query?: string
    categoryid?: string
    sort?: string
    page: number
    pageSize: number
    locale: Locale
}

const getAllVideos = async (filter: filterSchema) => {
    const { query, categoryid, sort, page, pageSize, locale } = filter

    let queryBuilder = supabase
        .from("videos")
        .select("videoid,video_name,summary,media_url,gameid, publishdate, author(name)")
        .eq("language", locale)
    if (categoryid) queryBuilder = queryBuilder.eq("categoryid", categoryid)
    if (query) queryBuilder = queryBuilder.ilike(`video_name`, `%${query}%`)
    if (sort) queryBuilder = queryBuilder.order("publishdate", { ascending: false })
    queryBuilder = queryBuilder.range(page * pageSize, (page + 1) * pageSize - 1) // Apply pagination

    const { data, error } = await queryBuilder

    if (error) throw new Error("Error fetching articles: " + error.message)
    return data || []
}

const getFeaturedGameData = async () => {
    const { data, error } = await supabase.from("game").select("*").limit(5)

    if (error) {
        throw new Error("Error fetching games: " + error.message)
    }

    return data || []
}

export const getVideosData = async (filter: filterSchema) => {
    const videos = await getAllVideos(filter)
    const featuredGames = await getFeaturedGameData()

    return { videos, featuredGames }
}
