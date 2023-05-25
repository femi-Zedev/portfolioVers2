import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react'
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { activateLocale } from '@/utils';
import Head from 'next/head';

const poppins = Poppins({ weight: ["100", "200", "400", "700", "900"] });

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter()
  const locale = router.locale || router.defaultLocale!
  const firstRender = useRef(true)

  // run only once on the first render (for server side)
  if (pageProps.translation && firstRender.current) {
    activateLocale(i18n, locale, pageProps.translation)
    firstRender.current = false
  }

  useEffect(() => {
    if (pageProps.translation) {
      activateLocale(i18n, locale, pageProps.translation)
    }
  }, [locale, pageProps.translation])
  return (
    <div id="root" className={poppins.className}>
       <Head>
        <title>Femi | Web Developer</title>
        <meta name="description" content="Bleep boop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {router.locales!.concat('x-default').map((locale: string) => {
          const localePath = locale === 'x-default' ? '' : `${locale}`
          const href = `https://femidev.vercel.app//${localePath}${router.asPath}`
          return locale === 'pseudo' ? null : (
            <link key={locale} rel="alternate" hrefLang={locale} href={href} />
          )
        })}
      </Head>
      <I18nProvider i18n={i18n}>
        <Component {...pageProps} />
      </I18nProvider>
    </div>
  );
}
