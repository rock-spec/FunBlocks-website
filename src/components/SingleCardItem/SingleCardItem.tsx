import React from 'react';
import Image from 'next/image';
import Button from "@mui/joy/Button";
import { Tag } from '../Tag/Tag';
import { CustomButton } from '../Button/Button';
import Link from 'next/link';

// Define the props interface
export interface SingleCardItemProps {
  id?: string,
  variant: 'event' | 'article' | 'video' | 'news';
  imageUrl: string;
  title: string;
  author?: string;
  details?: string;
  description?: string;
  tags?: string[];
  zone?: string;
  onFirstButtonClick: () => void;
  onSecondButtonClick: () => void;
}

const SingleCardItem = (props: SingleCardItemProps) => {
  const { variant, imageUrl, zone, title, id, description = "", details = "", onFirstButtonClick, onSecondButtonClick, tags = [], author = "" } = props;
  return (
    <div className="flex md:flex-row w-full flex-col items-start gap-6 ">
      {/* First Column: Image */}

      <Link href={`/${variant}/${id}`}>
        <div className="relative rounded-md border border-[#161616] overflow-hidden min-w-[260px] w-full">
          <Image
            className=' w-full h-full '
            src={imageUrl}
            alt="Image"
            width={272}
            height={153}
            layout="fixed"
            objectFit="cover"
            objectPosition="center"

          />
          {/* {variant === 'video' && (

          <div className="absolute bottom-5 left-5">
            <Image
              src="/play-button.svg"
              alt="Play"
              width={50}
              height={50}
            />
          </div>
        )} */}
        </div>
      </Link>
      {/* Second Column */}
      <div className="flex flex-col w-full">
        {/* First Row */}
        <div className="flex flex-col gap-2 ">
          {/* Title */}
          <div className="text-[#161616] font-bold text-lg leading-[120%] tracking-[-0.32px] line-clamp-2">
            <Link href={`/${variant}/${id}`}> {title}</Link>
          </div>



          {/* Details */}
          <div className=" text-neutral-900 text-base font-normal font-['Cabin'] leading-normal overflow-hidden">
            <div className="line-clamp-2">
              {description}
            </div>
          </div>




          {/* Dates  */}
          {variant === 'event' ? (
            <div className="flex md:flex-row flex-col gap-3 flex-1">
              <div className='flex gap-1'>
                {tags.map((tag, index) => (
                  <Tag text={tag} key={index} type={'relevance'} />
                ))}
              </div>
              <div className="justify-start items-center gap-2 flex md:ml-2">
                <Image src="/date-icon.svg" alt="Date" width={12} height={12} />
                <div className="text-neutral-900 text-opacity-80 text-sm font-normal font-['Cabin'] leading-[16.80px]">{details} {zone}</div>
                {/* <div className="w-[5px] h-[5px] opacity-80 hidden md:block bg-neutral-900" /> */}

              </div>
            </div>
          ) : (
            <div className="flex md:flex-row flex-col gap-3">
              <div className='flex gap-1'>
                {tags.map((tag, index) => (
                  <Tag text={tag} key={index} type={'relevance'} />
                ))}
              </div>

              <div className="justify-start md:items-center gap-2 flex md:flex-row flex-col md:ml-2">
                <div className="opacity-80 text-neutral-900 text-sm font-normal font-['Cabin'] leading-[16.80px]">By {author}</div>
                <div className="w-[5px] h-[5px] hidden md:block  opacity-80 bg-neutral-900" />
                <div className="text-neutral-900 text-opacity-80 text-sm font-normal font-['Cabin'] leading-[16.80px]">{details}</div>
              </div>
            </div>
          )}
        </div>

        {/* Second Row: Buttons */}
        {variant === 'event' ? (<div className="flex">
          <CustomButton text='Join Event' onClick={onFirstButtonClick} size='10px' width='180px' type='primary' />
          {/* <CustomButton text='Details' onClick={onSecondButtonClick} size='10px' width='180px' /> */}
        </div>) : ""}
      </div>
    </div >
  );
};

export default SingleCardItem;
