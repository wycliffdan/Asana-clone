

'use client'


import ActionButtons from "@/app/landing-page/Navbar/_components/button";
import Logo from "./_components/logo"
import { NavigationMenuBar } from "./_components/menu";
// import ActionButtons from "./_components/button";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClasses = `
    flex items-center justify-center space-x-10 bg-[#E5E4E2] md:px-10
    sticky top-0 z-50 ${hasScrolled ? "shadow-sm" : ""}
  `
  return (
    <div className={navbarClasses}>
    <div className="flex w-2/3 md:w-1/2">
      <Logo />
      <NavigationMenuBar />
      </div>
      <ActionButtons />
    </div>
    
  )
}

export default Navbar