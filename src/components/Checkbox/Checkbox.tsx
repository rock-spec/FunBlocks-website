"use client"

import Image from "next/image"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Dispatch } from "react"

const CustomCheckbox = ({
    text,
    setFunction,
    stateValue,
}: {
    text: string
    setFunction: Dispatch<string[]>
    stateValue: string[]
}) => {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()
    const params = new URLSearchParams(searchParams)


    // params.set("engine", )

    const handleClick = (option: string) => {
        const engineParam = params.get("engine")
        const engineOptions = engineParam ? engineParam.split(",") : []

        if (engineOptions.includes(option)) {
            params.set("engine", engineOptions.filter((opt) => opt !== option).join(","))
        } else {
            params.set("engine", [...engineOptions, option].join(","))
        }
        setFunction(engineOptions)
        replace(`${pathname}?${params.toString()}`)

        // stateValue.includes(option)
        //     ? setFunction(stateValue.filter((item) => item !== option))
        //     : setFunction([...stateValue, option])
    }

    return (
        <>
            <button
                className="flex justify-between items-center  w-full capitalize my-3"
                onClick={() => handleClick(text)}
            >
                <p>{text}</p>
                {params.get("engine") && params.get("engine").split(",").includes(text.toLowerCase()) ? (
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
            </button>
        </>
    )
}

export default CustomCheckbox

// import Image from "next/image"
// import { Dispatch } from "react"

// const CustomCheckbox = ({
//     text,
//     setFunction,
//     stateValue,
//     searchParams,
// }: {
//     text: string
//     setFunction: Dispatch<string[]>
//     stateValue: string[]
//     searchParams?: any
// }) => {
//     const handleClick = (option: string) => {
//         stateValue.includes(option)
//             ? setFunction(stateValue.filter((item) => item !== option))
//             : setFunction([...stateValue, option])
//     }

//     return (
//         <>
//             <button
//                 className="flex justify-between items-center  w-full capitalize my-3"
//                 onClick={() => handleClick(text)}
//             >
//                 <p>{text}</p>
//                 {stateValue.includes(text) ? (
//                     <Image
//                         src={"/checkboxIcon/checkbox_selected.svg"}
//                         className=""
//                         width={20}
//                         height={20}
//                         alt={"selected"}
//                     />
//                 ) : (
//                     <div className="w-5 h-5 border border-[#161616] rounded-sm"></div>
//                 )}
//             </button>
//         </>
//     )
// }

// export default CustomCheckbox
