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

    const relatedData = data?.relatedData

    let game: any[] = []
    if (relatedData?.game?.status === "fulfilled") game = relatedData?.game?.value

    let relatedArticles: any[] = []
    if (relatedData?.relatedArticles?.status === "fulfilled")
        relatedArticles = relatedData?.relatedArticles?.value

    return (
        <>
            <div className="w-[895px] ">
                <div
                    className={
                        "flex-col w-full mb-10 p-5 border border-[#161616] bg-[#FFFCF9] " + cabin.className
                    }
                >
                    <div className=" text-neutral-900 text-[28px] font-bold  leading-[33.60px] mb-[12px]">
                        {data.article.content[`title_${locale}`] || data.article.content?.title_en}
                    </div>
                    <div className="flex gap-1 mb-[24px]">
                        {[game[0].gameid].map((tag, index) => (
                            <Tag text={tag} key={index} type={"relevance"} linkto="game" />
                        ))}
                        <div className="justify-start items-center gap-2 flex ml-2">
                            <div className="opacity-80 text-neutral-900 text-sm font-normal  leading-[16.80px] capitalize">
                                By {data?.article?.content?.author?.name}
                            </div>
                            <div className="w-[5px] h-[5px] opacity-80 bg-neutral-900" />
                            <div className="text-neutral-900 text-opacity-80 text-sm font-normal  leading-[16.80px]">
                                {formatDate(data.article.content.publishdate)}
                            </div>
                        </div>
                    </div>
                    <div className="my-6">
                        <h1 className="font-semibold text-xl mt-6 mb-3">Summary</h1>
                        <p className="">
                            {data?.article?.content?.[`description_${locale}`] ||
                                data?.article?.content?.description_en}
                        </p>
                    </div>
                    <Image
                        alt="banner"
                        height={487.44}
                        width={857.55}
                        className="mb-[24px] object-cover object-center w-[855.58px] "
                        src={data.article.content.image}
                    />
                    <div className="text-neutral-900 text-base font-normal  leading-normal mb-[20.28px] break-words">
                        {(data?.article?.content?.[`content_${locale}`] ||
                            data?.article?.content?.content_en) &&
                            renderHTML(
                                data?.article?.content?.[`content_${locale}`] ||
                                    data?.article?.content?.content_en
                            )}
                    </div>
                </div>
                {data?.relatedData?.relatedArticles?.length > 0 && (
                    <div className="flex mb-10 gap-x-5">
                        <SingleCard
                            heading={t("relatedArticles")}
                            name={"article"}
                            singleCardItemDetails={relatedArticles.map((article: any) => ({
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
