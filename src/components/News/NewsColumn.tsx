"use client"

import React, { useEffect, useState } from "react"
import SingleCardItem, { SingleCardItemProps } from "../SingleCardItem/SingleCardItem"
// import { CustomButton } from "../Button/Button"
import SearchInput from "../SearchInput/SearchInput"
// import { IoIosArrowDown } from "react-icons/io"
import formatDate from "@/utils/dateFormat"
import CustomDropDown from "../DropDown/DropDown"
import { useTranslations } from "next-intl"

export const NewsColumn = ({ data }: { data: any }) => {
    const [category, setCategory] = useState<string[]>([])
    const [newsFilterData, setNewsFilterData] = useState(data)

    const b = useTranslations("Buttons")
    const s = useTranslations("Search")

    function filterNewsArray(searchString: string): any[] {
        const newsArray: any[] = data
        // If searchString is empty, return the original newsArray
        if (!searchString.trim()) {
            return newsArray
        }

        // Filter the newsArray based on the search string
        return newsArray.filter((news) => {
            return (
                news?.newsid?.toLowerCase().includes(searchString.toLowerCase()) ||
                news?.game?.gameid?.toLowerCase().includes(searchString.toLowerCase()) ||
                news?.content?.title?.toLowerCase().includes(searchString.toLowerCase())
            )
        })
    }

    const singleCardItemDetails: SingleCardItemProps[] = newsFilterData?.map((news: any) => ({
        variant: "news",
        id: news.newsid,
        imageUrl: `${news.content.image}?height=360&width=720`,
        title: news.content.title,
        description: news.content.description,
        details: formatDate(news.content.publishdate),
        tags: [news.content.game.gameid],
        author: news.content.user.username,
        onFirstButtonClick: () => {},
        onSecondButtonClick: () => {},
    }))

    const handleSearch = (e: any) => {
        const val = e.target.value
        const updateData = filterNewsArray(val)
        setNewsFilterData(updateData)
    }

    //Creating options for category dropdown menu
    useEffect(() => {
        let tmp: string[] = []
        data.forEach((news: { category: string }) => {
            if (news.category) tmp.push(news.category)
        })
        setCategory(tmp)
    }, [data])

    return (
        <>
            <div className="lg:w-[895px]  w-full">
                <div className="flex flex-col lg:flex-row w-full mb-10 gap-x-4">
                    <div className="] w-full">
                        <SearchInput varient="light" placeholder={s("pageSearch")} onChange={handleSearch} />
                    </div>
                    <CustomDropDown text={b("category")} options={category} />
                    <CustomDropDown text={b("sortBy")} />
                </div>
                <div className="flex mb-10 gap-x-5">
                    <div className="flex flex-col flex-1 items-start gap-5">
                        {singleCardItemDetails.map((detail, index) => (
                            <div key={index} className="p-5 border border-[#161616] min-w-full bg-[#FFFCF9]">
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
    )
}
