import SupabaseInstance from "../../supabase"

const supabase = SupabaseInstance.getSupabaseInstance()

type filterSchema = {
    query?: string
    categoryid?: string
    sort?: string
}


const getAllVideos = async (filter: filterSchema) => {
    const searchQuery = filter?.query
    const categoryid = filter?.categoryid
    const sort = filter?.sort

    let query = supabase
        .from("videos")
        .select("videoid,video_name,summary,media_url,gameid, publishdate, author(name)")
    if (categoryid) query = query.eq("categoryid", categoryid)
    if (searchQuery) query = query.ilike(`video_name`, `%${searchQuery}%`)
    if (sort) query = query.order("publishdate", { ascending: false }) // Add sorting by publishdate in descending order
    const { data, error } = await query
    if (error) throw new Error("Error fetching articles: " + error.message)
    return data || []
}

const getFeaturedGameData = async () => {
    const { data, error } = await supabase.from("game").select("*").range(0, 5)

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
