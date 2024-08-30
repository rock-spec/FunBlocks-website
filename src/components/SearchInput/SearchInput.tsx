"use client"

import React, { useEffect, useRef, useState, useCallback } from "react"
import Image from "next/image"
import { useRouter, usePathname } from "next/navigation"
import { type Locale } from "@/i18n.config"

export interface SearchInputProps {
    varient?: "light" | "dark"
    placeholder?: string
    className?: string
    searchParams?: any
    component?: string
    locale?: Locale
}

const SearchInput = (props: SearchInputProps) => {
    const [path, setPath] = useState("")
    const [query, setQuery] = useState("")
    const pathname = usePathname()
    const router = useRouter()
    const inputRef = useRef<HTMLInputElement>(null)
    const { varient = "dark", placeholder = "Search for anything", searchParams, locale, component } = props

    useEffect(() => {
        if (pathname) setPath(pathname?.split("/")[2])
    }, [pathname])

    useEffect(() => {
        const params = new URLSearchParams(searchParams)
        const qry = params.get("qry")
        if (qry && inputRef.current) {
            inputRef.current.value = qry
            setQuery(qry)
        }
    }, [searchParams])

    // Debounce function to delay the search execution
    const debounce = (func: (...args: any[]) => void, delay: number) => {
        let timeoutId: NodeJS.Timeout
        return (...args: any[]) => {
            clearTimeout(timeoutId)
            timeoutId = setTimeout(() => func(...args), delay)
        }
    }

    const handleSearchClick = () => {
        if (inputRef.current) {
            const qry = inputRef.current.value
            if (props.component === "navbar") {
                router.push(`/${locale}/search?search=${qry}`)
            } else if (path === "game") {
                router.push(
                    `game?engine=${searchParams?.engine ? searchParams?.engine : ""}&blockchain=${
                        searchParams?.blockchain ? searchParams?.blockchain : ""
                    }&studio=${searchParams?.studio ? searchParams?.studio : ""}&qry=${qry}`
                )
            } else if (path !== "game") {
                router.push(
                    `${path}?category=${searchParams?.category || ""}&sort=${
                        searchParams?.sort || ""
                    }&qry=${qry}`
                )
            }
        }
    }

    // Debounced handleSearch function
    const debouncedSearch = useCallback(
        debounce(() => handleSearchClick(), 500), // Adjust the delay (500ms) as needed
        [path, searchParams, locale]
    )

    const handleInputChange = () => {
        if (inputRef.current) {
            setQuery(inputRef.current.value)
            if (component && component === "navbar") debouncedSearch()
        }
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleSearchClick()
        }
    }

    return (
        <div
            className={`flex items-center justify-between bg-[${
                varient === "dark" ? "#F6EEE6" : "#FFFCF9"
            }] border-b-2 border-nero  
       max-w-${varient === "dark" ? "[447px]" : "[350px]"} ${varient === "dark" ? "mx-5" : "mr-4"} 
      h-[41px] px-6 py-4.5 ${props.className} `}
        >
            <input
                ref={inputRef}
                type="text"
                className="bg-transparent outline-none placeholder-default w-full"
                placeholder={placeholder}
                style={{ padding: "0", height: "22px" }} // Inline style for exact height
                onChange={handleInputChange} // Call the input change handler
                onKeyDown={handleKeyDown} // Call the keydown handler for "Enter" key
            />
            <Image
                className="cursor-pointer"
                src={"/search.svg"}
                alt="Icon"
                width={24}
                height={24}
                onClick={handleSearchClick}
            />
        </div>
    )
}

export default SearchInput
