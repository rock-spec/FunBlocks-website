"use client"

import React, { useEffect, useState } from "react"
import GameCardComponet, { GameCardComponentProps } from "./GameCardComponet"
import SearchInput from "../SearchInput/SearchInput"

export const GameColumn = (data: any) => {   
     console.log(data);
     
    const [gameFilterData, setGameFilterData] = useState(data.data)

    function filterGameArray(searchString: string = ""): any[] {
        const gameArray: any[] = data.data

        // If searchString is empty, return the original gameArray
        if (!searchString.trim()) {
            return gameArray
        }

        // Filter the gameArray based on the search string
        return gameArray.filter((game) => {
            return (
                game?.gameid?.toLowerCase().includes(searchString.toLowerCase()) ||
                game?.game_name?.toLowerCase().includes(searchString.toLowerCase()) ||
                game?.game_desc?.toLowerCase().includes(searchString.toLowerCase()) ||
                game?.gamestudioid?.toLowerCase().includes(searchString.toLowerCase()) ||
                game?.blockchainid?.toLowerCase().includes(searchString.toLowerCase()) ||
                game?.game?.gamestudioid?.toLowerCase().includes(searchString.toLowerCase())
            )
        })
    }

    const singleCardItemDetails: GameCardComponentProps[] =
        gameFilterData &&
        gameFilterData.map((game: any) => ({
            game_id: game?.gameid,
            engine: game?.engineid,
            engine_logo: game?.logo,
            imageUrl: game?.pic,
            title: game?.game_name,
            description: null, //this is like game name : some data
            tags: [game?.engineid],
            onClick: () => {},
        }))

    const handleSearch = (e: any) => {
        const val = e.target.value
        const updateData = filterGameArray(val)
        setGameFilterData(updateData)
    }

    useEffect(() => {
        setGameFilterData(data.data)
    }, [data])
    

    return (
        <>
            <div className="w-full md:w-[895px] flex flex-col items-center ">
                {/* <div className="flex flex-col lg:flex-row mb-10 w-full">
                    <div className="w-full">
                        <SearchInput varient="light" placeholder="Search for Keywords" onChange={handleSearch} />
                    </div>
                </div> */}
                <div className="flex mb-10 gap-5">
                    <div>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-flow-col-1 gap-4">
                            {singleCardItemDetails.map((detail, index) => (
                                <div className="p-5 border border-[#161616] bg-[#FFFCF9]" key={index}>
                                    <GameCardComponet {...detail} />
                                </div>
                            ))}
                        </div>
                        <div className="flex item-center w-full justify-center">
                            {/* <CustomButton text="Show More" onClick={() => { }} size="15px" width="240px" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
