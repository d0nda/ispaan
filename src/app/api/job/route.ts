import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';


export const GET = async (req: any) => {
    const { category } = req.query;

    try {
        const jobs = await prisma.job.findMany({
            where: {
                category: category,
            },
            // ... (other query options)
        });

        return NextResponse.json(jobs);
    } catch (error) {
        console.error("Error getting jobs by category:", error);
        return new NextResponse({ error: "Internal Server Error" }, { status: 500 });
    }
};
