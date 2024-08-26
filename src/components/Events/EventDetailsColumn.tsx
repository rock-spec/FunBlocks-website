import React from "react"
import { Tag } from "../Tag/Tag"
import Image from "next/image"
import SingleCard from "../SingleCard/SingleCard"
import formatDate from "@/utils/dateFormat"
import formatTimestamp from "@/utils/formatdateInoriginalForm"
import { Cabin } from "next/font/google"
import BlueButton from "../Button/BlueButton"
import { useTranslations } from "next-intl"
import { Locale } from "@/i18n.config"

const cabin = Cabin({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })

export const EventDetailsColumn = ({ data, locale }: { data: any; locale: Locale }) => {
    const b = useTranslations("Buttons")
    const t = useTranslations("Tags")

    const eventDetails = data?.event

    const relatedGame = data?.relatedData?.game[0]
    // const relatedArticles = data?.relatedData?.relatedArticles
    const relatedVideos = data?.relatedData?.relatedVideos

    const relatedData = data?.relatedData

    let game: any[] = []
    if (relatedData?.game?.status === "fulfilled") game = relatedData?.game?.value

    let relatedArticles: any[] = []
    if (relatedData?.relatedArticles?.status === "fulfilled")
        relatedArticles = relatedData?.relatedArticles?.value

    return (
        <>
            <div className="m-w-[895px] w-full">
                <div
                    className={
                        "flex-col w-full mb-10 p-5 border border-[#161616] bg-[#FFFCF9] " + cabin.className
                    }
                >
                    <div className=" text-neutral-900 text-[28px] font-bold  leading-[33.60px] mb-[12px]">
                        {eventDetails?.[`title_${locale}`] || eventDetails.title_en}
                    </div>
                    <div className="flex gap-1 mb-[24px]">
                        {[game[0]?.gameid, game[0]?.engineid].map((tag, index) => (
                            <Tag
                                text={tag}
                                key={index}
                                type={"relevance"}
                                linkto={index != 0 ? "engine" : "game"}
                            />
                        ))}
                    </div>

                    <Image
                        alt="banner"
                        height={309}
                        width={850}
                        className="mb-[24px] w-full "
                        src={eventDetails.pic}
                    />

                    <div className="flex justify-between items-center mt-6">
                        <div className=" text-neutral-900 text-xl font-semibold pb-2 leading-normal mb-[12px] mt-[24px]">
                            Event Details
                        </div>
                        {eventDetails?.joinurl && (
                            <BlueButton
                                text={b("joinEvent")}
                                link={eventDetails?.joinurl}
                                width="w-[140px]"
                                bg="bg-[url('/buttons/join_event.svg')]"
                                bg_hover="bg-[url('/buttons/join_event_hover.svg')]"
                            />
                        )}
                    </div>

                    <div className="justify-start items-center gap-2 flex ">
                        <Image src="/date-icon.svg" alt="Date" width={12} height={12} />
                        <div className="text-neutral-900 text-opacity-80 text-sm font-normal  leading-[16.80px]">
                            {formatTimestamp(eventDetails.startdate)}
                            {eventDetails.enddate ? `- ${formatTimestamp(eventDetails.enddate)}` : ""}
                        </div>
                        <div className="w-[5px] h-[5px] opacity-80 bg-neutral-900" />
                        <div className="opacity-80 text-neutral-900 text-sm font-normal  leading-[16.80px]">
                            {eventDetails.timezone}
                        </div>
                    </div>
                    <div className="justify-start items-center gap-2 flex mt-2">
                        <Image
                            src="https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Clip%20path%20group-Id1e5vC4bAoV6FkGu6qRvtfZaM7czB.svg"
                            alt="Date"
                            width={12}
                            height={12}
                        />
                        <div className="text-neutral-900 text-opacity-80 text-sm font-normal  leading-[16.80px]">
                            {eventDetails.address}
                        </div>
                    </div>

                    <div className="mt-5 text-neutral-900 text-base font-normal h-[144px] overflow-y-auto  leading-6 mb-[20.28px]">
                        {eventDetails?.[`detail_${locale}`] || eventDetails.detail_en}
                    </div>
                </div>
                {relatedArticles.length > 0 && (
                    <div className="flex mb-10 gap-x-5">
                        <SingleCard
                            heading={t("relatedArticles")}
                            name={"article"}
                            singleCardItemDetails={relatedArticles.map((article: any) => ({
                                id: article?.articles?.articleid,
                                variant: "article",
                                imageUrl: `${article?.articles?.content?.image}?height=360&width=720`,
                                title:
                                    article?.articles?.content?.[`title_${locale}`] ||
                                    article?.articles?.content?.title_en,
                                description:
                                    article?.articles?.content?.[`description_${locale}`] ||
                                    article?.articles?.content?.description_en,
                                details: formatDate(article?.articles?.publishdate),
                                tags: [article?.articles?.content?.game?.gameid],
                                author: article?.articles?.content?.author?.name,
                                onFirstButtonClick: () => {},
                                onSecondButtonClick: () => {},
                            }))}
                            onButtonClick={() => {}}
                        />
                    </div>
                )}
                {relatedVideos.length > 0 && (
                    <div className="flex mb-10 gap-x-5">
                        <SingleCard
                            heading={t("relatedVideos")}
                            name={"video"}
                            singleCardItemDetails={relatedVideos.map((video: any) => ({
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
