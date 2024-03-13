import React from "react";
import ArticleCard from "@/components/ArticleCard/ArticleCard";
import ReviewCard from "@/components/ReviewCard/ReviewCard";
import SingleCard from "@/components/SingleCard/SingleCard";

export const MainColumn = () => {
  return (
      <div className="w-[895px]">

        <div className="flex mb-10 gap-x-5">
          <ArticleCard
              imageUrl={"https://images.mirror-media.xyz/publication-images/io9Wc0kW8W-JQrLpMAQfV.png?height=360&width=720"}
              title={"全链“斗兽棋”Chain Chess简单上手体验"}
              tags={['games']}
          />
          <ArticleCard
              imageUrl={"https://images.mirror-media.xyz/publication-images/io9Wc0kW8W-JQrLpMAQfV.png?height=360&width=720"}
              title={"全链“斗兽棋”Chain Chess简单上手体验"}
              tags={['games']}
          />
          <ArticleCard
              imageUrl={"https://images.mirror-media.xyz/publication-images/io9Wc0kW8W-JQrLpMAQfV.png?height=360&width=720"}
              title={"全链“斗兽棋”Chain Chess简单上手体验"}
              tags={['games']}
          />
        </div>

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
        </div>

        <div className="flex mb-10 gap-x-5">
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
        </div>

        <div className="flex mb-10 gap-x-5">
          <SingleCard
              name={'event'}
              singleCardItemDetails={
                [
                  {
                    'variant': 'event',
                    'imageUrl': "https://images.mirror-media.xyz/publication-images/io9Wc0kW8W-JQrLpMAQfV.png?height=360&width=720",
                    'title': 'The Strongest Argument for Crypto-Native Gaming',
                    'details': 'October 24th, 2023',
                    'onFirstButtonClick': () => {
                    },
                    'onSecondButtonClick': () => {
                    },
                  },

                  {
                    'variant': 'video',
                    'imageUrl': "https://images.mirror-media.xyz/publication-images/io9Wc0kW8W-JQrLpMAQfV.png?height=360&width=720",
                    'title': 'Introduction to the Autonomous World: THE CASE FOR AUTONOMOUS WORLDS',
                    'details': 'October 24th, 2023',
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
        </div>
      </div>
  );
};
