import Image from "next/image";
import { HeartIcon, StarIcon } from "@heroicons/react/solid";
export default function InfoCard({
  description,
  img,
  star,
  title,
  price,
  location,
  total,
}) {
  return (
    <>
      <div className="flex flex-cols mx-5 group border-b  hover:shadow-xl p-10">
        <div
          className="relative md:h-52 md:w-80
          flex-shrink-0
        h-24 w-40 group-hover:opacity-80"
        >
          <Image
            layout="fill"
            src={img}
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
        <div className="ml-5 flex flex-col flex-grow">
          <div className="flex flex-cols justify-between">
            <p className="flex ">{location}</p>
            <HeartIcon className="w-8" />
          </div>
          <h1 className="text-[20px] pt-0">{title}</h1>
          <div className="border-b w-10 pt-2 " />

          <p className="flex-grow  text-sm text-gray-500">{description}</p>
          <div className="flex justify-between">
            <div></div>
            <p className="text-3xl font-semibold pt-5">{price}</p>
          </div>
          <div className="flex flex-cols justify-between">
            <div className="flex">
              <StarIcon className="w-6 text-red-300 " />
              <p className="text-xl">{star}</p>
            </div>
            <p className="text-xl  text-gray-500">{total}</p>
          </div>
        </div>
      </div>
    </>
  );
}
