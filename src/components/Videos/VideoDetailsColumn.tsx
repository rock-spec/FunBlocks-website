import React from "react";
import { Tag } from "../Tag/Tag";
import Image from "next/image";
import SingleCard from "../SingleCard/SingleCard";




export const VideoDetailsColumn = () => {

    return (
        <>
            <div className="m-w-[895px] w-full">
                <div className="flex-col w-full mb-10 p-5 border border-[#161616] bg-[#FFFCF9]">
                    <div className=" text-neutral-900 text-[28px] font-bold font-['Cabin'] leading-[33.60px] mb-[12px]">The Evolution of Multiplayer Gaming: From Couch Co-op to Global Connectivity</div>
                    <div className="flex gap-1 mb-[24px]">
                        {['games'].map((tag, index) => (
                            <Tag text={tag} key={index} type={'relevance'} />
                        ))}
                        <div className="justify-start items-center gap-2 flex ml-2">
                            <div className="opacity-80 text-neutral-900 text-sm font-normal font-['Cabin'] leading-[16.80px]">By Jason Will</div>
                            <div className="w-[5px] h-[5px] opacity-80 bg-neutral-900" />
                            <div className="text-neutral-900 text-opacity-80 text-sm font-normal font-['Cabin'] leading-[16.80px]">February 24, 2024 at 10:50 AM</div>
                        </div>
                    </div>

                    <div className="relative">
                        <Image alt="banner" height={487.44} width={857.55} className="mb-[24px] w-[855.58px] " src="https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/image%2085-qSFSrtFKOzO7NDbmQMxRie60TTiBkn.png" />
                        <div className="hover:scale-110 transition-all cursor-pointer active:scale-95 absolute bottom-[50%] left-[50%] translate-x-[-50%] translate-y-[50%] ">

                            <Image
                                src="/play-button.svg"
                                alt="Play"
                                width={50}
                                height={50}
                            />
                        </div>
                    </div>


                    <div className=" text-neutral-900 text-xl font-semibold font-['Cabin'] leading-[30px] mb-[12px] mt-[24px]">Video Summary</div>
                    <div className=" text-neutral-900 text-base font-normal font-['Cabin'] leading-normal mb-[20.28px]">The journey of multiplayer gaming is a fascinating saga of innovation, community, and the ever-evolving relationship between technology and social interaction. From the humble beginnings of couch co-op play to today's vast networks of global connectivity, multiplayer gaming has transformed in ways that early gamers could hardly have imagined. Multiplayer gaming has its roots in the local co-op and competitive experiences of the late 20th century. Games like "Pong" laid the foundation, but it was titles such as "Contra" and "Street Fighter II" that truly epitomized the era of couch multiplayer gaming. These games required players to be physically present in the same room, sharing a screen and often, in the case of co-op games, working together to achieve a common goal. This format fostered a sense of camaraderie and immediate social interaction that became a defining characteristic of early video gaming culture.</div>

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
