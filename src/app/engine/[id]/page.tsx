"use client"

import { Column } from '@/components/Column/Column';
import { EngineDetailColumn } from '@/components/Engine/EngineDetailColumn';
import { GameDetailColumn } from '@/components/Games/GameDetailColumn';
import React from 'react';



const EngineDetail = ({ params }: { params: { id: string } }) => {
    return (

        <div className="w-full max-w-[1200px] flex justify-between gap-x-5">

            {/* Main Column  */}
            <EngineDetailColumn />

            {/* Right Column */}
            <Column variant='news' title='related new' onButtonClick={() => { }}
                columnItems={[{
                    variant: 'news',
                    tags: ['research', '8+'],
                    title: "Engine Study latest game Gaul trial tutorial in best some data",
                    imageUrl: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/img-D0H0SclflrEB6cgpZAsw9opZFnQTM2.png"
                },
                {
                    variant: 'news',
                    tags: ['platform', '8+'],
                    title: "Engine Study latest game Gaul trial tutorial in best some data",
                    imageUrl: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/img-1-jnFQsgKXMUh8kqn5QXsqDSa01jPYnV.png"
                },
                {
                    variant: 'news',
                    tags: ['Devs', '2+', 'fps'],
                    title: "Engine Study latest game Gaul trial tutorial in best some data",
                    imageUrl: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Frame%203184808-YJgfVkazA6UUo3CS08ZV6wkSUtHSiK.png"
                },
                {
                    variant: 'news',
                    tags: ['guide', 'rpg', '4+'],
                    title: "Engine Study latest game Gaul trial tutorial in best some data",
                    imageUrl: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Frame%203184808-1-DNruw07TL6NjXBsNxgKh2GFFcE5GmF.png"
                },

                ]}
            />
        </div>

    );
}


export default EngineDetail;
