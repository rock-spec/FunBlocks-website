import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { Dispatch } from "react";

const CustomCheckbox = ({
    filterName,
    text,
    setFunction,
    stateValue,
}: {
    filterName: string;
    text: string;
    setFunction: Dispatch<any>;
    stateValue: string[];
}) => {
    const searchParams = useSearchParams();
   ;
    const params = new URLSearchParams(searchParams);
  

    const handleClick = (option: string) => {
        const { replace } = useRouter()
        const engineParam = params.get(filterName)
        const engineOptions = engineParam ? engineParam.split(",") : []

        if (engineOptions.includes(option)) {
            params.set(filterName, engineOptions.filter((opt) => opt !== option).join(","))
        } else {
            params.set(filterName, [...engineOptions, option].join(","))
        }
        setFunction(engineOptions)
        replace(`${filterName}?${params.toString()}`)

        
    };

    return (
        <>
            <button
                className="flex justify-between items-center w-full capitalize my-3"
                onClick={(e) => handleClick(text)}
            >
                <p>{text}</p>
                {params.get(filterName) && params.get(filterName)?.split(",").includes(text.toLowerCase()) ? (
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
    );
};

export default CustomCheckbox;

