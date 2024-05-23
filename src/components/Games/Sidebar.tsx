"use client"

import SidebarHeading from "../SidebarHeading/SidebarHeading"
import CustomCheckbox from "../Checkbox/Checkbox"
import { useEffect, useState } from "react"
import localFont from "next/font/local"
import Search from "./Search"
import { useTranslations } from "next-intl"

const OffBit = localFont({
    src: "../Button/font/OffBitTrial-Bold.otf",
    display: "swap",
})

const Sidebar = ({ data }: { data: any }) => {
    const [engines, setEngines] = useState<string[]>([])
    const [blockChains, setblockChains] = useState<string[]>([])
    const [gameStudio, setGameStudio] = useState<string[]>([])

    const [selectedEngine, setSelectedEngine] = useState<string[]>([])
    const [selectedBlockChain, setSelectedBlockChain] = useState<string[]>([])
    const [selectedGameStudio, setSelectedGameStudio] = useState<string[]>([])

    const [showAllEngines, setShowAllEngines] = useState<boolean>(false)
    const [showAllGameStudios, setShowAllGameStudios] = useState<boolean>(false)

    const itemsToShow = 4
    const displayedEngines = showAllEngines ? engines : engines.slice(0, itemsToShow)
    const remainingEnginesCount = showAllEngines ? 0 : Math.max(0, engines.length - itemsToShow)
    const displayedGameStudios = showAllGameStudios ? gameStudio : gameStudio.slice(0, itemsToShow)
    const remainingGameStudioCount = showAllGameStudios ? 0 : Math.max(0, gameStudio.length - itemsToShow)

    const m = useTranslations("Misc")

    useEffect(() => {
        let uniqEng = new Set<string>()
        let uniqBlock = new Set<string>()
        let uniqGmStd = new Set<string>()

        data.forEach((game: { blockchainid: string; engineid: string; gamestudioid: string }) => {
            if (game.engineid) uniqEng.add(game.engineid)
            if (game.blockchainid) uniqBlock.add(game.blockchainid)
            if (game.gamestudioid) uniqGmStd.add(game.gamestudioid)
        })
        setEngines(Array.from(uniqEng))
        setblockChains(Array.from(uniqBlock))
        setGameStudio(Array.from(uniqGmStd))
    }, [data])

    return (
        <div className="h-full">
            <div className={`border border-black bg-floralWhite p-5 lg:w-[285px]  `}>
                <hr className="bg-[rgba(22, 22, 22, 0.20);] h-[2px] mt-1" />
                <SidebarHeading text={m("engine")} />
                {displayedEngines.map((engine, i) => (
                    <CustomCheckbox
                        key={i}
                        text={engine}
                        setFunction={setSelectedEngine}
                        stateValue={selectedEngine}
                    />
                ))}
                <p
                    className={`font-bold text-[#175BDB] my-5 cursor-pointer ${OffBit.className}`}
                    onClick={() => setShowAllEngines((prev) => !prev)}
                >
                    {showAllEngines
                        ? m("showLess")
                        : remainingEnginesCount > 0
                        ? `+${remainingEnginesCount} ${m("more")}`
                        : ""}
                </p>

                {/* ----- */}
                <hr className="bg-[rgba(22, 22, 22, 0.20);] h-[2px] mt-1" />
                <div className="my-4">
                    <Search
                        onChange={async (e) => {
                            const val = e.target.value
                        }}
                    />
                </div>
                {blockChains.map((blockchain, i) => (
                    <CustomCheckbox
                        key={i}
                        text={blockchain}
                        setFunction={setSelectedBlockChain}
                        stateValue={selectedBlockChain}
                    />
                ))}
                {/* ----- */}
                <hr className="bg-[rgba(22, 22, 22, 0.20);] h-[2px] mt-4" />
                <SidebarHeading text={m("gameStudio")} />
                {displayedGameStudios.map((studio, i) => (
                    <CustomCheckbox
                        key={i}
                        text={studio}
                        setFunction={setSelectedGameStudio}
                        stateValue={selectedGameStudio}
                    />
                ))}
                <p
                    className={`font-bold text-[#175BDB] my-5 cursor-pointer ${OffBit.className}`}
                    onClick={() => setShowAllGameStudios((prev) => !prev)}
                >
                    {showAllGameStudios
                        ? m("showLess")
                        : remainingGameStudioCount > 0
                        ? `+${remainingGameStudioCount} ${m("more")}`
                        : ""}
                </p>
            </div>
        </div>
    )
}

export default Sidebar
