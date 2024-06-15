"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import { useRouter, usePathname } from "next/navigation"
import { useDebounce } from "./hooks"

export interface SearchInputProps {
    varient?: "light" | "dark"
    placeholder?: string
    className?: string
    searchParams?: any
    component?: string
}

const SearchInput = (props: SearchInputProps) => {
    const [path, setpath] = useState("")
    const pathname = usePathname()
    const router = useRouter()
    // const path = pathname?.split("/")[2]

    const [qry, setQry] = useState("")
    const debouncedSearch = useDebounce(qry)
    const { varient = "dark", placeholder = "Search for anything", searchParams } = props

    useEffect(() => {
        if (pathname) setpath(pathname?.split("/")[2])
    }, [pathname])

    // console.log(pathname);
    

    useEffect(() => {
        if (props.component === "navbar") {
            qry ?  router.push(`${pathname}?search=${qry}`) : router.push(`/`)
        } else if (path === "game") {
            router.push(
                `game?engine=${searchParams?.engine ? searchParams?.engine : ""}&blockchain=${
                    searchParams?.blockchain ? searchParams?.blockchain : ""
                }&studio=${searchParams?.studio ? searchParams?.studio : ""}${qry ? `&qry=${qry}` : ""}`
            )
            router.refresh()
        } else {
            router.push(
                `${path}?category=${searchParams?.category || ""}&sort=${searchParams?.sort || ""}&qry=${qry}`
            )
        }
    }, [debouncedSearch])

    return (
        <div
            className={`flex items-center justify-between bg-[${
                varient === "dark" ? "#F6EEE6" : "#FFFCF9"
            }] border-b-2 border-nero  
       max-w-${varient === "dark" ? "[447px]" : "[350px]"} ${varient === "dark" ? "mx-5" : "mr-4"} 
      h-[41px] px-6 py-4.5 ${props.className} `}
        >
            <input
                onChange={(e) => setQry(e.target.value)}
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
