// "use client"

import React from "react"
import { Tag } from "../Tag/Tag"
import Image from "next/image"
import SingleCard from "../SingleCard/SingleCard"
import formatDate from "@/utils/dateFormat"
// import { getTranslations } from "next-intl/server"
import { useTranslations } from "next-intl"
import { Cabin } from "next/font/google"
import VideoPlayer from "./VideoPlayer"

const cabin = Cabin({
    subsets: ["latin"],
})

export const VideoDetailsColumn = ({ data }: { data: any }) => {
    const t = useTranslations("Tags")

    const video = data?.video
    const relatedData = data?.relatedData

    let relatedVideos: any[] = []
    if (relatedData?.relatedVideos?.status === "fulfilled") relatedVideos = relatedData?.relatedVideos?.value

    return (
        <>
            <div className="m-w-[895px] w-full">
                <div
                    className={`flex-col w-full mb-10 p-5 border border-[#161616] bg-[#FFFCF9] ${cabin.className}`}
                >
                    <div className={` text-neutral-900 text-[28px] font-bold  leading-[33.60px] mb-[12px] `}>
                        {video?.video_name}
                    </div>
                    <div className="flex gap-1 mb-[24px]">
                        {[video.gameid].map((tag, index) => (
                            <Tag text={tag} key={index} type={"relevance"} linkto="game" />
                        ))}
                        <div className="justify-start items-center gap-2 flex ml-2">
                            <div className="opacity-80 text-neutral-900 text-sm font-normal  leading-[16.80px] capitalize">
                                By {video?.author?.name}
                            </div>
                            <div className="w-[5px] h-[5px] opacity-80 bg-neutral-900" />
                            <div className="text-neutral-900 text-opacity-80 text-sm font-normal leading-[16.80px]">
                                {formatDate(video?.publishdate)}
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="w-full h-full">
                            <div style={{ position: "relative", width: "100%", height: "100%" }}>
                                <VideoPlayer videoUrl={video?.media_url} />
                                {/* <ReactPlayer width={"857px"} height={"487px"} url={video?.media_url} /> */}

                                {/* <iframe
                                    src={video?.media_url}
                                    title={video?.video_name}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                    style={{ top: 0, left: 0 }}
                                    className="lg:h-[487.44px] h-full w-full lg:w-[857.55px]"
                                ></iframe> */}
                            </div>
                        </div>
                    </div>

                    <div className=" text-neutral-900 text-xl font-semibold leading-[30px] mb-3 mt-4">
                        {t("videoSummary")}
                    </div>
                    <div className=" leading-6 tracking-[-0.32px]">{video?.summary}</div>
                </div>

                <div className="flex mb-10 gap-x-5">
                    <SingleCard
                        heading={t("featuredVideos")}
                        name={"videos"}
                        singleCardItemDetails={relatedVideos.map((video: any) => ({
                            variant: "video",
                            id: video?.videoid,
                            imageUrl: video?.media_url, //This is video url for video
                            title: video?.video_name,
                            description: video?.summary,
                            tags: [],
                            onFirstButtonClick: () => {},
                            onSecondButtonClick: () => {},
                        }))}
                        onButtonClick={() => {}}
                    />
                </div>
            </div>
        </>
    )
}
