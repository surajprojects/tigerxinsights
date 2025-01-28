export function Tool({
    title = "Title of the tool",
    description = "Short description of the tool",
    toollink = "#",
}) {
    return (
        <>
            <div className="bg-gray-50 rounded-lg w-64 py-8 px-4 border-2 place-self-center">
                <h5 className="font-semibold text-3xl">{title}</h5>
                <p className="my-5">{description}</p>
                <button type="button" className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"><a href={toollink}>Click here</a></button>
            </div>
        </>
    );
};