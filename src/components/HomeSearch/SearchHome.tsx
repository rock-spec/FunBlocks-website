"use client"

import { trpc } from "@/app/_trpc/client"
import GameCardComponet, { GameCardComponentProps } from "@/components/Games/GameCardComponet"
import SingleVideoCardItem from "@/components/SingleCard/SingleVideoCardItem"
import SingleCardItem, { SingleCardItemProps } from "@/components/SingleCardItem/SingleCardItem"
import { Tag } from "@/components/Tag/Tag"
import formatDate from "@/utils/dateFormat"
import { Inder } from "next/font/google"
import React, { useEffect, useState } from "react"
import TopBar from "./TopBar"
import { Column } from "../Column/Column"
import { useTranslations } from "next-intl"
import { type Locale } from "@/i18n.config"
import formatTimestamp from "@/utils/formatdateInoriginalForm"
import CustomDropDown from "../DropDown/DropDown"
// import getfetchFeaturedArticles from "@/actions/articles/action"
export const dynamic = "force-dynamic"

type filterOptions = {
    query?: string
    locale: Locale
    filter?: string
}

const HomeSearch = ({
    query,
    locale,
    searchParams,
}: {
    hidden?: boolean
    query: string
    locale: Locale
    searchParams: any
}) => {
    const t = useTranslations("Tags")
    const b = useTranslations("Buttons")

    const filters: filterOptions = {
        query: searchParams?.search || "",
        locale,
        filter: searchParams?.filter || "",
    }

    const data = trpc.searchPage.useQuery(filters)
    const featuredArticlesData = trpc.featuredArticles.useQuery(locale)

    const finalData = data.data
    const featuredArticles = featuredArticlesData.data?.featuredArticles

    const articles = finalData?.articles

    const news = finalData?.news
    const videos = finalData?.videos
    const events = finalData?.events
    const games = finalData?.games

    const [selectedSection, setSelectedSection] = useState("ALL")

    const singleGameCardItemDetails: any =
        games?.map((game: any) => ({
            game_id: game?.gameid,
            engine: game?.engineid,
            engine_logo: game?.engine?.logo,
            imageUrl: game?.pic,
            title: game?.game_name,
            description: null, //this is like game name : some data
            tags: [game?.engineid],
            onClick: () => {},
        })) || []

    const singleVideoCardItemDetails: SingleCardItemProps[] =
        videos?.map((video: any) => ({
            key: video?.videoid,
            variant: "video",
            id: video?.videoid,
            imageUrl: video?.media_url, //This is video url for video
            title: video?.video_name,
            description: video?.summary,
            tags: [],
            onFirstButtonClick: () => {},
            onSecondButtonClick: () => {},
        })) || []

    const singleeventCardItemDetails: any =
        events?.map((event: any) => ({
            // url: event?.joinurl,
            url: `/event/${event?.eventid}`,
            id: event?.eventid,
            variant: "event",
            imageUrl: `${event?.pic}?height=360&width=720`,
            title: event?.[`title_${locale}`],
            details: `${formatTimestamp(event?.startdate)} - ${formatTimestamp(event?.enddate)}`,
            timezone: event?.timezone?.split(":")[0],
            joinurl: event?.joinurl,
            tags: [event?.game?.gameid],
        })) || []

    const options = [
        { name: b("anytime"), value: "anytime" },
        { name: b("lastday"), value: "lastday" },
        { name: b("lastweek"), value: "lastweek" },
        { name: b("lastmonth"), value: "lastmonth" },
    ]

    return (
        <div className="flex justify-between gap-x-5">
            <div>
                <div className="flex justify-between items-center w-full mb-8">
                    <TopBar setSelectedSection={setSelectedSection} selectedSection={selectedSection} />
                    <div className="">
                        <CustomDropDown
                            text={b("filterbytime")}
                            options={options}
                            item={"appSearch"}
                            searchParams={searchParams}
                            btn_width="w-[180px]"
                        />
                    </div>
                </div>
                {data.isFetched ? (
                    <div className="w-full max-w-[1000px] flex lg:flex-row flex-col justify-between gap-x-5">
                        {/* mainCoulumn  */}
                        <div className="max-w-[890px] ">
                            {/* Related Articles Section  */}
                            {(selectedSection === "ALL" || selectedSection === "ARTICLES") && (
                                <div>
                                    <Tag
                                        type="searchResult"
                                        text={`${
                                            articles?.filter((item) => item.content)?.length || 0
                                        } Related Articles Found`}
                                    />
                                    <div className="flex mb-10 gap-x-5">
                                        {/* <div className="flex flex-col flex-1 min-w-full items-start gap-5 mt-5"> */}
                                        {articles && articles?.length > 0 && (
                                            <div className="flex flex-col flex-1 min-w-full items-start gap-5 mt-5">
                                                {articles?.map(
                                                    (article, index) =>
                                                        article?.content && (
                                                            <div
                                                                className="p-5 border min-w-full border-[#161616] bg-[#FFFCF9]"
                                                                key={index}
                                                            >
                                                                <SingleCardItem
                                                                    key={index}
                                                                    id={article?.articleid}
                                                                    variant="article"
                                                                    imageUrl={article?.content?.image}
                                                                    title={
                                                                        article?.content?.[`title_${locale}`]
                                                                    }
                                                                    description={
                                                                        article?.content?.[
                                                                            `description_${locale}`
                                                                        ]
                                                                    }
                                                                    details={formatDate(article?.publishdate)}
                                                                    tags={[article?.content?.game?.gameid]}
                                                                    author={article?.content?.author?.name}
                                                                    onFirstButtonClick={() => {}}
                                                                    onSecondButtonClick={() => {}}
                                                                />
                                                            </div>
                                                        )
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Related Game Section  */}
                            {(selectedSection === "ALL" || selectedSection === "GAMES") && (
                                <div>
                                    <Tag type="section" text={`${games?.length || 0} Related Games Found`} />
                                    <div className="flex mb-10 gap-x-5 mt-5">
                                        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                                            {singleGameCardItemDetails?.map(
                                                (detail: any, index: React.Key | null | undefined) => (
                                                    <div
                                                        className="p-5 border border-[#161616] bg-[#FFFCF9]"
                                                        key={index}
                                                    >
                                                        <GameCardComponet {...detail} />
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Related Video Section  */}
                            {(selectedSection === "ALL" || selectedSection === "VIDEOS") && (
                                <div>
                                    <Tag
                                        type="searchResult"
                                        text={`${videos?.length || 0} Related Videos Found`}
                                    />
                                    <div className="grid  md:grid-cols-2 grid-cols-1  gap-4 mt-5">
                                        {singleVideoCardItemDetails?.map((detail, index) => (
                                            <div
                                                className="p-5 border border-[#161616] bg-[#FFFCF9]"
                                                key={index}
                                            >
                                                <SingleVideoCardItem key={index} {...detail} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Related News Section */}
                            {(selectedSection === "ALL" || selectedSection === "NEWS") && (
                                <div className="mt-10">
                                    <Tag
                                        type="searchResult"
                                        text={`${
                                            news?.filter((item) => item.content)?.length || 0
                                        } Related News Found`}
                                    />
                                    <div className="flex flex-col flex-1 min-w-full items-start gap-5 mt-5">
                                        {news?.map(
                                            (news: any, index) =>
                                                news?.content && (
                                                    <div
                                                        key={index}
                                                        className="p-5 border min-w-full border-[#161616] bg-[#FFFCF9]"
                                                    >
                                                        <SingleCardItem
                                                            variant="news"
                                                            id={news?.newsid}
                                                            imageUrl={`${news?.content?.image}`}
                                                            title={news?.content?.[`title_${locale}`]}
                                                            description={
                                                                news?.content?.[`description_${locale}`]
                                                            }
                                                            details={formatDate(news?.publishdate)}
                                                            tags={[news?.content?.game?.gameid]}
                                                            author={news?.content?.author?.name || ""}
                                                            onFirstButtonClick={() => {}}
                                                            onSecondButtonClick={() => {}}
                                                        />
                                                    </div>
                                                )
                                        )}
                                    </div>
                                </div>
                            )}
                            {/* events section */}
                            {(selectedSection === "ALL" || selectedSection === "EVENTS") && (
                                <div className="mt-10">
                                    <Tag
                                        type="searchResult"
                                        text={`${events?.length || 0} Related events Found`}
                                    />
                                    <div className="flex mb-10 gap-x-5 mt-5">
                                        <div className="flex flex-col flex-1 items-start gap-5">
                                            {singleeventCardItemDetails.length > 0 &&
                                                singleeventCardItemDetails.map(
                                                    (
                                                        detail: React.JSX.IntrinsicAttributes &
                                                            SingleCardItemProps,
                                                        index: React.Key | null | undefined
                                                    ) => (
                                                        <div
                                                            key={index}
                                                            className="p-5 border border-[#161616] bg-[#FFFCF9]   w-full lg:w-[62.5rem] "
                                                        >
                                                            <SingleCardItem key={index} {...detail} />
                                                        </div>
                                                    )
                                                )}
                                            <div className="flex item-center w-full justify-center">
                                                {/* <CustomButton text="Show More" onClick={() => { }} size="15px" width="240px" /> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        {/* Events */}
                    </div>
                ) : (
                    <div className="min-w-[900px] w-full ">Searching Result....</div>
                )}
            </div>
            {featuredArticles && (
                <div className="ms-auto">
                    <Column
                        variant="search"
                        title={t("featuredArticles")}
                        responsive
                        onButtonClick={() => {}}
                        columnItems={featuredArticles?.map((article: any) => ({
                            id: article?.articleid,
                            variant: "article",
                            search: true,
                            title: article?.content?.[`title_${locale}`] || article?.content?.title_en,
                            imageUrl: article?.content?.image,
                        }))}
                    />
                </div>
            )}
        </div>
    )
}

export default HomeSearch
