import React from "react"
import Image from "next/image"
import { Tag } from "../Tag/Tag"
import { Link } from "@/i18n.config"
import { Cabin } from "next/font/google"
import BlueButton from "../Button/BlueButton"
import { useTranslations } from "next-intl"
import localFont from "next/font/local"

// Define the props interface
export interface SingleCardItemProps {
    id?: string
    variant: "event" | "article" | "video" | "news"
    imageUrl: string
    title: string
    author?: string
    details?: string
    description?: string
    tags?: string[]
    timezone?: string
    url?: string
    joinurl?: string
    onFirstButtonClick: () => void
    onSecondButtonClick: () => void
}

const OffBit = localFont({
    src: "../Button/font/OffBitTrial-Bold.otf",
})
const cabin = Cabin({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })

const SingleCardItem = (props: SingleCardItemProps) => {
    const b = useTranslations("Buttons")
    const {
        variant,
        imageUrl,
        title,
        id,
        description = "",
        details = "",
        url,
        onFirstButtonClick,
        onSecondButtonClick,
        tags = [],
        author = "",
        timezone = "",
        joinurl,
    } = props
    console.log(variant)

    return (
        <div className="flex md:flex-row  flex-col items-start gap-x-6 w-full  ">
            {/* First Column: Image */}

            <Link href={`/${variant}/${id}`} className="block">
                <div
                    className={
                        "relative rounded-[4px] w-[272px] h-[153px] border border-[#161616] overflow-hidden " +
                        cabin.className
                    }
                >
                    <Image
                        className="w-[272px] h-[153px] object-cover"
                        src={imageUrl}
                        alt="Image"
                        width={272}
                        height={153}
                    />
                </div>
            </Link>
            {/* Second Column */}
            <div className="flex flex-col gap-y-2 w-full min-h-[153px] ">
                {/* First Row */}
                {/* <div className="flex flex-col gap-y-3 pe-5 w-full bg-red-500 "> */}
                {/* Title */}
                <div className="text-[#161616] font-bold text-lg  tracking-[-0.32px] line-clamp-2 bg leading-6">
                    <Link href={`/${variant}/${id}`}>{title}</Link>
                </div>

                {/* Details */}
                <div className="text-neutral-900 text-base font-normal leading-normal w-full overflow-hidden break-all  ">
                    <Link href={`/${variant}/${id}`}>
                        <div className={`line-clamp-2 leading-6 ${cabin.className}`}>{description}</div>
                    </Link>
                </div>

                {/* Dates  */}
                {variant === "event" ? (
                    <div className="flex items-center md:flex-row flex-col gap-x-3 flex-1">
                        <div className="flex gap-1">
                            {tags.map((tag, index) => (
                                <Tag text={tag} key={index} type={"relevance"} linkto="game" />
                            ))}
                        </div>
                        <div className="justify-start items-center gap-2 flex md:ml-2 text-sm">
                            <Image src="/date-icon.svg" alt="Date" width={14} height={14} />
                            <div
                                className={`text-neutral-900 text-opacity-90 font-semibold ${OffBit.className} ${cabin.className}`}
                            >
                                {details}
                            </div>
                            <div className="w-[6px] aspect-square opacity-90 hidden md:block bg-neutral-900" />
                            <p className="uppercase ">{timezone}</p>
                        </div>
                    </div>
                ) : (
                    <div className="flex md:flex-row flex-col gap-x-3 mt-[20px]">
                        {tags.length > 0 && tags[0] && (
                            <div className="flex gap-1">
                                {tags.slice(0, 3).map((tag, index) => (
                                    <Tag text={tag} key={index} type={"justTag"} />
                                ))}
                            </div>
                        )}
                        <div className="justify-start md:items-center gap-2 flex md:flex-row flex-col ">
                            {variant !== "news" && (
                                <div className="opacity-80 text-neutral-900 text-sm font-normal  leading-[16.80px] capitalize">
                                    By {author ? author : "Editor"}
                                </div>
                            )}
                            {variant !== "news" && (
                                <div className="w-[5px] h-[5px] hidden md:block  opacity-80 bg-neutral-900" />
                            )}
                            <div className="text-neutral-900 text-opacity-80 text-sm font-normal  leading-[16.80px]">
                                {details}
                            </div>
                        </div>
                    </div>
                )}
                {/* </div> */}

                {/* Second Row: Buttons */}
                {variant === "event" ? (
                    <div className="flex  items-center gap-x-4 mt-auto">
                        {joinurl && (
                            <BlueButton
                                text={b("joinEvent")}
                                link={joinurl}
                                width="w-[140px]"
                                bg="bg-[url('/buttons/join_event.svg')]"
                                bg_hover="hover:bg-[url('/buttons/join_event_hover.svg')]"
                            />
                        )}
                        <Link
                            className={`flex justify-center items-center w-[111px] h-10 bg-[url('/buttons/details.svg')] hover:bg-[url('/buttons/details_hover.svg')] capitalize ${OffBit.className}`}
                            href={`/${variant}/${id}`}
                        >
                            {b("details")}
                        </Link>
                    </div>
                ) : (
                    ""
                )}
            </div>
        </div>
    )
}

export default SingleCardItem
