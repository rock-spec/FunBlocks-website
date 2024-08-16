"use client"

import { Column } from "@/components/Column/Column"
import { NewsColumn } from "@/components/News/NewsColumn"
import { useEffect, useState } from "react"
import { trpc } from "@/app/_trpc/client"
import { useTranslations } from "next-intl"
import { type Locale } from "@/i18n.config"
import ShowMoreButton from "@/components/Button/ShowMoreButton"

export const dynamic = "force-dynamic"

type FilterOptions = {
    query?: string
    categoryid?: string
    sort?: string
    locale: Locale
    page: number
    pageSize: number
}

const News = ({ params: { locale }, searchParams }: { params: { locale: Locale }; searchParams: any }) => {
    const b = useTranslations("Buttons")
    const t = useTranslations("Tags")

    const [page, setPage] = useState(0)
    const pageSize = 6
    const [news, setNews] = useState<any[]>([])
    const [hasMore, setHasMore] = useState(true)
    const [featuredGames, setFeaturedGames] = useState<any[]>([])

    const filters: FilterOptions = {
        query: searchParams?.qry || "",
        categoryid: searchParams?.category || "",
        sort: searchParams?.sort || "",
        locale,
        page,
        pageSize,
    }

    // const data = await trpcServer().newsData(filters)
    const { data, isLoading, isError } = trpc.newsData.useQuery(filters)

    useEffect(() => {
        setPage(0)
    }, [searchParams])

    useEffect(() => {
        if (data && data?.news?.status === "fulfilled") {
            if (data?.news?.value?.length < pageSize) {
                setHasMore(false)
            } else {
                setHasMore(true)
            }
            if (page === 0) setNews([...data.news.value])
            else
                setNews((prev) => (data?.news?.status === "fulfilled" ? [...prev, ...data.news.value] : prev))
            setFeaturedGames(data?.featuredGames.status === "fulfilled" ? data?.featuredGames.value : [])
        }
    }, [data])

    const loadMore = () => {
        setPage((prev) => prev + 1)
    }

    if (isLoading && page === 0) return <div>Loading...</div>
    if (isError) return <div>Error loading data</div>

    // const featuredGames = data?.featuredGames.status === "fulfilled" ? data?.featuredGames.value : []

    return (
        <>
            <div className="w-full max-w-[1200px] flex flex-col lg:flex-row justify-between gap-x-5 ">
                {/* Main Column  */}
                <NewsColumn data={news} locale={locale} searchParams={searchParams} />

                {/* Right Column */}
                {featuredGames && featuredGames?.length > 0 && (
                    <Column
                        variant="game"
                        title={t("featuredGames")}
                        buttonText={b("allGames")}
                        responsive
                        onButtonClick={() => {}}
                        columnItems={featuredGames.map((game) => ({
                            id: game.gameid,
                            variant: "game",
                            tags: [game.engineid, game.gamestudioid, game.blockchainid],
                            title: game.game_name,
                            imageUrl: game.logo,
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

export default News