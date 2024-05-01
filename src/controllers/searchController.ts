import SupabaseInstance from "../../supabase";

const supabase = SupabaseInstance.getSupabaseInstance();

const getNews = async (query: string) => {
    const { data, error } = await supabase
        .from("news")
        .select(
            "newsid,content(*,game(gameid,engineid,gamestudioid,blockchainid))"
        )
        .ilike("content.title", `%${query}%`);

    if (error) {
        throw new Error("Error fetching news: " + error.message);
    }

    return data || [];
};

const getGames = async (query: string) => {
    const { data, error } = await supabase
        .from("game")
        .select("*")
        .ilike("game_name", `%${query}%`);

    if (error) {
        throw new Error("Error fetching games: " + error.message);
    }

    return data || [];
};

const getArticles = async (query: string) => {
    const { data, error } = await supabase
        .from("articles")
        .select(
            "articleid,content(*,user(*),game(gameid,engineid,gamestudioid,blockchainid,engine(logo,pic)))"
        )
        .ilike("content.title", `%${query}%`);

    if (error) {
        throw new Error("Error fetching articles: " + error.message);
    }

    return data || [];
};

const getVideos = async (query: string) => {
    const { data, error } = await supabase
        .from("videos")
        .select("videoid,video_name,summary,media_url")
        .ilike("video_name", `%${query}%`);


    if (error) {
        throw new Error("Error fetching videos: " + error.message);
    }

    return data || [];
};

const getEvents = async (query: string) => {
    const { data, error } = await supabase
        .from("events")
        .select("*,game(gameid,engineid,gamestudioid,blockchainid)")
        .ilike("title", `%${query}%`);

    if (error) {
        throw new Error("Error fetching events: " + error.message);
    }

    return data || [];
};

const getSearchData = async (query: string = 'T') => {
    const news = await getNews(query);
    const games = await getGames(query);
    const articles = await getArticles(query);
    const videos = await getVideos(query);
    const events = await getEvents(query);

    console.log({
        news,
        games,
        articles,
        videos,
        events,
    });


    return {
        news,
        games,
        articles,
        videos,
        events,
    };
};

export default getSearchData;
