import React from 'react';
import Image from 'next/image';
import Button from "@mui/joy/Button";
import { Tag } from '../Tag/Tag';

// Define the props interface
export interface SingleCardItemProps {
  variant: 'event' | 'article';
  imageUrl: string;
  title: string;
  author?: string;
  details?: string;
  description?: string;
  tags?: string[];
  onFirstButtonClick: () => void;
  onSecondButtonClick: () => void;
}

const SingleCardItem = (props: SingleCardItemProps) => {
  const { variant, imageUrl, title, description = "", details = "", onFirstButtonClick, onSecondButtonClick, tags = [], author = "" } = props;
  return (
    <div className="flex items-start gap-6 ">
      {/* First Column: Image */}
      <div className="relative rounded-md border border-[#161616] overflow-hidden min-w-[260px]">
        <Image
          className=' w-[full] h-[full] object-cover'
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

      {/* Second Column */}
      <div className="flex flex-col w-full">
        {/* First Row */}
        <div className="flex flex-col gap-2 ">
          {/* Title */}
          <div className="text-[#161616] font-bold text-lg leading-[120%] tracking-[-0.32px] line-clamp-2">
            {title}
          </div>



          {/* Details */}
          <div className=" text-neutral-900 text-base font-normal font-['Cabin'] leading-normal overflow-hidden">
            <div className="line-clamp-2">
              {description}
            </div>
          </div>




          {/* Dates  */}
          {variant === 'event' ? (
            <div className="flex items-center">
              <Image src="/date-icon.svg" alt="Date" width={12} height={12} />
              <span className="text-[#161616] font-bold text-lg leading-[120%] tracking-[0.36px] ml-2">
                {details}
              </span>
            </div>
          ) : (
            <div className="flex gap-1">
              {tags.map((tag, index) => (
                <Tag text={tag} key={index} type={'relevance'} />
              ))}
              <div className="justify-start items-center gap-2 flex ml-2">
                <div className="opacity-80 text-neutral-900 text-sm font-normal font-['Cabin'] leading-[16.80px]">By {author}</div>
                <div className="w-[5px] h-[5px] opacity-80 bg-neutral-900" />
                <div className="text-neutral-900 text-opacity-80 text-sm font-normal font-['Cabin'] leading-[16.80px]">{details}</div>
              </div>
            </div>
          )}
        </div>

        {/* Second Row: Buttons */}
        {variant === 'event' ? (<div className="flex gap-4">
          <Button onClick={onFirstButtonClick}>
            Join Event         </Button>
          <Button onClick={onSecondButtonClick}>
            Details
          </Button>
        </div>) : ""}
      </div>
    </div>
  );
};

export default SingleCardItem;
