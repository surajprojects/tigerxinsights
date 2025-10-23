import ArrowDown from "../ui/ArrowDown";
import SocialHandles from "./SocialHandles";

export default function Hero() {
    return (
        <>
            <div className="text-center flex flex-col items-center p-2">
                {/* Badge */}
                <p className="font-medium text-sm bg-[#efe8fd] text-[#7c3bed] border border-[#d8c6f9] rounded-full px-4 py-1.5 mb-0.5">👋 Available for opportunities</p>
                {/* Title */}
                <h1 className="text-5xl md:text-7xl font-bold text-[#09090b] max-w-4xl">Hi, I'm <span className="bg-clip-text text-transparent bg-linear-to-r from-[#7c3bed] to-[#3c83f6] leading-20 md:leading-28">Suraj</span>, a.k.a. Tiger 👋</h1>
                {/* Bio */}
                <p className="text-[#71717a] text-xl md:text-2xl max-w-2xl my-6 md:my-10 font-stretch-expanded">Full Stack Web Developer passionate about building with TypeScript, React, and Node.js 💻</p>
                <p className="text-[#71717a] text-lg  max-w-xl font-stretch-expanded">Exploring the wonders of computers & software development! 🌟 Sharing insights at #tigerxinsights</p>
                {/* Buttons */}
                <div className="block sm:flex my-10">
                    <a href="#projects" className="text-white text-sm font-medium flex justify-center items-center px-8 py-3 rounded-xl mx-2 duration-300 ease-in-out hover:cursor-pointer hover:brightness-95 bg-linear-to-r from-[#7c3bed] to-[#3c83f6] shadow-md mb-6 sm:mb-0">View My Work</a>
                    <a href="#contact" className="text-black text-sm font-medium flex justify-center items-center px-8 py-3 rounded-xl mx-2 duration-300 ease-in-out hover:cursor-pointer bg-white border border-gray-300 hover:bg-[#3c83f6] hover:text-white hover:shadow-md">Get In Touch</a>
                </div>
                <SocialHandles />
                {/* Nav link */}
                <a href="#skills" className="my-6 sm:my-10 hover:cursor-pointer ">
                    <ArrowDown />
                </a>
            </div>
        </>
    );
};