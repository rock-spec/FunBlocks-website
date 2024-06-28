"use client"

import { Column } from "@/components/Column/Column"
import { EngineColumn } from "@/components/Engine/EngineColumn"
import { trpc } from "@/app/_trpc/client"
import { useTranslations } from "next-intl"
import ShowMoreButton from "@/components/Button/ShowMoreButton"
import { useEffect, useState } from "react"

export const dynamic = "force-dynamic"

type FilterOptions = {
    query?: string
    categoryid?: string
    sort?: string
    page: number
    pageSize: number
}

const Engine = ({ searchParams }: { searchParams: any }) => {
    const t = useTranslations("Tags")
    const b = useTranslations("Buttons")

    const [page, setPage] = useState(0)
    const [pageSize, setPageSize] = useState(6)
    const [engines, setEngines] = useState<any[]>([])
    const [hasMore, setHasMore] = useState(true)
    const [featuredGames, setFeaturedGames] = useState<any[]>([])

    const filters: FilterOptions = {
        query: searchParams?.qry || "",
        categoryid: searchParams?.category || "",
        sort: searchParams?.sort || "",
        page,
        pageSize,
    }

    const { data, isLoading, isError } = trpc.engineData.useQuery(filters)

    console.log(data);
    
    useEffect(() => {
        setPage(0)
        setPageSize(6)
    }, [searchParams])

    useEffect(() => {
        if (data) {
            if (data?.engines?.length < pageSize) {
                setHasMore(false)
            } else {
                setHasMore(true)
            }
            if (page === 0) {
                setEngines([...data?.engines])
            } else {
                setEngines((prev) => [...prev, ...data?.engines])
            }
            setFeaturedGames(data?.featuredGames || [])
        }
    }, [data, page, pageSize])

    const loadMore = () => {
        setPage((prev) => prev + 1)
        setPageSize(3)
    }

    if (isLoading && page === 0) return <div>Loading...</div>
    if (isError) return <div>Error loading data</div>

    return (
        <>
            <div className="w-full max-w-[1200px] flex lg:flex-row flex-col justify-between gap-x-5">
                {/* Main Column  */}
                <EngineColumn data={engines} searchParams={searchParams} />

                {/* Right Column */}
                <Column
                    variant="game"
                    className="max-w-[895px]"
                    responsive
                    title={t("featuredGames")}
                    buttonText={b("allGames")}
                    onButtonClick={() => {}}
                    columnItems={featuredGames.map((game) => ({
                        id: game.gameid,
                        variant: "game",
                        tags: [game.engineid, game.gamestudioid, game.blockchainid],
                        title: game.game_name,
                        imageUrl: game.pic,
                    }))}
                />
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

export default Engine


// "use client"

// import { Column } from "@/components/Column/Column"
// import { EngineColumn } from "@/components/Engine/EngineColumn"
// import { trpc } from "@/app/_trpc/client"
// import { useTranslations } from "next-intl"
// import ShowMoreButton from "@/components/Button/ShowMoreButton"
// import { useEffect, useState } from "react"

// export const dynamic = "force-dynamic"

// type FilterOptions = {
//     query?: string
//     categoryid?: string
//     sort?: string
//     page: number
//     pageSize: number
// }

// const Engine = ({ searchParams }: { searchParams: any }) => {
//     const t = useTranslations("Tags")
//     const b = useTranslations("Buttons")

//     const [page, setPage] = useState(0)
//     const pageSize = 1
//     const [engines, setEngines] = useState<any[]>([])
//     const [hasMore, setHasMore] = useState(true)
//     const [featuredGames, setFeaturedGames] = useState<any[]>([])

//     const filters: FilterOptions = {
//         query: searchParams?.qry || "",
//         categoryid: searchParams?.category || "",
//         sort: searchParams?.sort || "",
//         page,
//         pageSize,
//     }

//     // const { featuredGames, engines } =  trpcServer().engineData(filters)
//     const { data, isLoading, isError } = trpc.engineData.useQuery(filters)

//     console.log(data);
    

//     useEffect(() => {
//         setPage(0)
//     }, [searchParams])

//     useEffect(() => {
//         if (data) {
//             if (data?.engines?.length < pageSize) {
//                 setHasMore(false)
//             }
//             if (page === 0) setEngines([...data?.engines])
//             else setEngines((prev) => [...prev, ...data?.engines])
//             setFeaturedGames(data?.featuredGames || [])
//         }
//     }, [data])

//     const loadMore = () => {
//         setPage((prev) => prev + 1)
//     }

//     if (isLoading && page === 0) return <div>Loading...</div>
//     if (isError) return <div>Error loading data</div>

//     return (
//         <>
//             <div className="w-full max-w-[1200px]  flex lg:flex-row flex-col justify-between gap-x-5">
//                 {/* Main Column  */}
//                 <EngineColumn data={engines} searchParams={searchParams} />

//                 {/* Right Column */}
//                 <Column
//                     variant="game"
//                     className="max-w-[895px]"
//                     responsive
//                     title={t("featuredGames")}
//                     buttonText={b("allGames")}
//                     onButtonClick={() => {}}
//                     columnItems={featuredGames.map((game) => ({
//                         id: game.gameid,
//                         variant: "game",
//                         tags: [game.engineid, game.gamestudioid, game.blockchainid],
//                         title: game.game_name,
//                         imageUrl: game.pic,
//                     }))}
//                 />
//             </div>
//             {hasMore && (
//                 <div className="w-[880px]">
//                     <ShowMoreButton
//                         onClick={loadMore}
//                         disabled={isLoading}
//                         text={isLoading ? "Loading..." : "Show More"}
//                     />
//                 </div>
//             )}
//         </>
//     )
// }

// export default Engine
