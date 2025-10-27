import Image from "next/image";
import Link from "next/link";

export default function FloatingBookCall({ children }) {
  return (
    <div className="relative">
      {children}
      <Link href={"/schedule-call"}>
        <button className="fixed bottom-[20px] right-[20px] lg:hidden text-center rounded-full p-2 animate-border bg-white bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-[length:400%_400%]">
          <Image
            src={"/images/bookCall.png"}
            height={32}
            width={32}
            alt={"book call"}
            className="w-10 h-10"
          />
        </button>
        <button className="hidden fixed bottom-[20px] right-[20px] animate-border bg-gray-900 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-[length:400%_400%] text-gray-100 text-base font-bold rounded-full py-4 px-6 lg:flex items-center justify-center">
          Schedule Call
        </button>
      </Link>
    </div>
  );
}