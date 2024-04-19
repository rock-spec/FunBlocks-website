import SupabaseInstance from "../../supabase";
import { getGameRelatedData } from "./utilControllers";

const supabase = SupabaseInstance.getSupabaseInstance()


interface Game {
    gameid: string;
    game_name: string;
    game_desc: string;
    website: string;
    play_now_button: string;
    game_twitter: string;
    testnet_or_mainnet: string;
    blog: string;
    github: string;
    pic: string;
    logo: string;
    engineid: string;
    gamestudioid: string;
    blockchainid: string;
}

const getEngineDetail = async (engine_id: string) => {
    const { data, error } = await supabase
        .from("engine")
        .select("*")
        .eq("engineid", engine_id)

    if (error) {
        throw new Error("Error fetching engine: " + error.message);
    }

    return data || [];
}

const getRelatedGames = async (engine_id: string) => {
    const { data, error } = await supabase
        .from("game")
        .select("*")
        .eq("engineid", engine_id)

    if (error) {
        throw new Error("Error fetching engine: " + error.message);
    }

    return data || [];

}

async function fetchGameRelatedData(relatedGames: Game[]): Promise<any[]> {
    const promises = relatedGames.map(game => getGameRelatedData(game.gameid));
    return Promise.all(promises);
}
function extractRelatedContent(jsonData: any[], contentType: string): any[] {
    const relatedContent: any[] = [];

    // Iterate through each entry in the jsonData array
    jsonData.forEach((entry: any) => {
        // Extract content of the specified type for the current entry
        const contentArray: any[] = entry[contentType] || [];

        // Iterate through each content item and append it to the overall array
        contentArray.forEach((contentItem: any) => {
            // Create a new object containing content, newsid, and articleid
            const itemWithIds = {
                content: contentItem.content,
                newsid: contentItem.newsid,
                articleid: contentItem.articleid
            };
            relatedContent.push(itemWithIds);
        });
    });

    return relatedContent;
}


function extractRelatedVideos(jsonData: any[]): any[] {
    const relatedVideos: any[] = [];

    // Iterate through each entry in the jsonData array
    jsonData.forEach((entry: any) => {
        // Extract related videos for the current entry
        const videosArray: any[] = entry.relatedVideos || [];
        // Push each video to the overall array
        relatedVideos.push(...videosArray);
    });

    return relatedVideos;
}

function extractRelatedEvents(jsonData: any[]): any[] {
    const relatedEvents: any[] = [];

    // Iterate through each entry in the jsonData array
    jsonData.forEach((entry: any) => {
        // Extract related events for the current entry
        const eventsArray: any[] = entry.relatedEvents || [];
        // Push each event to the overall array
        relatedEvents.push(...eventsArray);
    });

    return relatedEvents;
}

function extractAllGames(jsonData: any): any[] {
    const allGames: any[] = [];

    // Iterate through each entry in relatedData
    jsonData.forEach((entry: any) => {
        // Extract game information from the "game" object
        const gameInfo = entry.game[0]; // Assuming there's only one game object in each entry
        allGames.push(gameInfo);
    });

    return allGames;
}



export const getEngineDetailPageData = async (engine_id: string = "Enjin") => {
    const engines = await getEngineDetail(engine_id)
    const relatedGames = await getRelatedGames(engine_id)
    const relatedData = await fetchGameRelatedData(relatedGames)
    const relatedArticles = extractRelatedContent(relatedData, "relatedArticles");
    const relatedVideos = extractRelatedVideos(relatedData);
    const relatedNews = extractRelatedContent(relatedData, "relatedNews");
    const relatedEvents = extractRelatedEvents(relatedData)
    const allGames = extractAllGames(relatedData);



    return { engines, relatedArticles, relatedVideos, relatedNews, relatedEvents, relatedGames }
}

