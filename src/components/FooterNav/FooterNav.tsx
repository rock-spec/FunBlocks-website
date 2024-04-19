import Link from 'next/link';
import React from 'react';

const FooterNav = () => {
  return (
    <div className="flex flex-1 items-start gap-4 w-full text-blue-700 font-medium underline mb-10 md:0">
      {/* First Sub-Column */}
      <div className="flex flex-col items-start gap-8 w-[180.5px]">
        <div className=" text-base cursor-pointer" style={{ lineHeight: '50%' }}>
          <Link href="#"> Games</Link>
        </div>
        <div className=" text-base cursor-pointer" style={{ lineHeight: '50%' }}>
          <Link href="#"> Reviews</Link>
        </div>
        <div className=" text-base cursor-pointer" style={{ lineHeight: '50%' }}>
          <Link href="#"> Events</Link>
        </div>
      </div>

      {/* Second Sub-Column */}
      <div className="flex flex-col items-start gap-8 w-[180.5px]">
        <div className=" text-base cursor-pointer" style={{ lineHeight: '50%' }}>
          <Link href="#"> Guides</Link>
        </div>
        <div className=" text-base cursor-pointer" style={{ lineHeight: '50%' }}>
          <Link href="#"> About Fun Blocks</Link>
        </div>
        <div className=" text-base cursor-pointer" style={{ lineHeight: '50%' }}>
          <Link href="#"> Terms & Conditions</Link>
        </div>
      </div>
    </div>
  );
};

export default FooterNav;
