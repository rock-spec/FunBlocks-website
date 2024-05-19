import type { Metadata } from "next"
import { Cabin } from "next/font/google"
import "./globals.css"
import Footer from "@/components/Footer/Footer"
import Image from "next/image"
// import Provider from "@/app/_trpc/Providers"
import Provider from "./_trpc/Providers"
import NavAndSearchComponent from "@/components/NavandSearchComponent/NavAndSearchComponent"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
    title: "Fun Blocks",
    description: "Fun Blocks",
}

const cabin = Cabin({
    subsets: ["latin"],
    weight: ["700", "400", "500", "600"],
})

async function RootLayout({
    children,
    params: { locale },
}: {
    children: React.ReactNode
    params: { locale: string }
}) {
    const messages = await getMessages()
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
                <NextIntlClientProvider messages={messages}>
                    <Provider>
                        <NavAndSearchComponent>{children}</NavAndSearchComponent>
                        <footer className="w-full">
                            <Footer />
                        </footer>
                    </Provider>
                </NextIntlClientProvider>
            </body>
        </html>
    )
}

export default RootLayout
