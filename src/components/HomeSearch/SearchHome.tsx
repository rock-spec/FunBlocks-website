"use cleint"

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
// import getfetchFeaturedArticles from "@/actions/articles/action"

export const dynamic = "force-dynamic"

const HomeSearch = ({ hidden, query }: { hidden?: boolean; query: string }) => {
    const t = useTranslations("Tags")

    const data = trpc.searchPage.useQuery(query) // Assuming query is the search term
    const featuredArticlesData = trpc.featuredArticles.useQuery()

    const finalData = data.data
    const featuredArticles = featuredArticlesData.data?.featuredArticles

    const articles = finalData?.articles
    const news = finalData?.news
    const videos = finalData?.videos
    const events = finalData?.events
    const games = finalData?.games

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

    return (
        <div className="">
            <TopBar />
            <div className="flex justify-between gap-x-5">
                {data.isFetched ? (
                    <div className="w-full max-w-[1000px] flex lg:flex-row flex-col justify-between gap-x-5">
                        {/* mainCoulumn  */}
                        <div className="m-w-[895px] w-full ">
                            {/* Related Articles Section  */}
                            <div>
                                <Tag
                                    type="section"
                                    text={`${
                                        articles?.filter((item) => item.content)?.length
                                    } Related Articles Found`}
                                />
                                <div className="flex mb-10 gap-x-5">
                                    {/* <div className="flex flex-col flex-1 min-w-full items-start gap-5 mt-5"> */}
                                    <div className="flex flex-col flex-1 min-w-full items-start gap-5 mt-5">
                                        {articles?.map(
                                            (article, index) =>
                                                article.content && (
                                                    <div
                                                        className="p-5 border min-w-full border-[#161616] bg-[#FFFCF9]"
                                                        key={index}
                                                    >
                                                        <SingleCardItem
                                                            key={index}
                                                            id={article?.articleid}
                                                            variant="article"
                                                            imageUrl={article?.content?.image}
                                                            title={article?.content?.title}
                                                            description={article?.content?.description}
                                                            details={article?.content?.publishdate}
                                                            tags={[article?.content?.gameid]}
                                                            author={article?.content?.user?.username}
                                                            onFirstButtonClick={() => {}}
                                                            onSecondButtonClick={() => {}}
                                                        />
                                                    </div>
                                                )
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Related Game Section  */}
                            <div>
                                <Tag type="section" text={`${games?.length} Related Games Found`} />
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

                            {/* Related Video Section  */}
                            <div>
                                <Tag type="section" text={`${videos?.length} Related Videos Found`} />
                                <div className="grid  md:grid-cols-2 grid-cols-1  gap-4 mt-5">
                                    {singleVideoCardItemDetails?.map((detail, index) => (
                                        <div className="p-5 border border-[#161616] bg-[#FFFCF9]">
                                            <SingleVideoCardItem key={index} {...detail} />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Related News Section */}
                            <div className="mt-10">
                                <Tag
                                    type="section"
                                    text={`${
                                        news?.filter((item) => item.content)?.length
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
                                                        title={news?.content?.title}
                                                        description={news?.content?.description}
                                                        details={formatDate(news?.content?.publishdate)}
                                                        tags={[news?.content?.game?.gameid]}
                                                        author={news?.content?.user?.username}
                                                        onFirstButtonClick={() => {}}
                                                        onSecondButtonClick={() => {}}
                                                    />
                                                </div>
                                            )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    "Searching Result...."
                )}
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
                                title: article?.content?.title,
                                imageUrl: article?.content?.image,
                            }))}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default HomeSearch
