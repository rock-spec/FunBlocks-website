import SupabaseInstance from "../../supabase"

const supabase = SupabaseInstance.getSupabaseInstance()

type filterSchema = {
    query?: string
    categoryid?: string
    sort?: string
    page: number
    pageSize: number
}

// const getAllEngines = async (filter: filterSchema) => {
//     const { query, categoryid, sort, page, pageSize } = filter

//     let queryBuilder = supabase.from("engine").select("*")
//     if (categoryid) queryBuilder = queryBuilder.eq("categoryid", categoryid)
//     if (query) queryBuilder = queryBuilder.ilike(`engineid`, `%${query}%`)
//     if (sort) queryBuilder = queryBuilder.order("engineid", { ascending: sort === "A-Z" })
//     queryBuilder = queryBuilder.range(page * pageSize, (page + 1) * pageSize - 1)

//     const { data, error } = await queryBuilder
//     if (error) throw new Error("Error fetching articles: " + error.message)

//     return data || []
// }

const getAllEngines = async (filter: filterSchema) => {
    const { query, categoryid, sort, page, pageSize } = filter

    let queryBuilder = supabase.from("engine").select("*")
    if (categoryid) queryBuilder = queryBuilder.eq("categoryid", categoryid)
    if (query) queryBuilder = queryBuilder.ilike(`engineid`, `%${query}%`)
    if (sort) queryBuilder = queryBuilder.order("engineid", { ascending: sort === "A-Z" })
    queryBuilder = queryBuilder.range(page * pageSize, (page + 1) * pageSize - 1)

    const { data, error } = await queryBuilder
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

export const getEnginesData = async (filter: filterSchema) => {
    const engines = await getAllEngines(filter)
    const featuredGames = await getFeaturedGameData()

    return { engines, featuredGames }
}
