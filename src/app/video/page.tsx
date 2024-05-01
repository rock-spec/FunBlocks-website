
import { Column } from '@/components/Column/Column';
import { VideoColumn } from '@/components/Videos/VideoColumn';
import React from 'react';
import { trpcServer } from '../_trpc/trpcServer';

export const dynamic = 'force-dynamic'


const Video = async () => {

    const { featuredGames, videos } = await trpcServer().videoData()

    return (
        <div className="w-full max-w-[1200px] flex lg:flex-row flex-col justify-between gap-x-5">

            {/* Main Column  */}
            <VideoColumn data={videos} />

            {/* Right Column */}
            <Column variant='game' responsive title='Featured Game' buttonText='All Games' onButtonClick={() => { }}
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


export default Video;
