import prisma from "@tigerxinsights/db";

export async function GET() {
    const toolkitData = await prisma.toolkit.findMany({
        include: {
            category: true,
        }
    });
    return Response.json({ toolkitData })
};