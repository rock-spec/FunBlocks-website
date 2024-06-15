"use client"

import { useState } from "react"
import HomeSearch from "@/components/HomeSearch/SearchHome"
import { NavBar } from "../NavBar/NavBar"
import Image from "next/image"
import { type Locale } from "@/i18n.config"

interface NavAndSearchComponentProps {
    children: React.ReactNode
    locale: Locale
}

const NavAndSearchComponent: React.FC<NavAndSearchComponentProps> = ({ children, locale }) => {
    const [searchQuery, setSearchQuery] = useState("")

    return (
        <>
            <nav suppressHydrationWarning={true} className="z-[1000] ">
                <NavBar setSearchQuery={setSearchQuery} />
            </nav>

            <div className="min-h-screen flex justify-center items-start pt-10 pb-[60px] m-5 lg:mt-28 md:m-16 ">
                <div className="absolute top-[143px] left-0 -z-10" style={{ position: "fixed" }}>
                    <Image src="/bg-svg-left.svg" alt="Left SVG" width={336} height={461} />
                </div>

                <div className="absolute top-1 right-0 -z-10" style={{ position: "fixed" }}>
                    <Image src="/bg-svg-right.svg" alt="Right SVG" width={221} height={557} />
                </div>

                {!searchQuery ? children : <HomeSearch query={searchQuery} locale={locale} />}
            </div>
        </>
    )
}

export default NavAndSearchComponent