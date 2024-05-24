import { trpcServer } from "@/app/_trpc/trpcServer"
import { Column } from "@/components/Column/Column"
import { VideoDetailsColumn } from "@/components/Videos/VideoDetailsColumn"
import React from "react"
import { getTranslations } from "next-intl/server"

export const dynamic = "force-dynamic"

const VideoDetails = async ({ params }: { params: { id: string } }) => {
    const id = params.id.replace(/%20/g, " ").replace(/%3A/g, ":").toString() //to remove string and make it so i can search the data// Access the dynamic id parameter

    const t = await getTranslations("Tags")
    const n = await getTranslations("Navbar")

    const data = await trpcServer().videoDetailsData(id)
    const game = data.relatedData.game
    const relatedArticles = data.relatedData.relatedArticles

    return (
        <div className="w-full max-w-[1200px] flex lg:flex-row flex-col justify-between gap-x-5">
            {/* Main Column  */}
            <VideoDetailsColumn data={data} />

            {/* Right Column */}
            <div className="flex-col justify-items-start items-center h-fit">
                <Column
                    variant="game"
                    title={t("relatedGames")}
                    responsive
                    onButtonClick={() => {}}
                    columnItems={game?.map((game) => ({
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
                    title={n("article")}
                    responsive
                    onButtonClick={() => {}}
                    columnItems={relatedArticles?.map((article: any) => ({
                        id: article?.articleid,
                        variant: "article",
                        tags: ["test"],
                        title: article?.content?.title,
                        imageUrl: article?.content?.image,
                    }))}
                />
            </div>
        </div>
    )
}

export default VideoDetails
