'use client'

import { Column } from '@/components/Column/Column';
import { VideoColumn } from '@/components/Videos/VideoColumn';
import React from 'react';



const Video = () => {
    return (
        <div className="w-full max-w-[1200px] flex justify-between gap-x-5">

            {/* Main Column  */}
            <VideoColumn />

            {/* Right Column */}
            <Column variant='game' title='Featured Game' buttonText='All Games' onButtonClick={() => { }}
                columnItems={[{
                    variant: "game",
                    tags: ['Crypto', '8+'],
                    title: "RoboCop: Rogue City",
                    imageUrl: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/game-pW2m7GbYkdo7XmrKvmQAtnp0Eh5OD6.png"
                },
                {
                    variant: "game",
                    tags: ['Crypto', '8+'],
                    title: "Mobile Bubble Shooters",
                    imageUrl: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/game%20(1)-QnKAcgeQFAZMjJlgN5YhUNOyFnXwc4.png"
                },
                {
                    variant: "game",
                    tags: ['Crypto', '8+'],
                    title: "Champions Arena",
                    imageUrl: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/img-kWQFGUobAsklZOZxQ4wefibP0Zcr7I.png"
                },
                {
                    variant: "game",
                    tags: ['Crypto', '8+'],
                    title: "Heart Kingdom: Elevated City",
                    imageUrl: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/game%20(2)-8HFIoSLnMaAi53FMkbQU9M5Xk3U8RL.png"
                },
                {
                    variant: "game",
                    tags: ['Crypto', '8+'],
                    title: "Flag Capture",
                    imageUrl: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/game%20(3)-kT72FeiJsE4gENjdIT27R54fdvdUTd.png"
                },
                {
                    variant: "game",
                    tags: ['Crypto', '8+'],
                    title: "Sky island",
                    imageUrl: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/img%20(1)-7Tio5zOgorsegGbIQOV2fcQNimIm2Y.png"
                },
                ]}
            />
        </div>

    );
}


export default Video;
