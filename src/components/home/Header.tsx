export default function Header() {
    return (
        <>
            <header className="w-full font-sans font-medium fixed top-0 left-0 z-50 bg-white/30 backdrop-blur-sm border-b border-white/20 shadow-sm">
                <nav className="flex justify-between items-center px-4 py-3 mx-auto w-full xl:max-w-360">
                    {/* Title */}
                    <div className="text-xl font-extrabold font-spacegrotesk whitespace-nowrap shrink bg-clip-text bg-linear-to-r from-[#7c3bed] to-[#3c83f6] text-transparent">
                        <a href={"#"}>Tiger Insights</a>
                    </div>
                    {/* Nav Links */}
                    <ul className="hidden text-base font-inter md:flex">
                        <li className=" text-gray-500 hover:text-gray-800 px-3 py-2 rounded-md mx-1 duration-300 ease-out hover:cursor-pointer">
                            <a href="#">Skills</a>
                        </li>
                        <li className=" text-gray-500 hover:text-gray-800 px-3 py-2 rounded-md mx-1 duration-300 ease-out hover:cursor-pointer">
                            <a href="#">Projects</a>
                        </li>
                        <li className=" text-gray-500 hover:text-gray-800 px-3 py-2 rounded-md mx-1 duration-300 ease-out hover:cursor-pointer">
                            <a href="#">Contact</a>
                        </li>
                        {/* CTA */}
                        <li className="text-white text-sm flex justify-center items-center px-4 py-2 rounded-xl mx-2 duration-300 ease-out hover:cursor-pointer hover:brightness-95 bg-linear-to-r from-[#7c3bed] to-[#3c83f6]">
                            <a href="#">Hire Me</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};