import Contact from "../components/home/Contact";

export default function Home() {
    return (
        <>
            <main className="flex justify-center items-center">
                {/* Get in touch */}
                <section className="flex flex-col items-center justify-center w-full">
                    <div className="text-center">
                        <h6 className="text-5xl font-bold">Get In <span className="bg-clip-text bg-linear-to-r from-[#7c3bed] to-[#3c83f6] text-transparent">Touch</span></h6>
                        <p className="text-[#7c706a] my-5 text-lg">Have a project in mind or want to collaborate? I'd love to hear from you!</p>
                    </div>
                    <Contact />
                </section>
            </main>
        </>
    );
};