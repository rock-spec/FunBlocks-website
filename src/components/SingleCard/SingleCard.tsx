import React from 'react';
import { Tag } from "@/components/Tag/Tag";
import SingleCardItem, { SingleCardItemProps } from "@/components/SingleCardItem/SingleCardItem";
import { CustomButton } from '../Button/Button';
import SingleVideoCardItem from './SingleVideoCardItem';

// Define the props interface
export interface SingleCardProps {
  name: 'event' | 'article' | 'video';
  singleCardItemDetails: Array<SingleCardItemProps>; // Define or import EventCardDetail interface
  buttonText: string;
  onButtonClick: () => void; // Function type for button click
}

const SingleCard = (props: SingleCardProps) => {
  const { name, singleCardItemDetails, buttonText, onButtonClick } = props;
  return (
    <div className="flex flex-col flex-1 items-start gap-5 p-5 border border-[#161616] bg-[#FFFCF9]">
      {/* First Row: Tag */}
      <Tag text={name + 's'} type={'section'} />

      {/* Second Row: Event Cards */}
      {
        name === 'video' ? (
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {singleCardItemDetails.map((detail, index) => (
              <SingleVideoCardItem key={index} {...detail} /> // Replace '...detail' with actual props
            ))}
          </div>
        ) : (<div className="flex flex-col gap-8">
          {singleCardItemDetails.map((detail, index) => (
            <SingleCardItem key={index} {...detail} /> // Replace '...detail' with actual props
          ))}
        </div>)
      }

      {/* Third Row: Button */}
      <div className="flex justify-center w-full">
        <CustomButton onClick={onButtonClick} text={buttonText} width="300px" type='secondary' size='13px' />
      </div>
    </div>
  );
};

export default SingleCard;
