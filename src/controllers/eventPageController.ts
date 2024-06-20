import SupabaseInstance from "../../supabase"

const supabase = SupabaseInstance.getSupabaseInstance()

type filterSchema = {
    query?: string
    categoryid?: string
    sort?: string
    page: number
    pageSize: number
}

const getAllEvents = async (filter: filterSchema) => {
    const { query, categoryid, sort, page, pageSize } = filter

    let queryBuilder = supabase.from("events").select("*,game(gameid,engineid,gamestudioid,blockchainid)")
    if (categoryid) queryBuilder = queryBuilder.eq("categoryid", categoryid)
    if (query) queryBuilder = queryBuilder.ilike(`title`, `%${query}%`)
    if (sort) queryBuilder = queryBuilder.order("startdate", { ascending: true })
    queryBuilder = queryBuilder.range(page * pageSize, (page + 1) * pageSize - 1)

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

export const getEventsData = async (filter: filterSchema) => {
    const events = await getAllEvents(filter)
    const featuredGames = await getFeaturedGameData()

    return { events, featuredGames }
}
