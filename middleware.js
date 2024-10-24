import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

let defaultLocale = 'en'
let locales = ['bn', 'en']


function getLocale(request) {
    //browser theke ki language ashche
    const acceptedLang = request.headers.get('accept-language') ?? undefined

    let headers = { 'accept-language': acceptedLang }
    let languages = new Negotiator({ headers }).languages()


    return match(languages, locales, defaultLocale) //ei match function 3 parameter receive kore and then locale return kore.

}


export function middleware(request) {
    const pathName = request.nextUrl.pathname  //pathname: '/api/photos'

    const pathNameIsMissingLocale = locales.every(
        (locale) => !pathName.startsWith(`/${locale}/`) && pathName !== `/${locale}`
    )

    if (pathNameIsMissingLocale) {
        const locale = getLocale(request)

        return NextResponse.redirect(new URL(`/${locale}/${pathName}`, request.url))
    }
    return NextResponse.next()
}

export const config = {
    matcher: [
        // Skip all internal paths (_next, assets, api)
        '/((?!api|assets|.*\\..*|_next).*)',
        // Optional: only run on root (/) URL
        // '/'
    ],
}

