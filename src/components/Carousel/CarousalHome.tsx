"use client"

import Image from "next/image"
import { Tag } from "../Tag/Tag"
import { CustomButton } from "../Button/Button"
import ReactSimplyCarousel from "react-simply-carousel"
import { useState } from "react"
// import Link from "next/link"
import { Link, Locale } from "@/i18n.config"
import { Cabin } from "next/font/google"
import { useTranslations } from "next-intl"
import BlueButton from "../Button/BlueButton"

const cabin = Cabin({
    subsets: ["latin"],
    weight: ["700", "400", "500", "600"],
})

const CarousalHome = ({ data, locale }: { data: any; locale: Locale }) => {
    const [dataIndex, setDataIndex] = useState(0)
    const b = useTranslations("Buttons")



    const goNext = () => {
        if (dataIndex + 1 < data.length) {
            setDataIndex((prevIndex) => prevIndex + 1)
        } else {
            setDataIndex(0)
        }
    }

    const goback = () => {
        if (dataIndex > 0) {
            setDataIndex((prevIndex) => prevIndex - 1)
        } else {
            setDataIndex(data.length - 1)
        }
    }

    return (
        <div className="bg-stone-50  w-full flex-1 border box-border border-neutral-900 ">
            <div className=" w-full flex flex-col p-5  items-start h-full  ">
                {/* image container */}

                <div className="relative w-full ">
                    {/* main banner image  */}

                    <Image
                        src={data[dataIndex]?.imageurl}
                        width={720}
                        height={720}
                        alt=""
                        className="w-full lg:h-80 rounded-md object-cover"
                    />
                    {/* /Star Image/ */}
                    <Image
                        src={
                            "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Tag-Swq9b5dkBzXvaPrsQFkgnAavhvTx5O.svg"
                        }
                        height={32}
                        width={32}
                        alt=""
                        className="absolute bottom-[4%] left-[2%]  hover:scale-110 transition-all cursor-pointer"
                    />
                    {/* Thunderbolt logo with tag*/}
                    <div className="flex absolute justify-start items-center top-[4%] left-[2%] cursor-pointer hover:scale-110 transition-all">
                        {/* <Image src={data[dataIndex].engineLogo} height={46} width={46} alt="" className="rounded-none" /> */}
                        <Tag text={data[dataIndex]?.gameid || "Featured"} linkto="game" />
                    </div>
                    {/* Right and Left Arrows  */}
                    <Image
                        src={
                            "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Group%2010719-wQdE9W69jKjLbs5nPI5BS26APpWHzM.svg"
                        }
                        height={32}
                        width={32}
                        alt=""
                        className="absolute top-[50%] right-[-10px] translate-y-[-50%] hover:scale-110 transition-all cursor-pointer"
                        onClick={goNext}
                    />
                    <Image
                        src={
                            "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Group%2010720-1vi6ze7ydnZpPXaN26jGDjF6Z1R2B2.svg"
                        }
                        height={32}
                        width={32}
                        alt=""
                        className="absolute top-[50%] translate-y-[-50%] left-[-10px] hover:scale-110 transition-all cursor-pointer"
                        onClick={goback}
                    />
                </div>
                <div
                    className={`text-neutral-900 text-[40px] font-bold leading-[48px] line-clamp-2 mt-6 ${cabin.className} `}
                >
                    {data[dataIndex]?.[`title_${locale}`] || data[dataIndex]?.title_en}
                </div>

                <div
                    className={`text-neutral-900 text-base font-normal leading-normal line-clamp-3 mt-4  ${cabin.className}  `}
                >
                    {data[dataIndex]?.[`description_${locale}`] || data[dataIndex]?.description_en}
                </div>

                <div className="mb-[-25px] pb-5 mt-auto">
                    <BlueButton text={b("explore")} link={data[dataIndex]?.url} />
                </div>
            </div>
        </div>
    )
}

export default CarousalHome
