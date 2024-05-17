import localFont from "next/font/local"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { IoIosArrowDown } from "react-icons/io"

const OffBit = localFont({
    src: "../Button/font/OffBitTrial-Bold.otf",
})

const LanguageSelector = () => {
    const [showDropdown, setShowDropdown] = useState(false)
    const [selectedLanguage, setSelectedLanguage] = useState("en") // State to manage the selected language
    const dropDownRef = useRef<any>()

    const switchLanguage = (langCode: string) => {
        setSelectedLanguage(langCode) // Update the selected language
        setShowDropdown(false)
    }

    const languages = [
        { code: "en", lang: "ENG" },
        { code: "zh", lang: "CN" },
    ]

    useEffect(() => {
        const dropDownHandler = (event: MouseEvent) => {
            if (!dropDownRef.current.contains(event.target)) setShowDropdown(false)
        }
        document.addEventListener("mousedown", dropDownHandler)
        return () => {
            document.removeEventListener("mousedown", dropDownHandler)
        }
    })

    return (
        <div className={`relative ${OffBit.className} leading-normal`}>
            <button
                onClick={() => setShowDropdown((prev) => !prev)}
                className={`px-3 pe-6 py-1 flex  justify-between  items-center w-[91px] h-[36px] bg-no-repeat bg-contain bg-[url('/buttons/small_button.svg')] `}
                ref={dropDownRef}
            >
                <p>{languages.find((lang) => lang.code === selectedLanguage)?.lang}</p>
                <IoIosArrowDown />
            </button>
            <ul
                className={`${
                    showDropdown ? "h-fit opacity-100" : "h-0 opacity-0"
                } absolute z-10 bg-white w-[85%] space-y-1 duration-300 .transition-height`}
            >
                {languages.map((lang, i) => (
                    <li
                        key={i}
                        onClick={() => {
                            switchLanguage(lang.code)
                        }}
                        className="flex items-center justify-between cursor-pointer px-3 py-2 duration-300 hover:bg-slate-400"
                    >
                        <p className="">{lang.lang}</p>
                        {selectedLanguage === lang.code ? (
                            <Image
                                src={"/checkboxIcon/checkbox_selected.svg"}
                                className=""
                                width={20}
                                height={20}
                                alt={"selected"}
                            />
                        ) : (
                            <div className="w-5 h-5 border border-[#161616] rounded-sm"></div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default LanguageSelector
