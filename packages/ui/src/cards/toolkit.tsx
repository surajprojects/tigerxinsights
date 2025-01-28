export function Tool({
    title = "Title of the tool",
    description = "Short description of the tool",
    toollink = "#",
}) {
    return (
        <>
            <div className="shadow-md rounded-lg w-72 py-8 px-4 border-2 place-self-center">
                <h5 className="font-semibold text-3xl">{title}</h5>
                <p className="my-5">{description}</p>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center">Click here</button>
            </div>
        </>
    );
};