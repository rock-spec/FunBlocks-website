import React, { ReactNode } from 'react';
import Image from 'next/image';

import '../../app/globals.css';

export interface ButtonProps {
  onClick: () => void;
  text: string;
  type?: 'primary' | 'secondary';
  height?: string;
  width?: string;
  size?: string;
  icon?: ReactNode; // Add a new prop for the icon
}

export const CustomButton = (props: ButtonProps) => {
  const { onClick, text, type = 'primary', height = "100px", width = "350px", icon, size = "18px" } = props;

  const primaryImageSrc = 'https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Group%2010723%20(1)%202-uu1e39irGGWhvZYyNWKcHykOFrV02R.svg';
  const secondaryImageSrc = 'https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Group%2010723%20(1)%201-DrIKz8IZYKwkbEiGowfHc2iWdhmweB.svg';

  return (
    <>
      {/* Preload images */}
      <Image src={primaryImageSrc} alt="" width={1} height={1} />
      <Image src={secondaryImageSrc} alt="" width={1} height={1} />

      {/* Render button */}
      <div
        onClick={onClick}
        className="text-center text-neutral-900 text-lg font-bold font-['OffBit Trial'] tracking-tight flex justify-center items-center"
        style={{
          color: type === "primary" ? "#FFFCF9" : "#161616",
          fontSize: size,
          fontFamily: '"Press Start 2P", cursive',
          backgroundImage: `url("${type === 'primary' ? primaryImageSrc : secondaryImageSrc}")`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          width: width, // Set width of the div in px
          height: height, // Set height of the div px


        }}
      > {text} {icon}
      </div>
    </>
  );
};

// // Usage example:
// <CustomButton
//   onClick={() => console.log('Button clicked')}
//   text="Click me"
//   icon={<IoIosArrowDown />} // Pass the icon as a prop
// />
