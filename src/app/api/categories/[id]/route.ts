import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';


export const GET = async (req: any) => {

    const { category } = req.query;

    try {
        const categories = await prisma.job.findMany({
            where: {
                category: category,
            },
            // ... (other query options)
        });
        console.log('Retrieved categories from Prisma Solved:', categories);
        return NextResponse.json(categories)
    } catch (error) {
        console.error("Error getting jobs by category:", error);
        return NextResponse.json({ message: 'Internal server error',error })
    }
};
