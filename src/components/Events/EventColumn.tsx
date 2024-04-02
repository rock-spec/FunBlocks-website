import React from "react";
import SingleCardItem, { SingleCardItemProps } from "../SingleCardItem/SingleCardItem";
import { CustomButton } from "../Button/Button";
import SearchInput from "../SearchInput/SearchInput";
import { IoIosArrowDown } from "react-icons/io";




export const EventColumn = () => {

    const singleCardItemDetails: SingleCardItemProps[] =
        [
            {
                'variant': 'event',
                'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/sdsadfdasfdas-2WG67OTCZhpMuTKA19b7yJ91khTlgw.png?height=360&width=720",
                'title': 'The Strongest Argument for Crypto-Native Gaming',
                'details': 'October 24th, 2023 - October 25th, 2023',
                'zone': "EST",
                'tags': ['online', 'playtest'],
                'onFirstButtonClick': () => {
                },
                'onSecondButtonClick': () => {
                },
            },

            {
                'variant': 'event',
                'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/thumbnail%20(2)-bOEjitwjBCCiwscUyj71ma09XB1sRN.png?height=360&width=720",
                'title': 'Loot Survivor and the Emergence of Onchain Arcades',
                'details': 'October 24th, 2023 - October 25th, 2023',
                'zone': "EST",
                'tags': ['online', 'playtest'],
                'onFirstButtonClick': () => {
                },
                'onSecondButtonClick': () => {
                },
            },
            {
                'variant': 'event',
                'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/sdsadfdasfdas-2WG67OTCZhpMuTKA19b7yJ91khTlgw.png?height=360&width=720",
                'title': 'The Strongest Argument for Crypto-Native Gaming',
                'details': 'October 24th, 2023 - October 25th, 2023',
                'zone': "EST",
                'tags': ['online', 'playtest'],
                'onFirstButtonClick': () => {
                },
                'onSecondButtonClick': () => {
                },
            },

            {
                'variant': 'event',
                'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/thumbnail%20(2)-bOEjitwjBCCiwscUyj71ma09XB1sRN.png?height=360&width=720",
                'title': 'Loot Survivor and the Emergence of Onchain Arcades',
                'details': 'October 24th, 2023 - October 25th, 2023',
                'zone': "EST",
                'tags': ['online', 'playtest'],
                'onFirstButtonClick': () => {
                },
                'onSecondButtonClick': () => {
                },
            },
            {
                'variant': 'event',
                'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/sdsadfdasfdas-2WG67OTCZhpMuTKA19b7yJ91khTlgw.png?height=360&width=720",
                'title': 'The Strongest Argument for Crypto-Native Gaming',
                'details': 'October 24th, 2023 - October 25th, 2023',
                'zone': "EST",
                'tags': ['online', 'playtest'],
                'onFirstButtonClick': () => {
                },
                'onSecondButtonClick': () => {
                },
            },

            {
                'variant': 'event',
                'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/thumbnail%20(2)-bOEjitwjBCCiwscUyj71ma09XB1sRN.png?height=360&width=720",
                'title': 'Loot Survivor and the Emergence of Onchain Arcades',
                'details': 'October 24th, 2023 - October 25th, 2023',
                'zone': "EST",
                'tags': ['online', 'playtest'],
                'onFirstButtonClick': () => {
                },
                'onSecondButtonClick': () => {
                },
            },
            {
                'variant': 'event',
                'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/sdsadfdasfdas-2WG67OTCZhpMuTKA19b7yJ91khTlgw.png?height=360&width=720",
                'title': 'The Strongest Argument for Crypto-Native Gaming',
                'details': 'October 24th, 2023 - October 25th, 2023',
                'zone': "EST",
                'tags': ['online', 'playtest'],
                'onFirstButtonClick': () => {
                },
                'onSecondButtonClick': () => {
                },
            },

            {
                'variant': 'event',
                'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/thumbnail%20(2)-bOEjitwjBCCiwscUyj71ma09XB1sRN.png?height=360&width=720",
                'title': 'Loot Survivor and the Emergence of Onchain Arcades',
                'details': 'October 24th, 2023 - October 25th, 2023',
                'zone': "EST",
                'tags': ['online', 'playtest'],
                'onFirstButtonClick': () => {
                },
                'onSecondButtonClick': () => {
                },
            },
        ]



    return (
        <>
            <div className="lg:w-[895px] w-full">
                <div className="flex lg:flex-row flex-col w-full mb-10">
                    <div className="h-58px">
                        <SearchInput varient="light" placeholder="Search for Keywords" />
                    </div>
                    <div className="flex">
                        <CustomButton onClick={() => { }} size='13px' text='Type' height='42px' icon={<IoIosArrowDown />} />
                        <CustomButton onClick={() => { }} size='13px' text='Status' height='42px' icon={<IoIosArrowDown />} />
                        <CustomButton onClick={() => { }} size='13px' text='Category' height='42px' icon={<IoIosArrowDown />} />
                    </div>
                </div>
                <div className="flex mb-10 gap-x-5">

                    <div className="flex flex-col flex-1 items-start gap-5">
                        {singleCardItemDetails.map((detail, index) => (
                            <div className="p-5 border border-[#161616] bg-[#FFFCF9]">
                                <SingleCardItem key={index} {...detail} />
                            </div>
                        ))}
                        <div className="flex item-center w-full justify-center">
                            <CustomButton text="Show More" onClick={() => { }} size="15px" width="240px" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
