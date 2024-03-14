import React from 'react';
import { Tag } from "@/components/Tag/Tag";
import SingleCardItem, { SingleCardItemProps } from "@/components/SingleCardItem/SingleCardItem";
import { CustomButton } from '../Button/Button';

// Define the props interface
export interface SingleCardProps {
  name: 'video' | 'article';
  singleCardItemDetails: Array<SingleCardItemProps>; // Define or import EventCardDetail interface
  buttonText: string;
  onButtonClick: () => void; // Function type for button click
}

const SingleCard = (props: SingleCardProps) => {
  const { name, singleCardItemDetails, buttonText, onButtonClick } = props;
  return (
    <div className="flex flex-col flex-1 items-start gap-10 p-5 border border-[#161616] bg-[#FFFCF9]">
      {/* First Row: Tag */}
      <Tag text={name + 's'} type={'section'} />

      {/* Second Row: Event Cards */}
      <div className="flex flex-col gap-8">
        {singleCardItemDetails.map((detail, index) => (
          <SingleCardItem key={index} {...detail} /> // Replace '...detail' with actual props
        ))}
      </div>

      {/* Third Row: Button */}
      <div className="flex justify-center w-full">
        <CustomButton onClick={onButtonClick} text={buttonText} width="350px" height="100px" type='secondary' />
      </div>
    </div>
  );
};

export default SingleCard;
