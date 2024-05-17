
import type { Metadata } from "next"
import { Cabin } from "next/font/google"
import "./globals.css"
import Footer from "@/components/Footer/Footer"
import Image from "next/image"
import Provider from "@/app/_trpc/Providers"
import NavAndSearchComponent from "@/components/NavandSearchComponent/NavAndSearchComponent"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
    title: "Fun Blocks",
    description: "Fun Blocks",
}

const cabin = Cabin({
    subsets: ["latin"],
    weight: ["700", "400", "500", "600"],
})

function RootLayout({ children }: { children: React.ReactNode }) {
    const svgBackground = "url('/background.svg')"

    return (
        <html lang="en">
            <body
                className={`${cabin.className}`}
                style={{
                    backgroundImage: svgBackground,
                    backgroundRepeat: "repeat",
                    backgroundSize: "auto",
                    backgroundAttachment: "fixed",
                }}
            >
                <Provider>
                    <NavAndSearchComponent>{children}</NavAndSearchComponent>
                    <footer className="w-full">
                        <Footer />
                    </footer>
                </Provider>
            </body>
        </html>
    )
}

export default RootLayout