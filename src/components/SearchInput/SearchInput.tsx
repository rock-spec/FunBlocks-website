import React from 'react';
import Image from "next/image";

export interface SearchInputProps {
  varient?: 'light' | 'dark',
  placeholder?: string
}

const SearchInput = (props: SearchInputProps) => {
  const { varient = "dark", placeholder = "Search for anything" } = props

  // ${ varient === "dark" ? "447px" : "350px" }

  return (
    <div
      className={`flex items-center justify-between bg-[${varient === 'dark' ? "#F6EEE6" : "#FFFCF9"}] border-b-2 border-nero  flex-1 max-w-[447px]
      h-[52px] px-6 py-4.5`}>
      <input
        type="text"
        className=" h-5.5 bg-transparent outline-none placeholder-default"
        placeholder={placeholder}
        style={{ padding: '0', height: '22px' }} // Inline style for exact height
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
