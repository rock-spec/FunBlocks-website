import { ArticleColumn } from "@/components/Articles/ArticleColumn"
import { Column } from "@/components/Column/Column"
import React, { useState } from "react"
import { trpcServer } from "@/app/_trpc/trpcServer"
export const dynamic = "force-dynamic"
import { getTranslations } from "next-intl/server"
import { type Locale } from "@/i18n.config"

type FilterOptions = {
    query?: string
    categoryid?: string
    sort?: string
    locale: Locale
}

const Article = async ({
    params: { locale },
    searchParams,
}: {
    params: { locale: Locale }
    searchParams: any
}) => {
    const t = await getTranslations("Tags")
    const b = await getTranslations("Buttons")

    const filters: FilterOptions = {
        query: searchParams?.qry || "",
        categoryid: searchParams?.category || "",
        sort: searchParams?.sort || "",
        locale,
    }

    const { featuredGames, articles } = await trpcServer().articleData(filters)

    return (
        <div className="w-full max-w-[1200px] flex justify-between gap-x-5 lg:flex-row flex-col">
            {/* Main Column  */}
            <ArticleColumn data={articles} locale={locale} searchParams={searchParams} />

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
