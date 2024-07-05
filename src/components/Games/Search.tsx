import React from "react"
import Image from "next/image"
import { usePathname, useSearchParams,useRouter } from "next/navigation"

const Search = ({
    onChange,
    placeholder,
    reset,
    name
}: {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    reset?:any
    name?:string
}) => {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();


  const handleReset = () => {
    reset && reset([]);
    const params = new URLSearchParams(searchParams.toString());
    if (name) {
      params.set(name, "");
    }
    replace(`${pathname}?${params.toString()}`);
  };
  
    return (
        <div className="flex justify-between items-center border-b-2 border-nero my-3">
            <input
                onChange={onChange} // Use the passed onChange function here
                type="text"
                className="  bg-transparent outline-none placeholder-default w-full "
                placeholder={placeholder}
                style={{ padding: "0", height: "22px" }} // Inline style for exact height
            />
            <Image src={"/search.svg"} alt="Icon" width={16} height={16} />
            {reset &&  <img className="w-4 h-4 ml-1" src="/buttons/refresh.svg" alt="refreshBtn"  onClick={handleReset}/>}
        </div>
    )
}

export default Search
