import SupabaseInstance from "../../supabase";

const supabase = SupabaseInstance.getSupabaseInstance()


const getAllEngines = async () => {
    const { data, error } = await supabase
        .from("engine")
        .select("*")

    if (error) {
        throw new Error("Error fetching engine: " + error.message);
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

export const getEnginesData = async () => {
    const engines = await getAllEngines()
    const featuredGames = await getFeaturedGameData()

    return { engines, featuredGames }
}