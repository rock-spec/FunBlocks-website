// import Link from "next/link"
import { Link } from "@/i18n.config"
import React from "react"
import { useTranslations } from "next-intl"

const FooterNav = () => {
    const t = useTranslations("Footer")

    return (
        <div className="flex flex-1 items-start gap-4 w-full text-black  font-medium  mb-10 md:0">
            {/* First Sub-Column */}
            <div className="flex flex-col items-start gap-8 w-[180.5px]">
                <div className=" text-base cursor-pointer hover:underline " style={{ lineHeight: "50%" }}>
                    <Link href="/game">{t("games")}</Link>
                </div>
                <div className=" text-base cursor-pointer hover:underline" style={{ lineHeight: "50%" }}>
                    <Link href="#">{t("reviews")}</Link>
                </div>
                <div className=" text-base cursor-pointer hover:underline" style={{ lineHeight: "50%" }}>
                    <Link href="/event">{t("events")}</Link>
                </div>
            </div>

            {/* Second Sub-Column */}
            <div className="flex flex-col items-start gap-8 w-[180.5px]">
                <div className=" text-base cursor-pointer hover:underline" style={{ lineHeight: "50%" }}>
                    <Link href="#"> {t("guides")}</Link>
                </div>
                <div className=" text-base cursor-pointer hover:underline" style={{ lineHeight: "50%" }}>
                    <Link href="#">{t("aboutFunBlock")}</Link>
                </div>
                <div className=" text-base cursor-pointer hover:underline" style={{ lineHeight: "50%" }}>
                    <Link href="#">{t("terms&conditions")}</Link>
                </div>
            </div>
        </div>
    )
}

export default FooterNav
