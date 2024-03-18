import React from "react";
import Button from "@mui/joy/Button";
import { Tag } from "@/components/Tag/Tag";
import Image from "next/image";
import { ColumnItems, SingleColumnProps } from "../ColumnItems/ColumnItems";
import { CustomButton } from "../Button/Button";

// Define the props interface
export interface ColumnProps {
  variant: 'game' | 'article' | 'news';
  title: string;
  author?: string;
  details?: string;
  description?: string;
  tags?: string[];
  zone?: string;
  buttonText: string;
  columnItems: Array<SingleColumnProps>;
  onButtonClick?: () => void;
}

export const Column = (props: ColumnProps) => {
  const { variant, title, columnItems, buttonText, onButtonClick = () => { } } = props;
  return (
    <div className="border border-black bg-floralWhite p-5 w-[285px] h-full">
      {/* Row 1 */}
      <div className="flex justify-between items-center mb-10 h-[33px] ">
        <Tag text={`${title}s`} type={"section"} />
        {/* <Image src={"/filter.svg"} alt="Filter Icon" width={24} height={24} /> */}
      </div>
      <div className=" overflow-x-hidden w-fit max-h-fit">
        {/* Row 2 */}

        <div className="flex w-fit flex-col gap-8">
          {columnItems.map((detail, index) => (
            <ColumnItems key={index} {...detail} /> // Replace '...detail' with actual props
          ))}
        </div>


      </div>

      {/* Row 3 */}
      <div className="flex ">
        {/* Replace ButtonComponent with your actual button component */}
        <CustomButton text={buttonText} onClick={onButtonClick} />
      </div>
    </div>
  );
};
