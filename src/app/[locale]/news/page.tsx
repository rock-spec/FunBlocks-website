

import { Column } from '@/components/Column/Column';
import { NewsColumn } from '@/components/News/NewsColumn';
import React from 'react';
import { trpcServer } from '../_trpc/trpcServer';

export const dynamic = 'force-dynamic'

const News = async () => {
    const { featuredGames, news } = await trpcServer().newsData()
    return (
        <div className="w-full max-w-[1200px] flex flex-col lg:flex-row justify-between gap-x-5">

            {/* Main Column  */}
            <NewsColumn data={news} />

            {/* Right Column */}
            <Column variant='game' title='Featured Game' buttonText='All Games' responsive onButtonClick={() => { }}
                columnItems={

                    featuredGames.map((game) => ({
                        id: game.gameid,
                        variant: "game",
                        tags: [game.engineid, game.gamestudioid, game.blockchainid],
                        title: game.game_name,
                        imageUrl: game.pic
                    }))
                }
            />
        </div>

    );
}


export default News;
