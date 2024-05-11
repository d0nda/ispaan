import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';



export const GET = async () => {
    try {
        const jobs = await prisma.job.findMany();
        console.log("This is all the jobs available: ", jobs)
        return NextResponse.json(jobs);
    } catch (error) {
        console.error("Error getting jobs by category:", error);
        return new NextResponse(`{ error: "Internal Server Error" }`, { status: 500 });
    }
};
