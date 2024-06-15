import React from "react"
import Homee from "@/components/Home/Home"
import { useTranslations } from "next-intl"
import { type Locale } from "@/i18n.config"
// import HomeSearch from "@/components/HomeSearch/SearchHome"

export default function Home({
    params: { locale },
    searchParams,
}: {
    params: { locale: Locale }
    searchParams: any
}) {
    const b = useTranslations("Buttons")
    const n = useTranslations("Navbar")

    return (
        <>
            {/* <HomeSearch query={searchQuery} locale={locale} /> */}
            <Homee n={n} b={b} locale={locale} />
        </>
    )
}
