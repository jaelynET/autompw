import Logo from "./Logo";
export default function Header(){
return (

<header className="bg-[#F8F6F2] px-5 py-4">
  <div className="mx-auto flex max-w-7xl items-center justify-between">
    <Logo />

    {/* Keep your existing navigation and CTA here */}
  </div>
</header>
)
}
