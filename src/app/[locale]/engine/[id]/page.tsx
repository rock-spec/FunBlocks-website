import { trpcServer } from "@/app/_trpc/trpcServer"
import { Column } from "@/components/Column/Column"
import { EngineDetailColumn } from "@/components/Engine/EngineDetailColumn"
import { GameDetailColumn } from "@/components/Games/GameDetailColumn"
import React from "react"
import { getTranslations } from "next-intl/server"
import { Locale } from "@/i18n.config"

export const dynamic = "force-dynamic"

const EngineDetail = async ({ params }: { params: { id: string; locale: Locale } }) => {
    const id = params.id.replace(/%20/g, " ").toString()
    const locale = params.locale
    const data = await trpcServer().engineDetailsData({ id, locale })
    const relatedNews = data.relatedNews
    const relatedArticles = data.relatedArticles
    const engine = data.engines

    const t = await getTranslations("Tags")
    const n = await getTranslations("Navbar")

    return (
        <div className="w-full max-w-[1200px] flex lg:flex-row flex-col justify-between gap-x-5 ">
            {/* Main Column  */}
            <EngineDetailColumn
                engine={engine}
                relatedGames={[]}
                relatedArticles={relatedArticles}
                locale={locale}
            />
            {/* Right Column */}
            {relatedNews.length > 0 && (
                <Column
                    variant="news"
                    title={t("relatedNews")}
                    responsive
                    onButtonClick={() => {}}
                    columnItems={relatedNews?.map((news: any) => ({
                        id: news?.newsid,
                        variant: "news",
                        tags: [news?.content?.game?.gameid],
                        title: news?.content?.[`title_${locale}`] || news?.content?.title_en,
                        imageUrl: news?.content?.image,
                    }))}
                />
            )}
        </div>
    )
}

export default EngineDetail
