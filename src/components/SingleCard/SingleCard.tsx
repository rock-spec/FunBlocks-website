import React from 'react';
import {Tag} from "@/components/Tag/Tag";
import Button from "@mui/joy/Button";
import SingleCardItem, {SingleCardItemProps} from "@/components/SingleCardItem/SingleCardItem";

// Define the props interface
export interface SingleCardProps {
  name: 'video' | 'event';
  singleCardItemDetails: Array<SingleCardItemProps>; // Define or import EventCardDetail interface
  buttonText: string;
  onButtonClick: () => void; // Function type for button click
}

const SingleCard = (props: SingleCardProps) => {
  const {name, singleCardItemDetails, buttonText, onButtonClick} = props;
  return (
      <div className="flex flex-col flex-1 items-start gap-10 p-5 border border-[#161616] bg-[#FFFCF9]">
        {/* First Row: Tag */}
        <Tag text={name + 's'} type={'section'}/>

        {/* Second Row: Event Cards */}
        <div className="flex flex-col gap-6">
          {singleCardItemDetails.map((detail, index) => (
              <SingleCardItem key={index} {...detail} /> // Replace '...detail' with actual props
          ))}
        </div>

        {/* Third Row: Button */}
        <div className="flex justify-center w-full">
          <Button color="neutral" variant="solid" onClick={onButtonClick}>
            {buttonText}
          </Button>
        </div>
      </div>
  );
};

export default SingleCard;
