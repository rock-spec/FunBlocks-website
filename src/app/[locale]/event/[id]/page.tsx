// import { trpcServer } from '@/app/_trpc/trpcServer';
import { trpcServer } from "../../_trpc/trpcServer"
import { ArticleDetailsColumn } from "@/components/Articles/ArticleDetailsColumn"
import { Column } from "@/components/Column/Column"
import { EventDetailsColumn } from "@/components/Events/EventDetailsColumn"
import React from "react"
export const dynamic = "force-dynamic"
import { getTranslations } from "next-intl/server"

const EventDetails = async ({ params }: { params: { id: string } }) => {
    const id = params.id // Access the dynamic id parameter
    const data = await trpcServer().eventDetailsData(id)
    const games = data.relatedData.game
    const articles = data.relatedData.relatedArticles

    const t = await getTranslations("Tags")
    const n = await getTranslations("Navbar")

    return (
        <div className="w-full max-w-[1200px] flex lg:flex-row flex-col justify-between gap-x-5">
            {/* Main Column  */}
            <EventDetailsColumn data={data} />
            {/* Right Column */}
            <div className="flex-col justify-items-start items-center h-fit ">
                <Column
                    variant="game"
                    responsive
                    title={t("relatedGames")}
                    onButtonClick={() => {}}
                    columnItems={games.map((game) => ({
                        id: game.gameid,
                        variant: "game",
                        tags: [game.engineid, game.gamestudioid],
                        title: game.game_name,
                        imageUrl: game.pic,
                    }))}
                />
                {/* for space between them */}
                <div className="h-[24px] w-full"></div>
                <Column
                    variant="article"
                    responsive
                    title={n("articles")}
                    onButtonClick={() => {}}
                    columnItems={articles.map((article: any) => ({
                        id: article.articleid,
                        variant: "article",
                        tags: [],
                        title: article.content.title,
                        imageUrl: article.content.image,
                    }))}
                />
            </div>
        </div>
    )
}

export default EventDetails
