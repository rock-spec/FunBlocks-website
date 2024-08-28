import React from "react"
import { Tag } from "@/components/Tag/Tag"
import { ColumnItems, SingleColumnProps } from "../ColumnItems/ColumnItems"
import { CustomButton } from "../Button/Button"

// Define the props interface
export interface ColumnProps {
    variant?: "game" | "article" | "news" | "search" | "featuredArticles"
    title: string
    author?: string
    details?: string
    description?: string
    tags?: string[]
    zone?: string
    buttonText?: string
    columnItems: Array<SingleColumnProps>
    onButtonClick?: () => void
    className?: string
    responsive?: boolean
}

export const Column = (props: ColumnProps) => {
    const { variant, title, columnItems, buttonText, onButtonClick = () => {}, className, responsive } = props


    return (
        <div
            className={`border relative border-black bg-floralWhite p-5 lg:w-[285px] h-fit  ${
                buttonText ? "h-[80%] lg:min-h-[650px] pb-[75px]" : ""
            }  ${responsive ? "sm:w-full bg-re mb-10 lg:mb-0" : ""} ${className} `}
        >
            {/* Row 1 */}
            <div className="flex justify-between items-center mb-5 ">
                <Tag text={`${title}`} type={"section"} />
            </div>

            <div className=" overflow-x-hidden w-full max-h-fit">
                <div
                    className={`flex w-full flex-col gap-${variant === "article" ? 6 : 5} ${
                        responsive
                            ? `sm:grid sm:grid-cols-2 md:grid-cols-3 lg:flex lg:w-full lg:flex-col lg:gap-${
                                  variant === "article" ? 6 : 5
                              }`
                            : ``
                    }`}
                >
                    {columnItems?.length > 0 ? (
                        columnItems.map((detail, index) => <ColumnItems key={index} {...detail} />)
                    ) : (
                        <p className="w-full text-center ">{`No related items `}</p>
                    )}
                </div>
            </div>

            {/* Row 3 */}
            <div className="flex  w-full  absolute left-0 bottom-4">
                {buttonText && (
                    <div className="mx-auto ">
                        <CustomButton
                            text={buttonText}
                            onClick={onButtonClick}
                            link={`/${variant}`}
                            height="50px"
                            width="138px"
                            useMedium={true}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}
