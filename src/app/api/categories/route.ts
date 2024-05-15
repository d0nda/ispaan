import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';


export const GET = async () => {

    try {
        const categories = await prisma.job.findMany({
            select: {
                category: true,
            },
            distinct: ['category']
        });
        console.log('Retrieved categories from Prisma:', categories);
        return NextResponse.json(categories)
    } catch (error) {
        console.error("Error getting job categories:", error);
        return NextResponse.json({ message: 'Internal server error',error })
    }
}
