import SupabaseInstance from "../../supabase"

const supabase = SupabaseInstance.getSupabaseInstance()

type filterSchema = {
    query?: string
    categoryid?: string
    sort?: string
}

const getAllEvents = async (filter: filterSchema) => {
    const searchQuery = filter?.query
    const categoryid = filter?.categoryid
    const sort = filter?.sort

    let query = supabase.from("events").select("*,game(gameid,engineid,gamestudioid,blockchainid)")
    if (categoryid) query = query.eq("categoryid", categoryid)
    if (searchQuery) query = query.ilike(`title`, `%${searchQuery}%`)
    if (sort) query = query.order("startdate", { ascending: true }) // Add sorting by publishdate in descending order
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

export const getEventsData = async (filter: filterSchema) => {
    const events = await getAllEvents(filter)
    const featuredGames = await getFeaturedGameData()

    return { events, featuredGames }
}
