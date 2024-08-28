"use client"

import React, { useEffect, useState } from "react"
import SingleCardItem, { SingleCardItemProps } from "../SingleCardItem/SingleCardItem"
import CustomDropDown from "../DropDown/DropDown"
import SearchInput from "../SearchInput/SearchInput"
import formatDate from "@/utils/dateFormat"
import { useTranslations } from "next-intl"
import { type Locale } from "@/i18n.config"
import { trpc } from "@/app/_trpc/client"

export const ArticleColumn = ({
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

    const [articles, setArticles] = useState(data)
    const [category, setCategory] = useState<string[]>([])

    const fetchData = trpc.fetchCategories.useQuery()
    const fetchedCategories = fetchData?.data

    const sortOptions = [{ name: "date", value: "date" }]

    useEffect(() => {
        setArticles(data)
    }, [data])

    const singleCardItemDetails: SingleCardItemProps[] = articles?.map((article: any) => ({
        variant: "article",
        id: article?.articleid,
        imageUrl: `${article?.content?.image}?height=360&width=720`,
        title: article?.content?.[`title_${locale}`] || article?.content?.title_en,
        description: article?.content?.[`description_${locale}`] || article?.content?.description_en,
        details: formatDate(article?.publishdate),
        tags: [
            ...(article?.games?.map((game: any) => game?.gameid) || []),
            article?.content?.engineid,
            article?.category?.name,
        ].filter(Boolean),
        author: article?.content?.author?.name,
        onFirstButtonClick: () => {},
        onSecondButtonClick: () => {},
    }))

    return (
        <>
            <div className="lg:w-[895px]  w-full">
                <div className="flex flex-col lg:flex-row w-[880px] mb-10 gap-x-4 ">
                    <div className=" w-full">
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
                    <div className="flex flex-col flex-1 items-start gap-5">
                        {singleCardItemDetails?.length > 0 ? (
                            singleCardItemDetails?.map((detail, index) => (
                                <div
                                    key={index}
                                    className="p-5 border border-[#161616] bg-[#FFFCF9]   w-full lg:w-[55rem]"
                                >
                                    <SingleCardItem key={index} {...detail} />
                                </div>
                            ))
                        ) : (
                            <div className="border">No articles found.</div>
                        )}
                        {/* <div className="flex item-center w-full justify-center">
                            <CustomButton text="Show More" onClick={() => { }} size="15px" width="240px" />
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}
