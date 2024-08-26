"use client"

import React, { useEffect, useState } from "react"
import FeaturedCard from "@/components/ArticleCard/FeaturedCard"
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

    // let latestNews: any[] = []
    // if (data?.latestNews?.status === "fulfilled") {
    //     latestNews = data.latestNews.value
    // }

    let featured: any[] = []
    if (data?.featured?.status === "fulfilled") {
        featured = data.featured.value
    }

    let articles: any[] = []
    if (data?.articles?.status === "fulfilled") {
        articles = data.articles.value
    }

    let videos: any[] = []
    if (data?.videos?.status === "fulfilled") {
        videos = data.videos.value
    }
    console.log(videos)

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
                    {loading ? (
                        <HomeCarousalSkelton />
                    ) : (
                        sliderData && <CarousalHome data={sliderData} locale={locale} />
                    )}

                    <div className="h-full">
                        <Column
                            variant="news"
                            title={n("news")}
                            buttonText={b("allNews")}
                            responsive
                            className="mb-0 mt-10 lg:mt-0"
                            onButtonClick={() => {}}
                            columnItems={featuredNews?.map((news: any) => ({
                                id: news.newsid,
                                variant: "news",
                                tags: [news?.content?.game?.gameid],
                                title: news?.content?.[`title_${locale}`] || news?.content?.title_en,
                                imageUrl: news.content.image,
                            }))}
                        />
                    </div>
                </div>

                {featured && featured.length > 0 && (
                    <div className="flex mb-10  w-full gap-7 flex-col md:flex-row">
                        {featured?.map((featured: any, index: number) => (
                            <FeaturedCard
                                id={featured?.featuredid}
                                key={featured?.featuredid} // Ensure to provide a unique key for each iterated element
                                imageUrl={featured?.image}
                                title={featured?.title}
                                url={featured?.url}
                                tags={[
                                    featured?.game?.game_name,
                                    featured?.game?.blockchainid,
                                    featured?.game?.gamestudioid,
                                ].filter(Boolean)}
                            />
                        ))}
                    </div>
                )}

                <div className="flex mb-10 gap-x-5 border-2 b">
                    <SingleCard
                        name={n("articles")}
                        singleCardItemDetails={articles?.map((article: any) => ({
                            variant: "article",
                            id: article?.articleid,
                            imageUrl: `${article?.content.image}?height=360&width=720`,
                            title:
                                article?.content[`title_${locale}`] ||
                                article?.content?.title_en ||
                                article?.content?.title_zh,
                            description:
                                article?.content[`description_${locale}`] || article?.content?.description_en,
                            details: formatDate(article?.publishdate),
                            // tags: [article?.content?.game?.gameid],
                            tags: [article?.games[0]?.gameid],
                            author: article?.content?.author?.name,
                            onFirstButtonClick: () => {},
                            onSecondButtonClick: () => {},
                        }))}
                        buttonText={b("viewMoreArticles")}
                        onButtonClick={() => {}}
                    />
                </div>
                {videos && videos.length > 0 && (
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
                )}
                <div className="flex mb-10 gap-x-5 ">
                    <SingleCard
                        name={n("events")}
                        singleCardItemDetails={events?.map((event: any) => ({
                            id: event?.eventid,
                            variant: "event",
                            imageUrl: `${event?.pic}?height=360&width=720`,
                            title: event?.[`title_${locale}`] || event?.title_en || event?.title_zh,
                            details: `${formatDate(event?.startdate)} - ${formatDate(event?.enddate)}`,
                            // 'zone': "EST",
                            joinurl: event?.joinurl,
                            tags: [event?.game?.gameid],
                            onFirstButtonClick: () => {},
                            onSecondButtonClick: () => {},
                            // url: event?.joinurl,
                            url: `/event/${event?.eventid}`,
                        }))}
                        buttonText={b("viewMoreEvents")}
                        onButtonClick={() => {}}
                    />
                </div>
            </div>
        </>
    )
}
