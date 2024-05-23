import SupabaseInstance from "../../supabase"
import { getGameRelatedData } from "./utilControllers"

const supabase = SupabaseInstance.getSupabaseInstance()

interface Event {
    eventid: string
    pic: string
    startdate: string
    enddate: string
    type: string | null
    detail: string
    address: string
    categories: string[] | null
    gameid: string
    title: string
}

const eventData = async (event_id: string) => {
    const { data, error } = await supabase.from("events").select("*").eq("eventid", event_id)

    if (error) {
        throw new Error("Error fetching events: " + error.message)
    }
    return <Event>(data[0] as unknown) || []
}

export const getEventDetailPageData = async (event_id: string) => {
    const eventt: Event = await eventData(event_id)
    const relatedData = await getGameRelatedData(eventt.gameid)

    return { eventt, relatedData }
}
