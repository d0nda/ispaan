import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';



export const GET = async () => {
    try {
        const categories = await prisma.job.findMany({
            select: {
                category: true,
            },
            distinct: ['category'],
            take: 20,
        });
        console.log('Retrieved categories from Prisma:', categories);
        return NextResponse.json(categories)
    } catch (error) {
        console.error("Error getting job categories:", error);
        return new NextResponse({ error: "Internal Server Error" }, { status: 500 });
    }
}
