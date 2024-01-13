import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

//This is meant for viewing each job by ID

export const GET = async ({ params }) => {
    try {
        const id = params.id;
        const jobCategory = await prisma.job.findUnique({
            where: {
                id: id,
            },
        });
        console.log(jobCategory);
        return NextResponse.json(jobCategory)
    } catch (error) {
        console.error(error);
        return new NextResponse({ error: "Internal Server Error" }, { status: 500 });
    }
};