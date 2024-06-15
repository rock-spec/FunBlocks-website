import { Column } from "@/components/Column/Column"
import { EventColumn } from "@/components/Events/EventColumn"
import React from "react"
import { trpcServer } from "@/app/_trpc/trpcServer"
import { getTranslations } from "next-intl/server"

export const dynamic = "force-dynamic"

type FilterOptions = {
    query?: string
    categoryid?: string
    sort?: string
}

const Event = async ({ searchParams }: { searchParams: any }) => {
    const t = await getTranslations("Tags")
    const b = await getTranslations("Buttons")

    const filters: FilterOptions = {
        query: searchParams?.qry || "",
        categoryid: searchParams?.category || "",
        sort: searchParams?.sort || "",
    }

    const { featuredGames, events } = await trpcServer().eventData(filters)

    return (
        <div className="w-full max-w-[1200px]  flex lg:flex-row flex-col justify-between gap-x-5">
            {/* Main Column  */}
            <EventColumn data={events} searchParams={searchParams}/>

            {/* Right Column */}
            <Column
                variant="game"
                responsive
                title={t("featuredGames")}
                buttonText={b("allGames")}
                onButtonClick={() => {}}
                columnItems={featuredGames.map((game) => ({
                    key: game.gameid,
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

export default Event
