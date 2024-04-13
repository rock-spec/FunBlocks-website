import SupabaseInstance from "../../supabase";
import { getGameRelatedData } from "./utilControllers";

const supabase = SupabaseInstance.getSupabaseInstance()

const videoData = async (video_id: string) => {
    const { data, error } = await supabase
        .from("videos")
        .select("*,user(username)")
        .eq("videoid", video_id)
    console.log(data);


    if (error) {
        throw new Error("Error fetching videos: " + error.message);
    }
    return data[0] || [];
}


export const getvideoDetailPageData = async (video_id: string) => {
    const video = await videoData(video_id);
    const relatedData = await getGameRelatedData(video.gameid)

    return { video, relatedData }
}