import React from 'react';
import Image from 'next/image';
import Button from "@mui/joy/Button";

// Define the props interface
export interface SingleCardItemProps {
  variant: 'event' | 'video';
  imageUrl: string;
  title: string;
  details: string;
  onFirstButtonClick: () => void;
  onSecondButtonClick: () => void;
}

const SingleCardItem = (props: SingleCardItemProps) => {
  const {variant, imageUrl, title, details, onFirstButtonClick, onSecondButtonClick} = props;
  return (
      <div className="flex items-start gap-6 h-[186px]">
        {/* First Column: Image */}
        <div className="relative h-[186px] rounded-md border border-[#161616] overflow-hidden">
          <Image
              src={imageUrl}
              alt="Image"
              width={416}
              height={186}
              layout="fixed"
              objectFit="cover"
              objectPosition="center"
          />
          {variant === 'video' && (
              <div className="absolute bottom-5 left-5">
                <Image
                    src="/play-button.svg"
                    alt="Play"
                    width={50}
                    height={50}
                />
              </div>
          )}
        </div>

        {/* Second Column */}
        <div className="flex flex-col gap-10 w-[416px]">
          {/* First Row */}
          <div className="flex flex-col gap-5 self-stretch">
            {/* Title */}
            <div className="text-[#161616] font-bold text-lg leading-[120%] tracking-[-0.32px] line-clamp-2">
              {title}
            </div>

            {/* Details */}
            {variant === 'video' ? (
                <div className="text-[#161616] text-base font-normal leading-[150%] tracking-[-0.32px] line-clamp-2">
                  {details}
                </div>
            ) : (
                <div className="flex items-center">
                  <Image src="/date-icon.svg" alt="Date" width={12} height={12}/>
                  <span className="text-[#161616] font-bold text-lg leading-[120%] tracking-[0.36px] ml-2">
                {details}
              </span>
                </div>
            )}
          </div>

          {/* Second Row: Buttons */}
          <div className="flex gap-4">
            <Button color="primary" variant="solid" onClick={onFirstButtonClick}>
              {variant === 'video' ? 'Watch Video' : 'Join Event'}
            </Button>
            <Button color="neutral" variant="solid" onClick={onSecondButtonClick}>
              {variant === 'video' ? 'More' : 'Details'}
            </Button>
          </div>
        </div>
      </div>
  );
};

export default SingleCardItem;
