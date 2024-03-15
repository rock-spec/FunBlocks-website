import React from "react";
import Button from "@mui/joy/Button";
import { Tag } from "@/components/Tag/Tag";
import Image from "next/image";

// Define the props interface
export interface SingleColumnProps {
    variant: 'game' | 'article';
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
    const { variant, title, onClick, imageUrl, tags = [] } = props;
    return (
        <div className="w-[245px] h-[85px] justify-start items-start gap-[15px] inline-flex">

            <Image src={imageUrl} height={80} width={80} alt="" className="h-[80px] w-[80px]" />
            <div className="grow shrink basis-0 h-[85px] flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch text-neutral-900 text-base font-bold font-['Cabin'] leading-tight">RoboCop: Rogue City</div>
                <div className="self-stretch justify-start items-end gap-[5px] inline-flex">
                    {tags.map((tag, index) => (
                        <Tag text={tag} key={index} type={'relevance'} />
                    ))}
                </div>
            </div>
        </div>
    );
};
