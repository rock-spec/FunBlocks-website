import { Locale } from "@/i18n.config"
import SupabaseInstance from "../../supabase"
import { getGameRelatedData } from "./utilControllers"

const supabase = SupabaseInstance.getSupabaseInstance()

const videoData = async (video_id: string) => {
    const { data, error } = await supabase.from("videos").select("*,author(name)").eq("videoid", video_id)

    if (error) {
        throw new Error("Error fetching videos: " + error.message)
    }
    return data[0] || []
}

export const getvideoDetailPageData = async ({ id, locale }: { id: string; locale: Locale }) => {
    const videoId = id
    const video = await videoData(videoId)
    const relatedData = await getGameRelatedData(video.gameid, locale)

    return { video, relatedData }
}
