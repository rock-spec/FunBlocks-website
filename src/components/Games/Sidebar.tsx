"use client"
import SidebarHeading from "../SidebarHeading/SidebarHeading"
import CustomCheckbox from "../Checkbox/Checkbox"
import { useEffect, useState } from "react"
import localFont from "next/font/local"
import Search from "./Search"
import { useTranslations } from "next-intl"
import { useRouter } from "next/navigation"

const OffBit = localFont({
    src: "../Button/font/OffBitTrial-Bold.otf",
    display: "swap",
})


const Sidebar = ({
    data,
    blockchainsList,
    gameStudiosList,
    enginesList,
}: {
    data: any
    blockchainsList: string[]
    gameStudiosList: string[]
    enginesList: string[]
}) => {
    const router = useRouter()
    // State to store all engines
    const [engines, setEngines] = useState<string[]>(enginesList)
    const [blockChains, setblockChains] = useState<string[]>(blockchainsList)
    const [gameStudio, setGameStudio] = useState<string[]>(gameStudiosList)

    // to store user selected engines(checkbox)
    const [selectedEngine, setSelectedEngine] = useState<string[]>([])
    const [selectedBlockChain, setSelectedBlockChain] = useState<string[]>([])
    const [selectedGameStudio, setSelectedGameStudio] = useState<string[]>([])

    const [showAllEngines, setShowAllEngines] = useState<boolean>(false)
    const [showAllGameStudios, setShowAllGameStudios] = useState<boolean>(false)
    const [showAllBlockChains, setShowAllBlockChains] = useState<boolean>(false)
    // toggle search
    const [ShowEngineSearch, setShowEngineSearch] = useState<boolean>(false)
    const [ShowBlockChainSearch, setShowBlockChainSearch] = useState<boolean>(false)
    const [ShowGameStudioSearch, setShowGameStudioSearch] = useState<boolean>(false)

    const [engineSearchInput, setEngineSearchInput] = useState<string>("")
    const [blockChainSearchInput, setblockChainSearchInput] = useState<string>("")
    const [gameStudioSearchInput, setGameStudioSearchInput] = useState<string>("")
    // store search filtered engines(search)
    const [FilteredEngines, setFilteredEngines] = useState<string[]>([])
    const [FilteredBlockChains, setFilteredBlockChains] = useState<string[]>([])
    const [FilteredGameStudios, setFilteredGameStudios] = useState<string[]>([])

    const itemsToShow = 4
    const displayedEngines = showAllEngines ? engines : engines.slice(0, itemsToShow)
    const remainingEnginesCount = showAllEngines ? 0 : Math.max(0, engines.length - itemsToShow)

    const displayedBlockChains = showAllBlockChains ? blockChains : blockChains.slice(0, itemsToShow)
    const remainingBlockChainsCount = showAllBlockChains ? 0 : Math.max(0, blockChains.length - itemsToShow)

    const displayedGameStudios = showAllGameStudios ? gameStudio : gameStudio.slice(0, itemsToShow)
    const remainingGameStudioCount = showAllGameStudios ? 0 : Math.max(0, gameStudio.length - itemsToShow)

    const m = useTranslations("Misc")
    const s = useTranslations("Search")

    useEffect(() => {
        router.push(
            `game?engine=${selectedEngine}&blockchain=${selectedBlockChain}&studio=${selectedGameStudio}`
        )
        router.refresh()
    }, [selectedEngine, selectedBlockChain, selectedGameStudio])

    return (
        <div className="h-full">
            <div className={`border border-black bg-floralWhite p-5 lg:w-[285px]  `}>
                {/* Engine ----------------------------------------------------------------------------------------------*/}
                <div className={`flex justify-between ${OffBit.className} font-bold text-lg`}>
                    <h3 className=" p-2 pb-1 bg-[#E0D7CE] uppercase">{m("filters")}</h3>
                    <button
                        className="text-blue-700 capitalize"
                        onClick={() => {
                            setSelectedBlockChain([])
                            setSelectedEngine([])
                            setSelectedGameStudio([])
                        }}
                    >
                        {m("clear all")}
                    </button>
                </div>
                <hr className="bg-[rgba(22, 22, 22, 0.20);] h-[2px] mt-1" />
                <div className="mt-4">
                    {!ShowEngineSearch ? (
                        <SidebarHeading
                            text={m("engine")}
                            onClick={() => setShowEngineSearch((prev) => !prev)}
                        />
                    ) : (
                        <Search
                            placeholder={s("blockchainSearch")}
                            onChange={async (e) => {
                                const val = e.target.value
                                setEngineSearchInput(val)
                                setFilteredEngines(
                                    engines.filter((engine) =>
                                        engine.toLowerCase().includes(val.toLowerCase())
                                    )
                                )
                            }}
                        />
                    )}
                </div>
                {(engineSearchInput.trim() ? FilteredEngines : displayedEngines).map((engine, i) => (
                    <CustomCheckbox
                        key={i}
                        text={engine}
                        setFunction={setSelectedEngine}
                        stateValue={selectedEngine}
                    />
                ))}
                {engineSearchInput.trim() ? (
                    ""
                ) : (
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
                )}

                {/* Blockchain ---------------------------------------------------------------- */}
                <hr className="bg-[rgba(22, 22, 22, 0.20);] h-[2px] mt-1" />
                <div className="my-4">
                    {!ShowBlockChainSearch ? (
                        <SidebarHeading
                            text={m("blockchain")}
                            onClick={() => setShowBlockChainSearch((prev) => !prev)}
                        />
                    ) : (
                        <Search
                            placeholder={s("blockchainSearch")}
                            onChange={async (e) => {
                                const val = e.target.value
                                setblockChainSearchInput(val)
                                setFilteredBlockChains(
                                    blockChains.filter((blockChain) =>
                                        blockChain.toLowerCase().includes(val.toLowerCase())
                                    )
                                )
                            }}
                        />
                    )}
                </div>
                {(blockChainSearchInput.trim() ? FilteredBlockChains : displayedBlockChains).map(
                    (chain, i) => (
                        <CustomCheckbox
                            key={i}
                            text={chain}
                            setFunction={setSelectedBlockChain}
                            stateValue={selectedBlockChain}
                        />
                    )
                )}
                {blockChainSearchInput.trim() ? (
                    ""
                ) : (
                    <p
                        className={`font-bold text-[#175BDB] my-5 cursor-pointer ${OffBit.className}`}
                        onClick={() => setShowAllBlockChains((prev) => !prev)}
                    >
                        {showAllBlockChains
                            ? m("showLess")
                            : remainingBlockChainsCount > 0
                            ? `+${remainingBlockChainsCount} ${m("more")}`
                            : ""}
                    </p>
                )}
                {/* GameStudio -------------------------------------------------------------------- */}
                <hr className="bg-[rgba(22, 22, 22, 0.20);] h-[2px] mt-4" />
                <div className="mt-4">
                    {!ShowGameStudioSearch ? (
                        <SidebarHeading
                            text={m("gameStudio")}
                            onClick={() => setShowGameStudioSearch((prev) => !prev)}
                        />
                    ) : (
                        <Search
                            placeholder={s("gameStudioSearch")}
                            onChange={async (e) => {
                                const val = e.target.value
                                setGameStudioSearchInput(val)
                                setFilteredGameStudios(
                                    gameStudio.filter((studio) =>
                                        studio.toLowerCase().includes(val.toLowerCase())
                                    )
                                )
                            }}
                        />
                    )}
                    {(gameStudioSearchInput.trim() ? FilteredGameStudios : displayedGameStudios).map(
                        (studio, i) => (
                            <CustomCheckbox
                                key={i}
                                text={studio}
                                setFunction={setSelectedGameStudio}
                                stateValue={selectedGameStudio}
                            />
                        )
                    )}
                </div>
                {gameStudioSearchInput.trim() ? (
                    ""
                ) : (
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
                )}
            </div>
        </div>
    )
}

export default Sidebar




// "use client"
// import SidebarHeading from "../SidebarHeading/SidebarHeading"
// import CustomCheckbox from "../Checkbox/Checkbox"
// import { useEffect, useState } from "react"
// import localFont from "next/font/local"
// import Search from "./Search"
// import { useTranslations } from "next-intl"
// import { useRouter } from "next/navigation"

// const OffBit = localFont({
//     src: "../Button/font/OffBitTrial-Bold.otf",
//     display: "swap",
// })

// type Engine = { engineid: string; logo: string };


// const Sidebar = ({
//     data,
//     blockchainsList,
//     gameStudiosList,
//     enginesList,
// }: {
//     data: any
//     blockchainsList: string[]
//     gameStudiosList: string[]
//     enginesList: Engine[]
// }) => {
//     const router = useRouter()
//     // State to store all engines
//     const [engines, setEngines] = useState<Engine[]>(enginesList)
//     const [blockChains, setblockChains] = useState<string[]>(blockchainsList)
//     const [gameStudio, setGameStudio] = useState<string[]>(gameStudiosList)

//     // to store user selected engines(checkbox)
//     const [selectedEngine, setSelectedEngine] = useState<string[]>([])
//     const [selectedBlockChain, setSelectedBlockChain] = useState<string[]>([])
//     const [selectedGameStudio, setSelectedGameStudio] = useState<string[]>([])

//     const [showAllEngines, setShowAllEngines] = useState<boolean>(false)
//     const [showAllGameStudios, setShowAllGameStudios] = useState<boolean>(false)
//     const [showAllBlockChains, setShowAllBlockChains] = useState<boolean>(false)
//     // toggle search
//     const [ShowEngineSearch, setShowEngineSearch] = useState<boolean>(false)
//     const [ShowBlockChainSearch, setShowBlockChainSearch] = useState<boolean>(false)
//     const [ShowGameStudioSearch, setShowGameStudioSearch] = useState<boolean>(false)

//     const [engineSearchInput, setEngineSearchInput] = useState<string>("")
//     const [blockChainSearchInput, setblockChainSearchInput] = useState<string>("")
//     const [gameStudioSearchInput, setGameStudioSearchInput] = useState<string>("")
//     // store search filtered engines(search)
//     const [FilteredEngines, setFilteredEngines] = useState<string[]>([])
//     const [FilteredBlockChains, setFilteredBlockChains] = useState<string[]>([])
//     const [FilteredGameStudios, setFilteredGameStudios] = useState<string[]>([])

//     const itemsToShow = 4
//     const displayedEngines = showAllEngines ? engines : engines.slice(0, itemsToShow)
//     const remainingEnginesCount = showAllEngines ? 0 : Math.max(0, engines.length - itemsToShow)

//     const displayedBlockChains = showAllBlockChains ? blockChains : blockChains.slice(0, itemsToShow)
//     const remainingBlockChainsCount = showAllBlockChains ? 0 : Math.max(0, blockChains.length - itemsToShow)

//     const displayedGameStudios = showAllGameStudios ? gameStudio : gameStudio.slice(0, itemsToShow)
//     const remainingGameStudioCount = showAllGameStudios ? 0 : Math.max(0, gameStudio.length - itemsToShow)

//     const m = useTranslations("Misc")
//     const s = useTranslations("Search")

//     useEffect(() => {
//         router.push(
//             `game?engine=${selectedEngine}&blockchain=${selectedBlockChain}&studio=${selectedGameStudio}`
//         )
//         router.refresh()
//     }, [selectedEngine, selectedBlockChain, selectedGameStudio])

//     return (
//         <div className="h-full">
//             <div className={`border border-black bg-floralWhite p-5 lg:w-[285px]  `}>
//                 {/* Engine ----------------------------------------------------------------------------------------------*/}
//                 <div className={`flex justify-between ${OffBit.className} font-bold text-lg`}>
//                     <h3 className=" p-2 pb-1 bg-[#E0D7CE] uppercase">{m("filters")}</h3>
//                     <button
//                         className="text-blue-700 capitalize"
//                         onClick={() => {
//                             setSelectedBlockChain([])
//                             setSelectedEngine([])
//                             setSelectedGameStudio([])
//                         }}
//                     >
//                         {m("clear all")}
//                     </button>
//                 </div>
//                 <hr className="bg-[rgba(22, 22, 22, 0.20);] h-[2px] mt-1" />
//                 <div className="mt-4">
//                     {!ShowEngineSearch ? (
//                         <SidebarHeading
//                             text={m("engine")}
//                             onClick={() => setShowEngineSearch((prev) => !prev)}
//                         />
//                     ) : (
//                         <Search
//                             placeholder={s("blockchainSearch")}
//                             onChange={async (e) => {
//                                 const val = e.target.value
//                                 setEngineSearchInput(val)
//                                 setFilteredEngines(
//                                     engines.filter((engine) =>
//                                         engine.toLowerCase().includes(val.toLowerCase())
//                                     )
//                                 )
//                             }}
//                         />
//                     )}
//                 </div>
//                 {(engineSearchInput.trim() ? FilteredEngines : displayedEngines).map((engine, i) => (
//                     <CustomCheckbox
//                         key={i}
//                         text={engine}
//                         setFunction={setSelectedEngine}
//                         stateValue={selectedEngine}
//                     />
//                 ))}
//                 {engineSearchInput.trim() ? (
//                     ""
//                 ) : (
//                     <p
//                         className={`font-bold text-[#175BDB] my-5 cursor-pointer ${OffBit.className}`}
//                         onClick={() => setShowAllEngines((prev) => !prev)}
//                     >
//                         {showAllEngines
//                             ? m("showLess")
//                             : remainingEnginesCount > 0
//                             ? `+${remainingEnginesCount} ${m("more")}`
//                             : ""}
//                     </p>
//                 )}

//                 {/* Blockchain ---------------------------------------------------------------- */}
//                 <hr className="bg-[rgba(22, 22, 22, 0.20);] h-[2px] mt-1" />
//                 <div className="my-4">
//                     {!ShowBlockChainSearch ? (
//                         <SidebarHeading
//                             text={m("blockchain")}
//                             onClick={() => setShowBlockChainSearch((prev) => !prev)}
//                         />
//                     ) : (
//                         <Search
//                             placeholder={s("blockchainSearch")}
//                             onChange={async (e) => {
//                                 const val = e.target.value
//                                 setblockChainSearchInput(val)
//                                 setFilteredBlockChains(
//                                     blockChains.filter((blockChain) =>
//                                         blockChain.toLowerCase().includes(val.toLowerCase())
//                                     )
//                                 )
//                             }}
//                         />
//                     )}
//                 </div>
//                 {(blockChainSearchInput.trim() ? FilteredBlockChains : displayedBlockChains).map(
//                     (chain, i) => (
//                         <CustomCheckbox
//                             key={i}
//                             text={chain}
//                             setFunction={setSelectedBlockChain}
//                             stateValue={selectedBlockChain}
//                         />
//                     )
//                 )}
//                 {blockChainSearchInput.trim() ? (
//                     ""
//                 ) : (
//                     <p
//                         className={`font-bold text-[#175BDB] my-5 cursor-pointer ${OffBit.className}`}
//                         onClick={() => setShowAllBlockChains((prev) => !prev)}
//                     >
//                         {showAllBlockChains
//                             ? m("showLess")
//                             : remainingBlockChainsCount > 0
//                             ? `+${remainingBlockChainsCount} ${m("more")}`
//                             : ""}
//                     </p>
//                 )}
//                 {/* GameStudio -------------------------------------------------------------------- */}
//                 <hr className="bg-[rgba(22, 22, 22, 0.20);] h-[2px] mt-4" />
//                 <div className="mt-4">
//                     {!ShowGameStudioSearch ? (
//                         <SidebarHeading
//                             text={m("gameStudio")}
//                             onClick={() => setShowGameStudioSearch((prev) => !prev)}
//                         />
//                     ) : (
//                         <Search
//                             placeholder={s("gameStudioSearch")}
//                             onChange={async (e) => {
//                                 const val = e.target.value
//                                 setGameStudioSearchInput(val)
//                                 setFilteredGameStudios(
//                                     gameStudio.filter((studio) =>
//                                         studio.toLowerCase().includes(val.toLowerCase())
//                                     )
//                                 )
//                             }}
//                         />
//                     )}
//                     {(gameStudioSearchInput.trim() ? FilteredGameStudios : displayedGameStudios).map(
//                         (studio, i) => (
//                             <CustomCheckbox
//                                 key={i}
//                                 text={studio}
//                                 setFunction={setSelectedGameStudio}
//                                 stateValue={selectedGameStudio}
//                             />
//                         )
//                     )}
//                 </div>
//                 {gameStudioSearchInput.trim() ? (
//                     ""
//                 ) : (
//                     <p
//                         className={`font-bold text-[#175BDB] my-5 cursor-pointer ${OffBit.className}`}
//                         onClick={() => setShowAllGameStudios((prev) => !prev)}
//                     >
//                         {showAllGameStudios
//                             ? m("showLess")
//                             : remainingGameStudioCount > 0
//                             ? `+${remainingGameStudioCount} ${m("more")}`
//                             : ""}
//                     </p>
//                 )}
//             </div>
//         </div>
//     )
// }

// export default Sidebar
