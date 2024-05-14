import React, { useEffect, useRef, useState } from "react"
import { IoIosArrowDown } from "react-icons/io"
import localFont from "next/font/local"

const OffBit = localFont({
    src: "../Button/font/OffBitTrial-Bold.otf",
})

const CustomDropDown = ({ text, options = [] }) => {
    const [showDropdown, setShowDropdown] = useState(false)
    const dropDownRef = useRef()
    // const options = ["cat1", "cat2", "cat3", "cat4"]

    useEffect(() => {
        const dropDownHandler = (event) => {
            if (!dropDownRef.current.contains(event.target)) setShowDropdown(false)
        }
        document.addEventListener("mousedown", dropDownHandler)
        return () => {
            document.removeEventListener("mousedown", dropDownHandler)
        }
    })

    return (
        <>
            <div className={`relative w-[250px] h-[44px] ${OffBit.className} `} ref={dropDownRef}>
                <button
                    onClick={() => setShowDropdown((prev) => !prev)}
                    className="relative  flex items-center justify-between px-3  bg-[url('/buttons/dropdown_selector_button.svg')] w-full h-full bg-contain bg-center bg-no-repeat "
                >
                    <p>{text}</p>
                    <IoIosArrowDown />
                </button>
                {showDropdown && (
                    <ul className="absolute z-10 bg-white w-full space-y-1 ">
                        {options.map((option, i) => (
                            <li
                                key={i}
                                onClick={() => {
                                    console.log(option)
                                    setShowDropdown(false)
                                }}
                                className="cursor-pointer px-3 py-2 duration-300 hover:bg-slate-400"
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    )
}

export default CustomDropDown
