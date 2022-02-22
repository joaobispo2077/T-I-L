import { GetServerSideProps } from "next";
import { PageDocument, usePageQuery } from "../generated/graphql"
import { ssrCache, urqlClient } from "../lib/urql";

export default function Home() {
  const [{data}] = usePageQuery({
    variables: {
      slug: "home",
    }
  });
  return (
    <h1>
      {data?.page?.title}
    </h1>
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
