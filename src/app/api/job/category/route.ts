// /app/api/job/category/route.ts
import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export const GET = async (req: any) => {
    const { category } = req.params;
    try {
        const jobs = await prisma.job.findMany({
            where: {
                category: category,
            },
        });
        console.log('Retrieved jobs from Prisma:', jobs);
        return NextResponse.json(jobs)
    } catch (error) {
        console.error("Error getting jobs:", error);
        return new NextResponse({ error: "Internal Server Error" }, { status: 500 });
    }
}
