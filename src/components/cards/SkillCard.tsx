export default function SkillCard({
    title = "Title",
    description = "Description",
    children,
    primaryColor,
    secondaryColor,
}: {
    title?: string,
    description?: string,
    primaryColor?: string,
    secondaryColor?: string,
    children?: React.ReactNode;
}) {
    return (
        <>
            <div className="p-8 rounded-xl border border-gray-200 w-full hover:shadow-lg duration-300 ease-in-out hover:-translate-y-1.5">
                {/* Icon Wrapper */}
                <div className="w-14 h-14 p-3 text-white rounded-xl shadow-md"
                    style={{
                        background: `linear-gradient(to bottom right, ${primaryColor || "#8040ed"}, ${secondaryColor || "#a57aee"})`,
                    }}>
                    {children}
                </div>
                {/* Title */}
                <h6 className="font-semibold text-lg my-3">{title}</h6>
                {/* Description */}
                <p className="text-[#71717a] text-base">{description}</p>
            </div >
        </>
    );
};