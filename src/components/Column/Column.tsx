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
  buttonText?: string;
  columnItems: Array<SingleColumnProps>;
  onButtonClick?: () => void;
  className?: string;
  responsive?: boolean;
}

export const Column = (props: ColumnProps) => {
  const { variant, title, columnItems, buttonText, onButtonClick = () => { }, className, responsive } = props;
  return (
    <div className={`border border-black bg-floralWhite p-5 lg:w-[285px] h-full ${responsive ? 'sm:w-full bg-re mb-10 lg:mb-0' : ""} ${className} `}>

      {/* Row 1 */}
      <div className="flex justify-between items-center mb-10 h-[33px] ">
        <Tag text={`${title}s`} type={"section"} />
        {/* <Image src={"/filter.svg"} alt="Filter Icon" width={24} height={24} /> */}
      </div>
      <div className=" overflow-x-hidden w-fit max-h-fit">
        {/* Row 2 */}

        <div className={`flex w-fit flex-col gap-${variant === "article" ? 0 : 5} ${responsive ? `sm:grid sm:grid-cols-2 md:grid-cols-3 lg:flex lg:w-fit lg:flex-col lg:gap-${variant === "article" ? 0 : 5}` : ``}`}>
          {columnItems.map((detail, index) => (
            <ColumnItems key={index} {...detail} /> // Replace '...detail' with actual props
          ))}
        </div>


      </div>

      {/* Row 3 */}
      <div className="flex ">
        {/* Replace ButtonComponent with your actual button component */}
        {buttonText && <CustomButton text={buttonText} onClick={onButtonClick} link={`/${variant}`} />}
      </div>
    </div>
  );
};
