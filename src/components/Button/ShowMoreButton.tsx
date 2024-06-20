import localFont from "next/font/local"

const OffBit = localFont({
    src: "./font/OffBitTrial-Bold.otf",
})
type ShowMoreButtonProps = {
    onClick: () => void
    disabled: boolean
    text: string
}

const ShowMoreButton: React.FC<ShowMoreButtonProps> = ({ onClick, disabled, text }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`mx-auto w-[133px] h-[40px] bg-[url('/buttons/showMore.svg')] text-black flex justify-center items-center  text-lg  bg-cover bg-no-repeat ${OffBit.className} leading-normal`}
        >
            {text}
        </button>
    )
}

export default ShowMoreButton
