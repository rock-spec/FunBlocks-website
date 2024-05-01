

import { Column } from '@/components/Column/Column';
import { EventColumn } from '@/components/Events/EventColumn';
import React from 'react';
import { trpcServer } from '../_trpc/trpcServer';

export const dynamic = 'force-dynamic'


const Event = async () => {

    const { featuredGames, events } = await trpcServer().eventData()

    return (
        <div className="w-full max-w-[1200px]  flex lg:flex-row flex-col justify-between gap-x-5">

            {/* Main Column  */}
            <EventColumn data={events} />

            {/* Right Column */}
            <Column variant='game' responsive title='Featured Game' buttonText='All Games' onButtonClick={() => { }}
                columnItems={
                    featuredGames.map((game) => ({
                        key: game.gameid,
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


export default Event;
