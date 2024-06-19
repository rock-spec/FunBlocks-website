import SupabaseInstance from "../../supabase"

const supabase = SupabaseInstance.getSupabaseInstance()

type filterSchema = {
    query?: string
    categoryid?: string
    sort?: string
}

const getAllEngines = async (filter: filterSchema) => {
    const searchQuery = filter?.query
    const categoryid = filter?.categoryid
    const sort = filter?.sort

    let query = supabase.from("engine").select("*")
    if (categoryid) query = query.eq("categoryid", categoryid)
    if (searchQuery) query = query.ilike(`engineid`, `%${searchQuery}%`)
    if (sort) query = query.order("engineid", { ascending: sort === "A-Z" }) 
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

export const getEnginesData = async (filter: filterSchema) => {
    const engines = await getAllEngines(filter)
    const featuredGames = await getFeaturedGameData()

    return { engines, featuredGames }
}
