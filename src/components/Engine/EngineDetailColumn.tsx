import React from "react";
import ArticleCard from "@/components/ArticleCard/ArticleCard";
import SingleCard from "@/components/SingleCard/SingleCard";
import { CustomButton } from "@/components/Button/Button";
import Image from "next/image";
import { Tag } from "@/components/Tag/Tag";
import { Column } from "../Column/Column";
import GameCardComponet, { GameCardComponentProps } from "../Games/GameCardComponet";

export const EngineDetailColumn = () => {

    const singleCardItemDetails: GameCardComponentProps[] =
        [
            {
                game_id: "123",
                engine: "paima",
                engine_logo: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/bolt%20logo-GeDmp6kt980WP2Z0ch3gDvtkNrdZkK.svg",
                'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Game%20Thumbail-imKmzXRUOYiTlqkK85KeumNoUIFL0o.png",
                'title': 'Alchemist',
                'description': 'The World Adventure',
                'tags': ['online', 'playtest'],
                'onClick': () => {
                },
            },

            {
                game_id: "123",
                engine: "mud v2",
                engine_logo: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/bolt%20logo-1-eyMwzsUTiIgfNQdNrEYhbGPlLtez0d.svg",

                'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/image%2090-i60QEO453Pelab4EsRedYMtXuzGkIY.png",
                'title': 'ClimBros',
                'description': 'Them Mountain Ride',
                'tags': ['online', 'playtest'],
                'onClick': () => {
                },
            },
            {
                game_id: "123",
                engine: "world engine",
                engine_logo: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/bolt%20logo-2-t5gXRpZAHPvDZ9TIGzvnUhIPY5TgYk.svg",
                'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/image%2092-gZQHVixbfRKHN3R806WteVL7mHxc5Z.png",
                'title': 'The Uplift',
                'description': 'Crypto Mind',
                'tags': ['online', 'playtest'],
                'onClick': () => {
                },
            },]
    return (
        <>
            <div className="max-w-[895px] w-full">
                <div className="h-fit-content items-stretch flex mb-10 gap-x-5 ">
                    <div className="w-full p-5 bg-stone-50   border border-neutral-900 flex md:flex-row flex-col justify-end items-start gap-6  h-full">

                        {/* image container */}
                        <div className="relative md:w-[50%] w-full">
                            {/* main banner image  */}
                            <Image src={"https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/game%20(5)-6oU68Ivx1882hoKKQMWom7yAEApTQa.png"} width={457} height={337} alt="" className="rounded-md w-full" />

                            {/* /Star Image/ */}
                            {/* <Image src={"https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Tag-Swq9b5dkBzXvaPrsQFkgnAavhvTx5O.svg"} height={32} width={32} alt="" className="absolute bottom-[4%] left-[2%]  hover:scale-110 transition-all cursor-pointer" /> */}

                            {/* Thunderbolt logo with tag*/}
                            {/* <div className="flex absolute justify-start items-center top-[4%] left-[2%] cursor-pointer hover:scale-110 transition-all">

                                <Image src={"https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/bolt%20logo-M3SSX7VCK0Xc3OUZQo8qe4TDcRv53a.svg"} height={32} width={32} alt="" className="rounded-none" />
                                <Tag text="BOLT" />

                            </div> */}
                        </div>

                        <div className="md:w-[50%] w-full">
                            <div className=" text-neutral-900 text-[28px] font-bold font-['Cabin'] leading-[48px] ">
                                MUD V1
                            </div>

                            <div className=" text-neutral-900 text-base font-normal font-['Cabin']">MUD V1, short for Multi-User Dungeon Version 1, is an early version of the MUD (Multi-User Dungeon) concept, which laid the groundwork for the development of text-based online multiplayer games. MUDs are text-based virtual worlds where players can interact with each other and the environment using text commands.
                            </div>
                            <br />

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-3">

                                <div className="text-neutral-900 text-base font-medium font-['Cabin'] underline leading-tight tracking-tight flex justify-start items-center cursor-pointer">

                                    <Image src={"https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Frame%203184932-bSRcfFmN2KJ4lSUyJxVUZBs8dZu8k9.svg"} height={24} width={24} alt="" className="h-6 mr-1" />
                                    <p> MUD V1</p>
                                </div>

                                <div className="text-neutral-900 text-base font-medium font-['Cabin'] underline leading-tight tracking-tight flex justify-start items-center cursor-pointer">

                                    <Image src={"https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Frame%203184932-1-PZh4LhAvRZK9PlN7UP5ctTh11SfFFQ.svg"} height={24} width={24} alt="" className="h-6 mr-1" />
                                    <p> Documentations</p>
                                </div>
                                <div className="text-neutral-900 text-base font-medium font-['Cabin'] underline leading-tight tracking-tight flex justify-start items-center cursor-pointer">

                                    <Image src={"https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Frame%203184932-2-AnqrY48rvFGY6C4mxEVx1GoEZfBpiN.svg"} height={24} width={24} alt="" className="h-6 mr-1" />
                                    <p>Twitter</p>
                                </div>
                                <div className="text-neutral-900 text-base font-medium font-['Cabin'] underline leading-tight tracking-tight flex justify-start items-center cursor-pointer">

                                    <Image src={"https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Frame%203184932-3-nw373W2KTWzNMkQ8ZL6ejHFaOyckdZ.svg"} height={24} width={24} alt="" className="h-6 mr-1" />
                                    <p>Github</p>
                                </div>



                            </div>


                        </div>
                    </div>
                </div>
                <div className="flex mb-10  flex-col  items-start gap-5">

                    <Tag text={"MUD V1 GAMes"} type={'section'} />
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                        {singleCardItemDetails.map((detail, index) => (
                            <div className="p-5 border border-[#161616] bg-[#FFFCF9]" key={index}>
                                <GameCardComponet {...detail} />
                            </div>
                        ))}
                    </div>
                </div>


                <div className="flex mb-10 gap-x-5">
                    <SingleCard
                        name={'article'}

                        heading="related articles"
                        singleCardItemDetails={
                            [
                                {
                                    'variant': 'article',
                                    'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Frame%203184843-lvW7VjPWajYBlfUfol1CSdb5jGIBho.png?height=360&width=720",
                                    'title': 'The Strongest Argument for Crypto-Native Gaming',
                                    'description': "In the ever-evolving world of video games, staying ahead of the curve is not just about keeping your software updated; it's about immersing yourself in the heart of gaming culture",
                                    'details': 'February 24, 2024 at 10:50 AM',
                                    'tags': ['game'],
                                    'author': "Janson Will",
                                    'onFirstButtonClick': () => {
                                    },
                                    'onSecondButtonClick': () => {
                                    },
                                },

                                {
                                    'variant': 'article',
                                    'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Frame%203184843%20(1)-oGAvZEn2wnE2aa3MPruck6hoXfCowD.png?height=360&width=720",
                                    'title': 'Introduction to the Autonomous World: THE CASE FOR AUTONOMOUS WORLDS',
                                    'description': "In the ever-evolving world of video games, staying ahead of the curve is not just about keeping your software updated; it's about immersing yourself in the heart of gaming culture",
                                    'details': 'February 24, 2024 at 10:50 AM',
                                    'tags': ['game'],
                                    'author': "Janson Will",
                                    'onFirstButtonClick': () => {
                                    },
                                    'onSecondButtonClick': () => {
                                    },
                                },
                                {
                                    'variant': 'article',
                                    'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Frame%203184843%20(2)-G8kMzAkSKf1U1W5Akzo3DhwgFS9ww9.png?height=360&width=720",
                                    'title': 'Introduction to the Autonomous World: THE CASE FOR AUTONOMOUS WORLDS',
                                    'description': "In the ever-evolving world of video games, staying ahead of the curve is not just about keeping your software updated; it's about immersing yourself in the heart of gaming culture",
                                    'details': 'February 24, 2024 at 10:50 AM',
                                    'tags': ['game'],
                                    'author': "Janson Will",
                                    'onFirstButtonClick': () => {
                                    },
                                    'onSecondButtonClick': () => {
                                    },
                                },
                            ]
                        }
                        buttonText={''}
                        onButtonClick={() => {
                        }}
                    />
                </div>

            </div>
        </>
    );
};
