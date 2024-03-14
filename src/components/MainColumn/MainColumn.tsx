import React from "react";
import ArticleCard from "@/components/ArticleCard/ArticleCard";
import ReviewCard from "@/components/ReviewCard/ReviewCard";
import SingleCard from "@/components/SingleCard/SingleCard";

export const MainColumn = () => {
  return (
    <div className="w-[895px]">

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
      {/* 
      <div className="flex mb-10 gap-x-5">
        <ReviewCard
          backgroundColor={'#45AA75'}
          iconPath={'/hobbies-game.svg'}
          title={'\'Wreck League\' Preview: A Promising Fighting Game With Mechs and NFTs'}
          tags={['Promoton']}
        />
        <ReviewCard
          backgroundColor={'#E9793A'}
          iconPath={'/filter.svg'}
          title={'Formula E: High Voltage Is a Fun Play-to-Earn Racer That Needs a Roadmap'}
          tags={['Update']}
        />
      </div> */}

      {/* <div className="flex mb-10 gap-x-5">
        <SingleCard
          name={'video'}
          singleCardItemDetails={
            [
              {
                'variant': 'video',
                'imageUrl': "https://images.mirror-media.xyz/publication-images/io9Wc0kW8W-JQrLpMAQfV.png?height=360&width=720",
                'title': 'Loot Survivor and the Emergence of Onchain Arcades',
                'details': 'Loot Survivor[1] is the first game in the Realms Autonomous Worlds ecosystem. It was developed by Loothero[2], a senior member of Bibliotheca DAO, and uses a unique Play2Die mechanism. The game is inspired by the backstory and gameplay of the original Loot Project community [3], where players need to fight beasts, clear obstacles, collect equipment to survive, and compete for higher positions in the leaderboards.',
                'onFirstButtonClick': () => {
                },
                'onSecondButtonClick': () => {
                },
              },

              {
                'variant': 'video',
                'imageUrl': "https://images.mirror-media.xyz/publication-images/io9Wc0kW8W-JQrLpMAQfV.png?height=360&width=720",
                'title': 'The Four Reasons We Must Pay Attention to the Autonomous World',
                'details': 'During the last crypto bull bubble cycle, decentralized finance (DeFi) was undoubtedly center stage. Some believe that Autonomous World (AW) will be the flashpoint in the next bull market. I trust this judgment and will explain why in detail in this article.',
                'onFirstButtonClick': () => {
                },
                'onSecondButtonClick': () => {
                },
              },
            ]
          }
          buttonText={'Watch More Videos'}
          onButtonClick={() => {
          }}
        />
      </div> */}

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
    </div>
  );
};
