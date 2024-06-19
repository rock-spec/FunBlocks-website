"use client"

import dynamic from "next/dynamic"
import { Cabin } from "next/font/google"

const cabin = Cabin({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })

const MarkdownPreview = dynamic(() => import("@uiw/react-markdown-preview").then((mod) => mod.default), {
    ssr: false,
})

function MarkDownview({ source }: { source: string }) {
    return (
        <div>
            <MarkdownPreview source={source} style={{ backgroundColor: "#FFFCF9", fontFamily: "cabin" }} />
        </div>
    )
}

export default MarkDownview
