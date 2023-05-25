import { Home } from "@/components/home/Home";
import { GetStaticProps, NextPage } from "next";
import { loadTranslation } from '@/utils'

export const getStaticProps: GetStaticProps = async (ctx) => {
  const translation = await loadTranslation(
    ctx.locale!,
  )
  return {
    props: {
      translation
    }
  }
}

const home: NextPage = () => {
  return (
    <>
      <Home />
    </>
  );
}

export default home