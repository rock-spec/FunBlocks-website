import React from "react";
import { Tag } from "../Tag/Tag";
import Image from "next/image";
import SingleCard from "../SingleCard/SingleCard";
import formatDate from "@/utils/dateFormat";




export const VideoDetailsColumn = async ({ data }: { data: any }) => {

    const video = data?.video

    return (
        <>
            <div className="m-w-[895px] w-full">
                <div className="flex-col w-full mb-10 p-5 border border-[#161616] bg-[#FFFCF9]">
                    <div className=" text-neutral-900 text-[28px] font-bold font-['Cabin'] leading-[33.60px] mb-[12px]">{video?.video_name}</div>
                    <div className="flex gap-1 mb-[24px]">
                        {[video.gameid].map((tag, index) => (
                            <Tag text={tag} key={index} type={'relevance'} />
                        ))}
                        <div className="justify-start items-center gap-2 flex ml-2">
                            <div className="opacity-80 text-neutral-900 text-sm font-normal font-['Cabin'] leading-[16.80px]">By {video?.user?.username}</div>
                            <div className="w-[5px] h-[5px] opacity-80 bg-neutral-900" />
                            <div className="text-neutral-900 text-opacity-80 text-sm font-normal font-['Cabin'] leading-[16.80px]">{formatDate(video?.publishdate)}</div>
                        </div>
                    </div>

                    <div className="relative">

                        <video width={487} height={857} controls preload="none" className='mb-[24px] w-[855.58px] object-cover' >
                            <source src={video?.media_url} type="video/mp4" />
                            {/* <track
                                src="/path/to/captions.vtt"
                                kind="subtitles"
                                srcLang="en"
                                label="English"
                            /> */}
                            Your browser does not support the video tag.
                        </video>
                        {/* <Image alt="banner" height={487.44} width={857.55} className="mb-[24px] w-[855.58px] " src="https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/image%2085-qSFSrtFKOzO7NDbmQMxRie60TTiBkn.png" />
                        <div className="hover:scale-110 transition-all cursor-pointer active:scale-95 absolute bottom-[50%] left-[50%] translate-x-[-50%] translate-y-[50%] ">

                            <Image
                                src="/play-button.svg"
                                alt="Play"
                                width={50}
                                height={50}
                            />
                        </div> */}
                    </div>


                    <div className=" text-neutral-900 text-xl font-semibold font-['Cabin'] leading-[30px] mb-[12px] mt-[24px]">Video Summary</div>
                    <div className=" text-neutral-900 text-base font-normal font-['Cabin'] leading-normal mb-[20.28px]">{video?.summary}</div>

                </div>

                <div className="flex mb-10 gap-x-5">
                    <SingleCard
                        heading="related videos"
                        name={'video'}
                        singleCardItemDetails={
                            data?.relatedData?.relatedVideos.map((video: any) =>
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
                        onButtonClick={() => {
                        }}
                    />

                </div>
            </div>
        </>
    );
};
