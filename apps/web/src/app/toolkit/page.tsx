import { Tool } from "@tigerxinsights/ui";

export default function Toolkit() {
    return (
        <>
            {/* Container 1 */}
            <div className="w-full px-4 sm:px-12 md:px-28 xl:px-56 2xl:px-52 py-10">
                {/* Container for title */}
                <div className="mx-0 md:mx-16 flex justify-center sm:justify-start">
                    <h2 className="font-bold text-4xl">Toolkit</h2>
                </div>
                {/* Container for cards */}
                <div className="px-0 2xl:px-16 my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
                    <Tool />
                    <Tool />
                    <Tool />
                    <Tool />
                    <Tool />
                    <Tool />
                    <Tool />
                    <Tool />
                </div>
            </div>
        </>
    );
};