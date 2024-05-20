import { GameColumn } from "@/components/Games/GameColumn"
import React, { useEffect, useState } from "react"
import { trpcServer } from "../_trpc/trpcServer"
import { Column } from "@/components/Column/Column"
import SidebarHeading from "@/components/SidebarHeading/SidebarHeading"
import Checkbox from "@/components/Checkbox/Checkbox"
import Sidebar from "@/components/Games/Sidebar"

export const dynamic = "force-dynamic"

const Game = async () => {
    // Fetching game data using trpc
    const gameData = await trpcServer().gameData()

    return (
        <div className="w-full max-w-[1200px] flex flex-col md:flex-row justify-between gap-x-5">
            <Sidebar data={gameData.game} />

            {/* Main Column  */}
            <GameColumn data={gameData.game} />
        </div>
    )
}

export default Game
