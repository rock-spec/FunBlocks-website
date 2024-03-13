import React from 'react';
import Image from "next/image";

const FooterContactCard = () => {
  // Dummy array for social icons
  const socialIcons = new Array(8).fill('/social/fb.svg');

  return (
      <div className="flex flex-col flex-1 items-start gap-3 w-[361px] h-[80.5px]">
        {/* First Row: EMAIL US */}
        <div className="text-pictonBlue text-xs font-medium" style={{lineHeight: '140%'}}>
          EMAIL US
        </div>

        {/* Second Row: Email Address */}
        <div className="text-default text-base" style={{lineHeight: '110%'}}>
          email@example.com
        </div>

        {/* Third Row: Social Icons */}
        <div className="flex items-start gap-2">
          {socialIcons.map((iconPath, index) => (
              <div key={index} className="w-[30.496px] h-[30.496px]" style={{flexShrink: 0}}>
                <Image
                    src={iconPath}
                    alt={`Social Icon ${index + 1}`}
                    width={30.496}
                    height={30.496}
                    layout="fixed"
                />
              </div>
          ))}
        </div>
      </div>
  );
};

export default FooterContactCard;
