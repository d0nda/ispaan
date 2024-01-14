import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
//import { useSession } from 'next-auth/react'; //if you want to use client side

async function Dashboard() {
    const session = await getServerSession(authOptions);
    //const { data: session, status } = useSession()
    const image = session?.user?.image ?? '';
    console.log("useSession Hook session object", session)

    if (session) {
        const { user } = session;

        return (
            <div className="text-center">
                <h1>Welcome, {user.name}</h1>
                <Image src={image} width={100} height={100} alt="user image" />
                <div>
                    <p className="mb-3 mt-3">{user.email}</p>
                </div>
                All your Job application will be in  category below:
                <hr />
                <h4>Featured Jobs</h4>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <hr />
                <h4>Newly Posted</h4>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>

            </div>
        );
    }

    // Return some fallback UI if there's no session
    return (
        <div className="text-center">
            <p>No session found.</p>
        </div>
    );
}

export default Dashboard;
