"use client"

import React, { useEffect, useState } from "react"
import ArticleCard from "@/components/ArticleCard/ArticleCard"
import SingleCard from "@/components/SingleCard/SingleCard"
import { Column } from "../Column/Column"
import CarousalHome from "../Carousel/CarousalHome"
import formatDate from "@/utils/dateFormat"
import SupabaseInstance from "../../../supabase"
import { Cabin } from "next/font/google"
import { useTranslations } from "next-intl"
import { type Locale } from "@/i18n.config"
import HomeCarousalSkelton from "../LoadingSkelton/HomeCarousalSkelton"

export const dynamic = "force-dynamic"

// type RouterOutput = inferReactQueryProcedureOptions<AppRouter>
const cabin = Cabin({
    subsets: ["latin"],
    weight: ["700", "400", "500", "600"],
})

export const HomeColumn = ({ data, locale }: { data: any; locale: Locale }) => {
    const b = useTranslations("Buttons")
    const n = useTranslations("Navbar")

    const supabase = SupabaseInstance.getSupabaseInstance()

    const [sliderData, setSliderData]: any[] = useState([])
    const [featuredData, setFeaturedData]: any[] = useState([])
    const [loading, setLoading] = useState<boolean>(true)

    const fetchData = async () => {
        setLoading(true)
        let { data: sliderData, error: sliderError } = await supabase.from("slider").select("*")
        if (sliderData) {
            setSliderData(sliderData)
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    let latestNews: any[] = []
    if (data?.latestNews?.status === "fulfilled") {
        latestNews = data.latestNews.value
    }

    let articles: any[] = []
    if (data?.articles?.status === "fulfilled") {
        articles = data.articles.value
    }

    let videos: any[] = []
    if (data?.videos?.status === "fulfilled") {
        videos = data.videos.value
    }

    let events: any[] = []
    if (data?.events?.status === "fulfilled") {
        events = data.events.value
    }

    let featuredNews: any[] = []
    if (data?.featuredNews?.status === "fulfilled") {
        featuredNews = data.featuredNews.value
    }
    
    return (
        <>
            <div className="w-full">
                <div className={`items-stretch flex mb-10 gap-x-5 lg:flex-row flex-col ${cabin.className}`}>
                    {loading ? <HomeCarousalSkelton /> : sliderData && <CarousalHome data={sliderData} />}

                    <div className=" h-full ">
                        <Column
                            variant="news"
                            title={n("news")}
                            buttonText={b("allNews")}
                            responsive
                            className="mb-0 mt-10 lg:mt-0"
                            onButtonClick={() => {}}
                            columnItems={latestNews?.map((news: any) => ({
                                id: news.newsid,
                                variant: "news",
                                tags: [
                                    news?.content?.game?.gameid,
                                    news?.content?.game?.engineid,
                                    news?.content?.game?.gamestudioid,
                                    news?.content?.game?.blockchainid,
                                ],
                                title: news.content[`title_${locale}`],
                                imageUrl: news.content.image,
                            }))}
                        />
                    </div>
                </div>

                <div
                    className="flex mb-10  w-full md:justify-between flex-col md:flex-row 
                    "
                >
                    {featuredNews?.length > 0 &&
                        featuredNews?.map((featured: any) => (
                            <ArticleCard
                                id={featured?.newsid}
                                key={featured?.newsid} // Ensure to provide a unique key for each iterated element
                                imageUrl={featured?.content?.image}
                                title={featured?.content?.[`title_${locale}`]}
                                tags={featured?.game?.length > 0 ? [featured?.game] : []} // Assuming you want to display the gameid as a tag
                            />
                        ))}
                </div>

                <div className="flex mb-10 gap-x-5">
                    <SingleCard
                        name={n("articles")}
                        singleCardItemDetails={articles?.map((article: any) => ({
                            variant: "article",
                            id: article?.articleid,
                            imageUrl: `${article?.content.image}?height=360&width=720`,
                            title: article?.content[`title_${locale}`],
                            description: article?.content[`description_${locale}`],
                            details: formatDate(article?.content.publishdate),
                            tags: [article?.content?.game?.gameid],
                            author: article?.content?.author?.name,
                            onFirstButtonClick: () => {},
                            onSecondButtonClick: () => {},
                        }))}
                        buttonText={b("viewMoreArticles")}
                        onButtonClick={() => {}}
                    />
                </div>
                <div className="flex mb-10 gap-x-5">
                    <SingleCard
                        name={n("videos")}
                        singleCardItemDetails={videos?.map((video: any) => ({
                            variant: "video",
                            id: video?.videoid,
                            imageUrl: video?.media_url, //This is video url for video
                            title: video?.video_name,
                            description: video?.summary,
                            tags: [],
                            onFirstButtonClick: () => {},
                            onSecondButtonClick: () => {},
                        }))}
                        buttonText={b("viewMoreVideos")}
                        onButtonClick={() => {}}
                    />
                </div>
                <div className="flex mb-10 gap-x-5 ">
                    <SingleCard
                        name={n("events")}
                        singleCardItemDetails={events?.map((event: any) => ({
                            id: event?.eventid,
                            variant: "event",
                            imageUrl: `${event?.pic}?height=360&width=720`,
                            title: event?.title,
                            details: `${formatDate(event?.startdate)} - ${formatDate(event?.enddate)}`,
                            // 'zone': "EST",
                            tags: [event?.game.gameid],
                            onFirstButtonClick: () => {},
                            onSecondButtonClick: () => {},
                            url: event?.joinurl,
                        }))}
                        buttonText={b("viewMoreEvents")}
                        onButtonClick={() => {}}
                    />
                </div>
            </div>
        </>
    )
}
