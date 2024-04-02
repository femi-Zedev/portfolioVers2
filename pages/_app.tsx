import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { RecoilRoot, atom, useRecoilState } from 'recoil';




export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter()
  const locale = router.locale || router.defaultLocale!
  const firstRender = useRef(true)



  return (
    <div id="root">
      <RecoilRoot>
          <Component {...pageProps} />
      </RecoilRoot>
    </div>
  );
}
