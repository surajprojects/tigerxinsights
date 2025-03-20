import prisma from "@tigerxinsights/db";

export async function GET() {
    try {
        const toolkitData = await prisma.toolkit.findMany({
            include: {
                category: true,
            }
        });
        return Response.json({ message: "Found toolkit data!", toolkitData }, { status: 200 });
    }
    catch (error) {
        return Response.json({ message: "Internal Server Error" }, { status: 500 });
    }
};