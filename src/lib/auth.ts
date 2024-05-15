import { NextAuthOptions, getServerSession } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import bcrypt from 'bcrypt';
import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from '@/lib/prisma';


export const authOptions: NextAuthOptions = {
     // @ts-ignore
    adapter: PrismaAdapter(prisma),
    //debug: process.env.NODE_ENV === "development",
    providers: [
        CredentialsProvider({
            id: 'credentials',
            name: 'Credentials',

             // @ts-ignore
            async authorize(credentials) {

                //Check to see if email and password is valid
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }

                //Check to see if user exist
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                });

                if (!user || !user?.hashedPassword) {
                    return null;
                }
                // Verify the provided password match
                const passwordMatch = await bcrypt.compare(credentials.password, user?.hashedPassword);

                if (!passwordMatch) {
                    return null;
                }
                // Return the user object if successful
                console.log(user)
                return user;
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],
    callbacks: {
        async jwt({ token, user, session }) {
            console.log("jwt callback :", { token, user, session });
            //pass in user id and address to token
            if (user) {
                return {
                    ...token,
                    id: user.id,
                };
            }
            return token;
        },
        async session({ session, token, user }) {
            console.log("session callback :", { session, token, user });
            //pass in user id
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                }
            };
        },
        async redirect({ url, baseUrl }) {
            // Allows relative callback URLs
            if (url.startsWith("/")) return `${baseUrl}${url}`
            // Allows callback URLs on the same origin
            else if (new URL(url).origin === baseUrl) return url
            return baseUrl
        },
    },
    secret: process.env.NEXTAUTH_SECRET as string,
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: '/signin',
        error: '/error',
    },
};

export const getAuthSession = () => getServerSession(authOptions);