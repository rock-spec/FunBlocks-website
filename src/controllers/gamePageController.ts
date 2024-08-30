import SupabaseInstance from "../../supabase"
import { type Locale } from "@/i18n.config"

const supabase = SupabaseInstance.getSupabaseInstance()

interface FilterOptions {
    blockchainIds?: string[]
    engineIds?: string[]
    gameStudioIds?: string[]
    query?: string
    sort?: string
    network?: string
    page: number
    pageSize: number
}

// const getNews = async (locale: Locale) => {
//     const { data, error } = await supabase
//         .from("news")
//         .select(`newsid,content(title_${locale},image,game(gameid,engineid,gamestudioid,blockchainid))`)
//         .range(0, 3)

//     if (error) {
//         throw new Error("Error fetching news: " + error.message)
//     }

//     return data || []
// }

export const getGames = async (filters: FilterOptions) => {
    const blockchainIds = filters?.blockchainIds || []
    const engineIds = filters?.engineIds || []
    const gameStudioIds = filters?.gameStudioIds || []
    const searchQuery = filters?.query || ""
    const sort = filters?.sort || ""
    const network = filters?.network || ""
    const page = filters?.page
    const pageSize = filters?.pageSize

    // Create arrays of conditions for each filter
    const blockchainConditions = blockchainIds.map((id) => `blockchainid.eq.${id}`).join(",")
    const engineConditions = engineIds.map((id) => `engineid.eq.${id}`).join(",")
    const gameStudioConditions = gameStudioIds.map((id) => `gamestudioid.eq.${id}`).join(",")

    // Combine all conditions into a single OR condition string
    const combinedConditions = [blockchainConditions, engineConditions, gameStudioConditions]
        .filter((condition) => condition) // Remove any empty conditions
        .join(",")

    // Construct the query
    let queryBuilder = supabase
        .from("game")
        .select(`gameid, game_name, logo, pic, engine(engineid, logo), blockchainid, gamestudioid`)

    if (combinedConditions) queryBuilder = queryBuilder.or(combinedConditions)
    if (searchQuery) queryBuilder = queryBuilder.ilike("game_name", `%${searchQuery}%`)
    // if (sort) queryBuilder = queryBuilder.order("game_name", { ascending: sort === "A-Z" })
    if (network && network !== "all") queryBuilder = queryBuilder.ilike("testnet_or_mainnet", network)
    if (sort) queryBuilder = queryBuilder.order("publishdate", { ascending: false })
    queryBuilder = queryBuilder.range(page * pageSize, (page + 1) * pageSize - 1)
    const { data, error } = await queryBuilder

    if (error) {
        console.error("Error fetching data:", error)
        throw new Error("Error fetching games: " + error.message)
    }

    return { game: data }
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

// export const getGamesAllData = async (filters: FilterOptions) => {
//     const [games, blockchains, gameStudios, engines] = await Promise.allSettled([
//         getGames(filters),
//         getBlockchains(),
//         getGameStudios(),
//         getEngines(),
//     ])

//     return { games, blockchains, gameStudios, engines }
// }

export const getGamesAllData = async (filters: FilterOptions) => {
    const [games] = await Promise.allSettled([getGames(filters)])
    return { games }
}

export const getAllSidebarOptions = async () => {
    const [blockchains, gameStudios, engines] = await Promise.allSettled([
        getBlockchains(),
        getGameStudios(),
        getEngines(),
    ])
    return { blockchains, gameStudios, engines }
}
