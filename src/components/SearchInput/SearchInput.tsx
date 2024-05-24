"use client"

import React from "react"
import Image from "next/image"

export interface SearchInputProps {
    varient?: "light" | "dark"
    placeholder?: string
    className?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void // Modify the onChange type
}

const SearchInput = (props: SearchInputProps) => {
    const { varient = "dark", placeholder = "Search for anything", onChange = () => {} } = props

    return (
        <div
            className={`flex items-center justify-between bg-[${
                varient === "dark" ? "#F6EEE6" : "#FFFCF9"
            }] border-b-2 border-nero  
       max-w-${varient === "dark" ? "[447px]" : "[350px]"} ${varient === "dark" ? "mx-5" : "mr-4"} 
      h-[41px] px-6 py-4.5 ${props.className} `}
        >
            <input
                onChange={onChange} // Use the passed onChange function here
                type="text"
                className="  bg-transparent outline-none placeholder-default w-full"
                placeholder={placeholder}
                style={{ padding: "0", height: "22px" }} // Inline style for exact height
            />
            <Image src={"/search.svg"} alt="Icon" width={24} height={24} />
        </div>
    )
}

export default SearchInput