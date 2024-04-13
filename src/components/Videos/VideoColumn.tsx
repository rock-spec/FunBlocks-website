"use client"

import React, { useState } from "react";
import SingleCardItem, { SingleCardItemProps } from "../SingleCardItem/SingleCardItem";
import { CustomButton } from "../Button/Button";
import SearchInput from "../SearchInput/SearchInput";
import { IoIosArrowDown } from "react-icons/io";
import SingleVideoCardItem from "../SingleCard/SingleVideoCardItem";


export const VideoColumn = ({ data }: { data: any }) => {
    const [videoFilterData, setVideoFilterData] = useState(data)

    function filterVideo(searchString: string = "") {
        const videoArray: any[] = data
        if (!searchString.trim()) {
            return videoArray;
        }

        return videoArray.filter(video => {
            console.log(video);

            return (
                video?.gameid?.toLowerCase().includes(searchString.toLowerCase()) ||
                video?.videoid?.toLowerCase().includes(searchString.toLowerCase()) ||
                video?.video_name?.toLowerCase().includes(searchString.toLowerCase()) ||
                video?.video_summary?.toLowerCase().includes(searchString.toLowerCase()))
        })
    }

    const singleCardItemDetails: SingleCardItemProps[] =
        videoFilterData.map((video: any) =>
        (
            {
                key: video?.videoid,
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
        ))
    const handleSearch = (e: any) => {
        const val = e.target.value
        const updateData = filterVideo(val)
        setVideoFilterData(updateData)
    }


    return (
        <>
            <div className="lg:w-[895px]  w-full">
                <div className="flex flex-col lg:flex-row w-full mb-10">
                    <div className="h-[52px]">
                        <SearchInput varient="light" placeholder="Search for Keywords" onChange={handleSearch} />
                    </div>

                    {/* <CustomButton onClick={() => { }} size='13px' text='Category' height='42px' icon={<IoIosArrowDown />} />
                    <CustomButton onClick={() => { }} size='13px' text='Sort By' height='42px' icon={<IoIosArrowDown />} /> */}
                </div>
                <div className="flex mb-10 gap-x-5">


                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2  grid-rows-2 gap-4">
                            {singleCardItemDetails.map((detail, index) => (
                                <div className="p-5 border border-[#161616] bg-[#FFFCF9]">
                                    <SingleVideoCardItem key={index} {...detail} />
                                </div>
                            ))}

                        </div>
                        <div className="flex item-center w-full justify-center">
                            {/* <CustomButton text="Show More" onClick={() => { }} size="15px" width="240px" /> */}
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
};
