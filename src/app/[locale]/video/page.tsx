import { Column } from "@/components/Column/Column"
import { VideoColumn } from "@/components/Videos/VideoColumn"
import React from "react"
import { trpcServer } from "../_trpc/trpcServer"
import { getTranslations } from "next-intl/server"

export const dynamic = "force-dynamic"

const Video = async () => {
    const t = await getTranslations("Tags")
    const b = await getTranslations("Buttons")

    const { featuredGames, videos } = await trpcServer().videoData()

    return (
        <div className="w-full max-w-[1200px] flex lg:flex-row flex-col justify-between gap-x-5">
            {/* Main Column  */}
            <VideoColumn data={videos} />

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
