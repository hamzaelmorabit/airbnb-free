import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        // className="h-[300px]"
        src="/../public/Banner.PNG"
        // height="900%"
        // width="1700%"
        layout="fill"
        objectFit="cover"
      />
      <div
        className="absolute top-1/2 w-full  
      text-center"
      >
        <p
          className="
            text-red
      "
        >
          Not sure where to go? Perfect.
        </p>
        <button
          className="
            hover:shadow-xl
            px-10
            py-4
            mt-3
            bg-white
            font-bold
            rounded-full
            transition
            duration-200
            active:scale-90
            text-purple-500"
        >
          I'm flexible
        </button>
      </div>
    </div>
  );
}
