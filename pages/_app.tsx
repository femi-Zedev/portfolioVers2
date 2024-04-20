import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from 'recoil';




export default function App({ Component, pageProps }: AppProps) {


  return (
    <div id="root">
      <RecoilRoot>
          <Component {...pageProps} />
      </RecoilRoot>
    </div>
  );
}
