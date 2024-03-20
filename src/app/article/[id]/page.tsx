'use client'

import { ArticleDetailsColumn } from '@/components/Articles/ArticleDetailsColumn';
import { Column } from '@/components/Column/Column';
import React from 'react';



const ArticleDetails = ({ params }: { params: { id: string } }) => {

    const id = params.id; // Access the dynamic id parameter

    return (
        <div className="w-full max-w-[1200px] flex justify-between gap-x-5">

            {/* Main Column  */}
            <ArticleDetailsColumn />

            {/* Right Column */}
            <div className='flex-col justify-items-start items-center h-fit'>
                <Column variant='game' title='Related Game' onButtonClick={() => { }}
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

                    ]}
                />
                {/* for space between them */}
                <div className='h-[24px] w-full'></div>
                <Column variant='article' title='Article' onButtonClick={() => { }}
                    columnItems={[
                        {
                            variant: "article",
                            tags: ['Crypto', '8+'],
                            title: "The Evolution of Multiplayer Gaming: From Couch Co-op to Global Connectivity",
                            imageUrl: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/game-pW2m7GbYkdo7XmrKvmQAtnp0Eh5OD6.png"
                        },
                        {
                            variant: "article",
                            tags: ['Crypto', '8+'],
                            title: "The Evolution of Multiplayer Gaming: From Couch Co-op to Global Connectivity",
                            imageUrl: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/game%20(1)-QnKAcgeQFAZMjJlgN5YhUNOyFnXwc4.png"
                        },
                        {
                            variant: "article",
                            tags: ['Crypto', '8+'],
                            title: "The Evolution of Multiplayer Gaming: From Couch Co-op to Global Connectivity",
                            imageUrl: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/game-pW2m7GbYkdo7XmrKvmQAtnp0Eh5OD6.png"
                        },
                        {
                            variant: "article",
                            tags: ['Crypto', '8+'],
                            title: "The Evolution of Multiplayer Gaming: From Couch Co-op to Global Connectivity",
                            imageUrl: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/game%20(1)-QnKAcgeQFAZMjJlgN5YhUNOyFnXwc4.png"
                        },
                        {
                            variant: "article",
                            tags: ['Crypto', '8+'],
                            title: "The Evolution of Multiplayer Gaming: From Couch Co-op to Global Connectivity",
                            imageUrl: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/game-pW2m7GbYkdo7XmrKvmQAtnp0Eh5OD6.png"
                        },
                        {
                            variant: "article",
                            tags: ['Crypto', '8+'],
                            title: "The Evolution of Multiplayer Gaming: From Couch Co-op to Global Connectivity",
                            imageUrl: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/game%20(1)-QnKAcgeQFAZMjJlgN5YhUNOyFnXwc4.png"
                        },
                    ]}
                />
            </div>
        </div>
    );
};

export default ArticleDetails;
