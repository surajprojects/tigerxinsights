import { MobileHeader } from "./mobileheader";

export function Header() {
    return (
        <>
            <header>
                <nav className="w-full py-6 sm:py-8 px-8 sm:px-16 lg:px-28 font-semibold flex justify-between">
                    <div className="text-xl sm:text-2xl whitespace-nowrap shrink mr-2 sm:mr-0">
                        <a href="/">Tiger Insights</a>
                    </div>
                    <div className="relative block md:hidden">
                        <MobileHeader />
                    </div>
                    <ul className="w-72 py-1 px-2 hidden md:flex justify-between">
                        <li>
                            <a href="/work">Works</a>
                        </li>
                        <li>
                            <a href="/blog">Blog</a>
                        </li>
                        <li>
                            <a href="/toolkit">Toolkit</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};