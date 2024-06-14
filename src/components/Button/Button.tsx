import React, { ReactNode } from "react"
import Image from "next/image"
import localFont from "next/font/local"

// import "../../app/globals.css"
// import Link from "next/link"
import { Link } from "@/i18n.config"

export interface ButtonProps {
    onClick: () => void
    text: string
    type?: "primary" | "secondary"
    height?: string
    width?: string
    size?: string
    useSmall?: boolean
    useMedium?: boolean
    icon?: ReactNode
    link?: string
}

const OffBit = localFont({
    src: "./font/OffBitTrial-Bold.otf",
    display: "swap",
})

export const CustomButton = (props: ButtonProps) => {
    // Destructure props for easier usage
    const {
        link,
        onClick,
        text,
        type = "secondary",
        height = "100px",
        width = "350px",
        icon,
        size = "18px",
        useSmall,
        useMedium,
    } = props

    // const imageSrc = "/buttons/medium-button.svg"
    const imageSrc = useSmall
        ? "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/button-nx98psh0NxJo08FqKnaafixQss0KAI.svg"
        : useMedium
        ? "/buttons/medium-button.svg"
        : type === "primary"
        ? "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Group%2010723%20(1)%202-uu1e39irGGWhvZYyNWKcHykOFrV02R.svg"
        : "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Group%2010723%20(1)%201-DrIKz8IZYKwkbEiGowfHc2iWdhmweB.svg"

    // Dynamically set color based on button type and size
    const color = useSmall ? "#161616" : type === "primary" ? "#FFFCF9" : "#161616"

    // Define styles for the button
    const buttonStyles = {
        color,
        fontSize: size,
        fontFamily: '"Press Start 2P", cursive',
        backgroundImage: `url("${imageSrc}")`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width,
        height,
    }

    return (
        <>
            <div
                // onClick={onClick}
                className={`text-center text-neutral-900  
        text-lg font-bold font-['OffBit Trial'] tracking-tight flex justify-center items-center
         hover:scale-[1.01] transition-all  
        cursor-pointer text-[18px] ${OffBit.className}`}
                style={buttonStyles}
            >
                {/* Display button text and icon */}
                <Link href={link ?? "#"} className={`${OffBit.className} capitalize`}>
                    {text} {icon}
                </Link>
            </div>
        </>
    )
}
