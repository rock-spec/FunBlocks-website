import SupabaseInstance from "../../supabase"
import { type Locale } from "@/i18n.config"
const supabase = SupabaseInstance.getSupabaseInstance()


const getFeaturedGames = async () => {
    const { data, error } = await supabase
        .from("game")
        .select("gameid, game_name, pic, engineid, gamestudioid, blockchainid")
        .eq("isHome", true)
        .limit(5)
    if (error) {
        throw new Error("Error fetching games: " + error.message)
    }

    return data || []
}

export { getFeaturedGames }
