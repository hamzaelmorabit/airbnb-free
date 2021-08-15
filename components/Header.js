import React, { useState } from "react";

import Image from "next/image";
import { useRouter } from "next/router";
import {
  SearchIcon,
  HomeIcon,
  MenuIcon,
  UsersIcon,
  GlobeAltIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";

import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

export default function Header({ placeHolder }) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);

  const [searchInput, setSearchInput] = useState("");

  const router = useRouter();

  const handleSelect = (ranges) => {
    console.log(ranges);
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const searchLocation = () => {
    console.log(startDate);
    router.push({
      pathname: `/search`,
      query: {
        location: searchInput,
        endDate: endDate.toISOString(),
        startDate: startDate.toISOString(),
        noOfGuests: noOfGuests,
      },
    });
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  return (
    <header
      className=" sticky z-50
      grid grid-cols-3
    md:px-10 bg-transparent  p-5 shadow-md"
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
          // style={{
          //   cursor: "no-drop",
          // }}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow pl-5 outline-none bg-transparent text-sm"
          type="text"
          placeholder={placeHolder || "Start your search"}
        />
        <SearchIcon
          onClick={searchLocation}
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
        <GlobeAltIcon className="h-6 hover:animate-spin" />
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
      {searchInput && (
        <div className="flex flex-col  col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={handleSelect}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
          />
          <div className="flex items-center mt-4 ">
            <h1 className="flex flex-grow font-semibold text-3xl">
              Number of Guests
            </h1>
            <div className="flex">
              <UsersIcon className=" h-5   text-black" />
              <input
                type="number"
                min="1"
                className="w-10 ml-2 outline-none text-red-400"
                value={noOfGuests}
                onChange={(e) => setNoOfGuests(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full h-1 bg-gray-100" />
          <div className="flex flex-col-2 mt-5">
            <button
              className="flex-grow outline  text-lg cursor-pointer"
              onClick={resetInput}
            >
              Cancel
            </button>

            <button
              className="flex-grow  text-red-400 text-lg cursor-pointer"
              onClick={searchLocation}
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
