import React from "react"
import Image from "next/image"
import { Tag } from "@/components/Tag/Tag"
// import Link from "next/link"
import { Link } from "@/i18n.config"

export interface ArticleCardProps {
    imageUrl: string
    title: string
    tags: any[]
    id: string
    url?: string
}

const ArticleCard = (props: ArticleCardProps) => {
    const { imageUrl, title, tags, id } = props

    const defaultTags = ["Hot Topic", "Trending", "Must Read"]

    return (
        <Link href={`/news/${id}`} className="">
            <div className="flex flex-col items-start  gap-5 p-5 border border-[#161616] bg-[#FFFCF9] md:w-[285px] w-full mb-5 md:mb-0 md:h-80">
                {/* First Row: Image */}
                <div className="w-full border border-[#161616]">
                    <Image
                        src={imageUrl} // Replace with the actual image URL
                        alt={title}
                        width={245}
                        height={180}
                        layout="responsive"
                        objectFit="cover"
                        objectPosition="center"
                        className="h-[180px] w-[245px]"
                    />
                </div>
                <div className="self-stretch overflow-hidden text-nero text-lg font-bold leading-[110%]  line-clamp-2 ">
                    {title}
                </div>

                {/* Third Row: Tags */}
                {/* <div className="flex gap-x-1 ">
                    {(tags.length > 0 ? tags : defaultTags).map((tag, index) => (
                        <Tag text={tag} key={index} type={"relevance"} />
                    ))}
                </div> */}
                <div className="flex gap-x-1 ">
                    {(tags.length > 0 ? tags : defaultTags).map((tag, index) => (
                        <Tag text={tag} key={index} type={"justTag"} />
                    ))}
                </div>
            </div>
        </Link>
    )
}

export default ArticleCard
