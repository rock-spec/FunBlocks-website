'use client'

import { CustomButton } from '@/components/Button/Button';
import { Column } from '@/components/Column/Column';
import GameCardComponet, { GameCardComponentProps } from '@/components/Games/GameCardComponet';
import { GameColumn } from '@/components/Games/GameColumn';
import SingleVideoCardItem from '@/components/SingleCard/SingleVideoCardItem';
import SingleCardItem, { SingleCardItemProps } from '@/components/SingleCardItem/SingleCardItem';
import { Tag } from '@/components/Tag/Tag';
import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';



const Search = () => {
    const singleArticleCardItemDetails: SingleCardItemProps[] =
        [
            {
                'variant': 'article',
                'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Frame%203184843-lvW7VjPWajYBlfUfol1CSdb5jGIBho.png?height=360&width=720",
                'title': 'The Strongest Argument for Crypto-Native Gaming',
                'description': "In the ever-evolving world of video games, staying ahead of the curve is not just about keeping your software updated; it's about immersing yourself in the heart of gaming culture",
                'details': 'February 24, 2024 at 10:50 AM',
                'tags': ['game'],
                'author': "Janson Will",
                'onFirstButtonClick': () => {
                },
                'onSecondButtonClick': () => {
                },
            },
            {
                'variant': 'article',
                'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Frame%203184843%20(1)-oGAvZEn2wnE2aa3MPruck6hoXfCowD.png?height=360&width=720",
                'title': 'Introduction to the Autonomous World: THE CASE FOR AUTONOMOUS WORLDS',
                'description': "In the ever-evolving world of video games, staying ahead of the curve is not just about keeping your software updated; it's about immersing yourself in the heart of gaming culture",
                'details': 'February 24, 2024 at 10:50 AM',
                'tags': ['game'],
                'author': "Janson Will",
                'onFirstButtonClick': () => {
                },
                'onSecondButtonClick': () => {
                },
            },
        ]
    const singleNewsCardItemDetails: SingleCardItemProps[] =
        [
            {
                'variant': 'article',
                'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Frame%203184843-lvW7VjPWajYBlfUfol1CSdb5jGIBho.png?height=360&width=720",
                'title': 'The Strongest Argument for Crypto-Native Gaming',
                'description': "In the ever-evolving world of video games, staying ahead of the curve is not just about keeping your software updated; it's about immersing yourself in the heart of gaming culture",
                'details': 'February 24, 2024 at 10:50 AM',
                'tags': ['game'],
                'author': "Janson Will",
                'onFirstButtonClick': () => {
                },
                'onSecondButtonClick': () => {
                },
            },
            {
                'variant': 'article',
                'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Frame%203184843%20(1)-oGAvZEn2wnE2aa3MPruck6hoXfCowD.png?height=360&width=720",
                'title': 'Introduction to the Autonomous World: THE CASE FOR AUTONOMOUS WORLDS',
                'description': "In the ever-evolving world of video games, staying ahead of the curve is not just about keeping your software updated; it's about immersing yourself in the heart of gaming culture",
                'details': 'February 24, 2024 at 10:50 AM',
                'tags': ['game'],
                'author': "Janson Will",
                'onFirstButtonClick': () => {
                },
                'onSecondButtonClick': () => {
                },
            },
        ]

    const singleGameCardItemDetails: GameCardComponentProps[] =
        [
            {
                game_id: "123",
                engine: "paima",
                engine_logo: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/bolt%20logo-GeDmp6kt980WP2Z0ch3gDvtkNrdZkK.svg",
                'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Game%20Thumbail-imKmzXRUOYiTlqkK85KeumNoUIFL0o.png",
                'title': 'Alchemist',
                'description': 'The World Adventure',
                'tags': ['online', 'playtest'],
                'onClick': () => {
                },
            },

            {
                game_id: "123",
                engine: "mud v2",
                engine_logo: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/bolt%20logo-1-eyMwzsUTiIgfNQdNrEYhbGPlLtez0d.svg",

                'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/image%2090-i60QEO453Pelab4EsRedYMtXuzGkIY.png",
                'title': 'ClimBros',
                'description': 'Them Mountain Ride',
                'tags': ['online', 'playtest'],
                'onClick': () => {
                },
            },
            {
                game_id: "123",
                engine: "world engine",
                engine_logo: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/bolt%20logo-2-t5gXRpZAHPvDZ9TIGzvnUhIPY5TgYk.svg",
                'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/image%2092-gZQHVixbfRKHN3R806WteVL7mHxc5Z.png",
                'title': 'The Uplift',
                'description': 'Crypto Mind',
                'tags': ['online', 'playtest'],
                'onClick': () => {
                },
            }]

    const singleVideoCardItemDetails: SingleCardItemProps[] =
        [
            {
                'variant': 'video',
                'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Frame%203184843%20(3)-5zWDNu18KhXQQBqMhnDkdenKizVhxY.png?height=360&width=720",
                'title': 'The Strongest Argument for Crypto-Native Gaming',
                'description': 'Loot Survivor[1] is the first game in the Realms Autonomous Worlds ecosystem. It was developed by Loothero[2], a senior member of Bibliotheca DAO, and uses a unique Play2Die mechanism. The game is inspired by the backstory and gameplay of the original Loot Project community [3], where players need to fight beasts, clear obstacles, collect equipment to survive, and compete for higher positions in the leaderboards.',
                'tags': ['online', 'playtest'],
                'onFirstButtonClick': () => {
                },
                'onSecondButtonClick': () => {
                },
            },

            {
                'variant': 'video',
                'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Frame%203184844-PONGpPl6WzeMR6Lzp6s4cwxzgGi1Lf.png?height=360&width=720",
                'title': 'Loot Survivor and the Emergence of Onchain Arcade',
                'description': 'Loot Survivor[1] is the first game in the Realms Autonomous Worlds ecosystem. It was developed by Loothero[2], a senior member of Bibliotheca DAO, and uses a unique Play2Die mechanism. The game is inspired by the backstory and gameplay of the original Loot Project community [3], where players need to fight beasts, clear obstacles, collect equipment to survive, and compete for higher positions in the leaderboards.',
                'tags': ['online', 'playtest'],
                'onFirstButtonClick': () => {
                },
                'onSecondButtonClick': () => {
                },
            },
        ]


    return (

        <div className="w-full max-w-[1200px] flex lg:flex-row flex-col justify-between gap-x-5">

            {/* mainCoulumn  */}
            <div className="m-w-[895px] w-full">


                <div className="flex mb-10 gap-x-5 flex-col md:flex-row">
                    <div className="lg:w-fit w-full  px-5 py-3 bg-stone-50 border border-neutral-900 lg:justify-start justify-between  items-start gap-5 inline-flex ">
                        <div className="w-full box-border justify-between md:text-xl sm:text-base text-xs items-start md:gap-10 sm:gap-3 gap-1 flex">
                            <div className="text-center text-blue-700  font-bold font-['OffBit Trial'] tracking-tight">All</div>
                            <div className="text-center text-neutral-900  font-bold font-['OffBit Trial'] tracking-tight">Articles</div>
                            <div className="text-center text-neutral-900  font-bold font-['OffBit Trial'] tracking-tight">News</div>
                            <div className="text-center text-neutral-900  font-bold font-['OffBit Trial'] tracking-tight">Games</div>
                            <div className="text-center text-neutral-900  font-bold font-['OffBit Trial'] tracking-tight">Videos</div>
                            <div className="text-center text-neutral-900  font-bold font-['OffBit Trial'] tracking-tight">Events</div>
                        </div>
                    </div>
                    <CustomButton onClick={() => { }} size='13px' text='Filter By time' height='42px' icon={<IoIosArrowDown />} />
                </div>

                {/* Related Articles Section  */}
                <div>
                    <Tag type="section" text='2 Related Articles Found' />
                    <div className="flex mb-10 gap-x-5">

                        <div className="flex flex-col flex-1 items-start gap-5 mt-5">
                            {singleArticleCardItemDetails.map((detail, index) => (
                                <div className="p-5 border border-[#161616] bg-[#FFFCF9]">
                                    <SingleCardItem key={index} {...detail} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Related Game Section  */}
                <div>
                    <Tag type="section" text='3 Related Games Found' />
                    <div className="flex mb-10 gap-x-5 mt-5">
                        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                            {singleGameCardItemDetails.map((detail, index) => (
                                <div className="p-5 border border-[#161616] bg-[#FFFCF9]" key={index}>
                                    <GameCardComponet {...detail} />
                                </div>
                            ))}
                        </div>

                    </div>
                </div>




                {/* Related Video Section  */}
                <div>
                    <Tag type="section" text='2 Related Videos Found' />
                    <div className="grid  md:grid-cols-2 grid-cols-1  gap-4 mt-5">
                        {singleVideoCardItemDetails.map((detail, index) => (
                            <div className="p-5 border border-[#161616] bg-[#FFFCF9]">
                                <SingleVideoCardItem key={index} {...detail} />
                            </div>
                        ))}

                    </div>
                </div>


                {/* Related News Section  */}
                <div className='mt-10'>
                    <Tag type="section" text='3 Related News Found' />


                    <div className="flex flex-col flex-1 items-start gap-5 mt-5">
                        {singleNewsCardItemDetails.map((detail, index) => (
                            <div className="p-5 border border-[#161616] bg-[#FFFCF9]">
                                <SingleCardItem key={index} {...detail} />
                            </div>
                        ))}
                    </div>

                </div>
            </div>




            {/* Right */}
            <div className='flex-col justify-items-start items-center h-fit mt-10 lg:mt-0'>
                <Column variant='article' responsive title='Article' onButtonClick={() => { }}
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
}


export default Search
