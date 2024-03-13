import React from 'react';
import Image from "next/image";

const SearchInput = () => {
  return (
      <div
          className="flex items-center justify-between bg-merino border-b-2 border-nero w-[350px] h-[52px] px-6 py-4.5">
        <input
            type="text"
            className="w-full h-5.5 bg-transparent outline-none placeholder-default"
            placeholder="Search for anything"
            style={{padding: '0', height: '22px'}} // Inline style for exact height
        />
        <Image
            src={'/search.svg'}
            alt="Icon"
            width={24}
            height={24}
        />
      </div>
  );
};

export default SearchInput;
