import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react'
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { activateLocale } from '@/utils';
import { RecoilRoot, atom, useRecoilState } from 'recoil';




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
    <div id="root">
      <RecoilRoot>
        <I18nProvider i18n={i18n}>
          <Component {...pageProps} />
        </I18nProvider>
      </RecoilRoot>
    </div>
  );
}
