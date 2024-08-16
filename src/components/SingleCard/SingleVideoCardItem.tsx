
import React, { useState } from "react"
import Image from "next/image"
import Button from "@mui/joy/Button"
import { Tag } from "../Tag/Tag"
import { CustomButton } from "../Button/Button"
import { SingleCardItemProps } from "../SingleCardItem/SingleCardItem"
import { Link } from "@/i18n.config"
import formatDate from "@/utils/dateFormat"
import ReactPlayer from "../../components/Videos/Reactplayer"

const SingleVideoCardItem = (props: any) => {
    const {
        variant,
        imageUrl,
        zone,
        title,
        description = "",
        id,
        details = "",
        width,
        tags = [],
        author = "",
        gameid,
        date,
    } = props

    return (
        <Link href={`/${variant}/${id}`}>
            <div className=" gap-6 ">
                {/* First Column: Image */}
                <div className="w-full h-full rounded-lg flex flex-col justify-start items-start  ">
                    <div className="relative w-full rounded-md flex   h-[225px] overflow-hidden ">
                        <ReactPlayer  height={"225px"} url={imageUrl} controls={true} />
                    </div>
                    <div className=" h-[121px] w-full flex flex-col  ">
                        <div className="flex-1  flex flex-col h-full items-start ">
                            {/* Show only two lines of description */}
                            <div
                                className={` text-neutral-900 text-md font-bold leading-normal line-clamp-1 mt-4`}
                            >
                                {title}
                            </div>
                            <div
                                className={`self-stretch text-neutral-900 w-full font-normal leading-normal  line-clamp-2 mt-3 pb-1`}
                            >
                                {description}
                            </div>
                            {date && (
                                <div className=" flex mt-auto gap-x-3 ">
                                    {/* <Tag text={gameid} type={"relevance"} /> */}
                                    <Tag text={gameid} type={"justTag"} />

                                    <div className="justify-start md:items-center gap-2 flex md:flex-row flex-col md:ml-2">
                                        <div className="opacity-80 text-neutral-900 text-sm font-normal  leading-[16.80px] capitalize">
                                            By {author}
                                        </div>
                                        <div className="w-[5px] h-[5px] hidden md:block   opacity-80 bg-neutral-900" />

                                        <div className="text-neutral-900 text-opacity-80 text-sm font-normal  leading-[16.80px]">
                                            {formatDate(date, true)}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default SingleVideoCardItem