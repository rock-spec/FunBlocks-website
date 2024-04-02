import React from "react";
import SingleCardItem, { SingleCardItemProps } from "../SingleCardItem/SingleCardItem";
import { CustomButton } from "../Button/Button";
import SearchInput from "../SearchInput/SearchInput";
import { IoIosArrowDown } from "react-icons/io";
import { Tag } from "../Tag/Tag";
import Image from "next/image";
import SingleCard from "../SingleCard/SingleCard";




export const NewsDetailsColumn = () => {

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
                    <div className=" text-neutral-900 text-xl font-semibold font-['Cabin'] leading-[30px] mb-[12px]">Summary</div>
                    <div className=" text-neutral-900 text-base font-normal font-['Cabin'] leading-normal mb-[20.28px]">The journey of multiplayer gaming is a fascinating saga of innovation, community, and the ever-evolving relationship between technology and social interaction. From the humble beginnings of couch co-op play to today's vast networks of global connectivity, multiplayer gaming has transformed in ways that early gamers could hardly have imagined. Multiplayer gaming has its roots in the local co-op and competitive experiences of the late 20th century. Games like "Pong" laid the foundation, but it was titles such as "Contra" and "Street Fighter II" that truly epitomized the era of couch multiplayer gaming. These games required players to be physically present in the same room, sharing a screen and often, in the case of co-op games, working together to achieve a common goal. This format fostered a sense of camaraderie and immediate social interaction that became a defining characteristic of early video gaming culture.</div>

                    <Image alt="banner" height={487.44} width={857.55} className="mb-[24px] w-[855.58px] " src="https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/image%2085-qSFSrtFKOzO7NDbmQMxRie60TTiBkn.png" />

                    <div className=" text-neutral-900 text-xl font-semibold font-['Cabin'] leading-[30px] mb-[12px]">The Early Days: Couch Co-op and Local Multiplayer</div>
                    <div className=" text-neutral-900 text-base font-normal font-['Cabin'] leading-normal mb-[20.28px]">Multiplayer gaming has its roots in the local co-op and competitive experiences of the late 20th century. Games like "Pong" laid the foundation, but it was titles such as "Contra" and "Street Fighter II" that truly epitomized the era of couch multiplayer gaming. These games required players to be physically present in the same room, sharing a screen and often, in the case of co-op games, working together to achieve a common goal. This format fostered a sense of camaraderie and immediate social interaction that became a defining characteristic of early video gaming culture.</div>

                    <div className=" text-neutral-900 text-xl font-semibold font-['Cabin'] leading-[30px] mb-[12px] mt-[24px]">The Rise of Online Multiplayer</div>
                    <div className=" text-neutral-900 text-base font-normal font-['Cabin'] leading-normal mb-[20.28px]">The advent of the internet revolutionized many aspects of daily life, and gaming was no exception. Online multiplayer gaming first gained mainstream attention in the 1990s with the rise of PC gaming platforms. Games like "Doom" allowed players to connect via local networks, and soon, the internet opened up possibilities for global play. This era saw the birth of massively multiplayer online games (MMOs) like "EverQuest" and "World of Warcraft," which introduced gamers to vast digital worlds where they could interact with thousands of other players in real-time.</div>

                    <div className=" text-neutral-900 text-xl font-semibold font-['Cabin'] leading-[30px] mb-[12px] mt-[24px]">The Console Online Explosion</div>
                    <div className=" text-neutral-900 text-base font-normal font-['Cabin'] leading-normal mb-[20.28px]">While PC gamers enjoyed the early benefits of online multiplayer, console gaming was not far behind. The launch of services like Xbox Live and PlayStation Network brought online multiplayer to the living room, making it easier than ever for console gamers to connect with friends and strangers alike. This era democratized online gaming, making it a standard feature rather than a niche or luxury experience.</div>

                    <div className=" text-neutral-900 text-xl font-semibold font-['Cabin'] leading-[30px] mb-[12px] mt-[24px]">The Early Days: Couch Co-op and Local Multiplayer</div>
                    <div className=" text-neutral-900 text-base font-normal font-['Cabin'] leading-normal mb-[20.28px]">Multiplayer gaming has its roots in the local co-op and competitive experiences of the late 20th century. Games like "Pong" laid the foundation, but it was titles such as "Contra" and "Street Fighter II" that truly epitomized the era of couch multiplayer gaming. These games required players to be physically present in the same room, sharing a screen and often, in the case of co-op games, working together to achieve a common goal. This format fostered a sense of camaraderie and immediate social interaction that became a defining characteristic of early video gaming culture.
                        The advent of the internet revolutionized many aspects of daily life, and gaming was no exception. Online multiplayer gaming first gained mainstream attention in the 1990s with the rise of PC gaming platforms. Games like "Doom" allowed players to connect via local networks, and soon, the internet opened up possibilities for global play. This era saw the birth of massively multiplayer online games (MMOs) like "EverQuest" and "World of Warcraft," which introduced gamers to vast digital worlds where they could interact with thousands of other players in real-time.
                        Multiplayer gaming has its roots in the local co-op and competitive experiences of the late 20th century. Games like "Pong" laid the foundation, but it was titles such as "Contra" and "Street Fighter II" that truly epitomized the era of couch multiplayer gaming. These games required players to be physically present in the same room, sharing a screen and often, in the case of co-op games, working together to achieve a common goal. This format fostered a sense of camaraderie and immediate social interaction that became a defining characteristic of early video gaming culture.</div>

                    <div className=" text-neutral-900 text-xl font-semibold font-['Cabin'] leading-[30px] mb-[12px] mt-[24px]">Conclusion</div>
                    <div className=" text-neutral-900 text-base font-normal font-['Cabin'] leading-normal mb-[20.28px]">The evolution of multiplayer gaming from couch co-op to global connectivity reflects broader changes in society's relationship with technology, entertainment, and each other. As multiplayer gaming continues to evolve, it remains a testament to the human desire for connection, competition, and shared experiences. In every pixelated battle fought, every virtual world explored, and every high score achieved together, multiplayer gaming celebrates the joy of connecting with others through the universal language of play.</div>

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

            </div>
        </>
    );
};
