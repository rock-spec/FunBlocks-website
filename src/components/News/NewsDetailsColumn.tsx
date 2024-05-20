import React from "react"
import SingleCardItem, { SingleCardItemProps } from "../SingleCardItem/SingleCardItem"
import { CustomButton } from "../Button/Button"
import SearchInput from "../SearchInput/SearchInput"
import { IoIosArrowDown } from "react-icons/io"
import { Tag } from "../Tag/Tag"
import Image from "next/image"
import SingleCard from "../SingleCard/SingleCard"
import formatDate from "@/utils/dateFormat"
import { Cabin } from "next/font/google"
import { useTranslations } from "next-intl"

const cabin = Cabin({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })

export const NewsDetailsColumn = ({ data }: { data: any }) => {
    const t = useTranslations("Tags")

    return (
        <>
            <div className="m-w-[895px] w-full">
                <div
                    className={
                        "flex-col w-full mb-10 p-5 border border-[#161616] bg-[#FFFCF9] " + cabin.className
                    }
                >
                    <div className=" text-neutral-900 text-[28px] font-bold  leading-[33.60px] mb-[12px]">
                        {data?.news?.content?.title}
                    </div>
                    <div className="flex gap-1 mb-[24px]">
                        {[data.relatedData.game[0].gameid].map((tag, index) => (
                            <Tag text={tag} key={index} type={"relevance"} />
                        ))}
                        <div className="justify-start items-center gap-2 flex ml-2">
                            <div className="opacity-80 text-neutral-900 text-sm font-normal  leading-[16.80px]">
                                {data.news.content.user.username}
                            </div>
                            <div className="w-[5px] h-[5px] opacity-80 bg-neutral-900" />
                            <div className="text-neutral-900 text-opacity-80 text-sm font-normal  leading-[16.80px]">
                                {formatDate(data.news.content.publishdate)}
                            </div>
                        </div>
                    </div>

                    <Image
                        alt="banner"
                        height={487.44}
                        width={857.55}
                        className="mb-[24px] w-[855.58px] "
                        src={data.news.content.image}
                    />

                    <div
                        dangerouslySetInnerHTML={{ __html: data?.news?.body }}
                        className={
                            "text-neutral-900 text-base font-normal  leading-normal mb-[20.28px] " +
                            cabin.className
                        }
                    />
                </div>
                <div className="flex mb-10 gap-x-5">
                    <SingleCard
                        heading={t("relatedArticles")}
                        name={"article"}
                        singleCardItemDetails={data.relatedData.relatedArticles.map((article: any) => ({
                            id: article.articleid,
                            variant: "article",
                            imageUrl: `${article.content.image}?height=360&width=720`,
                            title: article.content.title,
                            description: article.content.description,
                            details: formatDate(article.content.publishdate),
                            tags: [article.content.game.gameid],
                            author: article.content.user.username,
                            onFirstButtonClick: () => {},
                            onSecondButtonClick: () => {},
                        }))}
                        onButtonClick={() => {}}
                    />
                </div>
            </div>
        </>
    )
}
