"use client"

import { GameColumn } from "@/components/Games/GameColumn"
import { useEffect, useState } from "react"
import Sidebar from "@/components/Games/Sidebar"
import { type Locale } from "@/i18n.config"
import CustomDropDown from "@/components/DropDown/DropDown"
import SearchInput from "@/components/SearchInput/SearchInput"
import { trpc } from "@/app/_trpc/client"
import { useTranslations } from "next-intl"
import ShowMoreButton from "@/components/Button/ShowMoreButton"
import { text } from "stream/consumers"

export const dynamic = "force-dynamic"

interface FilterOptions {
    blockchainIds?: string
    engineIds?: string
    gameStudioIds?: string
    query?: string
    sort?: string
    network?: string
    locale: Locale
    page: number
    pageSize: number
}

const Game = ({ params: { locale }, searchParams }: { params: { locale: Locale }; searchParams: any }) => {
    const b = useTranslations("Buttons")
    const s = useTranslations("Search")
    const n = useTranslations("Navbar")

    const sortOptions = [{ name: b("date"), value: "date" }]
    const networkOptions = [
        { value: "mainnet", name: b("mainnet") },
        { value: "testnet", name: b("testnet") },
        { value: "all", name: n("all") },
    ]

    const [page, setPage] = useState(0)
    const pageSize = 9
    const [hasMore, setHasMore] = useState(true)

    const [gamesData, setGamesData] = useState<any[]>([])
    const [blockChainsArray, setBlockChainsArray] = useState<any[]>([])
    const [gameStudiosArray, setGameStudiosArray] = useState<any[]>([])
    const [enginesArray, setEnginesArray] = useState<any[]>([])

    // Fetching game data using trpc
    const filters: FilterOptions = {
        blockchainIds: searchParams?.blockchain || "",
        engineIds: searchParams?.engine || "",
        gameStudioIds: searchParams?.studio || "",
        query: searchParams?.qry || "",
        network: searchParams?.network || "",
        sort: searchParams?.sort || "",
        locale: locale,
        page,
        pageSize,
    }

    const sidebarData = trpc.sidebarOptions.useQuery()

    useEffect(() => {
        if (sidebarData) {
            const { data } = sidebarData

            if (data) {
                const { blockchains, gameStudios, engines } = data
                setBlockChainsArray(blockchains?.status === "fulfilled" ? blockchains?.value : [])
                setGameStudiosArray(gameStudios?.status === "fulfilled" ? gameStudios?.value : [])
                setEnginesArray(engines?.status === "fulfilled" ? engines?.value : [])
            }
        }
    }, [sidebarData])

    const { data, isLoading, isError } = trpc.gameData.useQuery(filters)

    useEffect(() => {
        setPage(0)
    }, [searchParams])

    useEffect(() => {
        if (data) {
            const { games } = data
            if (games?.status === "fulfilled") {
                if (games?.value?.game?.length < pageSize) setHasMore(false)
                else setHasMore(true)
                if (page === 0) setGamesData([...games?.value?.game])
                else setGamesData((prev) => [...prev, ...games?.value?.game])
            }
        }
    }, [data])

    const loadMore = () => {
        setPage((prev) => prev + 1)
    }

    if (isLoading && page === 0) return <div>Loading...</div>
    if (isError) return <div>Error loading data</div>

    // Error handling for data fetching
    if (!gamesData || !blockChainsArray || !gameStudiosArray || !enginesArray) {
        return <div>Error loading data</div>
    }

    const blockchainsList = blockChainsArray.map((bc: any) => bc.blockchainid)
    const gameStudiosList = gameStudiosArray.map((gs: any) => gs.gamestudioid)
    const enginesList = enginesArray.map((en: any) => en.engineid)

    return (
        <>
            <div className="w-full max-w-[1200px] flex flex-col md:flex-row justify-between gap-x-5">
                {(enginesList.length > 0 || gameStudiosList.length > 0 || blockchainsList.length > 0) && (
                    <Sidebar
                        blockchainsList={blockchainsList}
                        gameStudiosList={gameStudiosList}
                        enginesList={enginesList}
                        searchParams={searchParams}
                    />
                )}
                {/* Main Column  */}
                <div>
                    <div className="flex justify-between items-center w-full mb-10 gap-x-4">
                        <div className=" w-full">
                            <SearchInput
                                varient="light"
                                placeholder={s("pageSearch")}
                                searchParams={searchParams}
                            />
                        </div>
                        <CustomDropDown
                            text={b("network")}
                            options={networkOptions}
                            item={"network"}
                            searchParams={searchParams}
                        />
                        <CustomDropDown
                            text={b("sortBy")}
                            options={sortOptions}
                            item={"sort"}
                            searchParams={searchParams}
                        />
                    </div>
                    <GameColumn data={gamesData} />
                </div>
            </div>

            {hasMore && (
                <div className="w-[880px] lg:ms-[305px] ">
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

export default Game
