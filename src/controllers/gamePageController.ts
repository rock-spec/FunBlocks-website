import SupabaseInstance from "../../supabase";

const supabase = SupabaseInstance.getSupabaseInstance()


const getNews = async () => {
    const { data, error } = await supabase
        .from("news")
        .select(
            "newsid,content(title,image,game(gameid,engineid,gamestudioid,blockchainid))"
        )
        .range(0, 3);

    if (error) {
        throw new Error("Error fetching news: " + error.message);
    }

    return data || [];
};


export const getGameAllData = async () => {
    const { data: game, error } = await supabase
        .from("game")
        .select("*,engine(logo)")


    const news = await getNews()

    if (error) {
        throw new Error("Error fetching games: " + error.message);
    }

    return { game, news } || [];
};