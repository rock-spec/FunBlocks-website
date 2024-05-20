import { notFound } from "next/navigation"
import { getRequestConfig } from "next-intl/server"
import { locales, type Locale } from "@/i18n.config"

// Can be imported from a shared config
// const locales = ["en", "zh"]

export default getRequestConfig(async ({ locale }) => {
    const baseLocale = new Intl.Locale(locale).baseName

    // Validate that the incoming `locale` parameter is valid
    // if (!locales.includes(locale as any)) notFound()
    if (!locales.includes(baseLocale as Locale)) notFound()

    let messages
    try {
        messages = (await import(`../messages/${baseLocale}.json`)).default
    } catch (error) {
        console.error("Error importing locale messages:", error)
        notFound()
    }

    return {
        messages,
    }
})
