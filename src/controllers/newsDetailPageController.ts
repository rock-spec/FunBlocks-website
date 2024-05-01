import SupabaseInstance from "../../supabase";
import { getGameRelatedData } from "./utilControllers";

const supabase = SupabaseInstance.getSupabaseInstance()

interface news {
    newsid: string;
    content: {
        game: {
            gameid: string;
            engineid: string;
            blockchainid: string;
            gamestudioid: string;
        };
        user: {
            username: string;
        };
        image: string;
        title: string;
        gameid: string;
        userid: string;
        maintext: null; // Change this if maintext can have a different type
        contentid: string;
        newstype: null; // Change this if newstype can have a different type
        contenttype: string;
        description: string;
        publishdate: string;
    };
}




const newsData = async (news_id: string) => {
    const { data, error } = await supabase
        .from("news")
        .select(
            "*,content(*,user(username),gameid,game(gameid,engineid,gamestudioid,blockchainid))"
        )
        .eq("newsid", news_id)

    if (error) {
        throw new Error("Error fetching newss: " + error.message);
    }
    return <news>(data[0] as unknown) || [];
}


export const getnewsDetailPageData = async (news_id: string) => {
    const news: news = await newsData(news_id);
    const relatedData = await getGameRelatedData(news.content.gameid)

    return { news, relatedData }
}