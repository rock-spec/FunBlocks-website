"use client"

import React, { useEffect, useState } from "react"
import { CustomButton } from "../Button/Button"
import SearchInput from "../SearchInput/SearchInput"
import EngineCardComponet, { EngineCardComponentProps } from "./EngineCardComponet"
import { useTranslations } from "next-intl"
import CustomDropDown from "../DropDown/DropDown"
import { trpc } from "@/app/_trpc/client"

export const EngineColumn = ({ data, searchParams }: { data: any; searchParams: any }) => {
    const s = useTranslations("Search")
    const b = useTranslations("Buttons")

    const fetchData = trpc.fetchCategories.useQuery()
    const fetchedCategories = fetchData?.data

    const [engines, setEngines] = useState(data)

    const sortOptions = [{ name: "A-Z" }, { name: "Z-A" }]

    const singleCardItemDetails: EngineCardComponentProps[] = engines?.map((engine: any) => ({
        id: engine.engineid,
        imageUrl: engine.pic,
        title: engine.engineid,
        onClick: () => {},
    }))

    useEffect(() => {
        setEngines(data)
    }, [data])

    return (
        <>
            <div className="w-full  lg:w-[895px] ">
                <div className="flex flex-col lg:flex-row w-full mb-10 gap-x-4">
                    <div className="w-full">
                        <SearchInput
                            varient="light"
                            placeholder={s("pageSearch")}
                            searchParams={searchParams}
                        />
                    </div>
                    {/* <CustomDropDown
                        bg="bg-[url('/buttons/medium_dropdown.svg')]"
                        text={b("type")}
                        options={type}
                    /> */}
                    <CustomDropDown
                        // bg="bg-[url('/buttons/medium_dropdown.svg')]"
                        text={b("category")}
                        options={fetchedCategories}
                        item={"category"}
                        searchParams={searchParams}
                        // txt_px={"px-8"}
                    />
                    <CustomDropDown
                        // bg="bg-[url('/buttons/medium_dropdown.svg')]"
                        text={b("sortBy")}
                        options={sortOptions}
                        item={"sort"}
                        searchParams={searchParams}
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
}
