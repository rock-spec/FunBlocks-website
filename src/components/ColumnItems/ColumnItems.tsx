import React from "react"
import Button from "@mui/joy/Button"
import { Tag } from "@/components/Tag/Tag"
import Image from "next/image"
import { Link } from "@/i18n.config"
import { Cabin } from "next/font/google"

// Define the props interface
export interface SingleColumnProps {
    id?: string
    variant: "game" | "article" | "news" | "search" | "featuredArticles"
    title: string
    content?: string
    author?: string
    details?: string
    description?: string
    tags?: string[]
    zone?: string
    imageUrl: string
    search?: boolean
    onClick?: () => void
}

const cabin = Cabin({
    subsets: ["latin"],
    weight: ["700"],
})

export const ColumnItems = (props: SingleColumnProps) => {
    const { search, variant, title, onClick, imageUrl, tags = [], id } = props

    const validTags = tags.filter((element) => element !== null && element !== undefined)

    const img_size = 180
    const containerHeight = 80
    const imageHeight = 80
    const imageWidth = 80
    const classnames = variant === "news" || variant === "article" ? "line-clamp-3" : ""

    return (
        <div
            className={`w-[245px] h-[${containerHeight}px] justify-start items-start gap-[15px] inline-flex cursor-pointer `}
        >
            <div>
                <Link href={`/${variant}/${id}`} className="block h-[85px] w-[85px]">
                    <Image
                        src={imageUrl}
                        height={img_size}
                        width={img_size}
                        alt=""
                        className={`block h-[85px] w-[85px]  border-[2px] rounded-[7px] border-neutral-900/85 object-cover`}
                    />
                </Link>
            </div>
            <div className="grow shrink basis-0 h-[85px] flex-col justify-between items-start flex">
                <Link
                    href={`/${variant}/${id}`}
                    className={` self-stretch text-neutral-900 line-clamp-3  break-all ${
                        search ? "text-base  " : "text-sm"
                    } leading-tight  ${classnames} ${cabin.className} font-bold`}
                >
                    {title}
                </Link>
                <div className="self-stretch justify-start items-end gap-[5px] flex mb-1">
                    {variant !== "article" &&
                        validTags.length > 0 &&
                        tags
                            .slice(0, 2)
                            .map((tag, index) => (
                                <Tag
                                    text={tag}
                                    key={index}
                                    type="relevance"
                                    linkto={variant === "game" ? "engine" : "game"}
                                />
                            ))}
                </div>
            </div>
        </div>
    )
}

