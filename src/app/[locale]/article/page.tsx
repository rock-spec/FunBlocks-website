"use client"

import { ArticleColumn } from "@/components/Articles/ArticleColumn"
import { Column } from "@/components/Column/Column"
import React, { useEffect, useState } from "react"
export const dynamic = "force-dynamic"
import { trpc } from "@/app/_trpc/client"
import { useTranslations } from "next-intl"
import ShowMoreButton from "@/components/Button/ShowMoreButton"
import { type Locale } from "@/i18n.config"

type FilterOptions = {
    query?: string
    categoryid?: string
    sort?: string
    locale: Locale
    page: number
    pageSize: number
}

const Article = ({ params: { locale }, searchParams }: { params: { locale: Locale }; searchParams: any }) => {
    const t = useTranslations("Tags")
    const b = useTranslations("Buttons")

    const [page, setPage] = useState(0)
    const pageSize = 6
    const [articles, setArticles] = useState<any[]>([])
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

    const { data, isLoading, isError } = trpc.articleData.useQuery(filters)

    useEffect(() => {
        setPage(0)
    }, [searchParams])

    useEffect(() => {
        if (data) {
            if (data?.articles?.length < pageSize) {
                setHasMore(false)
            }
            if (page === 0) setArticles([...data?.articles])
            else setArticles((prev) => [...prev, ...data?.articles])
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
            <div className="w-full max-w-[1200px] flex justify-between gap-x-5 lg:flex-row flex-col ">
                {/* Main Column  */}
                <ArticleColumn data={articles} locale={locale} searchParams={searchParams} />

                {/* Right Column */}
                {featuredGames && featuredGames.length > 0 && (
                    <Column
                        variant="game"
                        title={t("featuredGames")}
                        buttonText={b("allGames")}
                        onButtonClick={() => {}}
                        columnItems={featuredGames?.map(
                            (game: {
                                gameid: any
                                engineid: any
                                gamestudioid: any
                                blockchainid: any
                                game_name: any
                                pic: any
                            }) => ({
                                id: game.gameid,
                                variant: "game",
                                tags: [game.engineid, game.gamestudioid, game.blockchainid],
                                title: game.game_name,
                                imageUrl: game.pic,
                            })
                        )}
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

export default Article