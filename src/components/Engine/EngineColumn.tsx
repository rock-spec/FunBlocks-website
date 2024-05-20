"use client"

import React, { useState } from "react"
import { CustomButton } from "../Button/Button"
import SearchInput from "../SearchInput/SearchInput"
import EngineCardComponet, { EngineCardComponentProps } from "./EngineCardComponet"
import { useTranslations } from "next-intl"

export const EngineColumn = ({ data }: { data: any }) => {
    const [filteredEngine, setFileteredEngine] = useState(data)
    const s = useTranslations("Search")

    function filterEngine(searchString: string = "") {
        const engineArray: any[] = data
        if (!searchString.trim()) {
            return engineArray
        }
        return engineArray.filter((engine) => {
            console.log(engine)
            return engine?.engineid?.toLowerCase().includes(searchString.toLowerCase())
        })
    }

    const singleCardItemDetails: EngineCardComponentProps[] = filteredEngine?.map((engine: any) => ({
        id: engine.engineid,
        imageUrl: engine.pic,
        title: engine.engineid,
        onClick: () => {},
    }))

    const handleSearch = (e: any) => {
        const val = e.target.value
        const updateData = filterEngine(val)
        setFileteredEngine(updateData)
    }

    return (
        <>
            <div className="w-full  lg:w-[895px] ">
                <div className="flex w-full mb-10">
                    <SearchInput varient="light" placeholder={s("pageSearch")} onChange={handleSearch} />
                </div>
                <div className="flex mb-10 gap-x-5">
                    <div>
                        <div className="grid lg:grid-cols-3 grid-rows-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                            {singleCardItemDetails.map((detail, index) => (
                                <div className="p-5 border border-[#161616] bg-[#FFFCF9] min-h-[285px]">
                                    <EngineCardComponet key={index} {...detail} />
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
