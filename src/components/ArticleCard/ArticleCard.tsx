import React from 'react';
import Image from 'next/image';
import {Tag} from "@/components/Tag/Tag";

export interface ArticleCardProps {
  imageUrl: string;
  title: string;
  tags: string[];
}

const ArticleCard = (props: ArticleCardProps) => {
  const {imageUrl, title, tags} = props;
  return (
      <div className="flex flex-col items-start gap-5 p-5 border border-[#161616] bg-[#FFFCF9] flex-1">
        {/* First Row: Image */}
        <div className="w-full border border-[#161616]">
          <Image
              src={imageUrl} // Replace with the actual image URL
              alt={title}
              width={245}
              height={180}
              layout="responsive"
              objectFit="cover"
              objectPosition="center"
          />
        </div>

        {/* Second Row: Title */}
        <div
            className="self-stretch overflow-hidden text-nero text-lg font-bold leading-[120%] tracking-[-0.36px] line-clamp-2">
          {title}
        </div>

        {/* Third Row: Tags */}
        <div className="flex gap-2">
          {tags.map((tag, index) => (
              <Tag text={tag} key={index} type={'relevance'}/>
          ))}
        </div>
      </div>
  );
};

export default ArticleCard;
