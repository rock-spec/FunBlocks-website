import { trpcServer } from "@/app/_trpc/trpcServer"
import { ArticleDetailsColumn } from "@/components/Articles/ArticleDetailsColumn"
import { Column } from "@/components/Column/Column"
import React from "react"
import { getTranslations } from "next-intl/server"
import { type Locale } from "@/i18n.config"
import { any } from "zod"

export const dynamic = "force-dynamic"

const ArticleDetails = async ({ params }: { params: { id: string; locale: Locale } }) => {
    const t = await getTranslations("Tags")
    const n = await getTranslations("Navbar")

    const { id, locale } = params
    const data = await trpcServer().articleDetailsData({ id, locale })

    let relatedData = data?.relatedData
    let game: any[] = []
    let featuredArticles: any[] = []
    let articleIds = new Set<string>()

    if (Array.isArray(relatedData)) {
        relatedData.forEach((data) => {
            if (data?.game?.status === "fulfilled") {
                game.push(...data.game.value)
            }

            if (data?.featuredArticles?.status === "fulfilled") {
                featuredArticles = data?.featuredArticles?.value?.featuredArticles?.filter(
                    (article: any) => article.articleid !== id
                )
            }
        })
    }

    return (
        <div className="w-full max-w-[1200px] flex lg:flex-row flex-col justify-between gap-x-5">
            {/* Main Column  */}
            <ArticleDetailsColumn data={data} locale={locale} articleId={id} />
            {/* {JSON.stringify(articlesDetails)} */}

            {/* Right Column */}
            <div className="flex-col justify-items-start items-center h-fit">
                <Column
                    variant="game"
                    title={t("relatedGames")}
                    responsive
                    onButtonClick={() => {}}
                    columnItems={game?.map((game) => ({
                        id: game?.gameid,
                        variant: "game",
                        tags: [game?.engineid, game?.gamestudioid],
                        title: game?.game_name,
                        imageUrl: game?.pic,
                    }))}
                />
                <div className="h-[24px] w-full"></div>
                <Column
                    variant="featuredArticles"
                    title={t("featuredArticles")}
                    responsive
                    onButtonClick={() => {}}
                    columnItems={featuredArticles?.map((article: any) => ({
                        id: article?.articleid,
                        variant: "featuredArticles",
                        tags: [article?.category?.name],
                        title: article?.content?.[`title_${locale}`] || article?.content?.title_en,
                        imageUrl: article?.content?.image,
                    }))}
                />
            </div>
        </div>
    )
}

export default ArticleDetails
