import SupabaseInstance from "../../supabase"

const supabase = SupabaseInstance.getSupabaseInstance()

const getAllNews = async () => {
    const { data, error } = await supabase
        .from("news")
        .select("newsid, category, content(*,user(username),game(gameid,engineid,gamestudioid,blockchainid))")
    if (error) {
        throw new Error("Error fetching news: " + error.message)
    }
    return data || []
}

const getFeaturedGameData = async () => {
    const { data, error } = await supabase.from("game").select("*").range(0, 5)

    if (error) {
        throw new Error("Error fetching games: " + error.message)
    }

    return data || []
}

export const getNewsData = async () => {
    const news = await getAllNews()
    const featuredGames = await getFeaturedGameData()

    return { news, featuredGames }
}
