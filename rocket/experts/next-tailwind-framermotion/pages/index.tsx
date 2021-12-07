import { Card } from "../components/Card";
import { Layout } from "../components/Layout";


export default function Home() {
  return (
    <Layout>
      <h1 className="text-4xl mt-10 leading-none font-extrabold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl md:mt-24">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum aperiam voluptate rem voluptatum, distinctio nisi possimus adipisci deserunt voluptates. Pariatur ad sint asperiores, fuga ex consectetur minus dolorum deleniti fugiat.
      </h1>
      <div className="mt-10 md:mt-24 grid w-full grid-cols-1 grid-rows-3 gap-4 md:grid-cols-3 md:grid-rows-1">
        <Card
          imgSource="/img/nextjs.svg"
          href="nextjs"
          layoutId="nextjs-logo"
        />

        <Card
          imgSource="/img/tailwind.svg"
          href="tailwind"
          layoutId="tailwind-logo"
        />

        <Card
          imgSource="/img/framermotion.svg"
          href="framermotion"
          layoutId="framermotion-logo"
        />
      </div>
    </Layout>
    );
}
