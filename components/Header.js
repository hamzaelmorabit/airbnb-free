import Image from "next/image";
import {
  SearchIcon,
  HomeIcon,
  MenuIcon,
  UsersIcon,
  GlobeAltIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";
export default function Header() {
  return (
    <header
      className="sticky top-0 z-50
      grid grid-cols-3
    md:px-10 bg-white  p-5 shadow-md"
    >
      {/* Left */}
      <div
        className="relative flex
      items-center   my-auto  h-10 "
      >
        <Image
          layout="fill"
          src="/../public/logo.PNG"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Middle */}
      <div className="flex items-center py-1 rounded-full   md:shadow-sm  md:border-2">
        <input
          className="flex-grow pl-5 outline-none bg-transparent"
          type="text"
          placeholder="Start your search"
        />
        <SearchIcon
          className="
          hidden
          md:inline-flex
          h-10
        bg-red-400
          p-2
          md:mx-2
          cursor-pointer
          rounded-full 
        text-white"
        />
      </div>

      <div className="flex justify-end space-x-5 items-center">
        <p
          className="hidden
        md:inline-flex
        text-gray-500"
        >
          Become a host
        </p>
        <GlobeAltIcon className="h-6 " />
        <div
          className="flex rounded-full  space-x-2 
      p-2
         border-2
        "
        >
          <MenuIcon
            className="h-6 
          cursor-pointer
          "
          />

          <UserCircleIcon className="h-6   cursor-pointer  text-gray-500" />
        </div>
      </div>
    </header>
  );
}
