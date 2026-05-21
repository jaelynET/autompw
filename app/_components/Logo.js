import Image from "next/image";
import Link from "next/link";
import logo from "@/public/tubvillalgo-1.3.png";
// import logo from "@/public/logo.svg";

// import logo from "@/public/tubvilla-1.3.png";

//import logo from "@/public/tubvillalgo-5.jpg";

export default function Logo() {
  return (
    <Link href={"/"} className="block">
      <Image
        src={logo}
        alt="TubVilla logo"
        // Use square dimensions to match your actual image file
        width={80}
        height={80}
        priority
        // This ensures the browser reserves a square space immediately
        className="block h-auto w-[70px] md:w-[85px] object-contain ml-5 min-[375px]:ml-10 md:ml-30"
      />
    </Link>
  );
}
// Mi <span className="text-main">Casa</span> Mi
//     <span className="text-main">Tub</span>
