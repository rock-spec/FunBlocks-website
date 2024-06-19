"use client"

import React, { useEffect, useState } from "react"
import SingleCardItem, { SingleCardItemProps } from "../SingleCardItem/SingleCardItem"
import { CustomButton } from "../Button/Button"
import SearchInput from "../SearchInput/SearchInput"
import { IoIosArrowDown } from "react-icons/io"
import formatDate from "@/utils/dateFormat"
import formatTimestamp from "@/utils/formatdateInoriginalForm"
import { useTranslations } from "next-intl"
import CustomDropDown from "../DropDown/DropDown"
import { trpc } from "@/app/_trpc/client"

export const EventColumn = ({ data, searchParams }: { data: any; searchParams: any }) => {
    const s = useTranslations("Search")
    const b = useTranslations("Buttons")

    const fetchData = trpc.fetchCategories.useQuery()
    const fetchedCategories = fetchData?.data

    const [category, setCategory] = useState<string[]>([])
    const [type, setType] = useState<string[]>([])
    const [events, setEvents] = useState(data || [])

    const sortOptions = [{ name: "date" }]

    const singleCardItemDetails: SingleCardItemProps[] = events?.map((event: any) => ({
        // url: event?.joinurl,
        url: `/event/${event?.eventid}`,
        id: event?.eventid,
        variant: "event",
        imageUrl: `${event?.pic}?height=360&width=720`,
        title: event?.title,
        details: `${formatTimestamp(event?.startdate)} - ${formatTimestamp(event?.enddate)}`,
        timezone: event?.timezone,
        joinurl: event?.joinurl,
        tags: [event?.game.gameid],
        onFirstButtonClick: () => {},
        onSecondButtonClick: () => {},
    }))

    useEffect(() => {
        setEvents(data)
    }, [data])

    return (
        // w-[863px]
        <>
            <div className="lg:w-[895px] w-full">
                <div className="flex flex-col lg:flex-row w-[880px] mb-10 gap-x-4 ">
                {/* <div className="flex flex-col lg:flex-row justify-between w-[863px] mb-10 gap-x-4"> */}
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
                        text={b("category")}
                        options={fetchedCategories}
                        item={"category"}
                        searchParams={searchParams}
                    />
                    <CustomDropDown
                        text={b("sortBy")}
                        options={sortOptions}
                        item={"sort"}
                        searchParams={searchParams}
                    />
                </div>
                <div className="flex mb-10 gap-x-5">
                    <div className="flex flex-col flex-1 items-start gap-5">
                        {singleCardItemDetails.map((detail, index) => (
                            <div
                                key={index}
                                className="p-5 border border-[#161616] bg-[#FFFCF9]   w-full lg:w-[55rem]"
                            >
                                <SingleCardItem key={index} {...detail} />
                            </div>
                        ))}
                        <div className="flex item-center w-full justify-center">
                            {/* <CustomButton text="Show More" onClick={() => { }} size="15px" width="240px" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
