import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import CardSmaller from "../components/CardSmaller";
import CardMiddle from "../components/CardMiddle";
import CardLarge from "../components/CardLarge";
import Footer from "../components/Footer";

export default function Home({ explore, exploreMiddle }) {
  console.log(exploreMiddle);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
      <main
        className="max-w-7xl
      max-auto
      px-6
      sm:px-16
      "
      >
        <section className="pt-6">
          <h1
            className="font-bold 
                        mt-10 mb-10  text-4xl"
          >
            Explore Nearby
          </h1>
          <div
            className="grid grid-cols-1
                        sm:grid-cols-2
                        md:grid-cols-3
                        lg:grid-cols-4
                        xl:grid-cols-4
                                 "
          >
            {explore?.map(({ location, distance, img }, index) => (
              <CardSmaller
                key={index}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>

        <section>
          <h1 className="py-8 font-semibold text-4xl">Live Anywhere</h1>
          <div
            className="flex space-x-10 overflow-scroll scrollbar-hide cursor-pointer
          p-4
          "
          >
            {exploreMiddle?.map(({ img, title }, index) => (
              <CardMiddle key={index} img={img} title={title} />
            ))}
          </div>
        </section>

        <CardLarge />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
export async function getServerSideProps() {
  const explore = await fetch("https://links.papareact.com/pyp").then((res) =>
    res.json()
  );
  const exploreMiddle = await fetch("https://links.papareact.com/zp1").then(
    (res) => res.json()
  );
  return {
    props: {
      explore,
      exploreMiddle,
    },
  };
}
