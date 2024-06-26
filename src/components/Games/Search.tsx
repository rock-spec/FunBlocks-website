import React from "react"
import Image from "next/image"

const Search = ({
    onChange,
    placeholder,
    reset
}: {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    reset?:any
}) => {
    return (
        <div className="flex justify-between items-center border-b-2 border-nero my-3">
            <input
                onChange={onChange} // Use the passed onChange function here
                type="text"
                className="  bg-transparent outline-none placeholder-default w-full "
                placeholder={placeholder}
                style={{ padding: "0", height: "22px" }} // Inline style for exact height
            />
            <Image src={"/search.svg"} alt="Icon" width={16} height={16} />
            {reset &&  <img className="w-4 h-4 ml-1" src="/buttons/refresh.svg" alt="refreshBtn"  onClick={() => reset([])}/>}
        </div>
    )
}

export default Search
