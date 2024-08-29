import { Tag } from "../Tag/Tag"
import Image from "next/image"
import SingleCard from "../SingleCard/SingleCard"
import formatDate from "@/utils/dateFormat"
import { renderHTML } from "@/utils/renderhtml"
import { Cabin } from "next/font/google"
import { useTranslations } from "next-intl"
import { Locale } from "@/i18n.config"
import MarkDownview from "../MarkdownViewer/MarkdownVew"
import SingleVideoCardItem from "../SingleCard/SingleVideoCardItem"

const cabin = Cabin({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })

export const ArticleDetailsColumn = ({
    data,
    locale,
    articleId,
}: {
    data: any
    locale: Locale
    articleId: string
}) => {
    const t = useTranslations("Tags")

    const relatedData = data?.relatedData

    let games: any = []
    let relatedArticles: any = []
    let relatedVideos: any = []
    let singleCardItemDetails = []

    relatedData?.forEach((item: any) => {
        if (item.game?.status === "fulfilled") {
            games.push(...item.game.value)
        }
        if (item.relatedArticles?.status === "fulfilled" && Array.isArray(item.relatedArticles.value)) {
            item.relatedArticles.value.forEach((article: any) => {
                if (article.articles.articleid !== articleId) {
                    relatedArticles.push(article)
                }
            })
        }
        if (item.relatedVideos?.status === "fulfilled") {
            relatedVideos.push(...item.relatedVideos.value)
        }
    })

    singleCardItemDetails = relatedVideos.map((video: any) => ({
        key: video?.videoid,
        variant: "video",
        id: video?.videoid,
        imageUrl: video?.media_url, // This is video URL for video
        title: video?.video_name,
        description: video?.summary,
        tags: [],
        gameid: video?.gameid,
        date: video?.publishdate,
    }))

    return (
        <>
            <div className="w-[895px] ">
                <div
                    className={
                        "flex-col w-full mb-10 p-5 border border-[#161616] bg-[#FFFCF9] " + cabin.className
                    }
                >
                    <div className=" text-neutral-900 text-[28px] font-bold  leading-[33.60px] mb-[12px]">
                        {data.article.content[`title_${locale}`] ||
                            data.article.content?.title_en ||
                            data.article.content?.title_zh}
                    </div>
                    <div className="flex gap-1 mb-[24px]">
                        {/* {game.length>0  && [game[0].gameid].map((tag, index) => (
                            <Tag text={tag} key={index} type={"relevance"} linkto="game" />
                        ))} */}
                        <div className="justify-start items-center gap-2 flex ml-2">
                            <div className="opacity-80 text-neutral-900 text-sm font-normal  leading-[16.80px] capitalize">
                                By {data?.article?.content?.author?.name}
                            </div>
                            <div className="w-[5px] h-[5px] opacity-80 bg-neutral-900" />
                            <div className="text-neutral-900 text-opacity-80 text-sm font-normal  leading-[16.80px]">
                                {formatDate(data?.article?.publishdate)}
                            </div>
                        </div>
                    </div>
                    <div className="my-6">
                        <h1 className="font-semibold text-xl mt-6 mb-3">{t("summary")}</h1>
                        <p className="">
                            {data?.article?.content?.[`description_${locale}`] ||
                                data?.article?.content?.description_en ||
                                data?.article?.content?.description_zh}
                        </p>
                    </div>
                    <Image
                        alt="banner"
                        height={487.44}
                        width={857.55}
                        className="mb-[24px] object-cover object-center w-[855.58px] "
                        src={data.article.content.image}
                    />
                    <div className="render">
                        <MarkDownview
                            source={
                                data?.article?.content?.[`content_${locale}`] ||
                                data?.article?.content?.content_en || data?.article?.content?.content_zh
                            }
                        />
                    </div>
                </div>
                <div className="flex mb-10 gap-x-5   ">
                    <SingleCard
                        heading={t("relatedArticles")}
                        name={"article"}
                        singleCardItemDetails={relatedArticles.map((article: any) => ({
                            id: article?.articles?.articleid,
                            variant: "article",
                            imageUrl: `${article?.articles?.content?.image}?height=360&width=720`,
                            title: article?.articles?.content?.[`title_${locale}`],
                            description: article?.articles?.content?.[`description_${locale}`],
                            details: formatDate(article?.articles?.publishdate),
                            tags: [article?.articles?.content?.game?.gameid],
                            author: article?.articles?.content?.author?.name,
                            onFirstButtonClick: () => {},
                            onSecondButtonClick: () => {},
                        }))}
                        onButtonClick={() => {}}
                    />
                </div>
                <div className="bg-[#FFFCF9] p-5 border border-[#161616]">
                    <div className="w-fit mb-5">
                        <Tag text={`${"Related Videos"}`} type={"section"} />
                    </div>

                    <div className="flex gap-x-5">
                        {singleCardItemDetails.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
                                {singleCardItemDetails.map((detail: any, index: any) => (
                                    <div className="p-5 " key={index}>
                                        <SingleVideoCardItem key={index} {...detail} />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="w-full text-center ">No videos found</div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
