"use client"

import { Column } from "@/components/Column/Column"
import { VideoColumn } from "@/components/Videos/VideoColumn"
import React, { useEffect, useState } from "react"
import { trpc } from "@/app/_trpc/client"
import { useTranslations } from "next-intl"
import ShowMoreButton from "@/components/Button/ShowMoreButton"
import { Locale } from "@/i18n.config"

export const dynamic = "force-dynamic"

type FilterOptions = {
    query?: string
    categoryid?: string
    sort?: string
    page: number
    pageSize: number
    locale: Locale
}

const Video = ({ searchParams, params: { locale } }: { searchParams: any; params: { locale: Locale } }) => {
    const t = useTranslations("Tags")
    const b = useTranslations("Buttons")

    const [page, setPage] = useState(0)
    const pageSize = 6
    const [videos, setVideos] = useState<any[]>([])
    const [hasMore, setHasMore] = useState(true)
    const [featuredGames, setFeaturedGames] = useState<any[]>([])

    const filters: FilterOptions = {
        query: searchParams?.qry || "",
        categoryid: searchParams?.category || "",
        sort: searchParams?.sort || "",
        page,
        pageSize,
        locale,
    }

    const { data, isLoading, isError } = trpc.videoData.useQuery(filters)

    useEffect(() => {
        setPage(0)
    }, [searchParams])

    useEffect(() => {
        if (data) {
            if (data?.videos?.length < pageSize) {
                setHasMore(false)
            }
            if (page === 0) setVideos([...data?.videos])
            else setVideos((prev) => [...prev, ...data?.videos])
            setFeaturedGames(data?.featuredGames || [])
        }
    }, [data])

    const loadMore = () => {
        setPage((prev) => prev + 1)
    }

    if (isLoading && page === 0) return <div>Loading...</div>
    if (isError) return <div>Error loading data</div>

    return (
        <>
            <div className="w-full max-w-[1200px] flex lg:flex-row flex-col justify-between gap-x-5 ">
                {/* Main Column  */}
                <VideoColumn data={videos} searchParams={searchParams} />

                {/* Right Column */}
                {featuredGames && featuredGames.length > 0 && (
                    <Column
                        variant="game"
                        responsive
                        title={t("featuredGames")}
                        buttonText={b("allGames")}
                        onButtonClick={() => {}}
                        columnItems={featuredGames?.map((game) => ({
                            id: game?.gameid,
                            variant: "game",
                            tags: [game?.engineid, game?.gamestudioid, game?.blockchainid],
                            title: game?.game_name,
                            imageUrl: game?.logo,
                        }))}
                    />
                )}
            </div>

            {hasMore && (
                <div className="w-[880px]">
                    <ShowMoreButton
                        onClick={loadMore}
                        disabled={isLoading}
                        text={isLoading ? "Loading..." : "Show More"}
                    />
                </div>
            )}
        </>
    )
}

export default Video
