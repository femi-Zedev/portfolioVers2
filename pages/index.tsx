import { Home } from "@/components/home/Home";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { loadTranslation } from '@/utils'
import Head from "next/head";

export const getStaticProps: GetStaticProps = async (ctx) => {
  const translation = await loadTranslation( ctx.locale! )
  let metaTitle = "Femi Dev. | Frontend Developer and UX designer";
  metaTitle = ctx.locale == 'en' ? 'Femi Dev. | Frontend Developer and UX designer' : 'Femi Dev. | Developeur frontend et UX designer'

  return {
    props: {
      translation,
      metaTitle
    }
  }
}




const Index: NextPage = ({ metaTitle }:InferGetStaticPropsType<typeof getStaticProps>) => {
 

  return (
    <>
      <Head>
        <title>{ metaTitle }</title>
      </Head>
      <Home />
    </>
  );
}

export default Index