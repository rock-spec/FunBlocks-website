import React from "react"
import { Tag } from "@/components/Tag/Tag"
import SingleCardItem, { SingleCardItemProps } from "@/components/SingleCardItem/SingleCardItem"
import { CustomButton } from "../Button/Button"
import SingleVideoCardItem from "./SingleVideoCardItem"

// Define the props interface
export interface SingleCardProps {
    name: "events" | "articles" | "videos" | string
    singleCardItemDetails: Array<SingleCardItemProps> // Define or import EventCardDetail interface
    buttonText?: string
    onButtonClick: () => void // Function type for button click
    heading?: string
}

const SingleCard = (props: SingleCardProps) => {
    const { name, singleCardItemDetails, buttonText, onButtonClick, heading } = props


    const title = heading || name
    return (
        <div className="flex flex-col flex-1 items-start gap-5 p-5 border border-[#161616] bg-[#FFFCF9] ">
            {/* First Row: Tag */}
            <Tag text={title} type={"section"} />

            {/* Second Row: Event Cards */}
            {name == "videos" || name == "视频" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                    {singleCardItemDetails.map((detail, index) => (
                        <SingleVideoCardItem key={index} {...detail} /> // Replace '...detail' with actual props
                    ))}
                </div>
            ) : (
                <div className="flex flex-col gap-8">
                    {singleCardItemDetails.map((detail, index) => (
                        <SingleCardItem key={index} {...detail} /> // Replace '...detail' with actual props
                    ))}
                </div>
            )}

            {/* Third Row: Button */}
            {buttonText && (
                <div className="flex justify-center w-full  ">
                    <CustomButton
                        onClick={onButtonClick}
                        text={buttonText}
                        height="50px"
                        width="221px"
                        type="secondary"
                        link={`/${singleCardItemDetails[0]?.variant}`}
                    />
                </div>
            )}
        </div>
    )
}

export default SingleCard
