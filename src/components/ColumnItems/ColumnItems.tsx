import React from "react";
import Button from "@mui/joy/Button";
import { Tag } from "@/components/Tag/Tag";
import Image from "next/image";
import Link from "next/link";

// Define the props interface
export interface SingleColumnProps {
    id?: string,
    variant: 'game' | 'article' | 'news';
    title: string;
    author?: string;
    details?: string;
    description?: string;
    tags?: string[];
    zone?: string;
    imageUrl: string;
    onClick?: () => void;
}

export const ColumnItems = (props: SingleColumnProps) => {
    const { variant, title, onClick, imageUrl, tags = [], id } = props;

    const img_size = 180;
    const containerHeight = 80;
    const imageHeight = 80;
    const imageWidth = 80;
    const classnames = variant === "news" || variant === "article" ? 'line-clamp-3' : '';

    return (
        <Link href={`/${variant}/${id || "demoId"}`}>
            <div className={`w-[245px] h-[${containerHeight}px] justify-start items-start gap-[15px] inline-flex cursor-pointer`}>
                <Image src={imageUrl} height={img_size} width={img_size} alt=""
                    className={`h-[85px] w-[85px] border-[3.2px] rounded-[7px] border-neutral-900/85 object-cover`} />
                <div className="grow shrink basis-0 h-full flex-col justify-start items-start gap-2 inline-flex">
                    <div className={`self-stretch text-neutral-900 text-sm font-bold font-['Cabin'] leading-tight ${classnames}`}>
                        {title}
                    </div>
                    <div className="self-stretch justify-start items-end gap-[5px] inline-flex ">
                        {variant !== 'article' && tags.slice(0, 1).map((tag, index) => (
                            <Tag text={tag} key={index} type={'relevance'} />
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
};
