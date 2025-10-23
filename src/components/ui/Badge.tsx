export default function Badge({ text = "Badge" }: { text?: string }) {
    return (
        <>
            <div className="text-xs w-fit bg-gray-100 rounded-full px-3 py-1 font-medium m-1.5">{text}</div>
        </>
    );
};