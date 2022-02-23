import { GetServerSideProps } from "next";
import { Features } from "../components/Features";
import { Hero } from "../components/Hero";
import { Pricing } from "../components/Pricing";
import { PageDocument, usePageQuery } from "../generated/graphql"
import { ssrCache, urqlClient } from "../lib/urql";

export default function Home() {
  const [{data}] = usePageQuery({
    variables: {
      slug: "home",
    }
  });

  return (
    <div>
      <Hero  title={data?.page?.title} subtitle={
        data?.page?.subtitle
      }/>
      <Features />
      <Pricing />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {

  await urqlClient.query(PageDocument, {slug: 'home'}).toPromise();

  return {
    props: {
      urqlState: ssrCache.extractData()
    },
  }
}
