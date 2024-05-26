import Image from "next/image"
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
    const handleClick = (option: string) => {
        stateValue.includes(option)
            ? setFunction(stateValue.filter((item) => item !== option))
            : setFunction([...stateValue, option])
    }


    return (
        <>
            <button
                className="flex justify-between items-center  w-full capitalize my-3"
                onClick={() => handleClick(text)}
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
