"use client"

import React, { useState } from "react";
import SingleCardItem, { SingleCardItemProps } from "../SingleCardItem/SingleCardItem";
import { CustomButton } from "../Button/Button";
import SearchInput from "../SearchInput/SearchInput";
import { IoIosArrowDown } from "react-icons/io";
import formatDate from "@/utils/dateFormat";




export const NewsColumn = ({ data }: { data: any }) => {

    const [newsFilterData, setNewsFilterData] = useState(data)

    function filterNewsArray(searchString: string): any[] {
        const newsArray: any[] = data
        // If searchString is empty, return the original newsArray
        if (!searchString.trim()) {
            return newsArray;
        }

        // Filter the newsArray based on the search string
        return newsArray.filter(news => {
            return (
                news?.newsid?.toLowerCase().includes(searchString.toLowerCase()) ||
                news?.game?.gameid?.toLowerCase().includes(searchString.toLowerCase()) ||
                news?.content?.title?.toLowerCase().includes(searchString.toLowerCase())
            );
        });
    }


    const singleCardItemDetails: SingleCardItemProps[] =

        newsFilterData?.map((news: any) =>
        (
            {
                'variant': 'news',
                'id': news.newsid,
                'imageUrl': `${news.content.image}?height=360&width=720`,
                'title': news.content.title,
                'description': news.content.description,
                'details': formatDate(news.content.publishdate),
                'tags': [news.content.game.gameid],
                'author': news.content.user.username,
                'onFirstButtonClick': () => {
                },
                'onSecondButtonClick': () => {
                },
            }
        )
        )

    const handleSearch = (e: any) => {
        const val = e.target.value
        const updateData = filterNewsArray(val)
        setNewsFilterData(updateData)
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

                    <div className="flex flex-col flex-1 items-start gap-5">
                        {singleCardItemDetails.map((detail, index) => (
                            <div className="p-5 border border-[#161616] bg-[#FFFCF9]">
                                <SingleCardItem key={index} {...detail} />
                            </div>
                        ))}
                        <div className="flex item-center w-full justify-center">
                            {/* <CustomButton text="Show More" onClick={() => { }} size="15px" width="240px" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
