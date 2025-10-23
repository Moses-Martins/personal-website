import MobileNavbar from "./MobileNavbar";
import Nav from "./Nav";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <>
      <header className="bg-[#31283d] fixed top-0 left-0 w-full z-50 flex justify-around items-center max-sm:hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="logo.svg" alt="Logo" className="w-[110px] h-[auto]" />
        <div className="flex items-center">
          <Nav />
          <ThemeToggle />
        </div>
      </header>

      <header className="hidden max-sm:bg-[#31283d] max-sm:fixed max-sm:top-0 max-sm:left-0 max-sm:w-full max-sm:block max-sm:flex max-sm:justify-between max-sm:items-center max-sm:px-4 max-sm:py-3 z-[70]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="logo.svg" alt="Logo" className="w-[110px] h-[auto]" />
        <MobileNavbar />
      </header>
    </>
  );
}
