import localFont from "next/font/local"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { IoIosArrowDown } from "react-icons/io"
import { localeNames, locales, usePathname, useRouter, type Locale } from "@/i18n.config"
import { useLocale, useTranslations } from "next-intl"

const OffBit = localFont({
    src: "../Button/font/OffBitTrial-Bold.otf",
})

const LanguageSelector = () => {
    const [showDropdown, setShowDropdown] = useState<Boolean>(false)
    const dropDownRef = useRef<any>()

    const pathname = usePathname()
    const router = useRouter()
    const locale = useLocale() as Locale

    const switchLanguage = (newLocale: Locale) => {
        router.replace(pathname, { locale: newLocale })
        setShowDropdown(false)
    }

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
                <p>{localeNames[locale]}</p>
                <IoIosArrowDown />
            </button>
            <ul
                className={`${
                    showDropdown ? "h-fit opacity-100" : "h-0 opacity-0"
                } absolute z-10 bg-white w-[85%] space-y-1 duration-300 .transition-height`}
            >
                {locales.map((loc, i) => (
                    <li
                        key={i}
                        onClick={() => {
                            switchLanguage(loc)
                        }}
                        className="flex items-center justify-between cursor-pointer px-3 py-2 duration-300 hover:bg-slate-400"
                    >
                        <p className="">{localeNames[loc]}</p>
                        {locale === loc ? (
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
