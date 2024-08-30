import { trpcServer } from "@/app/_trpc/trpcServer"
import { ArticleDetailsColumn } from "@/components/Articles/ArticleDetailsColumn"
import { Column } from "@/components/Column/Column"
import { EventDetailsColumn } from "@/components/Events/EventDetailsColumn"
import React from "react"
export const dynamic = "force-dynamic"
import { getTranslations } from "next-intl/server"
import { Locale } from "@/i18n.config"

const EventDetails = async ({ params }: { params: { id: string; locale: Locale } }) => {
    const { id, locale } = params

    const t = await getTranslations("Tags")
    const n = await getTranslations("Navbar")

    const data = await trpcServer().eventDetailsData({ id, locale })
    const games = data?.relatedData?.relatedGames || []
    const news = data?.relatedData?.relatedNews || []

    return (
        <div className="w-full max-w-[1200px] flex lg:flex-row flex-col justify-between gap-x-5">
            {/* Main Column  */}
            <EventDetailsColumn data={data} locale={locale} />
            {/* Right Column */}
            <div className="flex-col justify-items-start items-center h-fit ">
                <Column
                    variant="game"
                    responsive
                    title={t("relatedGames")}
                    onButtonClick={() => {}}
                    columnItems={games?.map((game) => ({
                        id: game.gameid,
                        variant: "game",
                        tags: [game.engineid, game.gamestudioid],
                        title: game.game_name,
                        imageUrl: game.pic,
                    }))}
                />
                {/* for space between them */}
                <div className="h-[24px] w-full"></div>
                {news?.length > 0 && (
                    <Column
                        variant="news"
                        responsive
                        title={n("news")}
                        onButtonClick={() => {}}
                        columnItems={news.map((news: any) => ({
                            id: news?.newsid,
                            variant: "news",
                            tags: [],
                            title: news?.content?.[`title_${locale}`],
                            imageUrl: news?.content?.image,
                        }))}
                    />
                )}
            </div>
        </div>
    )
}

export default EventDetails
