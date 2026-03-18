import Contact from "./Contact";
import SectionHeader from "./SectionHeader";

export default function GetInTouch() {
  return (
    <>
      <section
        id="contact"
        className="scroll-mt-14 flex flex-col justify-center items-center my-4 mb-12 w-full xl:max-w-7xl mx-auto py-8 md:py-10 pb-5 md:pb-8 px-4"
      >
        {/* Header */}
        <SectionHeader
          title1="Get In "
          title2="Touch"
          description="Have a project in mind or want to collaborate? I'd love to hear from you!"
        />
        {/* Body */}
        <Contact />
      </section>
    </>
  );
}
