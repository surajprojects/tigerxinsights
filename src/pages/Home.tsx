import Hero from "../components/home/Hero";
import CodeIcon from "../components/icons/Code";
import Contact from "../components/home/Contact";
import ToolBoxIcon from "../components/icons/Tool";
import RocketIcon from "../components/icons/Rocket";
import SkillCard from "../components/cards/SkillCard";
import DatabaseIcon from "../components/icons/Database";
import ProjectCard from "../components/cards/ProjectCard";
import SectionHeader from "../components/home/SectionHeader";

export default function Home() {
    return (
        <>
            <div className="w-full">
                {/* Hero section */}
                <section id="hero" className="bg-linear-to-br from-[#f8f5fe] to-[#f6f9fe] w-full py-36 md:py-44 pb-12 md:pb-20 flex justify-center">
                    <Hero />
                </section>
                {/* Skills & Expertise */}
                <section id="skills" className="scroll-mt-20 flex flex-col justify-center items-center my-14 md:my-20 w-full xl:max-w-7xl mx-auto py-8 md:py-10 pb-5 md:pb-8 px-4">
                    <SectionHeader
                        title1="Skills & "
                        title2="Expertise"
                        description="A blend of technical proficiency and creative design thinking"
                    />
                    <div className="my-8 md:my-12 grid grid-cols-1 lg:grid-cols-2 gap-8 w-full sm:w-xl lg:w-4xl xl:w-6xl">
                        {/* Frontend Development */}
                        <SkillCard
                            key={1}
                            title="Frontend Development"
                            description="React, Next.js, TypeScript, Tailwind CSS"
                        >
                            <CodeIcon />
                        </SkillCard>
                        {/* Backend Development */}
                        <SkillCard
                            key={2}
                            title="Backend Development"
                            description="Node.js, Prisma, PostgreSQL, tRPC"
                            primaryColor="#4388f7"
                            secondaryColor="#6fa4f9"
                        >
                            <DatabaseIcon />
                        </SkillCard>
                        {/* DevOps & Deployment */}
                        <SkillCard
                            key={3}
                            title="DevOps & Deployment"
                            description="Docker, AWS EC2, CI/CD, GitHub Workflows"
                            primaryColor="#ab5af8"
                            secondaryColor="#be7ffc"
                        >
                            <RocketIcon />
                        </SkillCard>
                        {/* Tools & Practices */}
                        <SkillCard
                            key={4}
                            title="Tools & Practices"
                            description="TurboRepo, Hoppscotch, VS Code, System Design"
                            primaryColor="#14bc83"
                            secondaryColor="#30d097"
                        >
                            <ToolBoxIcon />
                        </SkillCard>
                    </div>
                </section>
                {/* Featured Projects */}
                <section id="projects" className="scroll-mt-20 flex flex-col justify-center items-center w-full xl:max-w-7xl mx-auto py-4 md:py-8 pb-5 md:pb-8 px-4">
                    <SectionHeader
                        title1="Featured "
                        title2="Projects"
                        description="A selection of my recent work showcasing different technologies and approaches"
                    />
                    <div className="my-8 md:my-12 grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center w-full xl:w-6xl">
                        {/* Project 1 */}
                        <ProjectCard
                            key={1}
                            title="Tiger Writes"
                            description="Tiger Writes is a full-stack blogging web app built with a modern serverless architecture."
                            techStack={[
                                "Vite",
                                "React",
                                "Axios",
                                "Tailwind",
                                "TypeScript",
                                "Hono",
                                "Prisma",
                                "Cloudflare"
                            ]}
                            liveLink="https://tigerxwrites.vercel.app/"
                            codeLink="https://github.com/surajprojects/tigerxwrites/"
                            imageLink="https://raw.githubusercontent.com/surajprojects/tigerxwrites/refs/heads/main/frontend/tiger-writes-frontend.jpg"
                        />
                        {/* Project 2 */}
                        <ProjectCard
                            key={2}
                            title="HTML Tag Stripper"
                            description="A simple web app built using HTML, CSS, and JavaScript that strips HTML tags from user input and gives clean text output."
                            techStack={[
                                "HTML",
                                "CSS",
                                "JavaScript",
                            ]}
                            liveLink="https://html-tag-stripper.vercel.app/"
                            codeLink="https://github.com/surajprojects/html-tag-stripper"
                            imageLink="https://raw.githubusercontent.com/surajprojects/html-tag-stripper/refs/heads/main/html-tag-stripper-screenshot.png"
                        />
                        {/* Project 3 */}
                        <ProjectCard
                            key={3}
                            title="To-Do List App"
                            description="A responsive To-Do List app built using HTML, CSS, and JavaScript. It allows users to manage tasks efficiently with advanced filtering, search, and sorting features."
                            techStack={[
                                "HTML",
                                "CSS",
                                "JavaScript",
                            ]}
                            liveLink="https://simple-todo-app-orpin-omega.vercel.app/"
                            codeLink="https://github.com/surajprojects/simple-todo-app"
                            imageLink="https://raw.githubusercontent.com/surajprojects/simple-todo-app/refs/heads/prod/todo-list-app-screenshot.png"
                        />
                        {/* Project 4 */}
                        <ProjectCard
                            key={4}
                            title="Weather App"
                            description="A responsive weather app built using HTML, CSS, and JavaScript. It fetches live weather data and displays both current and hourly forecast in a clean, modern UI."
                            techStack={[
                                "HTML",
                                "CSS",
                                "JavaScript",
                            ]}
                            codeLink="https://github.com/surajprojects/weather-app"
                            liveLink="https://weather-app-xi-five-57.vercel.app/"
                            imageLink="https://raw.githubusercontent.com/surajprojects/weather-app/refs/heads/prod/weather-app-screenshot.png"
                        />
                    </div>
                </section>
                {/* Get in touch */}
                <section id="contact" className="scroll-mt-14 flex flex-col justify-center items-center my-4 mb-12 w-full xl:max-w-7xl mx-auto py-8 md:py-10 pb-5 md:pb-8 px-4">
                    <SectionHeader
                        title1="Get In "
                        title2="Touch"
                        description="Have a project in mind or want to collaborate? I'd love to hear from you!"
                    />
                    <Contact />
                </section>
            </div>
        </>
    );
};