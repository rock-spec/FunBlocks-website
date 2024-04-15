'use client'

import React, { useState } from "react";
import SingleCardItem, { SingleCardItemProps } from "../SingleCardItem/SingleCardItem";
import { CustomButton } from "../Button/Button";
import SearchInput from "../SearchInput/SearchInput";
import { IoIosArrowDown } from "react-icons/io";
import formatDate from "@/utils/dateFormat";


export const EventColumn = ({ data }: { data: any }) => {

    const [filteredEvent, setFilteredEvent] = useState(data || [])


    const singleCardItemDetails: SingleCardItemProps[] =
        filteredEvent?.map((event: any) =>
        (
            {
                id: event.eventid,
                'variant': 'event',
                'imageUrl': `${event.pic}?height=360&width=720`,
                'title': event.title,
                'details': `${formatDate(event.startdate)} - ${formatDate(event.enddate)}`,
                // 'zone': "EST",
                'tags': [event.game.gameid],
                'onFirstButtonClick': () => {
                },
                'onSecondButtonClick': () => {
                },
            }

        )
        )


    function filterEvent(searchString: string = ""): any[] {
        const events = data;

        // If searchString is empty, return the original eventArray
        if (!searchString.trim()) {
            return events;
        }

        // Filter the eventArray based on the search string
        return events.filter((event: any) => {
            const lowerSearchString = searchString.toLowerCase();
            const lowerStartDate = event?.startdate?.toLowerCase();
            const lowerEndDate = event?.enddate?.toLowerCase();

            // Check if the search string matches any part of the startdate or enddate
            const startDateMatch = lowerStartDate?.includes(lowerSearchString);
            const endDateMatch = lowerEndDate?.includes(lowerSearchString);

            // Check if the search string matches any part of the title, detail, gameid, or eventid
            const otherMatches = (
                event?.gameid?.toLowerCase().includes(lowerSearchString) ||
                event?.eventid?.toLowerCase().includes(lowerSearchString) ||
                event?.title?.toLowerCase().includes(lowerSearchString) ||
                event?.detail?.toLowerCase().includes(lowerSearchString)
            );

            // Check if the search string represents a month (e.g., "April")
            const isMonth = (dateString: string) => {
                const months = [
                    "january", "february", "march", "april",
                    "may", "june", "july", "august",
                    "september", "october", "november", "december"
                ];
                return months.some(month => dateString.includes(month));
            };

            // Return true if any of the matches are found
            return startDateMatch || endDateMatch || otherMatches || (isMonth(lowerSearchString) && (lowerStartDate.includes(lowerSearchString) || lowerEndDate.includes(lowerSearchString)));
        });
    }




    const handleSearch = (e: any) => {
        const val = e.target.value
        const updateData = filterEvent(val)
        console.log(updateData);

        setFilteredEvent(updateData)
    }



    return (
        <>
            <div className="lg:w-[895px] w-full">
                <div className="flex lg:flex-row flex-col w-full mb-10">
                    <div className="h-58px">
                        <SearchInput varient="light" placeholder="Search for Keywords" onChange={handleSearch} />
                    </div>
                    <div className="flex">
                        {/* <CustomButton onClick={() => { }} size='13px' text='Type' height='42px' icon={<IoIosArrowDown />} />
                        <CustomButton onClick={() => { }} size='13px' text='Status' height='42px' icon={<IoIosArrowDown />} />
                        <CustomButton onClick={() => { }} size='13px' text='Category' height='42px' icon={<IoIosArrowDown />} /> */}
                    </div>
                </div>
                <div className="flex mb-10 gap-x-5">

                    <div className="flex flex-col flex-1 items-start gap-5">
                        {singleCardItemDetails.map((detail, index) => (
                            <div className="p-5 border border-[#161616] bg-[#FFFCF9]">
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
    );
};
