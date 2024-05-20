import React from "react"
import { Tag } from "../Tag/Tag"
import Image from "next/image"
import SingleCard from "../SingleCard/SingleCard"
import formatDate from "@/utils/dateFormat"

import { useTranslations } from "next-intl"

export const VideoDetailsColumn = async ({ data }: { data: any }) => {
    const video = data?.video

    const t = useTranslations("Tags")

    return (
        <>
            <div className="m-w-[895px] w-full">
                <div className="flex-col w-full mb-10 p-5 border border-[#161616] bg-[#FFFCF9]">
                    <div className=" text-neutral-900 text-[28px] font-bold font-['Cabin'] leading-[33.60px] mb-[12px]">
                        {video?.video_name}
                    </div>
                    <div className="flex gap-1 mb-[24px]">
                        {[video.gameid].map((tag, index) => (
                            <Tag text={tag} key={index} type={"relevance"} linkto="game" />
                        ))}
                        <div className="justify-start items-center gap-2 flex ml-2">
                            <div className="opacity-80 text-neutral-900 text-sm font-normal font-['Cabin'] leading-[16.80px]">
                                By {video?.user?.username}
                            </div>
                            <div className="w-[5px] h-[5px] opacity-80 bg-neutral-900" />
                            <div className="text-neutral-900 text-opacity-80 text-sm font-normal font-['Cabin'] leading-[16.80px]">
                                {formatDate(video?.publishdate)}
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="w-full h-full">
                            <div style={{ position: "relative", width: "100%", height: "100%" }}>
                                <iframe
                                    src={video?.media_url}
                                    title={video?.video_name}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                    style={{ top: 0, left: 0 }}
                                    className="lg:h-[487.44px] h-full w-full lg:w-[857.55px]"
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    <div className=" text-neutral-900 text-xl font-semibold font-['Cabin'] leading-[30px] mb-[12px] mt-[24px]">
                        Video Summary
                    </div>
                    <div className=" text-neutral-900 text-base font-normal font-['Cabin'] leading-normal mb-[20.28px]">
                        {video?.summary}
                    </div>
                </div>

                <div className="flex mb-10 gap-x-5">
                    <SingleCard
                        heading={t("relatedVideos")}
                        name={"video"}
                        singleCardItemDetails={data?.relatedData?.relatedVideos.map((video: any) => ({
                            variant: "video",
                            id: video.videoid,
                            imageUrl: video.media_url, //This is video url for video
                            title: video.video_name,
                            description: video.summary,
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
