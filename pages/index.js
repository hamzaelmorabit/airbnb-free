import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";

export default function Home({ explore }) {
  console.log(explore);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
    </div>
  );
  export async function getServeSideProps() {
    const explore = fetch("").then((res) => res.json());
    return {
      props: {
        explore,
      },
    };
  }
}
