import createMiddleware from "next-intl/middleware"
import { type NextRequest, type NextResponse } from "next/server";


const nextIntlMiddleware =  createMiddleware({
    // A list of all locales that are supported
    locales: ["en", "zh"],

    // Used when no locale matches
    defaultLocale: "en",
})

export default function (req: NextRequest): NextResponse {
    return nextIntlMiddleware(req);
  }

export const config = {
    // Match only internationalized pathnames
    matcher: ["/", "/(zh|en)/:path*"],
}




// import createMiddleware from "next-intl/middleware"

// export default createMiddleware({
//     // A list of all locales that are supported
//     locales: ["en", "zh"],

//     // Used when no locale matches
//     defaultLocale: "en",
// })



// export const config = {
//     // Match only internationalized pathnames
//     matcher: ["/", "/(zh|en)/:path*"],
// }
