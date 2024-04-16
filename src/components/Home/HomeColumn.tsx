

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

                        <Column variant='news' title='new' buttonText='All News' responsive className="mb-0 mt-10 lg:mt-0" onButtonClick={() => { }}
                            columnItems={
                                data.news.map((news: any) => ({
                                    id: news.newsid,
                                    variant: "news",
                                    tags: [news.content.game.gameid, news.content.game.engineid, news.content.game.gamestudioid, news.content.game.blockchainid],
                                    title: news.content.title,
                                    imageUrl: news.content.image
                                }))
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