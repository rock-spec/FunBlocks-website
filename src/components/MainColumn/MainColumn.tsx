import React from "react";
import ArticleCard from "@/components/ArticleCard/ArticleCard";
import ReviewCard from "@/components/ReviewCard/ReviewCard";
import SingleCard from "@/components/SingleCard/SingleCard";
import { CustomButton } from "../Button/Button";
import { Column } from "../Column/Column";

export const MainColumn = () => {
  return (
    <div className="w-[895px]">

      <div className="h-[573px] justify-start items-start inline-flex mb-10 gap-x-5">
        <div className="w-[590px] p-5 bg-stone-50 border border-neutral-900 flex-col justify-end items-start gap-4 inline-flex">
          <div className="w-[550px] h-[253px] relative bg-stone-300 rounded border border-neutral-900">
          </div>

          <div className=" text-neutral-900 text-[40px] font-bold font-['Cabin'] leading-[48px]">
            BOLT: Solana ecological ECS full-chain game engine
          </div>

          <div className=" text-neutral-900 text-base font-normal font-['Cabin'] leading-normal">BOLT is a full-chain game engine developed by the Magicblock team for the Solana ecosystem. This article is compiled from the speeches of the two founders of Magicblock at the Breakpoint 2023 event.
          </div>
          <div className="mt-[-25px] ">
            <CustomButton text="Explore" type="primary" onClick={() => { }} width="190px" size="14px" />
          </div>
        </div>



        <div>
          <Column variant='game' title='New' buttonText='See More' onButtonClick={() => { }}
            columnItems={[{
              variant: "game",
              tags: ['Crypto', '8+'],
              title: "Game 1",
              imageUrl: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/game-pW2m7GbYkdo7XmrKvmQAtnp0Eh5OD6.png"
            },
            {
              variant: "game",
              tags: ['Crypto', '8+'],
              title: "Game 1",
              imageUrl: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/game%20(1)-QnKAcgeQFAZMjJlgN5YhUNOyFnXwc4.png"
            },
            {
              variant: "game",
              tags: ['Crypto', '8+'],
              title: "Game 1",
              imageUrl: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/img-kWQFGUobAsklZOZxQ4wefibP0Zcr7I.png"
            }
            ]}
          />
        </div>


      </div>

      <div className="flex mb-10 gap-x-5">
        <ArticleCard
          imageUrl={"https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/onchain/image%2069-e6l3TBzi8yI3Z3eEwSkNlRlO1VcRHS.png?height=360&width=720"}
          title={"Redstone: a high-performance expansion solution for hosting full-chain games"}
          tags={['Promotion', 'Platform', '2+']}
        />
        <ArticleCard
          imageUrl={"https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/onchain/thumbnail-McHzr10Ru0augEYm4DkgfQS2fQ3DPQ.png?height=360&width=720"}
          title={"A quick look at Sky Strife Season 0 update content"}
          tags={['ONCHAIN-GAMES', 'update', '8+']}
        />
        <ArticleCard
          imageUrl={"https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/onchain/thumbnail%20(1)-xVkomkQKgQOVnIPlD8jNspRQIWXdGQ.png?height=360&width=720"}
          title={"Curio: Introducing the full-chain game engine Keystone"}
          tags={['update', 'techno talks', '2+']}
        />
      </div>

      <div className="flex mb-10 gap-x-5">
        <SingleCard
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
          buttonText={'View More Articles'}
          onButtonClick={() => {
          }}
        />
      </div>
      <div className="flex mb-10 gap-x-5">
        <SingleCard
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
          }
          buttonText={'View More Videos'}
          onButtonClick={() => {
          }}
        />
      </div>
      <div className="flex mb-10 gap-x-5">
        <SingleCard
          name={'event'}
          singleCardItemDetails={
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
            ]
          }
          buttonText={'View More Events'}
          onButtonClick={() => {
          }}
        />
      </div>
    </div>
  );
};
