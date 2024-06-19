import { Column } from "@/components/Column/Column"
import { VideoColumn } from "@/components/Videos/VideoColumn"
import React from "react"
import { trpcServer } from "@/app/_trpc/trpcServer"
import { getTranslations } from "next-intl/server"

export const dynamic = "force-dynamic"

type FilterOptions = {
    query?: string
    categoryid?: string
    sort?: string
}

const Video = async ({ searchParams }: { searchParams: any }) => {
    const t = await getTranslations("Tags")
    const b = await getTranslations("Buttons")

    const filters: FilterOptions = {
        query: searchParams?.qry || "",
        categoryid: searchParams?.category || "",
        sort: searchParams?.sort || "",
    }

    const { featuredGames, videos } = await trpcServer().videoData(filters)

    return (
        <div className="w-full max-w-[1200px] flex lg:flex-row flex-col justify-between gap-x-5">
            {/* Main Column  */}
            <VideoColumn data={videos} searchParams={searchParams} />

            {/* Right Column */}
            <Column
                variant="game"
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
    )
}

export default Video
