import SupabaseInstance from "../../supabase";

const supabase = SupabaseInstance.getSupabaseInstance();

const getNews = async () => {
  const { data, error } = await supabase
    .from("news")
    .select(
      "newsid,content(title,image,game(gameid,engineid,gamestudioid,blockchainid))"
    )
    .eq("isHome", true);

  if (error) {
    throw new Error("Error fetching news: " + error.message);
  }

  return data || [];
};

const getGames = async () => {
  const { data, error } = await supabase
    .from("game")
    .select("*")
    .eq("isHome", true);

  if (error) {
    throw new Error("Error fetching games: " + error.message);
  }

  return data || [];
};

const getArticles = async () => {
  const { data, error } = await supabase
    .from("articles")
    .select(
      "articleid,content(*,user(*),game(gameid,engineid,gamestudioid,blockchainid,engine(logo,pic)))"
    )
    .eq("isHome", true);

  if (error) {
    throw new Error("Error fetching articles: " + error.message);
  }

  return data || [];
};

const getVideos = async () => {
  const { data, error } = await supabase
    .from("videos")
    .select("videoid,video_name,summary,media_url")
    .range(0, 3);

  if (error) {
    throw new Error("Error fetching videos: " + error.message);
  }

  return data || [];
};

const getEvents = async () => {
  const { data, error } = await supabase
    .from("events")
    .select("*,game(gameid,engineid,gamestudioid,blockchainid)")
    .eq("isHome", true);

  if (error) {
    throw new Error("Error fetching events: " + error.message);
  }

  return data || [];
};

const getHomeData = async () => {
  const news = await getNews();
  const games = await getGames();
  const articles = await getArticles();
  const videos = await getVideos();
  const events = await getEvents();

  return {
    news,
    games,
    articles,
    videos,
    events,
  };
};

export default getHomeData;
