import Image from "next/image";

export default function CardLarge() {
  return (
    <section className="relative py-16">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src="/../public/large.PNG"
          layout="fill"
          className="rounded-xl"
          objectFit="cover"
          // width="800px"
          // height="800px"
        />
      </div>

      <div className="absolute top-32 space-y-6 left-12">
        <h3 className="text-2xl  font-semibold w-64">
          The Greatest Outdoors
        </h3>
        <p className="text-lg">Wishlists curated by Airbnb.</p>
        <button className="bg-black text-white rounded-lg px-4 py-2">
          Get Inspired
        </button>
      </div>
    </section>
  );
}
