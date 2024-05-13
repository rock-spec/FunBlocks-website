"use client"

import React, { useEffect, useState } from "react"
import SingleCardItem, { SingleCardItemProps } from "../SingleCardItem/SingleCardItem"
import { CustomButton } from "../Button/Button"
import CustomDropDown from "../DropDown/DropDown.jsx"
import SearchInput from "../SearchInput/SearchInput"
import { IoIosArrowDown } from "react-icons/io"
import formatDate from "@/utils/dateFormat"

export const ArticleColumn = async ({ data }: { data: any }) => {

    const [articleFilterData, setArticlesFilterData] = useState(data)
    const [category, setCategory] = useState<string[]>([])

    function filterArticleArray(searchString: string): any[] {
        const articleArray: any[] = data
        // If searchString is empty, return the original newsArray
        if (!searchString.trim()) {
            return articleArray
        }

        // Filter the articleArray based on the search string
        return articleArray.filter((article) => {
            return (
                article?.articleid?.toLowerCase().includes(searchString.toLowerCase()) ||
                article?.game?.gameid?.toLowerCase().includes(searchString.toLowerCase()) ||
                article?.content?.title?.toLowerCase().includes(searchString.toLowerCase())
            )
        })
    }

    const singleCardItemDetails: SingleCardItemProps[] = articleFilterData?.map((article: any) => ({
        variant: "article",
        id: article.articleid,
        imageUrl: `${article.content.image}?height=360&width=720`,
        title: article.content.title,
        description: article.content.description,
        details: formatDate(article.content.publishdate),
        tags: [article.content.game.gameid],
        author: article.content.user.username,
        onFirstButtonClick: () => {},
        onSecondButtonClick: () => {},
    }))

    const handleSearch = (e: any) => {
        const val = e.target.value
        const updateData = filterArticleArray(val)
        setArticlesFilterData(updateData)
    }

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
                    <div className=" w-full">
                        <SearchInput
                            varient="light"
                            placeholder="Search for Keywords"
                            onChange={handleSearch}
                        />
                    </div>
                    <CustomDropDown text={"Category"} options={category} />
                    <CustomDropDown text={"Sort By"} />
                </div>
                <div className="flex mb-10 gap-x-5">
                    <div className="flex flex-col flex-1 items-start gap-5">
                        {singleCardItemDetails.map((detail, index) => (
                            <div className="p-5 border border-[#161616] bg-[#FFFCF9] w-full lg:w-[55rem]">
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
