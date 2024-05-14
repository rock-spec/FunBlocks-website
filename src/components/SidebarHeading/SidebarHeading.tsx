import Image from "next/image"
// import React from "react"

const SidebarHeading = ({ text }: { text: string }) => {
    return (
        <div className="flex justify-between my-5">
            <p className="font-bold text-xl leading-7 uppercase">{text}</p>
            <Image src={"/search.svg"} alt="Icon" width={16} height={16} />
        </div>
    )
}

export default SidebarHeading
