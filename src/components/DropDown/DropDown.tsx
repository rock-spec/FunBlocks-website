"use client"
import React, { useEffect, useRef, useState } from "react"
import { IoIosArrowDown } from "react-icons/io"
import localFont from "next/font/local"
import { useRouter, usePathname, useSearchParams } from "next/navigation"

const OffBit = localFont({
    src: "../Button/font/OffBitTrial-Bold.otf",
})

const CustomDropDown = ({
    text,
    options = [],
    btn_width = "w-[250px]",
    bg = "bg-[url('/buttons/dropdown_selector_button.svg')]",
    txt_px = "px-3",
    item = "",
    searchParams,
}: {
    text: string
    options?: any[]
    btn_width?: string
    bg?: string
    txt_px?: string
    item?: string
    searchParams?: any
}) => {
    const [showDropdown, setShowDropdown] = useState(false)
    const [selectedCategory, setSelectedcategory] = useState("")
    const [sortOption, setSortOption] = useState("")
    const [networkOption, setNetworkOption] = useState("")
    const [typeOption, setTypeOption] = useState("")
    const [statusOption, setStatusOption] = useState("")
    const [filterOption, setFilterOption] = useState("")
    const [path, setpath] = useState("")

    const pathname = usePathname()
    const router = useRouter()

    const searchParam = useSearchParams()
    const category = searchParam.get("category")
    const network = searchParam.get("network")

    const catName =
        options.filter((cat: any) => cat.categoryid == category).map((cat: any) => cat.name)[0] || ""

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

    useEffect(() => {
        if (item == "appSearch") {
            setpath(pathname)
        } else if (pathname) setpath(pathname?.split("/")[2])
    }, [pathname])

    useEffect(() => {
        if (selectedCategory) {
            router.push(
                `${path}?category=${selectedCategory}&network=${searchParams?.network || ""}&sort=${
                    searchParams?.sort || ""
                }&types=${searchParams?.type || ""}&status=${searchParams?.status || ""}&qry=${
                    searchParams?.qry || ""
                }`
            )
            router.refresh()
        }
    }, [selectedCategory])

    useEffect(() => {
        if (sortOption) {
            router.push(
                `${path}?category=${searchParams?.category || ""}&network=${
                    searchParams?.network || ""
                }&sort=${sortOption}&types=${searchParams?.type || ""}&status=${
                    searchParams?.status || ""
                }&qry=${searchParams?.qry || ""}`
            )
            router.refresh()
        }
    }, [sortOption])

    useEffect(() => {
        if (networkOption) {
            router.push(
                `${path}?category=${searchParams?.category || ""}&network=${networkOption}&types=${
                    searchParams?.type || ""
                }&status=${searchParams?.status || ""}&qry=${searchParams?.qry || ""}`
            )
            router.refresh()
        }
    }, [networkOption])

    useEffect(() => {
        if (typeOption) {
            router.push(
                `${path}?category=${searchParams?.category || ""}&network=${
                    searchParams?.network || ""
                }&type=${typeOption}&status=${searchParams?.status || ""}&qry=${searchParams?.qry || ""}`
            )
            router.refresh()
        }
    }, [typeOption])

    useEffect(() => {
        if (statusOption) {
            router.push(
                `${path}?category=${searchParams?.category || ""}&network=${
                    searchParams?.network || ""
                }&type=${searchParams?.type || ""}&status=${statusOption}&qry=${searchParams?.qry || ""}`
            )
            router.refresh()
        }
    }, [statusOption])

    useEffect(() => {
        if (item == "appSearch" && filterOption) {
            router.push(`${path}?search=${searchParams?.search || ""}&filter=${filterOption}`)
            router.refresh()
        }
    }, [filterOption])

    return (
        <>
            <div className={`relative ${btn_width} h-[44px] ${OffBit.className} `} ref={dropDownRef}>
                <button
                    onClick={() => setShowDropdown((prev) => !prev)}
                    className={`relative  flex items-center justify-between ${txt_px} ${bg} w-full h-full bg-contain bg-center bg-no-repeat`}
                >
                    {text === "category" && (
                        <p className="capitalize">{!category ? text : category === "" ? text : catName}</p>
                    )}

                    {text !== "category" && <p className="capitalize">{text}</p>}
                    <IoIosArrowDown />
                </button>
                {showDropdown && (
                    <ul className="absolute z-10 bg-white w-full space-y-1 ">
                        {options.map((option, i) => (
                            <li
                                key={i}
                                onClick={() => {
                                    setShowDropdown(false)
                                    if (item == "category") setSelectedcategory(option.categoryid)
                                    if (item == "sort") setSortOption(option.value)
                                    if (item == "network") setNetworkOption(option.value)
                                    if (item == "type") setTypeOption(option.type)
                                    if (item == "status") setStatusOption(option.status)
                                    if (item == "appSearch") setFilterOption(option.value)
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
