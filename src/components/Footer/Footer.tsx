import React from 'react';
import {BottomSVG} from "@/components/NavBar/NavBar";
import FooterContactCard from "@/components/FooterContactCard/FooterContactCard";
import FooterNav from "@/components/FooterNav/FooterNav";
import FooterLogo from "@/components/FooterLogo/FooterLogo";

const Footer = () => {
  return (
      <footer className="bg-white text-gray-800">
        <div className="px-[100px] py-[60px] flex justify-between items-center">
          {/* Column 1 */}
          <FooterContactCard/>

          {/* Column 2 */}
          <FooterNav/>

          {/* Column 3 */}
          <FooterLogo/>
        </div>

        {/* SVG Section */}
        <div className="w-full bg-gray-200 overflow-hidden flex">
          <BottomSVG/>
        </div>
      </footer>
  );
};

export default Footer;
