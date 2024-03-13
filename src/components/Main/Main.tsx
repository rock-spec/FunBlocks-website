import React from 'react';
import {GamesColumn} from "@/components/GamesColumn/GamesColumn";
import {MainColumn} from "@/components/MainColumn/MainColumn";
import Image from "next/image";

const Main = () => {
  const svgBackground = "url('/background.svg')";
  return (
      <div
          className="min-h-screen flex justify-center items-start pt-[60px] pb-[60px]"
          style={{
            backgroundImage: svgBackground,
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto'
          }}
      >
        <div className="absolute top-[143px] left-0 -z-10">
          <Image src="/bg-svg-left.svg" alt="Left SVG" width={336} height={461}/>
        </div>

        <div className="absolute top-1 right-0 -z-10">
          <Image src="/bg-svg-right.svg" alt="Right SVG" width={221} height={557}/>
        </div>

        <div className="w-full max-w-[1200px] flex justify-between gap-x-5">
          {/* Left Column */}
          <GamesColumn/>
          <MainColumn/>
        </div>
      </div>
  );
}


export default Main;
