import localFont from "next/font/local"
// import Link from "next/link"
import { Link } from "@/i18n.config"

const OffBit = localFont({
    src: "./font/OffBitTrial-Bold.otf",
})
const BlueButton = ({
    text,
    link,
    height = "h-10",
    width = "w-[115px]",
    bg = "bg-[url('/buttons/explore.svg')]",
    bg_hover = "hover:bg-[url('/buttons/explore_hover.svg')]",
}: {
    text: string
    link: string
    height?: string
    width?: string
    bg?: string
    bg_hover?: string
}) => {
    console.log(link)

    return (
        <button
            className={`${height} ${width} flex justify-center items-center text-white text-lg  bg-cover bg-no-repeat ${bg} ${bg_hover} ${OffBit.className} leading-normal `}
        >
            <Link href={link ? link : "#"} className="capitalize" target="_blank">
                {text}
            </Link>
        </button>
    )
}

export default BlueButton
