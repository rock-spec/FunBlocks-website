import React from 'react';
import {Tag} from "@/components/Tag/Tag";
import Image from 'next/image';

export interface ReviewCardProps {
  backgroundColor: string;
  iconPath: string;
  title: string;
  tags: string[];
}

const ReviewCard = (props: ReviewCardProps) => {
  const {backgroundColor, iconPath, title, tags} = props;
  return (
      <div className="p-5 flex flex-col gap-5 flex-1 border border-[#161616] bg-[#FFFCF9]">
        {/* First Row */}
        <div className="flex justify-between items-center self-stretch">
          <Tag text={'review'} type={'section'}/>
          <Image src={'/go-to.svg'} alt={'Go to review'} width={24} height={24}/> {/* Replace with actual SVG */}
        </div>

        {/* Second Row */}
        <div className="flex gap-5">
          {/* Left Column: Icon */}
          <div
              className="flex justify-center items-center w-[85px] h-[85px] p-[17px] border-2 border-[#161616] rounded-md"
              style={{backgroundColor: backgroundColor}}>
            <Image src={iconPath} alt={'Review Icon'} width={50.512} height={50.512} layout={'fixed'}/>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-2 w-[293px]">
            {/* Title */}
            <div
                className="self-stretch overflow-hidden text-nero text-lg font-bold leading-[120%] tracking-[-0.36px] line-clamp-2">
              {title}
            </div>

            {/* Tags */}
            <div className="flex gap-2">
              {tags.map((tag, index) => (
                  <Tag text={tag} key={index} type={'relevance'}/>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
};

export default ReviewCard;
