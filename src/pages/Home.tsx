import Contact from "../components/home/Contact";
import Hero from "../components/home/Hero";
import SectionHeader from "../components/home/sectionHeader";
import SkillCard from "../components/home/skillCard";
import Badge from "../components/ui/Badge";

export default function Home() {
    return (
        <>
            <main className="w-full">
                {/* Hero section */}
                <section className="bg-linear-to-br from-[#f8f5fe] to-[#f6f9fe] w-full py-36 md:py-44 pb-12 md:pb-20 flex justify-center">
                    <Hero />
                </section>
                {/* Skills & Expertise */}
                <section className="flex flex-col justify-center items-center my-20 w-full xl:max-w-7xl mx-auto py-8 md:py-10 pb-5 md:pb-8 px-4">
                    <SectionHeader
                        title1="Skills & "
                        title2="Expertise"
                        description="A blend of technical proficiency and creative design thinking"
                    />
                    <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Frontend Development */}
                        <SkillCard
                            key={1}
                            title="Frontend Development"
                            description="React, TypeScript, Next.js, Tailwind CSS"
                        >
                        </SkillCard>
                        {/* Backend Development */}
                        <SkillCard
                            key={2}
                            title="Backend Development"
                            description="Node.js, Python, PostgreSQL, MongoDB"
                        >
                        </SkillCard>
                        {/* UI/UX Design */}
                        <SkillCard
                            key={3}
                            title="UI/UX Design"
                            description="Figma, Adobe XD, Responsive Design, Prototyping"
                        >
                        </SkillCard>
                        {/* Web Technologies */}
                        <SkillCard
                            key={4}
                            title="Web Technologies"
                            description="REST APIs, GraphQL, WebSockets, CI/CD"
                        >
                        </SkillCard>
                    </div>
                </section>
                {/* Featured Projects */}
                <section className="flex flex-col justify-center items-center my-20 w-full xl:max-w-7xl mx-auto py-8 md:py-10 pb-5 md:pb-8 px-4">
                    <SectionHeader
                        title1="Featured "
                        title2="Projects"
                        description="A selection of my recent work showcasing different technologies and approaches"
                    />
                    <div>
                        <div className="p-8 rounded-xl border border-gray-200">
                            <div>
                                <h5 className="text-lg font-semibold">E-Commerce Platform</h5>
                                <p className="text-[#71717a] text-sm my-2">A full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.</p>
                            </div>
                            <div className="my-4 mb-6">
                                <Badge key={1} text="React" />
                                <Badge key={2} text="Node.js" />
                                <Badge key={3} text="MongoDB" />
                                <Badge key={4} text="Stripe" />
                            </div>
                            <div className="flex">
                                <a href="#" className="text-black w-fit text-sm font-medium flex justify-center items-center px-3 py-2 rounded-xl mx-2 duration-300 ease-in-out hover:cursor-pointer bg-white border border-gray-300 hover:bg-[#3c83f6] hover:text-white hover:shadow-md">Code</a>
                                <a href="#" className="text-white w-fit text-sm font-medium flex justify-center items-center px-3 py-2 rounded-xl mx-2 duration-300 ease-in-out hover:cursor-pointer hover:brightness-95 bg-linear-to-r from-[#7c3bed] to-[#3c83f6]">Live Demo</a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Get in touch */}
                <section className="flex flex-col justify-center items-center my-14 w-full xl:max-w-7xl mx-auto py-8 md:py-10 pb-5 md:pb-8 px-4">
                    <SectionHeader
                        title1="Get In "
                        title2="Touch"
                        description="Have a project in mind or want to collaborate? I'd love to hear from you!"
                    />
                    <Contact />
                </section>
            </main>
        </>
    );
};