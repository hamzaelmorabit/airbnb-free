import Header from "../components/Header";
import Footer from "../components/Footer";
import InfoCard from "../components/InfoCard";
import { useRouter } from "next/router";
import { format } from "date-fns";

export default function Search({ exploreData }) {
  console.log(exploreData);
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;
  const range = `${format(new Date(startDate), "dd MMMMMM yyyy")} - ${format(
    new Date(endDate),
    "dd MMMMMM yyyy"
  )}`;
  return (
    <div>
      <Header placeHolder={`${location} | ${range} | ${noOfGuests} guests`} />
      <main>
        <section>
          <div className="mt-14 ml-5 space-y-4">
            <p className="text-sm">
              300+ Stays - {range} - for {noOfGuests} guests
            </p>
            <h1 className="text-4xl font-semibold">Stays in {location}</h1>
          </div>
          <div className="ml-5 my-4 space-x-3 text-[15px]">
            <button
              className="outline-none border rounded-full 
            hover:shadow-md px-3 py-2 active:scale-95
            duration-200 transform transition ease-in-out
            active:bg-gray-100"
            >
              Cancellation Flexibility
            </button>
            <button
              className="outline-none border rounded-full 
            hover:shadow-md px-3 py-2 active:scale-95
            duration-200 transform transition ease-in-out
            active:bg-gray-100"
            >
              Type of Place
            </button>
            <button
              className="outline-none border rounded-full 
            hover:shadow-md px-3 py-2 active:scale-95
            duration-200 transform transition ease-in-out
            active:bg-gray-100"
            >
              Price
            </button>
            <button
              className="outline-none border rounded-full 
            hover:shadow-md px-3 py-2 active:scale-95
            duration-200 transform transition ease-in-out
            active:bg-gray-100"
            >
              Rooms and Beds
            </button>
            <button
              className="outline-none border rounded-full 
            hover:shadow-md px-3 py-2 active:scale-95
            duration-200 transform transition ease-in-out
            active:bg-gray-100"
            >
              More filters
            </button>
          </div>
          <div className="mt-5">
            {exploreData?.map(
              ({ description, img, star, title, price, location, total }) => (
                <InfoCard
                  img={img}
                  description={description}
                  star={star}
                  title={title}
                  price={price}
                  location={location}
                  total={total}
                />
              )
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { REACT_APP_API_URL } = process.env;

  const exploreData = await fetch(`${REACT_APP_API_URL}/isz`).then((res) =>
    res.json()
  );
  return {
    props: {
      exploreData,
    },
  };
}
