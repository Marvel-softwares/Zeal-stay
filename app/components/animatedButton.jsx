"use client";

import Link from "next/link";

export default function AnimatedButton() {
  return (
    <Link href={"/schedule-call"}>
      <button className="w-full sm:absolute right-0 top-0 bottom-0 animate-border bg-white bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-[length:400%_400%] text-gray-100 font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none">
       Chat now ↗️
      </button>
    </Link>
  );
}
