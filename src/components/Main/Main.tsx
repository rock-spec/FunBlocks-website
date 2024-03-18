import React, { useState } from 'react';
import Image from "next/image";
import Home from '../Home/Home';
import { NavBar } from '../NavBar/NavBar';
import Article from '../Articles/Article';
import Video from '../Videos/Video';
import Game from '../Games/Game';


const Main = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'games':
        return <Game />;
      case 'news':
        return "News";
      case "article":
        return <Article />;
      case 'videos':
        return <Video />;
      default:
        return <Home />;
    }
  };

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
  };

  const svgBackground = "url('/background.svg')";
  return (
    <>
      {/* Pass handleNavigation function as a prop to NavBar */}

      <NavBar handleNavigation={handleNavigation} />
      <div
        className="min-h-screen flex justify-center items-start pt-[60px] pb-[60px]"
        style={{
          backgroundImage: svgBackground,
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto'
        }}
      >
        <div className="absolute top-[143px] left-0 -z-10">
          <Image src="/bg-svg-left.svg" alt="Left SVG" width={336} height={461} />
        </div>

        <div className="absolute top-1 right-0 -z-10">
          <Image src="/bg-svg-right.svg" alt="Right SVG" width={221} height={557} />
        </div>



        {/* Pages */}
        {renderPage()}
      </div>
    </>
  );
};

export default Main;
