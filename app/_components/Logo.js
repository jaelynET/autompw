import Image from "next/image";
import Link from "next/link";
import logo from "@/public/ampwlgo-1.1.svg";

export default function Logo() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
      <Image
        src={logo}
        alt="AutoMPW logo"
        width={1200}
        height={300}
        priority
        // Downsized widths give the image below breathing room
        className="block h-auto w-[90px] sm:w-[105px] md:w-[120px] object-contain"
      />
    </div>
  );
}
