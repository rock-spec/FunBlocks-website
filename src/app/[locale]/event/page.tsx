"use client"

import { Column } from "@/components/Column/Column"
import { EventColumn } from "@/components/Events/EventColumn"
import { trpc } from "@/app/_trpc/client"
import { useTranslations } from "next-intl"
import ShowMoreButton from "@/components/Button/ShowMoreButton"
import { useEffect, useState } from "react"
import { Locale } from "@/i18n.config"

export const dynamic = "force-dynamic"

type FilterOptions = {
    query?: string
    categoryid?: string
    sort?: string
    page: number
    pageSize: number
    type?: string
    status?: string
    locale: Locale
}

const Event = ({ params: { locale }, searchParams }: { params: { locale: Locale }; searchParams: any }) => {
    const t = useTranslations("Tags")
    const b = useTranslations("Buttons")

    const [page, setPage] = useState(0)
    const pageSize = 6
    const [events, setEvents] = useState<any[]>([])
    const [hasMore, setHasMore] = useState(true)
    const [featuredGames, setFeaturedGames] = useState<any[]>([])

    const filters: FilterOptions = {
        query: searchParams?.qry || "",
        categoryid: searchParams?.category || "",
        sort: searchParams?.sort || "",
        type: searchParams?.type || "",
        status: searchParams?.status || "",
        page,
        pageSize,
        locale,
    }

    const { data, isLoading, isError, error } = trpc.eventData.useQuery(filters)

    useEffect(() => {
        setPage(0)
    }, [searchParams])

    useEffect(() => {
        if (data) {
            if (data?.events?.length < pageSize) {
                setHasMore(false)
            }
            if (page === 0) setEvents([...data?.events])
            else setEvents((prev) => [...prev, ...data?.events])
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
            <div className="w-full max-w-[1200px]  flex lg:flex-row flex-col justify-between gap-x-5">
                {/* Main Column  */}
                <EventColumn data={events} searchParams={searchParams} locale={locale} />

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
                                logo: any
                            }) => ({
                                id: game?.gameid,
                                variant: "game",
                                tags: [game?.engineid, game?.gamestudioid, game?.blockchainid],
                                title: game?.game_name,
                                imageUrl: game?.logo,
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

export default Event
