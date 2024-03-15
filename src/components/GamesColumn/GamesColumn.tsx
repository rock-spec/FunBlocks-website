import React from 'react';
import { Column } from '../Column/Column';

export const GamesColumn = () => {
  return (

    <Column variant='game' title='game' buttonText='All Games' onButtonClick={() => { }}
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
      },
      {
        variant: "game",
        tags: ['Crypto', '8+'],
        title: "Game 1",
        imageUrl: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/game%20(2)-8HFIoSLnMaAi53FMkbQU9M5Xk3U8RL.png"
      },
      {
        variant: "game",
        tags: ['Crypto', '8+'],
        title: "Game 1",
        imageUrl: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/game%20(3)-kT72FeiJsE4gENjdIT27R54fdvdUTd.png"
      },
      {
        variant: "game",
        tags: ['Crypto', '8+'],
        title: "Game 1",
        imageUrl: "https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/img%20(1)-7Tio5zOgorsegGbIQOV2fcQNimIm2Y.png"
      },
      ]}
    />
  );
}
