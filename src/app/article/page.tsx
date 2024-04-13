

import { ArticleColumn } from '@/components/Articles/ArticleColumn';
import { Column } from '@/components/Column/Column';
import React from 'react';
import { trpcServer } from '../_trpc/trpcServer';

const Article = async () => {
    const { featuredGames, articles } = await trpcServer().articleData()

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

                    //     [{
                    //     variant: "game",
                    //     tags: ['Crypto', '8+'],
                    //     title: "RoboCop: Rogue City",
                    //     imageUrl: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/game-pW2m7GbYkdo7XmrKvmQAtnp0Eh5OD6.png"
                    // },
                    // {
                    //     variant: "game",
                    //     tags: ['Crypto', '8+'],
                    //     title: "Mobile Bubble Shooters",
                    //     imageUrl: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/game%20(1)-QnKAcgeQFAZMjJlgN5YhUNOyFnXwc4.png"
                    // },
                    // {
                    //     variant: "game",
                    //     tags: ['Crypto', '8+'],
                    //     title: "Champions Arena",
                    //     imageUrl: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/img-kWQFGUobAsklZOZxQ4wefibP0Zcr7I.png"
                    // },
                    // {
                    //     variant: "game",
                    //     tags: ['Crypto', '8+'],
                    //     title: "Heart Kingdom: Elevated City",
                    //     imageUrl: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/game%20(2)-8HFIoSLnMaAi53FMkbQU9M5Xk3U8RL.png"
                    // },
                    // {
                    //     variant: "game",
                    //     tags: ['Crypto', '8+'],
                    //     title: "Flag Capture",
                    //     imageUrl: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/game%20(3)-kT72FeiJsE4gENjdIT27R54fdvdUTd.png"
                    // },
                    // {
                    //     variant: "game",
                    //     tags: ['Crypto', '8+'],
                    //     title: "Sky island",
                    //     imageUrl: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/img%20(1)-7Tio5zOgorsegGbIQOV2fcQNimIm2Y.png"
                    // },
                    // ]

                }
            />
        </div>

    );
}


export default Article;
