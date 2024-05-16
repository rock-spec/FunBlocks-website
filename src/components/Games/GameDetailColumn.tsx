import React from "react"
import ArticleCard from "@/components/ArticleCard/ArticleCard"
import SingleCard from "@/components/SingleCard/SingleCard"
import { CustomButton } from "@/components/Button/Button"
import Image from "next/image"
import { Tag } from "@/components/Tag/Tag"
import { Column } from "../Column/Column"
import formatDate from "@/utils/dateFormat"
import { Cabin } from "next/font/google"
import BlueSmallButton from "../Button/BlueSmallButton"
const cabin = Cabin({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })

export const GameDetailColumn = async ({ data }: { data: any }) => {
    const game = data?.game[0]
    const relatedArticles = data?.relatedArticles
    const relatedVideos = data?.relatedVideos
    const relatedEvents = data?.relatedEvents

    return (
        <>
            <div className="m-w-[895px] w-full">
                <div className="h-fit-content items-stretch flex  mb-10 gap-x-5 ">
                    <div className="w-full p-5 bg-stone-50   border border-neutral-900  justify-end flex md:flex-row flex-col items-start gap-6  h-full">
                        {/* image container */}
                        <div className="relative md:w-[50%] w-full">
                            {/* main banner image  */}
                            <Image
                                src={game?.pic}
                                width={457}
                                height={337}
                                alt=""
                                className="rounded-md w-full"
                            />
                        </div>

                        <div className={"md:w-[50%] w-full " + cabin.className}>
                            <div className=" text-neutral-900 text-[28px] font-bold leading-[48px] ">
                                {game?.game_name}
                            </div>

                            <div className=" text-neutral-900 text-base font-normal">{game?.game_desc}</div>
                            <div className="mt-8">
                                <BlueSmallButton
                                    text={"Play Now"}
                                    link={"#"}
                                    width="w-[132px]"
                                    bg={"bg-[url('/buttons/play_now.svg')]"}
                                    bg_hover={"hover:bg-[url('/buttons/play_now_hover.svg')]"}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex mb-10 gap-x-5">
                    <SingleCard
                        name={"article"}
                        heading="related articles"
                        singleCardItemDetails={relatedArticles?.map((article: any) => ({
                            id: article.articleid,
                            variant: "article",
                            imageUrl: `${article.content.image}?height=360&width=720`,
                            title: article.content.title,
                            description: article.content.description,
                            details: formatDate(article.content.publishdate),
                            tags: [article.content.game.gameid],
                            author: article.content.user.username,
                            onFirstButtonClick: () => {},
                            onSecondButtonClick: () => {},
                        }))}
                        buttonText={"View More Articles"}
                        onButtonClick={() => {}}
                    />
                </div>
                <div className="flex mb-10 gap-x-5">
                    <SingleCard
                        heading="related videos"
                        name={"video"}
                        singleCardItemDetails={relatedVideos?.map((video: any) => ({
                            variant: "video",
                            id: video.videoid,
                            imageUrl: video.media_url, //This is video url for video
                            title: video.video_name,
                            description: video.summary,
                            tags: [],
                            onFirstButtonClick: () => {},
                            onSecondButtonClick: () => {},
                        }))}
                        buttonText={"View More Videos"}
                        onButtonClick={() => {}}
                    />
                </div>
                <div className="flex mb-10 gap-x-5">
                    <SingleCard
                        name={"event"}
                        heading="related events"
                        singleCardItemDetails={relatedEvents?.map((event: any) => ({
                            url: event?.joinurl,
                            id: event.eventid,
                            variant: "event",
                            imageUrl: `${event.pic}?height=360&width=720`,
                            title: event.title,
                            details: `${formatDate(event.startdate)} - ${formatDate(event.enddate)}`,
                            // 'zone': "EST",
                            tags: [event?.game?.gameid],
                            onFirstButtonClick: () => {},
                            onSecondButtonClick: () => {},
                        }))}
                        buttonText={"View More Events"}
                        onButtonClick={() => {}}
                    />
                </div>
            </div>
        </>
    )
}
