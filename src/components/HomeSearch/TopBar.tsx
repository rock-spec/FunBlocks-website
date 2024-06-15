import { Link } from "@/i18n.config"
import localFont from "next/font/local"
import CustomDropDown from "../DropDown/DropDown"
import { useTranslations } from "next-intl"

const OffBit = localFont({
    src: "../Button/font/OffBitTrial-Bold.otf",
    display: "swap",
})

const TopBar = () => {
    const t = useTranslations("Navbar")
    const b = useTranslations("Buttons")

    const sortOptions = ["date"]

    return (
        <div className="flex justify-between items-center mb-8">
            <div className="border border-black  bg-white py-2 px-5 w-fit">
                <div
                    className={`items-center font-bold flex gap-x-10 ${OffBit.className} capitalize `}
                    style={{
                        fontSize: "18px",
                    }}
                >
                    <Link className="hover:text-blue-700" href={"/"}>
                        {t("all")}
                    </Link>
                    <Link className="hover:text-blue-700" href={"/game"}>
                        {t("games")}
                    </Link>
                    <Link className="hover:text-blue-700" href={"/news"}>
                        {t("news")}
                    </Link>
                    <Link className="hover:text-blue-700" href={"/article"}>
                        {t("articles")}
                    </Link>
                    <Link className="hover:text-blue-700" href={"/video"}>
                        {t("videos")}
                    </Link>
                    <Link className="hover:text-blue-700" href={"/event"}>
                        {t("events")}
                    </Link>
                </div>
            </div>

            {/* <div className="w-fit ">
                <CustomDropDown text={b("filter by time")} options={sortOptions} txt_px={"px-12"} />
            </div> */}
        </div>
    )
}

export default TopBar
