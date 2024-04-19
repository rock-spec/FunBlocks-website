import SupabaseInstance from "../../supabase";

const supabase = SupabaseInstance.getSupabaseInstance()


const getAllEvents = async () => {
    const { data, error } = await supabase
        .from("events")
        .select("*,game(gameid,engineid,gamestudioid,blockchainid)")

    if (error) {
        throw new Error("Error fetching events: " + error.message);
    }

    return data || [];
}

const getFeaturedGameData = async () => {
    const { data, error } = await supabase
        .from("game")
        .select("*")
        .range(0, 5);

    if (error) {
        throw new Error("Error fetching games: " + error.message);
    }

    return data || [];
}

export const getEventsData = async () => {
    const events = await getAllEvents()
    const featuredGames = await getFeaturedGameData()

    return { events, featuredGames }
}