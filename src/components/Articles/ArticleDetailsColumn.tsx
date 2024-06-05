import React from "react"
// import SingleCardItem, { SingleCardItemProps } from "../SingleCardItem/SingleCardItem"
// import { CustomButton } from "../Button/Button"
// import SearchInput from "../SearchInput/SearchInput"
// import { IoIosArrowDown } from "react-icons/io"
import { Tag } from "../Tag/Tag"
import Image from "next/image"
import SingleCard from "../SingleCard/SingleCard"
import formatDate from "@/utils/dateFormat"
import { renderHTML } from "@/utils/renderhtml"
import { Cabin } from "next/font/google"
import { useTranslations } from "next-intl"
import { Locale } from "@/i18n.config"

const cabin = Cabin({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })

export const ArticleDetailsColumn = ({ data, locale }: { data: any; locale: Locale }) => {
    const t = useTranslations("Tags")

    return (
        <>
            <div className="m-w-[895px] w-full ">
                <div
                    className={
                        "flex-col w-full mb-10 p-5 border border-[#161616] bg-[#FFFCF9] " + cabin.className
                    }
                >
                    <div className=" text-neutral-900 text-[28px] font-bold  leading-[33.60px] mb-[12px]">
                        {data.article.content[`title_${locale}`]}
                    </div>
                    <div className="flex gap-1 mb-[24px]">
                        {[data.relatedData.game[0].gameid].map((tag, index) => (
                            <Tag text={tag} key={index} type={"relevance"} linkto="game" />
                        ))}
                        <div className="justify-start items-center gap-2 flex ml-2">
                            <div className="opacity-80 text-neutral-900 text-sm font-normal  leading-[16.80px]">
                                {data.article.content.user.username}
                            </div>
                            <div className="w-[5px] h-[5px] opacity-80 bg-neutral-900" />
                            <div className="text-neutral-900 text-opacity-80 text-sm font-normal  leading-[16.80px]">
                                {formatDate(data.article.content.publishdate)}
                            </div>
                        </div>
                    </div>
                    <div className="my-6">
                        <h1 className="font-semibold text-xl mt-6 mb-3">Summary</h1>
                        <p className="">{data?.article?.content?.[`description_${locale}`]}</p>
                    </div>
                    <Image
                        alt="banner"
                        height={487.44}
                        width={857.55}
                        className="mb-[24px] object-cover object-center w-[855.58px] "
                        src={data.article.content.image}
                    />
                    <div className="text-neutral-900 text-base font-normal  leading-normal mb-[20.28px]">
                        {data?.article?.content?.[`content_${locale}`] &&
                            renderHTML(data?.article?.content?.[`content_${locale}`])}
                    </div>
                </div>
                {data?.relatedData?.relatedArticles?.length > 0 && (
                    <div className="flex mb-10 gap-x-5">
                        <SingleCard
                            heading={t("relatedArticles")}
                            name={"article"}
                            singleCardItemDetails={data.relatedData.relatedArticles.map((article: any) => ({
                                id: article?.articleid,
                                variant: "article",
                                imageUrl: `${article?.content?.image}?height=360&width=720`,
                                title: article?.content?.[`title_${locale}`],
                                description: article?.content?.[`description_${locale}`],
                                details: formatDate(article?.content?.publishdate),
                                tags: [article?.content?.game?.gameid],
                                author: article?.content?.user?.username,
                                onFirstButtonClick: () => {},
                                onSecondButtonClick: () => {},
                            }))}
                            onButtonClick={() => {}}
                        />
                    </div>
                )}
                {data?.relatedData?.relatedVideos?.length > 0 && (
                    <div className="flex mb-10 gap-x-5">
                        <SingleCard
                            heading={t("relatedVideos")}
                            name={"video"}
                            singleCardItemDetails={data.relatedData.relatedVideos.map((video: any) => ({
                                variant: "video",
                                id: video.videoid,
                                imageUrl: video.media_url, //This is video url for video
                                title: video.video_name,
                                description: video.summary,
                                tags: [],
                                onFirstButtonClick: () => {},
                                onSecondButtonClick: () => {},
                            }))}
                            onButtonClick={() => {}}
                        />
                    </div>
                )}
            </div>
        </>
    )
}
