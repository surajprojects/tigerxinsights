import Badge from "../ui/Badge";
import GithubIcon from "../icons/Github";
import OpenLinkIcon from "../icons/OpenLink";

export default function ProjectCard({
    imageLink = "/image-here.png",
    title = "Project Title",
    description = "Project Description",
    techStack = ["Html", "Css", "JavaScript"],
    codeLink = "#",
    liveLink = "#",
}: {
    imageLink?: string,
    title?: string,
    description?: string,
    techStack?: string[],
    codeLink?: string,
    liveLink?: string,
}) {
    return (
        <>
            <div className="rounded-xl border border-gray-200 w-full md:max-w-xl h-full hover:shadow-2xl duration-300 ease-in-out">
                {/* Card Image Container */}
                <div className="w-full max-h-72 overflow-hidden rounded-t-xl flex items-center justify-center">
                    <img
                        src={imageLink}
                        alt="Image here"
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Card Body */}
                <div className="p-6 md:p-8">
                    {/* Title & Description */}
                    <div>
                        <h5 className="text-lg font-semibold">{title}</h5>
                        <p className="text-[#71717a] text-sm my-2">{description}</p>
                    </div>
                    {/* Badges */}
                    <div className="my-4 flex flex-wrap">
                        {techStack.map((tech, idx) => {
                            return <Badge key={idx} text={tech} />
                        })}
                    </div>
                    {/* Buttons */}
                    <div className="flex flex-wrap">
                        {/* Code */}
                        <a href={codeLink} target="_blank" className="text-black w-fit text-sm font-medium flex justify-center items-center px-3 py-2 rounded-xl mx-2 duration-300 ease-in-out hover:cursor-pointer bg-white border border-gray-300 hover:bg-[#3c83f6] hover:text-white hover:shadow-md mt-3"><div className="size-4 mr-2"><GithubIcon /></div>Code</a>
                        {/* Live Demo */}
                        <a href={liveLink} target="_blank" className="text-white w-fit text-sm font-medium flex justify-center items-center px-3 py-2 rounded-xl mx-2 duration-300 ease-in-out hover:cursor-pointer hover:brightness-95 bg-linear-to-r from-[#7c3bed] to-[#3c83f6] mt-3"><div className="size-4 mr-2"><OpenLinkIcon /></div>Live Demo</a>
                    </div>
                </div>
            </div>
        </>
    );
};