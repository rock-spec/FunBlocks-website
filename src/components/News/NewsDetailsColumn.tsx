import { Tag } from "../Tag/Tag"
import Image from "next/image"
import SingleCard from "../SingleCard/SingleCard"
import formatDate from "@/utils/dateFormat"
import { Cabin } from "next/font/google"
import { useTranslations } from "next-intl"
import { type Locale } from "@/i18n.config"
import MarkDownview from "../MarkdownViewer/MarkdownVew"

const cabin = Cabin({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })

export const NewsDetailsColumn = ({ data, locale }: { data: any; locale: Locale }) => {
    const t = useTranslations("Tags")

    const relatedData = data?.relatedData

    let game: any[] = []
    if (relatedData?.game?.status === "fulfilled") game = relatedData?.game?.value

    let relatedArticles: any[] = []
    if (relatedData?.relatedArticles?.status === "fulfilled")
        relatedArticles = relatedData?.relatedArticles?.value

    return (
        <>
            <div className="m-w-[895px] w-full ">
                <div
                    className={
                        "flex-col w-full mb-10 p-5 border border-[#161616] bg-[#FFFCF9] " + cabin.className
                    }
                >
                    <div className=" text-neutral-900 text-[28px] font-bold  leading-[33.60px] mb-[12px]">
                        {data?.news?.content?.[`title_${locale}`] || data?.news?.content?.title_en}
                    </div>
                    <div className="flex gap-1 mb-[24px]">
                        {game[0]?.gameid &&
                            [game[0]?.gameid].map((tag, index) => (
                                <Tag text={tag} key={index} type={"justTag"} />
                            ))}
                        <div className="justify-start items-center gap-2 flex ml-2">
                            <div className="opacity-80 text-neutral-900 text-sm font-normal  leading-[16.80px]">
                                {data?.news?.content?.author?.name}
                            </div>
                            <div className="w-[5px] h-[5px] opacity-80 bg-neutral-900" />
                            <div className="text-neutral-900 text-opacity-80 text-sm font-normal  leading-[16.80px]">
                                {formatDate(data?.news?.publishdate)}
                            </div>
                        </div>
                    </div>
{/* 
                    <div className="my-6">
                        <h1 className="font-semibold text-xl mt-6 mb-3">Summary</h1>
                        <p className="">
                            {data?.news?.content?.[`description_${locale}`] ||
                                data?.news?.content?.description_en}
                        </p>
                    </div> */}

                    {/* <Image
                        alt="banner"
                        height={487.44}
                        width={857.55}
                        className="mb-[24px] w-[855.58px] "
                        src={data?.news?.content?.image}
                    /> */}
                    <div>
                        <MarkDownview
                            source={
                                data?.news?.content?.[`content_${locale}`] || data?.news?.content?.content_en
                            }
                        />
                    </div>
                </div>
                <div className="flex mb-10 gap-x-5">
                    <SingleCard
                        heading={t("relatedArticles")}
                        name={"article"}
                        singleCardItemDetails={relatedArticles?.map((article: any) => ({
                            id: article?.articles?.articleid,
                            variant: "article",
                            imageUrl: `${article?.articles?.content.image}?height=360&width=720`,
                            title: article?.content?.[`title_${locale}`] || article?.content?.title_en,
                            description:
                                article?.articles?.content?.[`description_${locale}`] ||
                                article?.articles?.content?.description_en,
                            details: formatDate(article?.articles?.publishdate),
                            tags: [article?.category?.name],
                            author: article?.articles?.content?.user?.username,
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
