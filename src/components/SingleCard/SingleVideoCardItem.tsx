import React, { useState } from 'react';
import Image from 'next/image';
import Button from "@mui/joy/Button";
import { Tag } from '../Tag/Tag';
import { CustomButton } from '../Button/Button';
import { SingleCardItemProps } from '../SingleCardItem/SingleCardItem';
import Link from 'next/link';

const SingleVideoCardItem = (props: SingleCardItemProps) => {
    const { variant, imageUrl, zone, title, description = "", details = "", onFirstButtonClick, onSecondButtonClick, tags = [], author = "" } = props;



    return (

        <Link href={`/${variant}/id`}>
            <div className=" gap-6 shadow-sm">
                {/* First Column: Image */}
                <div className="w-full h-[339px] rounded-lg flex-col justify-start items-start gap-6 inline-flex">
                    <div className="relative w-full rounded-md border border-[#161616] overflow-hidden ">

                        <Image
                            className=' w-full h-full object-cover'
                            src={imageUrl}
                            alt="Image"
                            width={427}
                            height={237}
                            layout="fixed"
                            objectFit="cover"
                            objectPosition="center"
                        />

                        <div className="hover:scale-110 transition-all cursor-pointer active:scale-95 absolute bottom-[50%] left-[50%] translate-x-[-50%] translate-y-[50%] shadow-md">
                            <Image
                                src="/play-button.svg"
                                alt="Play"
                                width={50}
                                height={50}
                            />

                        </div>
                    </div>
                    <div className="h-[82px] flex-col justify-center items-start gap-10 flex">
                        <div className="self-stretch h-[82px] flex-col justify-center items-start gap-3 flex">
                            {/* Show only two lines of description */}
                            <div className={` text-neutral-900 text-md font-bold font-['Cabin'] leading-snug `}>
                                {title}
                            </div>
                            <div className={`self-stretch text-neutral-900 w-full font-normal font-['Cabin'] leading-normal  line-clamp-2`}>
                                {description}
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default SingleVideoCardItem;
