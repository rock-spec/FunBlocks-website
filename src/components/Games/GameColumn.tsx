import React from "react";
import ArticleCard from "@/components/ArticleCard/ArticleCard";
import SingleCard from "@/components/SingleCard/SingleCard";
import { CustomButton } from "@/components/Button/Button";
import Image from "next/image";
import { Tag } from "@/components/Tag/Tag";
import { Column } from "../Column/Column";
import GameCardComponet, { GameCardComponentProps } from "./GameCardComponet";
import SearchInput from "../SearchInput/SearchInput";
import { IoIosArrowDown } from "react-icons/io";

export const GameColumn = (data: any) => {

    // const singleCardItemDetails: GameCardComponentProps[] =
    //     [
    //         {
    //             game_id: "123",
    //             engine: "paima",
    //             engine_logo: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/bolt%20logo-GeDmp6kt980WP2Z0ch3gDvtkNrdZkK.svg",
    //             'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Game%20Thumbail-imKmzXRUOYiTlqkK85KeumNoUIFL0o.png",
    //             'title': 'Alchemist',
    //             'description': 'The World Adventure',
    //             'tags': ['online', 'playtest'],
    //             'onClick': () => {
    //             },
    //         },

    //         {
    //             game_id: "123",
    //             engine: "mud v2",
    //             engine_logo: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/bolt%20logo-1-eyMwzsUTiIgfNQdNrEYhbGPlLtez0d.svg",

    //             'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/image%2090-i60QEO453Pelab4EsRedYMtXuzGkIY.png",
    //             'title': 'ClimBros',
    //             'description': 'Them Mountain Ride',
    //             'tags': ['online', 'playtest'],
    //             'onClick': () => {
    //             },
    //         },
    //         {
    //             game_id: "123",
    //             engine: "world engine",
    //             engine_logo: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/bolt%20logo-2-t5gXRpZAHPvDZ9TIGzvnUhIPY5TgYk.svg",
    //             'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/image%2092-gZQHVixbfRKHN3R806WteVL7mHxc5Z.png",
    //             'title': 'The Uplift',
    //             'description': 'Crypto Mind',
    //             'tags': ['online', 'playtest'],
    //             'onClick': () => {
    //             },
    //         },

    //         {
    //             game_id: "123",
    //             engine: "keystone",
    //             engine_logo: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/bolt%20logo-3-gBRlPHweLxfuizfiExf9wpus4DIZcb.svg",

    //             'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Thumbnail-Bd6ENyJB9kevKoJWpPhi1KInvnBe2E.png",
    //             'title': 'Console Man',
    //             'description': 'Legends',
    //             'tags': ['online', 'playtest'],
    //             'onClick': () => {
    //             },
    //         },
    //         {
    //             game_id: "123",
    //             engine: "dojo",
    //             engine_logo: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/bolt%20logo-4-3hPJt2DxrnxJqybu6YtJX56QWPHiUw.svg",
    //             'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Thumbnail-1-2Xzdh5O3E6sRQOa15VUTCrvwX6DxzZ.png",
    //             'title': 'Farm Slam',
    //             'tags': ['online', 'playtest'],
    //             'onClick': () => {
    //             },
    //         },
    //         {
    //             game_id: "123",
    //             engine: "paima",
    //             engine_logo: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/bolt%20logo-GeDmp6kt980WP2Z0ch3gDvtkNrdZkK.svg",
    //             'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Game%20Thumbail-imKmzXRUOYiTlqkK85KeumNoUIFL0o.png",
    //             'title': 'Alchemist',
    //             'description': 'The World Adventure',
    //             'tags': ['online', 'playtest'],
    //             'onClick': () => {
    //             },
    //         },

    //         {
    //             game_id: "123",
    //             engine: "mud v2",
    //             engine_logo: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/bolt%20logo-1-eyMwzsUTiIgfNQdNrEYhbGPlLtez0d.svg",

    //             'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/image%2090-i60QEO453Pelab4EsRedYMtXuzGkIY.png",
    //             'title': 'ClimBros',
    //             'description': 'Them Mountain Ride',
    //             'tags': ['online', 'playtest'],
    //             'onClick': () => {
    //             },
    //         },
    //         {
    //             game_id: "123",
    //             engine: "world engine",
    //             engine_logo: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/bolt%20logo-2-t5gXRpZAHPvDZ9TIGzvnUhIPY5TgYk.svg",
    //             'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/image%2092-gZQHVixbfRKHN3R806WteVL7mHxc5Z.png",
    //             'title': 'The Uplift',
    //             'description': 'Crypto Mind',
    //             'tags': ['online', 'playtest'],
    //             'onClick': () => {
    //             },
    //         },

    //         {
    //             game_id: "123",
    //             engine: "keystone",
    //             engine_logo: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/bolt%20logo-3-gBRlPHweLxfuizfiExf9wpus4DIZcb.svg",

    //             'imageUrl': "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Thumbnail-Bd6ENyJB9kevKoJWpPhi1KInvnBe2E.png",
    //             'title': 'Console Man',
    //             'description': 'Legends',
    //             'tags': ['online', 'playtest'],
    //             'onClick': () => {
    //             },
    //         },
    //     ]

    const singleCardItemDetails: GameCardComponentProps[] =
        data.data && data?.data.map((game: any) => ({

            game_id: game.gameid,
            engine: game.engineid,
            engine_logo: game.engine.logo,
            'imageUrl': game.pic,
            'title': game.game_name,
            'description': null, //this is like game name : some data
            'tags': [game.engineid, game.blockchainid],
            'onClick': () => {
            }

        }))

    return (
        <>
            <div className="w-full md:w-[895px] flex flex-col items-center justify-center">
                <div className="flex mb-10 gap-5">
                    <div>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-flow-col-1 gap-4">
                            {singleCardItemDetails.map((detail, index) => (
                                <div className="p-5 border border-[#161616] bg-[#FFFCF9]" key={index}>
                                    <GameCardComponet {...detail} />
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
