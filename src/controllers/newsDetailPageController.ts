import SupabaseInstance from "../../supabase"
import { getGameRelatedData } from "./utilControllers"
import { type Locale } from "@/i18n.config"

const supabase = SupabaseInstance.getSupabaseInstance()

interface news {
    newsid: string
    content: {
        game: {
            gameid: string
            engineid: string
            blockchainid: string
            gamestudioid: string
        }
        user: {
            username: string
        }
        image: string
        title: string
        gameid: string
        userid: string
        maintext: null // Change this if maintext can have a different type
        contentid: string
        newstype: null // Change this if newstype can have a different type
        contenttype: string
        description: string
        publishdate: string
    }
}

const newsData = async (news_id: string, locale: Locale) => {
    try {
        const { data, error } = await supabase
            .from("news")
            .select(
                `*,content(title_en,title_zh, description_en,description_zh,content_en,content_zh ,image ,author(authorid, name),gameid,game(gameid,engineid,gamestudioid,blockchainid))`
            )
            .eq("newsid", news_id)

        if (error) {
            console.error("Error fetching news:", error)
            throw new Error("Error fetching news: " + error.message)
        }
        return <news>(data?.[0] as unknown) || []
    } catch (err) {
        console.error("Unexpected error:", err)
        throw new Error("Unexpected error: " + err)
    }
}

export const getnewsDetailPageData = async ({ id, locale }: { id: string; locale: Locale }) => {
    const news_id = id
    const news: news = await newsData(news_id, locale)
    const gameid = news?.content?.gameid
    const relatedData = await getGameRelatedData(gameid, locale)
    return { news, relatedData }
}
