import { ArticleColumn } from "@/components/Articles/ArticleColumn"
import { Column } from "@/components/Column/Column"
import React, { useState } from "react"
import { trpcServer } from "../_trpc/trpcServer"
export const dynamic = "force-dynamic"
import { getTranslations } from "next-intl/server"

const Article = async () => {
    const { featuredGames, articles } = await trpcServer().articleData()
    const t = await getTranslations("Tags")
    const b = await getTranslations("Buttons")

    return (
        <div className="w-full max-w-[1200px] flex justify-between gap-x-5 lg:flex-row flex-col">
            {/* Main Column  */}
            <ArticleColumn data={articles} />

            {/* Right Column */}
            <Column
                variant="game"
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

export default Article
