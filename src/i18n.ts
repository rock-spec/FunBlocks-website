import { notFound } from "next/navigation"
import { getRequestConfig } from "next-intl/server"

// Can be imported from a shared config
const locales = ["en", "zh"]

export default getRequestConfig(async ({ locale }) => {
    console.log({ locale })

    const baseLocale = new Intl.Locale(locale).baseName
    console.log(baseLocale)

    // Validate that the incoming `locale` parameter is valid
    // if (!locales.includes(locale as any)) notFound()
    if (!locales.includes(baseLocale)) notFound()

    return {
        messages: (await import(`../messages/${baseLocale}.json`)).default,
    }
})
