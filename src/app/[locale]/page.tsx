import React from "react"
import Homee from "@/components/Home/Home"
import { useTranslations } from "next-intl"

export default function Home() {
    const b = useTranslations("Buttons")
    const n = useTranslations("Navbar")

    return (
        <>
            <Homee />
        </>
    )
}
