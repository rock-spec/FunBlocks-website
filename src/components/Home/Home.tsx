import React from "react"
import { HomeColumn } from "./HomeColumn"
import { Column } from "../Column/Column"
import { trpcServer } from "@/app/_trpc/trpcServer"
import { type Locale } from "@/i18n.config"
// import { trpcServer } from "@/app/[locale]/_trpc/trpcServer"

interface Game {
    gameid: string
    game_name: string
    game_desc: string
    website: string
    play_now_button: string
    game_twitter: string
    testnet_or_mainnet: string
    blog: string
    github: string
    pic: string
    logo: string
    engineid: string
    gamestudioid: string
    blockchainid: string
}

interface Article {
    articleid: string
    content: {
        game:[ {
            engine: {
                pic: string
                logo: string
            }
            gameid: string
            engineid: string
            blockchainid: string
            gamestudioid: string
        }]
        image: string
        title: string
    }
}

interface News {
    newsid: string
    content: {
        game: {
            gameid: string
            engineid: string
            blockchainid: string
            gamestudioid: string
        }
        image: string
        title: string
    }
}

interface Video {
    videoid: string
    video_name: string
    summary: string
    media_url: string
}

interface Event {
    eventid: string
    pic: string
    startdate: string
    enddate: string
    type: any // You can replace any with the specific type if it's known
    detail: string
    address: string
    categories: any // You can replace any with the specific type if it's known
    gameid: string
    title: string
    game: {
        gameid: string
        engineid: string
        blockchainid: string
        gamestudioid: string
    }
}

export interface Data {
    news: News[]
    games: Game[]
    articles: Article[]
    videos: Video[]
    events: Event[]
}

const Homee = async ({ n, b, locale }: { n?: any; b?: any; locale: Locale }) => {
    const HomeData = await trpcServer().homeData(locale)

    let games: any[] = []
    if (HomeData.games?.status === "fulfilled") {
        games = HomeData.games.value
    }

    
    return (
        <div className="relatve w-full max-w-[1200px] flex flex-col  justify-between lg:gap-x-5 lg:flex-row">
            {/* Left Column */}
            <Column
                variant="game"
                title={n("games")}
                buttonText={b("allGames")}
                onButtonClick={() => {}}
                className="sticky top-32"
                responsive
                columnItems={games?.map((game) => ({
                    id: game?.gameid,
                    variant: "game",
                    tags: [game?.engineid, game?.gamestudioid, game?.blockchainid],
                    title: game?.game_name,
                    imageUrl: game?.pic,
                }))}
            />
            {/* Main Column  */}
            <HomeColumn data={HomeData} locale={locale} />
        </div>
    )
}

export default Homee
