export default function SkillCard({
    title = "Title",
    description = "Description",
    children
}: {
    title?: string,
    description?: string,
    children?: React.ReactNode;
}) {
    return (
        <>
            <div className="p-8 rounded-xl border border-gray-200 w-full hover:shadow-lg duration-300 ease-in-out hover:-translate-y-1.5">
                <div className="bg-purple-500 w-fit p-4 rounded-xl text-white">AA{children}</div>
                <h6 className="font-semibold text-lg my-3">{title}</h6>
                <p className="text-[#71717a] text-base">{description}</p>
            </div>
        </>
    );
};