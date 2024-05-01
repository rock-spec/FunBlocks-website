import { GameColumn } from '@/components/Games/GameColumn';
import React, { useEffect, useState } from 'react';
import { trpcServer } from '../_trpc/trpcServer';
import { Column } from '@/components/Column/Column';
export const dynamic = 'force-dynamic'

const Game = async () => {

    // Fetching game data using trpc
    const gameData = await trpcServer().gameData()
    const news = gameData.news

    return (

        <div className="w-full max-w-[1200px] flex flex-col md:flex-row justify-between gap-x-5">

            {/* Left Column */}
            <div className=" h-full">
                <Column variant='news' title='new' responsive className="mb-0 mt-10 lg:mt-0" onButtonClick={() => { }}
                    columnItems={
                        news?.map((news: any) => ({
                            id: news.newsid,
                            variant: "news",
                            tags: [news.content.game.gameid, news.content.game.engineid, news.content.game.gamestudioid, news.content.game.blockchainid],
                            title: news.content.title,
                            imageUrl: news.content.image
                        }))
                    }
                />
            </div>


            {/* Main Column  */}
            <GameColumn data={gameData.game} />

        </div>
    );
}


export default Game;
