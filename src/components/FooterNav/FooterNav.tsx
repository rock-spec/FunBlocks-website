import Link from "next/link"
import React from "react"

const FooterNav = () => {
    return (
        <div className="flex flex-1 items-start gap-4 w-full text-black  font-medium  mb-10 md:0">
            {/* First Sub-Column */}
            <div className="flex flex-col items-start gap-8 w-[180.5px]">
                <div className=" text-base cursor-pointer hover:underline " style={{ lineHeight: "50%" }}>
                    <Link href="/game"> Games</Link>
                </div>
                <div className=" text-base cursor-pointer hover:underline" style={{ lineHeight: "50%" }}>
                    <Link href="#"> Reviews</Link>
                </div>
                <div className=" text-base cursor-pointer hover:underline" style={{ lineHeight: "50%" }}>
                    <Link href="/event"> Events</Link>
                </div>
            </div>

            {/* Second Sub-Column */}
            <div className="flex flex-col items-start gap-8 w-[180.5px]">
                <div className=" text-base cursor-pointer hover:underline" style={{ lineHeight: "50%" }}>
                    <Link href="#"> Guides</Link>
                </div>
                <div className=" text-base cursor-pointer hover:underline" style={{ lineHeight: "50%" }}>
                    <Link href="#"> About Fun Blocks</Link>
                </div>
                <div className=" text-base cursor-pointer hover:underline" style={{ lineHeight: "50%" }}>
                    <Link href="#"> Terms & Conditions</Link>
                </div>
            </div>
        </div>
    )
}

export default FooterNav
