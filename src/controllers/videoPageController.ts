import SupabaseInstance from "../../supabase";

const supabase = SupabaseInstance.getSupabaseInstance()


const getAllVideos = async () => {
    const { data, error } = await supabase
        .from("videos")
        .select("videoid,video_name,summary,media_url")


    if (error) {
        throw new Error("Error fetching videos: " + error.message);
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

export const getVideosData = async () => {
    const videos = await getAllVideos()
    const featuredGames = await getFeaturedGameData()

    return { videos, featuredGames }
}