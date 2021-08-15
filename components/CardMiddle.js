import Image from "next/image";
export default function CardMiddle({ img, title }) {
  return (
    <div
      className="
      hover:scale-105
      trasform ease-out
       transition duration-200
       
       "
      // src="/../public/middle.PNG"
    >
      <div className="relative h-80 w-80">
        <Image
          src={img}
          layout="fill"
          className="rounded-xl"
          // width="800px"
          // height="800px"
        />
      </div>
      <p className="whitespace-nowrap text-xl mt-3">{title}</p>
    </div>
  );
}
