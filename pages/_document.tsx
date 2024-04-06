import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
 
  let meta =   { 
    desc: "Hello, Je suis Femi AKOTONOU, dévelopeur frontend et UX Designer",
    siteName: 'Femi Dev. | Developeur frontend',
    ogImg: 'https://femidev.com/femi_fr.PNG'
  }

  return (
    <Html >
      <Head>
       
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
