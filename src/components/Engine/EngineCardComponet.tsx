import React from "react"
import Image from "next/image"
import { Cabin } from "next/font/google"
import { Link } from "@/i18n.config"

export interface EngineCardComponentProps {
    imageUrl: string
    title: string
    onClick: () => void
}

const cabin = Cabin({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })

const EngineCardComponet = (props: EngineCardComponentProps) => {
    const { imageUrl, title } = props

    return (
        <Link href={`/engine/${title}`}>
            <div className={"gap-6 shadow-sm flex flex-col " + cabin.className}>
                {" "}
                {/* Make it a flex container */}
                {/* First Column: Image */}
                <div className="rounded-lg relative">
                    <div className="rounded-md border border-[#161616]">
                        <Image
                            src={imageUrl}
                            alt="Image"
                            width={427}
                            height={237}
                            layout="fixed"
                            objectFit="cover"
                            objectPosition="center"
                            className="object-cover h-[237px] w-[427px]"
                        />
                    </div>
                </div>
                {/* Second Column: Text */}
                <div className="flex-1 flex flex-col justify-center items-start">
                    <div className="text-neutral-900 text-lg font-bold leading-snug">{title}</div>
                </div>
            </div>
        </Link>
    )
}

export default EngineCardComponet
