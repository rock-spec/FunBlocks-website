import SupabaseInstance from "../../supabase";

const supabase = SupabaseInstance.getSupabaseInstance()

export const getGameAllData = async () => {
    const { data, error } = await supabase
        .from("game")
        .select("*,engine(logo)")
        .range(0, 8);

    if (error) {
        throw new Error("Error fetching games: " + error.message);
    }

    return data || [];
};