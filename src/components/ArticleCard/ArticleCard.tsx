import React from "react"
import Image from "next/image"
import { Tag } from "@/components/Tag/Tag"
// import Link from "next/link"
import { Link } from "@/i18n.config"

export interface ArticleCardProps {
    imageUrl: string
    title: string
    tags: string[]
    id: string
    url?: string
}

const ArticleCard = (props: ArticleCardProps) => {
    const { imageUrl, title, tags, id, url } = props
    return (
        <Link href={`/article/${url || id}`} className="">
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
                <div className="self-stretch overflow-hidden text-nero text-lg font-bold leading-[120%] tracking-[-0.36px] line-clamp-2 ">
                    {title}
                </div>

                {/* Third Row: Tags */}
                <div className="flex gap-1">
                    {tags.map((tag, index) => (
                        <Tag text={tag} key={index} type={"relevance"} />
                    ))}
                </div>
            </div>
        </Link>
    )
}

export default ArticleCard
