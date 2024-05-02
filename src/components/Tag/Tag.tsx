import React from 'react'
import localFont from "next/font/local"
import Link from 'next/link';

interface TagProps {
  text: string;
  type?: 'section' | 'relevance' | 'more';
  numberOfMore?: number;
  linkto?: string;
}

const neueBit = localFont({
  src: "./font/NeueBit-Regular.ttf",
  display: 'swap'
})


const OffBit = localFont({
  src: "./font/OffBitTrial-Bold.otf",
  display: "swap"
})

export const Tag = (prop: TagProps) => {
  const { text, type = 'section', numberOfMore = 0, linkto } = prop;
  return (
    <>
      {type === 'section' &&
        <div
          className={`uppercase bg-merino px-2.5 h-9 flex items-center justify-center tracking-[.36px] text-base ${OffBit.className}  `}
        >
          {text}
        </div>

      }
      {type === 'relevance' &&
        <div
          // className={`inline-flex items-center justify-center bg-merino p-[5px] h-[19px] text-nero uppercase leading-[120%] tracking-[0.36px] border-solid border-nero border-[1px] w-min ${neueBit.className}`}
          // style={{
          //   fontSize: '18px',
          //   fontWeight: "bold",
          //   letterSpacing: '0.36px',
          //   whiteSpace: 'nowrap'
          // }}
          className={`flex bg-merino px-[5px] tracking-wider py-0 uppercase text-[18px] border-nero font-bold border-[1px] text-nowrap ${neueBit.className}     `}
        >
          <Link href={`/${linkto}/${text} `} className='p-0 m-0'>
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

