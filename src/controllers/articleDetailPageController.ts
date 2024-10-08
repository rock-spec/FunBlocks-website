import { any } from "zod"
import SupabaseInstance from "../../supabase"
import { getGameRelatedData } from "./utilControllers"
import { type Locale } from "@/i18n.config"

const supabase = SupabaseInstance.getSupabaseInstance()

interface Article {
    articleid: string
    games: {
        gameid: string;
        engineid: string;
        blockchainid: string;
        gamestudioid: string;
    }[]
    content: {
        user: {
            username: string
        }
        image: string
        title: string
        gameid: string
        userid: string
        maintext: null // Change this if maintext can have a different type
        contentid: string
        articletype: null // Change this if articletype can have a different type
        contenttype: string
        description: string
        publishdate: string
    }
}

const articleData = async (article_id: string, locale: Locale) => {
    const { data, error } = await supabase
        .from("articles")
        .select(
            `articleid, publishdate, games:content_gameids(gameid, game(gameid, engineid, gamestudioid, blockchainid)), content(title_en, title_zh, description_en, description_zh, content_en, content_zh, image, author(name))`
        )
        .eq("articleid", article_id)
    if (error) {
        throw new Error("Error fetching articles: " + error.message)
    }
    return <Article>(data[0] as unknown) || []
}

export const getArticleDetailPageData = async ({ id, locale }: { id: string; locale: Locale }) => {
    const article_id = id
    const article: Article = await articleData(article_id, locale)
    if (article?.games.length > 0) {
        let gamesIds = article?.games.map((game: any) => game.gameid)
        const relatedData = await getGameRelatedData(gamesIds, locale)
        return { article, relatedData }
    }else{
        return {article}
    }
}
