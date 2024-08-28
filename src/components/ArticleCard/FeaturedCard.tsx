import React from "react"
import Image from "next/image"
import { Tag } from "@/components/Tag/Tag"
// import Link from "next/link"
import { Link } from "@/i18n.config"

export interface FeaturedCardProps {
    imageUrl: string
    title: string
    tags: any[]
    id: string
    url?: string
}

const FeaturedCard = (props: FeaturedCardProps) => {
    const { imageUrl, title, tags, id, url } = props

    const defaultTags = ["Hot Topic", "Trending", "Must Read"]

    return (
        <Link href={url} className="" target="_blank">
            <div className="flex flex-col items-start  gap-y-5 p-5 border border-[#161616] bg-[#FFFCF9] md:w-[285px] w-full mb-5 md:mb-0 md:h-[310px] overflow-hidden">
                {/* First Row: Image */}
                <div className=" w-[245px] h-[180px] overflow-hidden rounded-[4px] border border-[#161616] ">
                    <Image
                        src={imageUrl} // Replace with the actual image URL
                        alt={title}
                        width={245}
                        height={200}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="self-stretch overflow-hidden text-nero text-lg font-bold leading-[22px]  line-clamp-2 ">
                    {title}
                </div>

                <div className="flex gap-x-1 mt-auto w-full overflow-hidden">
                    {(tags.length > 0 ? tags : defaultTags).map((tag, index) => (
                        <Tag text={tag} key={index} type={"justTag"} />
                    ))}
                </div>
            </div>
        </Link>
    )
}

export default FeaturedCard
