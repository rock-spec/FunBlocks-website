import React from "react"
import ArticleCard from "@/components/ArticleCard/ArticleCard"
import SingleCard from "@/components/SingleCard/SingleCard"
import { CustomButton } from "@/components/Button/Button"
import Image from "next/image"
import { Tag } from "@/components/Tag/Tag"
import { Column } from "../Column/Column"
import GameCardComponet, { GameCardComponentProps } from "../Games/GameCardComponet"
// import Link from "next/link"
import { Link } from "@/i18n.config"
import formatDate from "@/utils/dateFormat"
import { Cabin } from "next/font/google"
import { useTranslations } from "next-intl"

const cabin = Cabin({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })

export const EngineDetailColumn = ({
    engine,
    relatedGames,
    relatedArticles,
}: {
    engine: any
    relatedGames: any
    relatedArticles: any
}) => {
    const t = useTranslations("Tags")

    console.log(relatedGames)

    const singleCardItemDetails: GameCardComponentProps[] = relatedGames.map((game: any) => ({
        game_id: game?.game_id,
        engine: game?.engineid,
        engine_logo:
            "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/bolt%20logo-GeDmp6kt980WP2Z0ch3gDvtkNrdZkK.svg",
        imageUrl: game?.pic,
        title: game?.game_name,
        description: "",
        tags: [game?.gamestudioid],
        onClick: () => {},
    }))
    const engineData = engine && engine[0]
    return (
        <>
            <div className="max-w-[895px] w-full ">
                <div className={"h-fit-content items-stretch flex mb-10 gap-x-5 " + cabin.className}>
                    <div className="w-full p-5 bg-stone-50   border border-neutral-900 flex md:flex-row flex-col justify-end items-start gap-6  h-full">
                        {/* image container */}
                        <div className="relative md:w-[50%] w-full">
                            {/* main banner image  */}
                            <Image
                                src={engineData?.pic}
                                width={457}
                                height={337}
                                alt=""
                                className="rounded-md w-full"
                            />
                        </div>

                        <div className="md:w-[50%] w-full">
                            <div className=" text-neutral-900 text-[28px] font-bold leading-[48px] ">
                                {engineData?.engineid}
                            </div>

                            <div className=" text-neutral-900 text-base font-normal">{engineData?.desc}</div>
                            <br />

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                                <div className="text-neutral-900 text-base font-medium underline leading-tight tracking-tight flex justify-start items-center cursor-pointer">
                                    <Image
                                        src={
                                            "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Frame%203184932-bSRcfFmN2KJ4lSUyJxVUZBs8dZu8k9.svg"
                                        }
                                        height={24}
                                        width={24}
                                        alt=""
                                        className="h-6 mr-1"
                                    />
                                    <p>
                                        <Link href={engineData?.website} target="blank">
                                            {engineData?.engineid}
                                        </Link>
                                    </p>
                                </div>

                                <div className="text-neutral-900 text-base font-medium underline leading-tight tracking-tight flex justify-start items-center cursor-pointer">
                                    <Image
                                        src={
                                            "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Frame%203184932-1-PZh4LhAvRZK9PlN7UP5ctTh11SfFFQ.svg"
                                        }
                                        height={24}
                                        width={24}
                                        alt=""
                                        className="h-6 mr-1"
                                    />
                                    <p>
                                        {" "}
                                        <Link href={engineData?.blogurl} target="blank">
                                            Docs
                                        </Link>
                                    </p>
                                </div>
                                <div className="text-neutral-900 text-base font-medium underline leading-tight tracking-tight flex justify-start items-center cursor-pointer">
                                    <Image
                                        src={
                                            "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Frame%203184932-2-AnqrY48rvFGY6C4mxEVx1GoEZfBpiN.svg"
                                        }
                                        height={24}
                                        width={24}
                                        alt=""
                                        className="h-6 mr-1"
                                    />
                                    <p>Twitter</p>
                                </div>
                                <div className="text-neutral-900 text-base font-medium underline leading-tight tracking-tight flex justify-start items-center cursor-pointer">
                                    <Image
                                        src={
                                            "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Frame%203184932-3-nw373W2KTWzNMkQ8ZL6ejHFaOyckdZ.svg"
                                        }
                                        height={24}
                                        width={24}
                                        alt=""
                                        className="h-6 mr-1"
                                    />
                                    <p>Github</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex mb-10  flex-col  items-start gap-5">
                    <Tag text={"MUD V1 GAMES"} type={"section"} />
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                        {singleCardItemDetails.map((detail, index) => (
                            <div className="p-5 border border-[#161616] bg-[#FFFCF9]" key={index}>
                                <GameCardComponet {...detail} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex mb-10 gap-x-5">
                    <SingleCard
                        name={"article"}
                        heading={t("relatedArticles")}
                        singleCardItemDetails={relatedArticles.map((article: any) => ({
                            variant: "article",
                            id: article.articleid,
                            imageUrl: `${article.content.image}?height=360&width=720`,
                            title: article.content.title,
                            description: article.content.description,
                            details: formatDate(article.content.publishdate),
                            tags: [article.content.game.gameid],
                            author: article.content.user.username,
                            onFirstButtonClick: () => {},
                            onSecondButtonClick: () => {},
                        }))}
                        buttonText={""}
                        onButtonClick={() => {}}
                    />
                </div>
            </div>
        </>
    )
}
