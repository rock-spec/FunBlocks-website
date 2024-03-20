import React from "react";

import { CustomButton } from "../Button/Button";
import SearchInput from "../SearchInput/SearchInput";

import EngineCardComponet, { EngineCardComponentProps } from "./EngineCardComponet";




export const EngineColumn = () => {

    const singleCardItemDetails: EngineCardComponentProps[] =
        [
            {
                'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Group%2010724-MWIAHOGgX1avVIEnxLD6FJPk6Vl1hF.png",
                'title': 'MUD V1',
                'onClick': () => {
                },
            },
            {
                'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Group%2010725-4jddOnaiXmyGp2zFCHofNYxYAL0v3p.png",
                'title': 'MUD V1',
                'onClick': () => {
                },
            },
            {
                'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Group%2010726-ZdefNQk8MctPIabaN1cnL1HXqwSUPr.png",
                'title': 'MUD V1',
                'onClick': () => {
                },
            },
            {
                'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Group%2010725-4jddOnaiXmyGp2zFCHofNYxYAL0v3p.png",
                'title': 'MUD V1',
                'onClick': () => {
                },
            },
            {
                'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Group%2010726-ZdefNQk8MctPIabaN1cnL1HXqwSUPr.png",
                'title': 'MUD V1',
                'onClick': () => {
                },
            },
            {
                'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Group%2010725-4jddOnaiXmyGp2zFCHofNYxYAL0v3p.png",
                'title': 'MUD V1',
                'onClick': () => {
                },
            },
            {
                'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Group%2010724-MWIAHOGgX1avVIEnxLD6FJPk6Vl1hF.png",
                'title': 'MUD V1',
                'onClick': () => {
                },
            },
            {
                'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Group%2010724-MWIAHOGgX1avVIEnxLD6FJPk6Vl1hF.png",
                'title': 'MUD V1',
                'onClick': () => {
                },
            },
            {
                'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Group%2010724-MWIAHOGgX1avVIEnxLD6FJPk6Vl1hF.png",
                'title': 'MUD V1',
                'onClick': () => {
                },
            },

        ]


    return (
        <>
            <div className="w-[895px]">
                <div className="flex w-full mb-10">
                    <SearchInput varient="light" placeholder="Search for Keywords" />
                </div>
                <div className="flex mb-10 gap-x-5">
                    <div>
                        <div className="grid grid-cols-3 grid-rows-3 gap-4">
                            {singleCardItemDetails.map((detail, index) => (
                                <div className="p-5 border border-[#161616] bg-[#FFFCF9] h-[285px]">
                                    <EngineCardComponet key={index} {...detail} />
                                </div>
                            ))}

                        </div>
                        <div className="flex item-center w-full justify-center">
                            <CustomButton text="Show More" onClick={() => { }} size="15px" width="240px" />
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
};
