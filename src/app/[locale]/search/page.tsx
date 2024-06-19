import { type Locale } from "@/i18n.config"
import HomeSearch from "@/components/HomeSearch/SearchHome"

const SearchPage = ({
    params: { locale },
    searchParams,
}: {
    params: { locale: Locale }
    searchParams: any
}) => {
    return <HomeSearch query={searchParams?.search} locale={locale} />
}

export default SearchPage
