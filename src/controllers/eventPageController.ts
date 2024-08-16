import SupabaseInstance from "../../supabase"

const supabase = SupabaseInstance.getSupabaseInstance()

type filterSchema = {
    query?: string
    categoryid?: string
    sort?: string
    page: number
    pageSize: number
    type?: string
    status?: string
}

// const getAllEvents = async (filter: filterSchema) => {
//     const { query, categoryid, sort, page, pageSize, type, status } = filter
//     console.log(status)

//     let queryBuilder = supabase.from("events").select("*,game(gameid,engineid,gamestudioid,blockchainid)")
//     if (categoryid) queryBuilder = queryBuilder.eq("category", categoryid)
//     if (query) queryBuilder = queryBuilder.ilike(`title`, `%${query}%`)
//     if (type) queryBuilder = queryBuilder.eq("type", type)
//     // if (sort) queryBuilder = queryBuilder.order("startdate", { ascending: true })
//     queryBuilder = queryBuilder.range(page * pageSize, (page + 1) * pageSize - 1)

//     const { data, error } = await queryBuilder

//     if (error) throw new Error("Error fetching articles: " + error.message)
//     console.log(data)

//     return data || []
// }

const getAllEvents = async (filter: filterSchema) => {
    const { query, categoryid, sort, page, pageSize, type, status } = filter

    const nowUtc = new Date().toISOString()

    let queryBuilder = supabase.from("events").select("*,game(gameid,engineid,gamestudioid,blockchainid)")
    if (categoryid) queryBuilder = queryBuilder.eq("category", categoryid)
    if (query) queryBuilder = queryBuilder.ilike(`title`, `%${query}%`)
    if (type) queryBuilder = queryBuilder.eq("type", type)
    queryBuilder = queryBuilder.range(page * pageSize, (page + 1) * pageSize - 1)

    if (status === "active") {
        queryBuilder = queryBuilder.lte("startdate", nowUtc).or(`enddate.gte.${nowUtc},enddate.is.null`)
    } else if (status === "ended") {
        queryBuilder = queryBuilder.lt("enddate", nowUtc)
    } else if (status === "notStarted") {
        queryBuilder = queryBuilder.gt("startdate", nowUtc)
    }

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
