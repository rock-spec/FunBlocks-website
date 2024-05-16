"use client"

import type { Metadata } from "next"
import { Cabin } from "next/font/google"
import "./globals.css"
import { NavBar } from "@/components/NavBar/NavBar"
import Footer from "@/components/Footer/Footer"
import Image from "next/image"
import Provider from "@/app/_trpc/Providers"
import { useState } from "react"
import HomeSearch from "@/components/HomeSearch/SearchHome"

// const inter = Inter({ subsets: ["latin"] });

export const dynamic = "force-dynamic"

// export const metadata: Metadata = {
//   title: "Fun Blocks",
//   description: "Fun Blocks",
// };
const cabin = Cabin({
    subsets: ["latin"],
    weight: ["700", "400", "500", "600"],
})

function RootLayout({ children }: { children: React.ReactNode }) {
    const [searchQuery, setSearchQuery] = useState("")

    const svgBackground = "url('/background.svg')"
    return (
        <html lang="en">
            <body
                className={`${cabin.className} `}
                style={{
                    backgroundImage: svgBackground,
                    backgroundRepeat: "repeat",
                    backgroundSize: "auto",
                    backgroundAttachment: "fixed",
                }}
            >
                <Provider>
                    <nav suppressHydrationWarning={true} className="z-[1000] ">
                        <NavBar setSearchQuery={setSearchQuery} />
                    </nav>

                    <div className="min-h-screen flex justify-center items-start pt-[60px] pb-[60px] m-5 lg:mt-28 md:m-16 ">
                        <div className="absolute top-[143px] left-0 -z-10" style={{ position: "fixed" }}>
                            <Image src="/bg-svg-left.svg" alt="Left SVG" width={336} height={461} />
                        </div>

                        <div className="absolute top-1 right-0 -z-10" style={{ position: "fixed" }}>
                            <Image src="/bg-svg-right.svg" alt="Right SVG" width={221} height={557} />
                        </div>

                        {!searchQuery ? children : <HomeSearch query={searchQuery} />}
                    </div>

                    <footer className="w-full ">
                        <Footer />
                    </footer>
                </Provider>
            </body>
        </html>
    )
}
// export default api.withTRPC(RootLayout)
export default RootLayout
