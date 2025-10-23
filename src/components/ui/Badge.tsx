export default function Badge({ text = "Badge" }: { text?: string }) {
    return (
        <>
            <span className="text-xs bg-gray-100 rounded-full px-3 py-1 font-medium m-1">{text}</span>
        </>
    );
};