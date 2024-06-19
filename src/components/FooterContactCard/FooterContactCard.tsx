import React from "react"
import Image from "next/image"
import { Link } from "@/i18n.config"
import { useTranslations } from "next-intl"
import { type Locale } from "@/i18n.config"

const FooterContactCard = ({ locale }: { locale: Locale }) => {
    const t = useTranslations("Footer")

    // Dummy array for social icons
    const socialIcons = [
        {
            link_en: "https://discord.gg/ahNANf4PTv",
            link_zh: "https://discord.gg/ahNANf4PTv",
            name: "Discord",
            URL: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Discordicons-78FxSkUmhinzPZTllRUp1LJzFJ3C7f.svg",
        },
        // {
        //     link_en: "#",
        //     link_zh: "#",
        //     name: "Facebook",
        //     URL: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/facebookicons-9z3TkQw33WsA3zdlC4Spb9Ef5ysWOf.svg",
        // },
        {
            link_en: "https://x.com/0xFunBlocks",
            link_zh: "https://x.com/0xFunBlocksCN",
            name: "Twitter",
            URL: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/twitter%201icons-wizZXImC607LGWyfCr8xpG3P7puQUG.svg",
        },
        {
            link_en: "https://t.me/FunBlocks_TC",
            link_zh: "https://t.me/FunBlocks_TC",
            name: "Telegram",
            URL: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/telegramicons-j0W4B0nSj497SihxtgJENrSVGy3AXZ.svg",
        },
        // {
        //     link_en: "#",
        //     link_zh: "#",
        //     name: "Reddit",
        //     URL: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/redditicons-VdNY3DMgWJARbPIy6uXvqdn8n62Hp4.svg",
        // },
        // {
        //     link_en: "#",
        //     link_zh: "#",
        //     name: "LinkedIn",
        //     URL: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/linkedinicons-NgQqayJoNqJ87aEzH3eqtHMDRPGrhu.svg",
        // },
        // {
        //     link_en: "#",
        //     link_zh: "#",
        //     name: "Instagram",
        //     URL: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/instagramicons-biZfdT4lokh6lAxfMkypWpXNBd2De4.svg",
        // },
        {
            link_en: "https://medium.com/@funblocksfun",
            link_zh: "https://medium.com/@funblocksfun",
            name: "medium",
            URL: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Group%2010718icons-0eLsc77r9odxjRNohFgeYkCtcEJ4Y8.svg",
        },
        {
            link_en: "https://www.youtube.com/channel/UCw1mNEgQCgjWcYup5WjXaCg",
            link_zh: "https://www.youtube.com/channel/UCw1mNEgQCgjWcYup5WjXaCg",
            name: "youtube",
            URL: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Group%2010718icons-0eLsc77r9odxjRNohFgeYkCtcEJ4Y8.svg",
        },
    ]

    return (
        <div className="flex flex-col flex-1 items-start gap-3 w-full">
            {/* First Row: EMAIL US */}
            <div className="text-pictonBlue text-xs font-medium capitalize">{t("emailUs")}</div>

            {/* Second Row: Email Address */}
            <a href="mailto:support@funblocks.com" className="text-default text-base">
                support@funblocks.com
            </a>

            {/* Third Row: Social Icons */}
            <div className="flex items-start gap-2">
                {socialIcons.map((icon, index) => (
                    <div key={index} className="cursor-pointer hover:scale-105 transition-all" style={{}}>
                        <Link href={icon?.[`link_${locale}`]}>
                            <Image
                                src={icon.URL}
                                alt={`${icon.name}`}
                                width={30.496}
                                height={30.496}
                                layout="fixed"
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FooterContactCard
