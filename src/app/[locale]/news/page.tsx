import { Column } from "@/components/Column/Column"
import { NewsColumn } from "@/components/News/NewsColumn"
import React from "react"
import { trpcServer } from "@/app/_trpc/trpcServer"
import { getTranslations } from "next-intl/server"
import { type Locale } from "@/i18n.config"


export const dynamic = "force-dynamic"
const News = async ({ params: { locale } }: { params: { locale: Locale } }) => {
    const b = await getTranslations("Buttons")
    const t = await getTranslations("Tags")

    // const { featuredGames, news } = await trpcServer().newsData(locale)
    const data = await trpcServer().newsData(locale)

    let news: any[] = []
    if (data?.news?.status === "fulfilled") news = data?.news?.value

    let featuredGames: any[] = []
    if (data?.featuredGames?.status === "fulfilled") featuredGames = data?.featuredGames?.value

    return (
        <div className="w-full max-w-[1200px] flex flex-col lg:flex-row justify-between gap-x-5 ">
            {/* Main Column  */}
            <NewsColumn data={news} locale={locale} />

            {/* Right Column */}
            <Column
                variant="game"
                title={t("featuredGames")}
                buttonText={b("allGames")}
                responsive
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

export default News
