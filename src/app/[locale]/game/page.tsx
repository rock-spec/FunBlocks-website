import { GameColumn } from "@/components/Games/GameColumn"
import React, { useEffect, useState } from "react"
import { trpcServer } from "@/app/_trpc/trpcServer"
import Sidebar from "@/components/Games/Sidebar"
import { type Locale } from "@/i18n.config"
import CustomDropDown from "@/components/DropDown/DropDown"
import SearchInput from "@/components/SearchInput/SearchInput"
import { getTranslations } from "next-intl/server"

export const dynamic = "force-dynamic"

interface FilterOptions {
    blockchainIds?: string
    engineIds?: string
    gameStudioIds?: string
    query?: string
    sort?: string
    locale: Locale
}

const Game = async ({
    params: { locale },
    searchParams,
}: {
    params: { locale: Locale }
    searchParams: any
}) => {
    const b = await getTranslations("Buttons")
    const s = await getTranslations("Search")

    const sortOptions = [{ name: "A-Z" }, { name: "Z-A" }]

    // Fetching game data using trpc
    const filters: FilterOptions = {
        blockchainIds: searchParams?.blockchain || "",
        engineIds: searchParams?.engine || "",
        gameStudioIds: searchParams?.studio || "",
        query: searchParams?.qry || "",
        sort: searchParams?.sort || "",
        locale: locale,
    }
    

    // Parallel fetching of data using Promise.allSettled
    const [gameDataResult, blockchainsResult, gameStudiosResult, enginesResult] = await Promise.allSettled([
        trpcServer().gameData(filters),
        trpcServer().blockchains(),
        trpcServer().gameStudios(),
        trpcServer().engines(),
    ])

    // Extract data from results
    const gameData = gameDataResult.status === "fulfilled" ? gameDataResult.value : null
    const blockchains = blockchainsResult.status === "fulfilled" ? blockchainsResult.value : null
    const gameStudios = gameStudiosResult.status === "fulfilled" ? gameStudiosResult.value : null
    const engines = enginesResult.status === "fulfilled" ? enginesResult.value : null

    // Error handling for data fetching
    if (!gameData || !blockchains || !gameStudios || !engines) {
        return <div>Error loading data</div>
    }

    const blockchainsList = blockchains.map((bc: any) => bc.blockchainid)
    const gameStudiosList = gameStudios.map((gs: any) => gs.gamestudioid)
    const enginesList = engines.map((en: any) => en.engineid)

    return (
        <div className="w-full max-w-[1200px] flex flex-col md:flex-row justify-between gap-x-5">
            <Sidebar
                blockchainsList={blockchainsList}
                gameStudiosList={gameStudiosList}
                enginesList={enginesList}
                data={gameData.game}
                searchParams={searchParams}
            />
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
                    {/* <CustomDropDown text={b("sortBy")} options={sortOptions} txt_px="px-8" searchParams={searchParams}/> */}
                </div>
                <GameColumn data={gameData?.game} />
            </div>
        </div>
    )
}

export default Game
