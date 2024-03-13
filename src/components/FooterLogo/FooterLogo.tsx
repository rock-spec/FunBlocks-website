import React from 'react';
import Image from 'next/image';

const FooterLogo = () => {
  return (
      <div className="flex flex-1 flex-col justify-center items-center gap-4">
        {/* First Row: SVG Image */}
        <div className="w-[203.261px] h-[25px]">
          <Image
              src="/funblocks.svg" // Replace with the actual path to your SVG
              alt="Funblocks Logo"
              width={203.261}
              height={25}
              layout="fixed"
          />
        </div>

        {/* Second Row: Text */}
        <div className="text-shallow text-sm font-normal" style={{lineHeight: 'normal'}}>
          © 2023 Fun Blocks. All Rights Reserved.
        </div>
      </div>
  );
};

export default FooterLogo;
