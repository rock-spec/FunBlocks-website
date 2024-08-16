"use client"

import React from "react"
import Image from "next/image"
import { Tag } from "../Tag/Tag"
// import Link from 'next/link';
import { Link } from "@/i18n.config"
import { Cabin } from "next/font/google"
import localFont from "next/font/local"

const OffBit = localFont({
    src: "../Button/font/OffBitTrial-Bold.otf",
})

export interface GameCardComponentProps {
    game_id: string
    engine: string
    engine_logo: string
    imageUrl: string
    title: string
    description?: string
    tags: string[]
    onClick?: () => void
}
const cabin = Cabin({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })

const GameCardComponet = (props: GameCardComponentProps) => {
    const { imageUrl, title, tags, engine, description, onClick, engine_logo, game_id } = props

    return (
        <Link href={`/game/${game_id}`}>
            <div className={"gap-6 shadow-sm flex flex-col  " + cabin.className}>
                <div className="rounded-lg relative">
                    <div className=" relative rounded-md border border-[#161616] overflow-hidden">
                        <Image
                            src={imageUrl}
                            alt="Image"
                            width={427}
                            height={237}
                            layout="fixed"
                            objectFit="cover"
                            objectPosition="center"
                            className="object-cover h-[187px] aspect-video"
                        />
                        <div className="absolute flex items-center top-3 left-3">
                            {engine_logo && (
                                <Image
                                    src={engine_logo}
                                    alt="Image"
                                    width={24}
                                    height={24}
                                    layout="fixed"
                                    objectFit="cover"
                                    objectPosition="center"
                                    className="object-cover  aspect-square rounded-md"
                                />
                            )}
                            {engine && (
                                <p
                                    className={`${OffBit.className}  p-0 px-2 text-sm font-bold bg-[#F0E5D9] leading-normal uppercase`}
                                >
                                    {engine}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
                {/* Second Column: Text */}
                <div className="flex-1 flex flex-col justify-center items-start">
                    <div className="text-neutral-900 text-md font-bold leading-snug">
                        {title}
                        {description && ` : ${description}`}
                    </div>
                    <br />
                    <div
                        className="self-stretch justify-start items-end gap-1 inline-flex overflow-hidden"
                        onClick={(e) => e.preventDefault()}
                    >
                        {tags.map((tag, index) => (
                            <Tag text={tag} key={index} type={"justTag"} linkto="engine" />
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default GameCardComponet
