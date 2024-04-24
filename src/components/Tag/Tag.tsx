import React from 'react'
import localFont from "next/font/local"
import Link from 'next/link';

interface TagProps {
  text: string;
  type?: 'section' | 'relevance' | 'more';
  numberOfMore?: number;
  linkto?: string;
}

const myFont = localFont({
  src: "./font/NeueBit-Regular.ttf",
  display: 'swap'
})


export const Tag = (prop: TagProps) => {
  const { text, type = 'section', numberOfMore = 0, linkto } = prop;
  return (
    <>
      {type === 'section' &&
        <div
          className={`inline-flex items-center justify-center bg-merino p-2.5 h-[33px] text-nero uppercase leading-[120%] 
          tracking-[0.36px] `}
          style={{
            fontSize: '15px',
            lineHeight: '120%',
            letterSpacing: '0.36px',
            fontFamily: '"Press Start 2P", cursive'
          }}>
          {text}
        </div>

      }
      {type === 'relevance' &&
        <div
          className={`inline-flex items-center justify-center bg-merino p-[5px] h-[19px] text-nero uppercase leading-[120%] tracking-[0.36px] border-solid border-nero border-[1px] w-min ${myFont.className}`}
          style={{
            fontSize: '18px',
            fontWeight: "bold",
            lineHeight: '120%',
            letterSpacing: '0.36px',
            whiteSpace: 'nowrap'
          }}>
          <Link href={`/${linkto}/${text} `}>
            {text}
          </Link >
        </div>
      }
      {
        type === 'more' &&
        <div
          className="inline-flex items-center justify-center bg-merino p-[5px] h-[19px] text-nero uppercase leading-[120%] tracking-[0.36px] border-solid border-nero border-[1px]"
          style={{
            fontSize: '18px',
            lineHeight: '120%',
            letterSpacing: '0.36px',
          }}>
          {numberOfMore}+
        </div>
      }
    </>
  );
};

