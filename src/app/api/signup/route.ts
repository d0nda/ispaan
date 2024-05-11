import bcrypt from 'bcrypt';
import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';


export async function POST(request: any) {
    const body = await request.json();
    const { name, email, password, repeatPassword } = body.signUpData;
    console.log(body.signUpData);
    if (!name || !email || !password || !repeatPassword) {
        return new Response('Missing name, email, or password', { status: 400 });
    }

    const exist = await prisma.user.findUnique({
        where: {
            email: email
        }
    });
   
    if(exist) {
        return new Response("User with this email  already exists", {status: 409});
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await  prisma.user.create({
        data: {
            name,
            email,
            hashedPassword,
            
        },
    });

    return NextResponse.json(user);
}