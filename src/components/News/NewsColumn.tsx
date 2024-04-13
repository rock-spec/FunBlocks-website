import React from "react";
import SingleCardItem, { SingleCardItemProps } from "../SingleCardItem/SingleCardItem";
import { CustomButton } from "../Button/Button";
import SearchInput from "../SearchInput/SearchInput";
import { IoIosArrowDown } from "react-icons/io";
import formatDate from "@/utils/dateFormat";




export const NewsColumn = ({ data }: { data: any }) => {

    const singleCardItemDetails: SingleCardItemProps[] =

        data.map((news: any) =>
        (
            {
                'variant': 'news',
                'id': news.newsid,
                'imageUrl': `${news.content.image}?height=360&width=720`,
                'title': news.content.title,
                'description': news.content.description,
                'details': formatDate(news.content.publishdate),
                'tags': [news.content.game.gameid],
                'author': news.content.user.username,
                'onFirstButtonClick': () => {
                },
                'onSecondButtonClick': () => {
                },
            }
        )
        )
    // [
    //     {
    //         'variant': 'news',
    //         'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Frame%203184843-lvW7VjPWajYBlfUfol1CSdb5jGIBho.png?height=360&width=720",
    //         'title': 'The Strongest Argument for Crypto-Native Gaming',
    //         'description': "In the ever-evolving world of video games, staying ahead of the curve is not just about keeping your software updated; it's about immersing yourself in the heart of gaming culture",
    //         'details': 'February 24, 2024 at 10:50 AM',
    //         'tags': ['game'],
    //         'author': "Janson Will",
    //         'onFirstButtonClick': () => {
    //         },
    //         'onSecondButtonClick': () => {
    //         },
    //     },

    //     {
    //         'variant': 'news',
    //         'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Frame%203184843%20(1)-oGAvZEn2wnE2aa3MPruck6hoXfCowD.png?height=360&width=720",
    //         'title': 'Introduction to the Autonomous World: THE CASE FOR AUTONOMOUS WORLDS',
    //         'description': "In the ever-evolving world of video games, staying ahead of the curve is not just about keeping your software updated; it's about immersing yourself in the heart of gaming culture",
    //         'details': 'February 24, 2024 at 10:50 AM',
    //         'tags': ['game'],
    //         'author': "Janson Will",
    //         'onFirstButtonClick': () => {
    //         },
    //         'onSecondButtonClick': () => {
    //         },
    //     },
    //     {
    //         'variant': 'news',
    //         'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Frame%203184843%20(2)-G8kMzAkSKf1U1W5Akzo3DhwgFS9ww9.png?height=360&width=720",
    //         'title': 'Introduction to the Autonomous World: THE CASE FOR AUTONOMOUS WORLDS',
    //         'description': "In the ever-evolving world of video games, staying ahead of the curve is not just about keeping your software updated; it's about immersing yourself in the heart of gaming culture",
    //         'details': 'February 24, 2024 at 10:50 AM',
    //         'tags': ['game'],
    //         'author': "Janson Will",
    //         'onFirstButtonClick': () => {
    //         },
    //         'onSecondButtonClick': () => {
    //         },
    //     },
    //     {
    //         'variant': 'news',
    //         'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Frame%203184843-lvW7VjPWajYBlfUfol1CSdb5jGIBho.png?height=360&width=720",
    //         'title': 'The Strongest Argument for Crypto-Native Gaming',
    //         'description': "In the ever-evolving world of video games, staying ahead of the curve is not just about keeping your software updated; it's about immersing yourself in the heart of gaming culture",
    //         'details': 'February 24, 2024 at 10:50 AM',
    //         'tags': ['game'],
    //         'author': "Janson Will",
    //         'onFirstButtonClick': () => {
    //         },
    //         'onSecondButtonClick': () => {
    //         },
    //     },

    //     {
    //         'variant': 'news',
    //         'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Frame%203184843%20(1)-oGAvZEn2wnE2aa3MPruck6hoXfCowD.png?height=360&width=720",
    //         'title': 'Introduction to the Autonomous World: THE CASE FOR AUTONOMOUS WORLDS',
    //         'description': "In the ever-evolving world of video games, staying ahead of the curve is not just about keeping your software updated; it's about immersing yourself in the heart of gaming culture",
    //         'details': 'February 24, 2024 at 10:50 AM',
    //         'tags': ['game'],
    //         'author': "Janson Will",
    //         'onFirstButtonClick': () => {
    //         },
    //         'onSecondButtonClick': () => {
    //         },
    //     },
    //     {
    //         'variant': 'news',
    //         'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Frame%203184843%20(2)-G8kMzAkSKf1U1W5Akzo3DhwgFS9ww9.png?height=360&width=720",
    //         'title': 'Introduction to the Autonomous World: THE CASE FOR AUTONOMOUS WORLDS',
    //         'description': "In the ever-evolving world of video games, staying ahead of the curve is not just about keeping your software updated; it's about immersing yourself in the heart of gaming culture",
    //         'details': 'February 24, 2024 at 10:50 AM',
    //         'tags': ['game'],
    //         'author': "Janson Will",
    //         'onFirstButtonClick': () => {
    //         },
    //         'onSecondButtonClick': () => {
    //         },
    //     },
    //     {
    //         'variant': 'news',
    //         'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Frame%203184843-lvW7VjPWajYBlfUfol1CSdb5jGIBho.png?height=360&width=720",
    //         'title': 'The Strongest Argument for Crypto-Native Gaming',
    //         'description': "In the ever-evolving world of video games, staying ahead of the curve is not just about keeping your software updated; it's about immersing yourself in the heart of gaming culture",
    //         'details': 'February 24, 2024 at 10:50 AM',
    //         'tags': ['game'],
    //         'author': "Janson Will",
    //         'onFirstButtonClick': () => {
    //         },
    //         'onSecondButtonClick': () => {
    //         },
    //     },

    //     {
    //         'variant': 'news',
    //         'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Frame%203184843%20(1)-oGAvZEn2wnE2aa3MPruck6hoXfCowD.png?height=360&width=720",
    //         'title': 'Introduction to the Autonomous World: THE CASE FOR AUTONOMOUS WORLDS',
    //         'description': "In the ever-evolving world of video games, staying ahead of the curve is not just about keeping your software updated; it's about immersing yourself in the heart of gaming culture",
    //         'details': 'February 24, 2024 at 10:50 AM',
    //         'tags': ['game'],
    //         'author': "Janson Will",
    //         'onFirstButtonClick': () => {
    //         },
    //         'onSecondButtonClick': () => {
    //         },
    //     },
    //     {
    //         'variant': 'news',
    //         'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Frame%203184843%20(2)-G8kMzAkSKf1U1W5Akzo3DhwgFS9ww9.png?height=360&width=720",
    //         'title': 'Introduction to the Autonomous World: THE CASE FOR AUTONOMOUS WORLDS',
    //         'description': "In the ever-evolving world of video games, staying ahead of the curve is not just about keeping your software updated; it's about immersing yourself in the heart of gaming culture",
    //         'details': 'February 24, 2024 at 10:50 AM',
    //         'tags': ['game'],
    //         'author': "Janson Will",
    //         'onFirstButtonClick': () => {
    //         },
    //         'onSecondButtonClick': () => {
    //         },
    //     },
    // ]



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
