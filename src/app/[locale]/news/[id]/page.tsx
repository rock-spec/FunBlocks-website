import { trpcServer } from "@/app/_trpc/trpcServer"
import { Column } from "@/components/Column/Column"
import { NewsDetailsColumn } from "@/components/News/NewsDetailsColumn"
import { VideoDetailsColumn } from "@/components/Videos/VideoDetailsColumn"
import React from "react"
import { getTranslations } from "next-intl/server"
import { type Locale } from "@/i18n.config"

export const dynamic = "force-dynamic"

const NewsDetails = async ({ params }: { params: { id: string; locale: Locale } }) => {
    const t = await getTranslations("Tags")
    const n = await getTranslations("Navbar")

    const id = params.id // Access the dynamic id parameter
    const locale = params.locale
    const data = await trpcServer().newsDetailsData({ id, locale })
    const relatedData = data?.relatedData

    let game: any[] = []
    if (relatedData?.game?.status === "fulfilled") game = relatedData?.game?.value

    let relatedNews: any[] = []
    if (relatedData?.relatedNews?.status === "fulfilled") {
        relatedNews = relatedData?.relatedNews?.value.filter((news: any) => news.newsid !== id)
    }

    return (
        <div className="w-full max-w-[1200px] flex lg:flex-row flex-col justify-between gap-x-5">
            {/* Main Column  */}
            <NewsDetailsColumn data={data} locale={locale} />

            {/* Right Column */}
            <div className="flex-col  justify-items-start items-center h-fit">
                <Column
                    variant="game"
                    title={t("relatedGames")}
                    responsive
                    onButtonClick={() => {}}
                    columnItems={game.map((game) => ({
                        id: game?.gameid,
                        variant: "game",
                        tags: [game?.engineid, game?.gamestudioid, game?.blockchainid],
                        title: game?.game_name,
                        imageUrl: game?.pic,
                    }))}
                />
                {/* for space between them */}
                <div className="h-[28px] w-full"></div>

                <Column
                    variant="news"
                    title={t("relatedNews")}
                    responsive
                    onButtonClick={() => {}}
                    columnItems={relatedNews.map((news: any) => ({
                        id: news?.newsid,
                        variant: "news",
                        tags: [],
                        title: news?.content?.[`title_${locale}`] || news?.content?.title_en,
                        imageUrl: news?.content?.image,
                    }))}
                />
            </div>
        </div>
    )
}

export default NewsDetails
