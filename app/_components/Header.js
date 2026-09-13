import Logo from "./Logo";

export default function Header() {
  return (
    <header className="relative flex w-full justify-center items-center bg-white min-h-[65px] md:min-h-[80px] border-b border-stone-100">
      <Logo />
    </header>
  );
}
