import { Home } from "@/components/home/Home";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import { getHomePage } from "@/services/index"
import { Page } from "@/interfaces/hygraph.interface";

interface Props {
  pages: Page[];
}

export const getStaticProps = async () => {
  const { pages } = await getHomePage();

  return {
    props: {
      pages,
    },
  };
};


const Index: NextPage<Props> = ({ pages }) => {
  const pageData = pages[0];

  return (
    <>
     <Head>
        <title>Femi </title>
        <meta charSet="utf-8"/>
        <meta name="google-site-verification" content="XjjGg1wH-mQBt186CmOXy-kpQGFhwAF2bLsqtMq3eps" />
        <meta name="robots" content="index,follow" />
        <meta name="description" content={pageData.meta.desc} />
        <meta property="og:description" content={pageData.meta.desc}/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="@FemiAkt"/>
        <meta name="twitter:creator" content="@FemiAkt"/>
        <meta property="og:title" content="Femi AKOTONOU"/>
        <meta property="og:url" content="https://femidev.com"/>
        <meta property="og:image" content="https://femidev.com/femi.PNG"/>
        <meta property="og:image:alt" content="Femi Dev"/>
        <meta property="og:image:secure_url" content="https://femidev.com/femi.PNG"/>
        <meta property="og:image:type" content="image/jpeg"/>
        <meta property="og:site_name" content={pageData.meta.ogSiteName}/>
        <link rel="canonical" href="https://femidev.com"/>
      </Head>
      <Home pageData={pages[0]} />
      <div></div>
    </>
  );
}

export default Index