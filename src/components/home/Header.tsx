import { useState } from "react";
import MenuIcon from "../icons/Menu";
import CloseIcon from "../icons/Close";
import MobileHeader from "./mobileHeader";
import useScroll from "../../hooks/scroll";

export default function Header() {
    const isScrolled = useScroll();
    const [showMenu, setShowMenu] = useState(false);
    return (
        <>
            <header className={`w-full font-sans font-medium fixed top-0 left-0 z-50 bg-white/30 backdrop-blur-sm ${isScrolled ? "border-b border-white/20 shadow-sm" : "border-none shadow-none"}`}>
                <nav className="flex justify-between items-center px-4 py-3 mx-auto w-full xl:max-w-360">
                    {/* Title */}
                    <div className="text-xl font-extrabold font-spacegrotesk whitespace-nowrap shrink bg-clip-text bg-linear-to-r from-[#7c3bed] to-[#3c83f6] text-transparent">
                        <a href={"#"}>Tiger Insights</a>
                    </div>
                    {/* Mobile Header Button */}
                    <button
                        type="button"
                        onClick={() => setShowMenu((prevData) => !prevData)}
                        className="size-6 hover:cursor-pointer duration-300 ease-in-out block md:hidden">
                        {showMenu ? <CloseIcon /> : <MenuIcon />}
                    </button>
                    {/* Nav Links */}
                    <ul className="hidden text-base font-inter md:flex">
                        <li className="text-gray-500 hover:text-gray-800 px-3 py-2 rounded-md mx-1 duration-300 ease-out hover:cursor-pointer">
                            <a href="#">Home</a>
                        </li>
                        <li className="text-gray-500 hover:text-gray-800 px-3 py-2 rounded-md mx-1 duration-300 ease-out hover:cursor-pointer">
                            <a href="#skills">Skills</a>
                        </li>
                        <li className="text-gray-500 hover:text-gray-800 px-3 py-2 rounded-md mx-1 duration-300 ease-out hover:cursor-pointer">
                            <a href="#projects">Projects</a>
                        </li>
                        {/* CTA */}
                        <li className="text-white text-sm flex justify-center items-center px-4 py-2 rounded-xl mx-2 duration-300 ease-out hover:cursor-pointer hover:brightness-95 bg-linear-to-r from-[#7c3bed] to-[#3c83f6]">
                            <a href="#contact">Hire Me</a>
                        </li>
                    </ul>
                </nav>
                {/* Mobile Header */}
                {showMenu && <MobileHeader setShowMenu={setShowMenu} />}
            </header>
        </>
    );
};