export default function SectionHeader({
    title1 = "Title 1",
    title2 = "Title 2",
    description = "Description"
}: {
    title1?: string,
    title2?: string,
    description?: string,
}) {
    return (
        <>
            <div className="text-center">
                <h5 className="text-5xl font-bold">{title1}<span className="bg-clip-text bg-linear-to-r from-[#7c3bed] to-[#3c83f6] text-transparent">{title2}</span></h5>
                <p className="text-[#7c706a] my-5 text-lg">{description}</p>
            </div>
        </>
    );
};