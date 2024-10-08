import React from "react"
import SingleCard from "@/components/SingleCard/SingleCard"
import Image from "next/image"
import { Tag } from "@/components/Tag/Tag"
import formatDate from "@/utils/dateFormat"
import { Cabin } from "next/font/google"
import BlueButton from "../Button/BlueButton"
const cabin = Cabin({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })
import { getTranslations } from "next-intl/server"
import { type Locale } from "@/i18n.config"

export const GameDetailColumn = async ({ data, locale }: { data: any; locale: Locale }) => {
    const t = await getTranslations("Tags")
    const b = await getTranslations("Buttons")

    let game: any = {}
    if (data?.game?.status === "fulfilled") game = data?.game?.value[0]
    const engineTag = [game?.engineid]
    const tags = [game?.gamestudioid, game?.blockchainid]

    let relatedArticles: any[] = []
    if (data?.relatedArticles?.status === "fulfilled") relatedArticles = data?.relatedArticles?.value

    let relatedVideos: any[] = []
    if (data?.relatedVideos?.status === "fulfilled") relatedVideos = data?.relatedVideos?.value

    let relatedEvents: any[] = []
    if (data?.relatedEvents?.status === "fulfilled") relatedEvents = data?.relatedEvents?.value

    return (
        <>
            <div className="m-w-[895px] w-full">
                <div className=" items-stretch flex mb-10 gap-x-5">
                    <div className="w-full relative p-5 bg-stone-50 border border-neutral-900 flex md:flex-row flex-col items-start gap-6 h-full ">
                        <div className="relative min-w-[467px] h-[350px] max-w-[50%]">
                            <Image
                                src={game?.pic}
                                width={467}
                                height={350}
                                alt=""
                                className="rounded-md object-center w-[467px] h-[350px]"
                            />
                        </div>

                        <div
                            className={
                                "md:min-w-[370px] md:max-w-[50%]: w-full flex flex-col justify-between h-full " +
                                cabin.className
                            }
                        >
                            <div className="">
                                <div className="text-neutral-900 text-[28px] font-bold leading-[48px]">
                                    {game?.game_name}
                                </div>

                                <div className="text-neutral-900 text-base font-normal leading-6 h-[144px] overflow-y-auto">
                                    {locale === "en" ? game?.game_desc : game?.game_desc_zh}
                                </div>
                                <div className="flex gap-x-1 mt-3">
                                    {engineTag.map((tag, i) => (
                                        <Tag text={tag} type={"relevance"} linkto="engine" />
                                    ))}
                                    {tags.map((tag, i) => (
                                        <Tag text={tag} type={"justTag"} />
                                    ))}
                                </div>
                            </div>

                            <div className="absolute bottom-5 mt-auto">
                                {game?.website !== null && game?.website !== "" && (
                                    <BlueButton
                                        text={b("playNow")}
                                        link={game?.website}
                                        width="w-[132px]"
                                        bg={"bg-[url('/buttons/play_now.svg')]"}
                                        bg_hover={"hover:bg-[url('/buttons/play_now_hover.svg')]"}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {relatedArticles.length > 0 && (
                    <div className="flex mb-10 gap-x-5 ">
                        <SingleCard
                            name={"article"}
                            heading={t("relatedArticles")}
                            singleCardItemDetails={relatedArticles?.map((article: any) => ({
                                id: article?.articleid,
                                variant: "article",
                                imageUrl: `${article?.articles?.content?.image}?height=360&width=720`,
                                title:
                                    article?.articles?.content?.[`title_${locale}`] ||
                                    article?.articles?.content?.title_en,
                                description:
                                    article?.articles?.content?.[`description_${locale}`] ||
                                    article?.articles?.content?.description_en,
                                details: formatDate(article?.articles?.publishdate),
                                tags: ["GAME"],
                                author: article?.articles?.content?.author?.name,
                                onFirstButtonClick: () => {},
                                onSecondButtonClick: () => {},
                            }))}
                            buttonText={b("viewMoreArticles")}
                            onButtonClick={() => {}}
                        />
                    </div>
                )}
                {relatedVideos.length > 0 && (
                    <div className="flex mb-10 gap-x-5">
                        <SingleCard
                            heading={t("relatedVideos")}
                            name={"videos"}
                            singleCardItemDetails={relatedVideos?.map((video: any) => ({
                                variant: "video",
                                id: video?.videoid,
                                imageUrl: video?.media_url, //This is video url for video
                                title: video?.video_name,
                                description: video?.summary,
                                tags: [],
                                onFirstButtonClick: () => {},
                                onSecondButtonClick: () => {},
                            }))}
                            buttonText={b("viewMoreVideos")}
                            onButtonClick={() => {}}
                        />
                    </div>
                )}
                {relatedEvents.length > 0 && (
                    <div className="flex mb-10 gap-x-5">
                        <SingleCard
                            name={"event"}
                            heading={t("relatedEvents")}
                            singleCardItemDetails={relatedEvents?.map((event: any) => ({
                                url: event?.joinurl,
                                id: event?.eventid,
                                variant: "event",
                                imageUrl: `${event.pic}?height=360&width=720`,
                                title: event?.[`title_${locale}`] || event.title_en,
                                details: `${formatDate(event?.startdate)} - ${formatDate(event.enddate)}`,
                                timezone: event?.timezone?.split(":")[0],
                                tags: [event?.game?.gameid],
                                onFirstButtonClick: () => {},
                                onSecondButtonClick: () => {},
                            }))}
                            buttonText={b("viewMoreEvents")}
                            onButtonClick={() => {}}
                        />
                    </div>
                )}
            </div>
        </>
    )
}
