"use client"

import React, { useEffect, useState } from "react"
import SingleCardItem, { SingleCardItemProps } from "../SingleCardItem/SingleCardItem"
import SearchInput from "../SearchInput/SearchInput"
import SingleVideoCardItem from "../SingleCard/SingleVideoCardItem"
import { useTranslations } from "next-intl"
import CustomDropDown from "../DropDown/DropDown"
import { trpc } from "@/app/_trpc/client"

export const VideoColumn = ({ data }: { data: any }) => {
    const b = useTranslations("Buttons")
    const s = useTranslations("Search")

    const fetchData = trpc.fetchCategories.useQuery()
    const fetchedCategories = fetchData?.data

    const sortOptions = [{ name: "date" }]

    const [videoFilterData, setVideoFilterData] = useState(data)
    const [category, setCategory] = useState<string[]>([])

    function filterVideo(searchString: string = "") {
        const videoArray: any[] = data
        if (!searchString.trim()) {
            return videoArray
        }

        return videoArray.filter((video) => {
            return (
                video?.gameid?.toLowerCase().includes(searchString.toLowerCase()) ||
                video?.videoid?.toLowerCase().includes(searchString.toLowerCase()) ||
                video?.video_name?.toLowerCase().includes(searchString.toLowerCase()) ||
                video?.video_summary?.toLowerCase().includes(searchString.toLowerCase())
            )
        })
    }

    const singleCardItemDetails: any[] = videoFilterData.map((video: any) => ({
        key: video?.videoid,
        variant: "video",
        id: video.videoid,
        imageUrl: video.media_url, //This is video url for video
        title: video.video_name,
        description: video.summary,
        tags: [],
        gameid: video.gameid,
        date: video.publishdate,
        author: video.author.name,
        onFirstButtonClick: () => {},
        onSecondButtonClick: () => {},
    }))

    const handleSearch = (e: any) => {
        const val = e.target.value
        const updateData = filterVideo(val)
        setVideoFilterData(updateData)
    }

    // useEffect(() => {
    //     let tmp: string[] = []
    //     data.forEach((news: { category: string }) => {
    //         if (news.category) tmp.push(news.category)
    //     })
    //     setCategory(tmp)
    // }, [data])

    return (
        <>
            <div className="lg:w-[895px]  w-full">
                <div className="flex flex-col lg:flex-row w-full mb-10 gap-x-4">
                    <div className=" w-full">
                        <SearchInput varient="light" placeholder={s("pageSearch")} onChange={handleSearch} />
                    </div>
                    <CustomDropDown text={b("category")} options={fetchedCategories} />
                    <CustomDropDown text={b("sortBy")} options={sortOptions} />
                </div>
                <div className="flex mb-10 gap-x-5">
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2  grid-rows-2 gap-4">
                            {singleCardItemDetails.map((detail, index) => (
                                <div className="p-5 border border-[#161616] bg-[#FFFCF9]" key={index}>
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
    )
}
