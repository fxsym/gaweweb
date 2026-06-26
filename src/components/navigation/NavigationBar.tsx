"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import NavigationMenu from "./NavigationMenu";
import NavigationMenuMobile from "./NavigationMenuMobile";
import ThemeSwitcher from "../ui/ThemeSwitcher";
import NavigationHamburger from "./NavigationHamburger";

export default function NavigationBar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false)
    const [hidden, setHidden] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const navItems = [
        { id: "home", label: "Beranda" },
        { id: "services", label: "Layanan" },
        { id: "contact", label: "Kontak" },
    ]

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;

            setHidden(currentScroll > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setActiveSection(sectionId);
        }
    };

    return (
        <nav
            className={`py-4 px-4 md:px-16 lg:px-20 fixed left-1/2 -translate-x-1/2 z-50
              flex flex-col justify-between items-center
              bg-bg transition-all duration-500 ease-in-out 
              ${hidden ? "shadow-xl my-6 border-2 w-[90%] border-primary rounded-4xl"
                    : "shadow-none w-full my-0 border-none"}`}
        >


            <div className="flex justify-between w-full items-center">
                <Link href="/" className="flex items-center gap-3 flex-1">
                    <Image src="/images/logo.png" alt="Logo" width={140} height={140} />
                    {/* <span className="text-md font-semibold text-text tracking-wide">
                        gaweweb
                    </span> */}
                </Link>

                <div className="hidden md:flex md:items-center flex-2 justify-center">
                    <ul className="flex gap-10 font-semibold text-[16px] text-text">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <button onClick={() => scrollToSection(item.id)}>
                                    <NavigationMenu
                                        label={item.label}
                                        active={activeSection === `${item.id}`} // ✅ kirim status aktif
                                    />
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-1 justify-end items-center gap-4 ">
                    <button
                        onClick={() => setOpen(!open)}
                        className="gap-1.5 flex flex-col cursor-pointer group md:hidden">
                        <NavigationHamburger open={open} />
                    </button>
                    <ThemeSwitcher />
                </div>
            </div>

            <NavigationMenuMobile open={open} setOpen={setOpen} navItems={navItems} pathname={pathname} />

        </nav>
    )
}