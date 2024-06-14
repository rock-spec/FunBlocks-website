"use client"
import React, { useEffect, useRef, useState } from "react"
import { IoIosArrowDown } from "react-icons/io"
import localFont from "next/font/local"

const OffBit = localFont({
    src: "../Button/font/OffBitTrial-Bold.otf",
})

const CustomDropDown = ({
    text,
    options = [],
    btn_width = "w-[250px]",
    bg = "bg-[url('/buttons/dropdown_selector_button.svg')]",
    txt_px = "px-3",
}: {
    text: string
    options?: any[]
    btn_width?: string
    bg?: string
    txt_px?: string
}) => {
    const [showDropdown, setShowDropdown] = useState(false)
    const dropDownRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const dropDownHandler = (event: { target: any }) => {
            if (dropDownRef.current && !dropDownRef.current.contains(event.target)) setShowDropdown(false)
        }
        document.addEventListener("mousedown", dropDownHandler)
        return () => {
            document.removeEventListener("mousedown", dropDownHandler)
        }
    })

    
    return (
        <>
            <div className={`relative ${btn_width} h-[44px] ${OffBit.className} `} ref={dropDownRef}>
                <button
                    onClick={() => setShowDropdown((prev) => !prev)}
                    className={`relative  flex items-center justify-between ${txt_px} ${bg} w-full h-full bg-contain bg-center bg-no-repeat`}
                >
                    <p className="capitalize">{text}</p>
                    <IoIosArrowDown />
                </button>
                {showDropdown && (
                    <ul className="absolute z-10 bg-white w-full space-y-1 ">
                        {options.map((option, i) => (
                            <li
                                key={i}
                                onClick={() => {
                                    setShowDropdown(false)
                                }}
                                className="cursor-pointer px-3 py-2 duration-300 hover:bg-slate-400 capitalize"
                            >
                                {option.name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    )
}

export default CustomDropDown
