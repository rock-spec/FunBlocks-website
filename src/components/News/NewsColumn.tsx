"use client"

import React, { useEffect, useState } from "react"
import SingleCardItem, { SingleCardItemProps } from "../SingleCardItem/SingleCardItem"
import SearchInput from "../SearchInput/SearchInput"
import formatDate from "@/utils/dateFormat"
import CustomDropDown from "../DropDown/DropDown"
import { useTranslations } from "next-intl"
import { type Locale } from "@/i18n.config"
import { trpc } from "@/app/_trpc/client"

export const NewsColumn = ({
    data,
    locale,
    searchParams,
}: {
    data: any
    locale: Locale
    searchParams: any
}) => {
    const b = useTranslations("Buttons")
    const s = useTranslations("Search")

    const fetchData = trpc.fetchCategories.useQuery()
    const fetchedCategories = fetchData?.data

    const [category, setCategory] = useState<any[]>([])
    const [newsFilterData, setNewsFilterData] = useState(data)
    const [news, setNews] = useState(data)

    const sortOptions = [{ name: "date", value: "date" }]

    const singleCardItemDetails: SingleCardItemProps[] = news?.map((news: any) => ({
        variant: "news",
        id: news?.newsid,
        imageUrl: `${news?.content.image}?height=360&width=720`,
        title: news?.content[`title_${locale}`] || news?.content?.title_en,
        description: news?.content[`description_${locale}`] || news?.content?.description_en,
        details: formatDate(news?.publishdate),
        tags: [news?.content?.game?.gameid],
        author: news?.content?.author?.name || "",
        onFirstButtonClick: () => {},
        onSecondButtonClick: () => {},
    }))

    useEffect(() => {
        setNews(data)
    }, [data])

    return (
        <>
            <div className="lg:w-[895px]  w-full">
                <div className="flex flex-col lg:flex-row w-[880px] mb-10 gap-x-4 ">
                    <div className=" w-full">
                        {/* <SearchInput varient="light" placeholder={s("pageSearch")} onChange={handleSearch} /> */}
                        <SearchInput
                            varient="light"
                            placeholder={s("pageSearch")}
                            searchParams={searchParams}
                        />
                    </div>
                    <CustomDropDown
                        text={b("category")}
                        options={fetchedCategories}
                        item={"category"}
                        searchParams={searchParams}
                    />
                    <CustomDropDown
                        text={b("sortBy")}
                        options={sortOptions}
                        item={"sort"}
                        searchParams={searchParams}
                    />
                </div>
                <div className="flex mb-10 gap-x-5">
                    {singleCardItemDetails.length > 0 ? (
                        <div className="flex flex-col flex-1 items-start gap-5">
                            {singleCardItemDetails.map((detail, index) => (
                                <div
                                    key={index}
                                    className="p-5 border border-[#161616] bg-[#FFFCF9]   w-full lg:w-[55rem]"
                                >
                                    <SingleCardItem key={index} {...detail} />
                                </div>
                            ))}
                            <div className="flex item-center w-full justify-center">
                                {/* <CustomButton text="Show More" onClick={() => { }} size="15px" width="240px" /> */}
                            </div>
                        </div>
                    ) : (
                        <div className="border">No news found.</div>
                    )}
                </div>
            </div>
        </>
    )
}
