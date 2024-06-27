

import Image from "next/image"
import { Dispatch } from "react"

const CustomCheckbox = ({
    filterName,
    text,
    setFunction,
    stateValue,
    searchParams,
}: {
    filterName: any
    text: string
    setFunction: any
    stateValue: string[]
    searchParams?: any
}) => {
    const handleClick = (option: string,) => {
        stateValue.includes(option)
            ? setFunction(stateValue.filter((item) => item !== option))
            : setFunction([...stateValue, option])

        // filterFunc()
    }

    return (
        <>
            <button
                className="flex justify-between items-center  w-full capitalize my-3"
                onClick={(e) => handleClick(text)}
            >
                <p>{text}</p>
                {stateValue.includes(text) ? (
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
