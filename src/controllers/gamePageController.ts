import SupabaseInstance from "../../supabase"

const supabase = SupabaseInstance.getSupabaseInstance()

interface FilterOptions {
    blockchainIds?: string[]
    engineIds?: string[]
    gameStudioIds?: string[]
}

const getNews = async () => {
    const { data, error } = await supabase
        .from("news")
        .select("newsid,content(title,image,game(gameid,engineid,gamestudioid,blockchainid))")
        .range(0, 3)

    if (error) {
        throw new Error("Error fetching news: " + error.message)
    }

    return data || []
}

export const getGameAllData = async (filters: FilterOptions) => {
    const blockchainIds = filters.blockchainIds || []
    const engineIds = filters.engineIds || []
    const gameStudioIds = filters.gameStudioIds || []

    // Create arrays of conditions for each filter
    const blockchainConditions = blockchainIds.map((id) => `blockchainid.eq.${id}`).join(",")
    const engineConditions = engineIds.map((id) => `engineid.eq.${id}`).join(",")
    const gameStudioConditions = gameStudioIds.map((id) => `gamestudioid.eq.${id}`).join(",")

    // Combine all conditions into a single OR condition string
    const combinedConditions = [blockchainConditions, engineConditions, gameStudioConditions]
        .filter((condition) => condition) // Remove any empty conditions
        .join(",")

    // Construct the query
    let query = supabase.from("game").select()
    // let query = supabase.from("game").select("*, engine(engineid,logo)")
    

    // Apply the OR condition if there are any combined conditions
    if (combinedConditions) {
        query = query.or(combinedConditions)
    }

    const { data, error } = await query

    if (error) {
        console.error("Error fetching data:", error)
        throw new Error("Error fetching games: " + error.message)
    }

    const news = await getNews()

    return { game: data, news }
}

export const getBlockchains = async () => {
    const { data, error } = await supabase.from("blockchain").select("blockchainid")

    if (error) {
        throw new Error(`Error fetching blockchains: ${error.message}`)
    }

    return data || []
}

export const getGameStudios = async () => {
    const { data, error } = await supabase.from("gamestudio").select("gamestudioid")

    if (error) {
        throw new Error(`Error fetching game studios: ${error.message}`)
    }

    return data || []
}

export const getEngines = async () => {
    const { data, error } = await supabase.from("engine").select("engineid")

    if (error) {
        throw new Error(`Error fetching engines: ${error.message}`)
    }

    return data || []
}
