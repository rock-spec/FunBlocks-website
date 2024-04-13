import SupabaseInstance from "../../supabase";
import { getGameRelatedData } from "./utilControllers";

const supabase = SupabaseInstance.getSupabaseInstance()

interface Article {
    articleid: string;
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
        articletype: null; // Change this if articletype can have a different type
        contenttype: string;
        description: string;
        publishdate: string;
    };
}




const articleData = async (article_id: string) => {
    const { data, error } = await supabase
        .from("articles")
        .select(
            "articleid,content(*,user(username),gameid,game(gameid,engineid,gamestudioid,blockchainid))"
        )
        .eq("articleid", article_id)

    if (error) {
        throw new Error("Error fetching articles: " + error.message);
    }
    return <Article>(data[0] as unknown) || [];
}


export const getArticleDetailPageData = async (article_id: string) => {
    const article: Article = await articleData(article_id);
    const relatedData = await getGameRelatedData(article.content.gameid)

    return { article, relatedData }
}