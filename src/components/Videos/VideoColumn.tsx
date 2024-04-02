import React from "react";
import SingleCardItem, { SingleCardItemProps } from "../SingleCardItem/SingleCardItem";
import { CustomButton } from "../Button/Button";
import SearchInput from "../SearchInput/SearchInput";
import { IoIosArrowDown } from "react-icons/io";
import SingleVideoCardItem from "../SingleCard/SingleVideoCardItem";




export const VideoColumn = () => {

    const singleCardItemDetails: SingleCardItemProps[] =
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


    return (
        <>
            <div className="lg:w-[895px]  w-full">
                <div className="flex flex-col lg:flex-row w-full mb-10">
                    <div className="h-[52px]">
                        <SearchInput varient="light" placeholder="Search for Keywords" />
                    </div>

                    <CustomButton onClick={() => { }} size='13px' text='Category' height='42px' icon={<IoIosArrowDown />} />
                    <CustomButton onClick={() => { }} size='13px' text='Sort By' height='42px' icon={<IoIosArrowDown />} />
                </div>
                <div className="flex mb-10 gap-x-5">


                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2  grid-rows-2 gap-4">
                            {singleCardItemDetails.map((detail, index) => (
                                <div className="p-5 border border-[#161616] bg-[#FFFCF9]">
                                    <SingleVideoCardItem key={index} {...detail} />
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
