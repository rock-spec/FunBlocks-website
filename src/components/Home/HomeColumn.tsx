import React from "react";
import ArticleCard from "@/components/ArticleCard/ArticleCard";
import SingleCard from "@/components/SingleCard/SingleCard";
import { CustomButton } from "@/components/Button/Button";
import Image from "next/image";
import { Tag } from "@/components/Tag/Tag";
import { Column } from "../Column/Column";

export const HomeColumn = () => {
    return (
        <>
            <div className="w-full">
                <div className=" items-stretch flex mb-10 gap-x-5 lg:flex-row flex-col">
                    <div className="w-full p-5 bg-stone-50   border border-neutral-900 flex-col justify-end items-start gap-6 inline-flex h-full">

                        {/* image container */}
                        <div className="relative w-full">
                            {/* main banner image  */}
                            <Image src={"https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/2FqWBbNeNmTMfVE9N2ycLe%201-xwmYWzUaXWhOeADUxSuqnqVaS7czj2.png"} width={550} height={253} alt="" className="w-full rounded-md " />

                            {/* /Star Image/ */}
                            <Image src={"https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Tag-Swq9b5dkBzXvaPrsQFkgnAavhvTx5O.svg"} height={32} width={32} alt="" className="absolute bottom-[4%] left-[2%]  hover:scale-110 transition-all cursor-pointer" />

                            {/* Thunderbolt logo with tag*/}
                            <div className="flex absolute justify-start items-center top-[4%] left-[2%] cursor-pointer hover:scale-110 transition-all">

                                <Image src={"https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/bolt%20logo-M3SSX7VCK0Xc3OUZQo8qe4TDcRv53a.svg"} height={32} width={32} alt="" className="rounded-none" />
                                <Tag text="BOLT" />

                            </div>

                            {/* Right and Left Arrows  */}
                            <Image src={"https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Group%2010719-wQdE9W69jKjLbs5nPI5BS26APpWHzM.svg"} height={32} width={32} alt="" className="absolute top-[50%] right-[-10px] translate-y-[-50%] hover:scale-110 transition-all cursor-pointer" />
                            <Image src={"https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Group%2010720-1vi6ze7ydnZpPXaN26jGDjF6Z1R2B2.svg"} height={32} width={32} alt="" className="absolute top-[50%] translate-y-[-50%] left-[-10px] hover:scale-110 transition-all cursor-pointer" />

                        </div>


                        <div className=" text-neutral-900 text-[40px] font-bold font-['Cabin'] leading-[48px]">
                            BOLT: Solana ecological ECS full-chain game engine
                        </div>

                        <div className=" text-neutral-900 text-base font-normal font-['Cabin'] leading-normal">BOLT is a full-chain game engine developed by the Magicblock team for the Solana ecosystem. This article is compiled from the speeches of the two founders of Magicblock at the Breakpoint 2023 event.
                        </div>
                        <div className="mt-[-25px] ">
                            <CustomButton text="Explore" type="primary" onClick={() => { }} width="190px" size="14px" />
                        </div>
                    </div>



                    <div className=" h-full">

                        <Column variant='news' title='new' buttonText='All Games' responsive className="mb-0 mt-10 lg:mt-0" onButtonClick={() => { }}
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


                </div>

                <div className="flex mb-10  w-full md:justify-between flex-col md:flex-row 
                ">
                    <ArticleCard
                        imageUrl={"https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/onchain/image%2069-e6l3TBzi8yI3Z3eEwSkNlRlO1VcRHS.png?height=360&width=720"}
                        title={"Redstone: a high-performance expansion solution for hosting full-chain games"}
                        tags={['Promotion', 'Platform', '2+']}
                    />
                    <ArticleCard
                        imageUrl={"https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/onchain/thumbnail-McHzr10Ru0augEYm4DkgfQS2fQ3DPQ.png?height=360&width=720"}
                        title={"A quick look at Sky Strife Season 0 update content"}
                        tags={['ONCHAIN-GAMES', 'update', '8+']}
                    />
                    <ArticleCard
                        imageUrl={"https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/onchain/thumbnail%20(1)-xVkomkQKgQOVnIPlD8jNspRQIWXdGQ.png?height=360&width=720"}
                        title={"Curio: Introducing the full-chain game engine Keystone"}
                        tags={['update', 'techno talks', '2+']}
                    />
                </div>

                <div className="flex mb-10 gap-x-5">
                    <SingleCard
                        name={'article'}
                        singleCardItemDetails={
                            [
                                {
                                    'variant': 'article',
                                    'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Frame%203184843-lvW7VjPWajYBlfUfol1CSdb5jGIBho.png?height=360&width=720",
                                    'title': 'The Strongest Argument for Crypto-Native Gaming',
                                    'description': "In the ever-evolving world of video games, staying ahead of the curve is not just about keeping your software updated; it's about immersing yourself in the heart of gaming culture",
                                    'details': 'February 24, 2024 at 10:50 AM',
                                    'tags': ['game', 'check'],
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
                                {
                                    'variant': 'article',
                                    'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Frame%203184843%20(2)-G8kMzAkSKf1U1W5Akzo3DhwgFS9ww9.png?height=360&width=720",
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
                        }
                        buttonText={'View More Articles'}
                        onButtonClick={() => {
                        }}
                    />
                </div>
                <div className="flex mb-10 gap-x-5">
                    <SingleCard
                        name={'video'}
                        singleCardItemDetails={
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
                        }
                        buttonText={'View More Videos'}
                        onButtonClick={() => {
                        }}
                    />
                </div>
                <div className="flex mb-10 gap-x-5">
                    <SingleCard
                        name={'event'}
                        singleCardItemDetails={
                            [
                                {
                                    'variant': 'event',
                                    'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/sdsadfdasfdas-2WG67OTCZhpMuTKA19b7yJ91khTlgw.png?height=360&width=720",
                                    'title': 'The Strongest Argument for Crypto-Native Gaming',
                                    'details': 'October 24th, 2023 - October 25th, 2023',
                                    'zone': "EST",
                                    'tags': ['online', 'playtest'],
                                    'onFirstButtonClick': () => {
                                    },
                                    'onSecondButtonClick': () => {
                                    },
                                },

                                {
                                    'variant': 'event',
                                    'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/thumbnail%20(2)-bOEjitwjBCCiwscUyj71ma09XB1sRN.png?height=360&width=720",
                                    'title': 'Loot Survivor and the Emergence of Onchain Arcades',
                                    'details': 'October 24th, 2023 - October 25th, 2023',
                                    'zone': "EST",
                                    'tags': ['online', 'playtest'],
                                    'onFirstButtonClick': () => {
                                    },
                                    'onSecondButtonClick': () => {
                                    },
                                },
                            ]
                        }
                        buttonText={'View More Events'}
                        onButtonClick={() => {
                        }}
                    />
                </div>
            </div>
        </>
    );
};
