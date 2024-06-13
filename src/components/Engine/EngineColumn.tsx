"use client"

import React, { useEffect, useState } from "react"
import { CustomButton } from "../Button/Button"
import SearchInput from "../SearchInput/SearchInput"
import EngineCardComponet, { EngineCardComponentProps } from "./EngineCardComponet"
import { useTranslations } from "next-intl"
import CustomDropDown from "../DropDown/DropDown"
import { trpc } from "@/app/_trpc/client"

export const EngineColumn = ({ data }: { data: any }) => {
    const s = useTranslations("Search")
    const b = useTranslations("Buttons")

    const fetchData = trpc.fetchCategories.useQuery()
    const fetchedCategories = fetchData?.data

    const [category, setCategory] = useState<string[]>([])
    const [type, setType] = useState<string[]>([])
    const [filteredEngine, setFileteredEngine] = useState(data)

    const sortOptions = [{ name: "date" }]

    function filterEngine(searchString: string = "") {
        const engineArray: any[] = data
        if (!searchString.trim()) {
            return engineArray
        }
        return engineArray.filter((engine) => {
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

    //Creating options for category and type dropdown menu
    useEffect(() => {
        const uniqueCategories = new Set<string>()
        const uniqueTypes = new Set<string>()

        data.forEach((news: { category: string; type: string }) => {
            if (news.category) uniqueCategories.add(news.category)
            if (news.type) uniqueTypes.add(news.type)
        })

        setCategory(Array.from(uniqueCategories))
        setType(Array.from(uniqueTypes))
    }, [data])

    return (
        <>
            <div className="w-full  lg:w-[895px] ">
                <div className="flex flex-col lg:flex-row w-full mb-10 gap-x-4">
                    <div className="w-full">
                        <SearchInput varient="light" placeholder={s("pageSearch")} onChange={handleSearch} />
                    </div>
                    <CustomDropDown
                        bg="bg-[url('/buttons/medium_dropdown.svg')]"
                        text={b("type")}
                        options={type}
                    />
                    <CustomDropDown
                        bg="bg-[url('/buttons/medium_dropdown.svg')]"
                        text={b("category")}
                        options={fetchedCategories}
                    />
                    <CustomDropDown
                        bg="bg-[url('/buttons/medium_dropdown.svg')]"
                        text={b("sortBy")}
                        options={sortOptions}
                    />
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

    // return (
    //     <>
    //         <div className="w-full  lg:w-[895px] ">
    //             <div className="flex w-full mb-10">
    //                 <SearchInput varient="light" placeholder={s("pageSearch")} onChange={handleSearch} />
    //             </div>
    //             <div className="flex mb-10 gap-x-5">
    //                 <div>
    //                     <div className="grid lg:grid-cols-3 grid-rows-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
    //                         {singleCardItemDetails.map((detail, index) => (
    //                             <div className="p-5 border border-[#161616] bg-[#FFFCF9] min-h-[285px]">
    //                                 <EngineCardComponet key={index} {...detail} />
    //                             </div>
    //                         ))}
    //                     </div>
    //                     <div className="flex item-center w-full justify-center">
    //                         {/* <CustomButton text="Show More" onClick={() => { }} size="15px" width="240px" /> */}
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </>
    // )
}
