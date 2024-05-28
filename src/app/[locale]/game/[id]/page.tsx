import { trpcServer } from "@/app/_trpc/trpcServer"
import { Column } from "@/components/Column/Column"
import { GameDetailColumn } from "@/components/Games/GameDetailColumn"
import React from "react"
import { getTranslations } from "next-intl/server"

export const dynamic = "force-dynamic"

const GameDetail = async ({ params }: { params: { id: string } }) => {
    const t = await getTranslations("Tags")
    const id = params.id.replace(/%20/g, " ").toString() //to remove string and make it so i can search the data

    const data = await trpcServer().gameDetailsData(id)
    const relatedNews = data?.relatedNews

    return (
        <div className="w-full max-w-[1200px] flex lg:flex-row flex-col justify-between gap-x-5 ">
            {/* Main Column  */}
            <GameDetailColumn data={data} />

            {/* Right Column */}
            <Column
                variant="news"
                responsive
                title={t("relatedNews")}
                buttonText=""
                onButtonClick={() => {}}
                columnItems={relatedNews?.map((news: any) => ({
                    id: news?.newsid,
                    variant: "news",
                    tags: [news?.content?.game?.gameid],
                    title: news?.content?.title,
                    imageUrl: news?.content?.image,
                }))}
            />
        </div>
    )
}

export default GameDetail
