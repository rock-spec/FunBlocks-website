import React from 'react';

const FooterNav = () => {
  return (
      <div className="flex flex-1 items-start gap-4 w-[181px] h-[97px]">
        {/* First Sub-Column */}
        <div className="flex flex-col items-start gap-8 w-[180.5px]">
          <div className="text-default text-base font-normal" style={{lineHeight: '110%'}}>
            Games
          </div>
          <div className="text-default text-base font-normal" style={{lineHeight: '110%'}}>
            Reviews
          </div>
          <div className="text-default text-base font-normal" style={{lineHeight: '110%'}}>
            Events
          </div>
        </div>

        {/* Second Sub-Column */}
        <div className="flex flex-col items-start gap-8 w-[180.5px]">
          <div className="text-default text-base font-normal" style={{lineHeight: '110%'}}>
            Guides
          </div>
          <div className="text-default text-base font-normal" style={{lineHeight: '110%'}}>
            About Fun Blocks
          </div>
          <div className="text-default text-base font-normal" style={{lineHeight: '110%'}}>
            Terms & Conditions
          </div>
        </div>
      </div>
  );
};

export default FooterNav;
