'use client'

import React, { useEffect, useState } from "react";
import ArticleCard from "@/components/ArticleCard/ArticleCard";
import SingleCard from "@/components/SingleCard/SingleCard";
import { Column } from "../Column/Column";
import CarousalHome from "../Carousel/CarousalHome";
import formatDate from "@/utils/dateFormat";
import SupabaseInstance from "../../../supabase";

export const dynamic = 'force-dynamic'





// type RouterOutput = inferReactQueryProcedureOptions<AppRouter>



export const HomeColumn = ({ data }: { data: any }) => {

    const supabase = SupabaseInstance.getSupabaseInstance()

    const [sliderData, setSliderData]: any[] = useState([])
    const [featuredData, setFeaturedData]: any[] = useState([])

    const fetchData = async () => {

        let { data: featured, error } = await supabase
            .from('featured')
            .select('*')
        console.log("this is my data");
        if (featured) {
            setFeaturedData(featured)
        }


        let { data: sliderData, error: sliderError } = await supabase
            .from('slider')
            .select('*')
        console.log("this is my slider data");
        if (sliderData) {
            setSliderData(sliderData)
        }

        console.log(sliderData);


    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <div className="w-full">
                <div className=" items-stretch flex mb-10 gap-x-5 lg:flex-row flex-col">


                    {sliderData && <CarousalHome data={sliderData} />}




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
                        featuredData?.slice(0, 3).map((feature: any) => (
                            <ArticleCard
                                id={feature.featuredid}
                                key={feature.featuredid} // Ensure to provide a unique key for each iterated element
                                imageUrl={feature.image}
                                title={feature.title}
                                tags={[feature.gameid]} // Assuming you want to display the gameid as a tag
                            />
                        ))
                    }

                </div>

                <div className="flex mb-10 gap-x-5">
                    <SingleCard
                        name={'article'}
                        singleCardItemDetails={

                            data.articles.map((article: any) =>
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
                            data.videos.map((video: any) =>
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
                            data.events.map((event: any) =>
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
                                    url: event?.joinurl
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