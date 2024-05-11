

import { ArticleColumn } from '@/components/Articles/ArticleColumn';
import { Column } from '@/components/Column/Column';
import React from 'react';
import { trpcServer } from '../_trpc/trpcServer';
export const dynamic = 'force-dynamic'

const Article = async () => {
    const { featuredGames, articles } = await trpcServer().articleData()
    console.log(articles);
    

    return (
        <div className="w-full max-w-[1200px] flex justify-between gap-x-5 lg:flex-row flex-col">

            {/* Main Column  */}
            <ArticleColumn data={articles} />

            {/* Right Column */}
            <Column variant='game' title='Featured Game' buttonText='All Games' onButtonClick={() => { }}
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


export default Article;
