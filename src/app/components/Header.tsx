import Nav from "./Nav";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="bg-[#31283d] fixed top-0 left-0 w-full z-50 flex justify-around items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="logo.svg" alt="Logo" className="w-[110px] h-[auto]" />
        <div className="flex items-center">
          <Nav />  
          <ThemeToggle />
        </div>    
    </header>
  );
}
