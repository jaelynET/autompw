import Image from "next/image";
import Link from "next/link";
import logo from "@/public/ampwlgo-1.1.svg";

export default function Logo() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <Image
        src={logo}
        alt="AutoMPW logo"
        // Use square dimensions to match your actual image file
        width={1200}
        height={300}
        priority
        // This ensures the browser reserves a square space immediately
        className="block h-auto w-[150px] md:w-[190px] lg:w-[220px]object-contain "
      />
    </div>
  );
}
