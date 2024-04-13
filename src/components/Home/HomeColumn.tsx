

import React, { useEffect } from "react";
import ArticleCard from "@/components/ArticleCard/ArticleCard";
import SingleCard from "@/components/SingleCard/SingleCard";
import { CustomButton } from "@/components/Button/Button";
import Image from "next/image";
import { Tag } from "@/components/Tag/Tag";
import { Column } from "../Column/Column";
import CarousalHome from "../Carousel/CarousalHome";
import { trpc } from "@/app/_trpc/client";
import { Data } from "./Home";
import { AppRouter } from "@/trpc";
import { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import { inferReactQueryProcedureOptions } from "@trpc/react-query";
import formatDate from "@/utils/dateFormat";






// type RouterOutput = inferReactQueryProcedureOptions<AppRouter>



export const HomeColumn = ({ data }: { data: any }) => {

    return (
        <>
            <div className="w-full">
                <div className=" items-stretch flex mb-10 gap-x-5 lg:flex-row flex-col">


                    <CarousalHome data={data.articles.map((article: any) => ({
                        desc: `${article.content.game.gameid} is a full-chain game engine developed by the Magicblock team for the ${article.content.game.blockchainid} ecosystem. This article is compiled from the speeches of the two founders of Magicblock at the Breakpoint 2023 event.`,
                        id: article.articleid,
                        title: article.content.title,
                        mainImage: article.content.image,
                        starImage: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Tag-Swq9b5dkBzXvaPrsQFkgnAavhvTx5O.svg",
                        engineLogo: article.content.game.engine.pic,
                        engineName: article.content.game.engineid,
                    }))} />




                    <div className=" h-full">

                        <Column variant='news' title='new' buttonText='All Games' responsive className="mb-0 mt-10 lg:mt-0" onButtonClick={() => { }}
                            columnItems={

                                data.news.map((news: any) => ({
                                    id: news.newsid,
                                    variant: "news",
                                    tags: [news.content.game.gameid, news.content.game.engineid, news.content.game.gamestudioid, news.content.game.blockchainid],
                                    title: news.content.title,
                                    imageUrl: news.content.image
                                }))


                                //     [{
                                //     variant: 'news',
                                //     tags: ['research', '8+'],
                                //     title: "Engine Study latest game Gaul trial tutorial in best some data",
                                //     imageUrl: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/img-D0H0SclflrEB6cgpZAsw9opZFnQTM2.png"
                                // },
                                // {
                                //     variant: 'news',
                                //     tags: ['platform', '8+'],
                                //     title: "Engine Study latest game Gaul trial tutorial in best some data",
                                //     imageUrl: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/img-1-jnFQsgKXMUh8kqn5QXsqDSa01jPYnV.png"
                                // },
                                // {
                                //     variant: 'news',
                                //     tags: ['Devs', '2+', 'fps'],
                                //     title: "Engine Study latest game Gaul trial tutorial in best some data",
                                //     imageUrl: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Frame%203184808-YJgfVkazA6UUo3CS08ZV6wkSUtHSiK.png"
                                // },
                                // {
                                //     variant: 'news',
                                //     tags: ['guide', 'rpg', '4+'],
                                //     title: "Engine Study latest game Gaul trial tutorial in best some data",
                                //     imageUrl: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Frame%203184808-1-DNruw07TL6NjXBsNxgKh2GFFcE5GmF.png"
                                // },

                                // ]
                            }
                        />
                    </div>


                </div>

                <div className="flex mb-10  w-full md:justify-between flex-col md:flex-row 
                    ">

                    {
                        data.articles.slice(0, 3).map((articles: any) => (
                            <ArticleCard
                                id={articles.articleid}
                                key={articles.articleid} // Ensure to provide a unique key for each iterated element
                                imageUrl={articles.content.image}
                                title={articles.content.title}
                                tags={[articles.content.game.gameid]} // Assuming you want to display the gameid as a tag
                            />
                        ))
                    }

                    {/* <ArticleCard
                        id="id"
                        imageUrl={"https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/onchain/image%2069-e6l3TBzi8yI3Z3eEwSkNlRlO1VcRHS.png?height=360&width=720"}
                        title={"Redstone: a high-performance expansion solution for hosting full-chain games"}
                        tags={['Promotion', 'Platform', '2+']}
                    />
                    <ArticleCard
                        id="id"
                        imageUrl={"https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/onchain/thumbnail-McHzr10Ru0augEYm4DkgfQS2fQ3DPQ.png?height=360&width=720"}
                        title={"A quick look at Sky Strife Season 0 update content"}
                        tags={['ONCHAIN-GAMES', 'update', '8+']}
                    />
                    <ArticleCard
                        id="id"
                        imageUrl={"https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/onchain/thumbnail%20(1)-xVkomkQKgQOVnIPlD8jNspRQIWXdGQ.png?height=360&width=720"}
                        title={"Curio: Introducing the full-chain game engine Keystone"}
                        tags={['update', 'techno talks', '2+']}
                    /> */}
                </div>

                <div className="flex mb-10 gap-x-5">
                    <SingleCard
                        name={'article'}
                        singleCardItemDetails={

                            data.articles.slice(0, 3).map((article: any) =>
                            (
                                {
                                    'variant': 'article',
                                    'id': article.articleid,
                                    'imageUrl': `${article.content.image}?height=360&width=720`,
                                    'title': article.content.title,
                                    'description': article.content.description,
                                    'details': formatDate(article.content.publishdate),
                                    'tags': [article.content.game.gameid],
                                    'author': article.content.user.username,
                                    'onFirstButtonClick': () => {
                                    },
                                    'onSecondButtonClick': () => {
                                    },
                                }
                            )
                            )
                            // [
                            //     {
                            //         'variant': 'article',
                            //         'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Frame%203184843-lvW7VjPWajYBlfUfol1CSdb5jGIBho.png?height=360&width=720",
                            //         'title': 'The Strongest Argument for Crypto-Native Gaming',
                            //         'description': "In the ever-evolving world of video games, staying ahead of the curve is not just about keeping your software updated; it's about immersing yourself in the heart of gaming culture",
                            //         'details': 'February 24, 2024 at 10:50 AM',
                            //         'tags': ['game', 'check'],
                            //         'author': "Janson Will",
                            //         'onFirstButtonClick': () => {
                            //         },
                            //         'onSecondButtonClick': () => {
                            //         },
                            //     },

                            //     {
                            //         'variant': 'article',
                            //         'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Frame%203184843%20(1)-oGAvZEn2wnE2aa3MPruck6hoXfCowD.png?height=360&width=720",
                            //         'title': 'Introduction to the Autonomous World: THE CASE FOR AUTONOMOUS WORLDS',
                            //         'description': "In the ever-evolving world of video games, staying ahead of the curve is not just about keeping your software updated; it's about immersing yourself in the heart of gaming culture",
                            //         'details': 'February 24, 2024 at 10:50 AM',
                            //         'tags': ['game'],
                            //         'author': "Janson Will",
                            //         'onFirstButtonClick': () => {
                            //         },
                            //         'onSecondButtonClick': () => {
                            //         },
                            //     },
                            //     {
                            //         'variant': 'article',
                            //         'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Frame%203184843%20(2)-G8kMzAkSKf1U1W5Akzo3DhwgFS9ww9.png?height=360&width=720",
                            //         'title': 'Introduction to the Autonomous World: THE CASE FOR AUTONOMOUS WORLDS',
                            //         'description': "In the ever-evolving world of video games, staying ahead of the curve is not just about keeping your software updated; it's about immersing yourself in the heart of gaming culture",
                            //         'details': 'February 24, 2024 at 10:50 AM',
                            //         'tags': ['game'],
                            //         'author': "Janson Will",
                            //         'onFirstButtonClick': () => {
                            //         },
                            //         'onSecondButtonClick': () => {
                            //         },
                            //     },
                            //     {
                            //         'variant': 'article',
                            //         'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Frame%203184843%20(2)-G8kMzAkSKf1U1W5Akzo3DhwgFS9ww9.png?height=360&width=720",
                            //         'title': 'Introduction to the Autonomous World: THE CASE FOR AUTONOMOUS WORLDS',
                            //         'description': "In the ever-evolving world of video games, staying ahead of the curve is not just about keeping your software updated; it's about immersing yourself in the heart of gaming culture",
                            //         'details': 'February 24, 2024 at 10:50 AM',
                            //         'tags': ['game'],
                            //         'author': "Janson Will",
                            //         'onFirstButtonClick': () => {
                            //         },
                            //         'onSecondButtonClick': () => {
                            //         },
                            //     },
                            // ]
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
                            data.videos.slice(0, 4).map((video: any) =>
                            (
                                {
                                    'variant': 'video',
                                    "id": video.videoid,
                                    'imageUrl': video.media_url,//This is video url for video
                                    'title': video.video_name,
                                    'description': video.summary,
                                    'tags': [],
                                    'onFirstButtonClick': () => {
                                    },
                                    'onSecondButtonClick': () => {
                                    },
                                }
                            )
                            )

                            // [
                            //     {
                            //         'variant': 'video',
                            //         'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Frame%203184843%20(3)-5zWDNu18KhXQQBqMhnDkdenKizVhxY.png?height=360&width=720",
                            //         'title': 'The Strongest Argument for Crypto-Native Gaming',
                            //         'description': 'Loot Survivor[1] is the first game in the Realms Autonomous Worlds ecosystem. It was developed by Loothero[2], a senior member of Bibliotheca DAO, and uses a unique Play2Die mechanism. The game is inspired by the backstory and gameplay of the original Loot Project community [3], where players need to fight beasts, clear obstacles, collect equipment to survive, and compete for higher positions in the leaderboards.',
                            //         'tags': ['online', 'playtest'],
                            //         'onFirstButtonClick': () => {
                            //         },
                            //         'onSecondButtonClick': () => {
                            //         },
                            //     },

                            //     {
                            //         'variant': 'video',
                            //         'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Frame%203184844-PONGpPl6WzeMR6Lzp6s4cwxzgGi1Lf.png?height=360&width=720",
                            //         'title': 'Loot Survivor and the Emergence of Onchain Arcade',
                            //         'description': 'Loot Survivor[1] is the first game in the Realms Autonomous Worlds ecosystem. It was developed by Loothero[2], a senior member of Bibliotheca DAO, and uses a unique Play2Die mechanism. The game is inspired by the backstory and gameplay of the original Loot Project community [3], where players need to fight beasts, clear obstacles, collect equipment to survive, and compete for higher positions in the leaderboards.',
                            //         'tags': ['online', 'playtest'],
                            //         'onFirstButtonClick': () => {
                            //         },
                            //         'onSecondButtonClick': () => {
                            //         },
                            //     },
                            //     {
                            //         'variant': 'video',
                            //         'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Frame%203184844-PONGpPl6WzeMR6Lzp6s4cwxzgGi1Lf.png?height=360&width=720",
                            //         'title': 'Loot Survivor and the Emergence of Onchain Arcade',
                            //         'description': 'Loot Survivor[1] is the first game in the Realms Autonomous Worlds ecosystem. It was developed by Loothero[2], a senior member of Bibliotheca DAO, and uses a unique Play2Die mechanism. The game is inspired by the backstory and gameplay of the original Loot Project community [3], where players need to fight beasts, clear obstacles, collect equipment to survive, and compete for higher positions in the leaderboards.',
                            //         'tags': ['online', 'playtest'],
                            //         'onFirstButtonClick': () => {
                            //         },
                            //         'onSecondButtonClick': () => {
                            //         },
                            //     },
                            //     {
                            //         'variant': 'video',
                            //         'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Frame%203184844-PONGpPl6WzeMR6Lzp6s4cwxzgGi1Lf.png?height=360&width=720",
                            //         'title': 'Loot Survivor and the Emergence of Onchain Arcade',
                            //         'description': 'Loot Survivor[1] is the first game in the Realms Autonomous Worlds ecosystem. It was developed by Loothero[2], a senior member of Bibliotheca DAO, and uses a unique Play2Die mechanism. The game is inspired by the backstory and gameplay of the original Loot Project community [3], where players need to fight beasts, clear obstacles, collect equipment to survive, and compete for higher positions in the leaderboards.',
                            //         'tags': ['online', 'playtest'],
                            //         'onFirstButtonClick': () => {
                            //         },
                            //         'onSecondButtonClick': () => {
                            //         },
                            //     },
                            // ]
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
                            data.events.slice(0, 2).map((event: any) =>
                            (
                                {
                                    id: event.eventid,
                                    'variant': 'event',
                                    'imageUrl': `${event.pic}?height=360&width=720`,
                                    'title': event.title,
                                    'details': `${formatDate(event.startdate)} - ${formatDate(event.enddate)}`,
                                    // 'zone': "EST",
                                    'tags': [event.game.gameid],
                                    'onFirstButtonClick': () => {
                                    },
                                    'onSecondButtonClick': () => {
                                    },
                                }

                            )
                            )

                            // [
                            //     {
                            //         'variant': 'event',
                            //         'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/sdsadfdasfdas-2WG67OTCZhpMuTKA19b7yJ91khTlgw.png?height=360&width=720",
                            //         'title': 'The Strongest Argument for Crypto-Native Gaming',
                            //         'details': 'October 24th, 2023 - October 25th, 2023',
                            //         'zone': "EST",
                            //         'tags': ['online', 'playtest'],
                            //         'onFirstButtonClick': () => {
                            //         },
                            //         'onSecondButtonClick': () => {
                            //         },
                            //     },

                            //     {
                            //         'variant': 'event',
                            //         'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/thumbnail%20(2)-bOEjitwjBCCiwscUyj71ma09XB1sRN.png?height=360&width=720",
                            //         'title': 'Loot Survivor and the Emergence of Onchain Arcades',
                            //         'details': 'October 24th, 2023 - October 25th, 2023',
                            //         'zone': "EST",
                            //         'tags': ['online', 'playtest'],
                            //         'onFirstButtonClick': () => {
                            //         },
                            //         'onSecondButtonClick': () => {
                            //         },
                            //     },
                            // ]
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
