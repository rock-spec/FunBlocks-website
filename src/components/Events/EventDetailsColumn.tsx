import React from "react";
import SingleCardItem, { SingleCardItemProps } from "../SingleCardItem/SingleCardItem";
import { CustomButton } from "../Button/Button";
import SearchInput from "../SearchInput/SearchInput";
import { IoIosArrowDown } from "react-icons/io";
import { Tag } from "../Tag/Tag";
import Image from "next/image";
import SingleCard from "../SingleCard/SingleCard";




export const EventDetailsColumn = () => {

    return (
        <>
            <div className="w-[895px]">
                <div className="flex-col w-full mb-10 p-5 border border-[#161616] bg-[#FFFCF9]">
                    <div className="w-[850px] text-neutral-900 text-[28px] font-bold font-['Cabin'] leading-[33.60px] mb-[12px]">The Strongest Argument for Crypto-Native Gaming</div>
                    <div className="flex gap-1 mb-[24px]">
                        {['playtest', 'offline'].map((tag, index) => (
                            <Tag text={tag} key={index} type={'relevance'} />
                        ))}

                    </div>

                    <Image alt="banner" height={309} width={850} className="mb-[24px] w-full h-[309px]" src="https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/thumbnail%20(3)-mhg4WOYQNb55ARMbFgNXHRQewXQ7yR.png" />


                    <div className="flex justify-between items-center  mt-[-40px]">
                        <div className="w-[850px] text-neutral-900 text-xl font-semibold font-['Cabin'] leading-[30px] mb-[12px] mt-[24px]">Event Details</div>
                        <CustomButton text="Join Event" onClick={() => { }} type="primary" size="13px" width="220px" />
                    </div>

                    <div className="justify-start items-center gap-2 flex ">
                        <Image src="/date-icon.svg" alt="Date" width={12} height={12} />
                        <div className="text-neutral-900 text-opacity-80 text-sm font-normal font-['Cabin'] leading-[16.80px]">October 24th, 2023 - October 25th, 2023</div>
                        <div className="w-[5px] h-[5px] opacity-80 bg-neutral-900" />
                        <div className="opacity-80 text-neutral-900 text-sm font-normal font-['Cabin'] leading-[16.80px]">EST</div>

                    </div>
                    <div className="justify-start items-center gap-2 flex mt-2">
                        <Image src="https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Clip%20path%20group-Id1e5vC4bAoV6FkGu6qRvtfZaM7czB.svg" alt="Date" width={12} height={12} />
                        <div className="text-neutral-900 text-opacity-80 text-sm font-normal font-['Cabin'] leading-[16.80px]">Maddison Square Garden, NYC</div>
                    </div>

                    <div className="mt-5 text-neutral-900 text-base font-normal font-['Cabin'] leading-normal mb-[20.28px]">
                        The evolution of multiplayer gaming from couch co-op to global connectivity reflects broader changes in society's relationship with technology, entertainment, and each other. As multiplayer gaming continues to evolve, it remains a testament to the human desire for connection, competition, and shared experiences. In every pixelated battle fought, every virtual world explored, and every high score achieved together, multiplayer gaming celebrates the joy of connecting with others through the universal language of play.
                    </div>

                </div>
                <div className="flex mb-10 gap-x-5">
                    <SingleCard
                        heading="related articles"
                        name={'article'}
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

                            ]
                        }

                        onButtonClick={() => {
                        }}
                    />
                </div>
                <div className="flex mb-10 gap-x-5">
                    <SingleCard
                        heading="related videos"
                        name={'video'}
                        singleCardItemDetails={
                            [
                                {
                                    'variant': 'video',
                                    'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Frame%203184843%20(3)-5zWDNu18KhXQQBqMhnDkdenKizVhxY.png?height=360&width=720",
                                    'title': 'The Strongest Argument for Crypto-Native Gaming',
                                    'description': 'Loot Survivor[1] is the first game in the Realms Autonomous Worlds ecosystem. It was developed by Loothero[2], a senior member of Bibliotheca DAO, and uses a unique Play2Die mechanism. The game is inspired by the backstory and gameplay of the original Loot Project community [3], where players need to fight beasts, clear obstacles, collect equipment to survive, and compete for higher positions in the leaderboards.',
                                    'tags': ['online', 'playtest'],
                                    'onFirstButtonClick': () => {
                                    },
                                    'onSecondButtonClick': () => {
                                    },
                                },

                                {
                                    'variant': 'video',
                                    'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Frame%203184844-PONGpPl6WzeMR6Lzp6s4cwxzgGi1Lf.png?height=360&width=720",
                                    'title': 'Loot Survivor and the Emergence of Onchain Arcade',
                                    'description': 'Loot Survivor[1] is the first game in the Realms Autonomous Worlds ecosystem. It was developed by Loothero[2], a senior member of Bibliotheca DAO, and uses a unique Play2Die mechanism. The game is inspired by the backstory and gameplay of the original Loot Project community [3], where players need to fight beasts, clear obstacles, collect equipment to survive, and compete for higher positions in the leaderboards.',
                                    'tags': ['online', 'playtest'],
                                    'onFirstButtonClick': () => {
                                    },
                                    'onSecondButtonClick': () => {
                                    },
                                },

                            ]
                        }
                        onButtonClick={() => {
                        }}
                    />

                </div>

            </div>
        </>
    );
};
