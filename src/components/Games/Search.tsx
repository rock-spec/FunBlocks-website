import React from "react"
import Image from "next/image"

const Search = ({
    onChange,
    placeholder,
}: {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
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
        </div>
    )
}

export default Search
