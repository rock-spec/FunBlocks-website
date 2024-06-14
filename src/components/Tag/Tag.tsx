import React from "react"
import localFont from "next/font/local"
// import Link from "next/link"
import { Link } from "@/i18n.config"

interface TagProps {
    text: string
    type?: "section" | "relevance" | "more" | "justTag"
    numberOfMore?: number
    linkto?: string
}

const neueBit = localFont({
    src: "./font/NeueBit-Regular.ttf",
    display: "swap",
})

const OffBit = localFont({
    src: "./font/OffBitTrial-Bold.otf",
    display: "swap",
})

export const Tag = (prop: TagProps) => {
    const { text, type = "section", numberOfMore = 0, linkto } = prop

    if (text) {
        return (
            <>
                {type === "section" && (
                    <div
                        className={`uppercase bg-merino px-2.5 pt-1.5 pb-0.5 text-base ${OffBit.className} `}
                    >
                        {text}
                    </div>
                )}
                {type === "relevance" && (
                    <div
                        className={`flex justify-center items-center  bg-merino  tracking-wider  uppercase  text-lg border-nero font-bold border-[1px] text-nowrap ${neueBit.className} `}
                    >
                        <Link href={`/${linkto}/${text} `} className="px-1 pt-1 leading-[16px]">
                            {text?.split(":")[0]}
                        </Link>
                    </div>
                )}
                {type === "justTag" && (
                    <div
                        className={`flex justify-center items-center  bg-merino  tracking-wider  uppercase  text-lg border-nero font-bold border-[1px] text-nowrap ${neueBit.className} `}
                    >
                        <p className="px-1 pt-1 leading-[16px]">{text?.split(":")[0]}</p>
                    </div>
                )}
                {type === "more" && (
                    <div
                        className="inline-flex items-center justify-center bg-merino p-[5px] h-[19px] text-nero uppercase leading-[120%] tracking-[0.36px] border-solid border-nero border-[1px]"
                        style={{
                            fontSize: "18px",
                            lineHeight: "120%",
                            letterSpacing: "0.36px",
                        }}
                    >
                        {numberOfMore}+
                    </div>
                )}
            </>
        )
    }
}
