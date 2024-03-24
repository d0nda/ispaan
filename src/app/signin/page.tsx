"use client"

import React from 'react'
import styles from './page.module.css'
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { AiOutlineEye } from "react-icons/ai";
import Link from 'next/link'


export default function Signin() {
    const [data, setData] = useState({
        email: "",
        password: "",
    });



    const signinUser = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        signIn('credentials', {
            ...data,
            redirect: true,
            callbackUrl: '/dashboard',
        });
    };

    return (
        <div className="flex mx-4 items-center justify-center">
            <div className="mt-8 mb-12 w-full rounded-2xl bg-slate-300 dark:bg-white dark:bg-opacity-20 dark:backdrop-blur-md border border-opacity-30  border-black dark:border-white shadow-lg p-4 md:w-1/2 lg:w-1/3">
                <h2 className="mx-auto text-center text-2xl font-bold text-black dark:text-white">Welcome Back</h2>
                <p className="mt-9 mb-6 text-center text-black dark:text-white">Sign in with your credentials to see dashboard.</p>
                <form onSubmit={signinUser}>
                    <div className="mt-3">
                        <label htmlFor="email" id="email" className="text-sm font-medium leading-none text-black dark:text-white"> Email </label>
                        <input aria-labelledby="email" type="email" className="mt-2 w-full rounded border bg-gray-200 py-3 pl-3 text-xs font-medium leading-none text-gray-800" id="email"
                            placeholder="Enter email"
                            name="email"
                            autoComplete="off"
                            required
                            value={data.email}
                            onChange={(e) => { setData({ ...data, email: e.target.value }); }} />
                    </div>
                    <div className="mt-3 w-full">
                        <label htmlFor="password" className="text-sm font-medium leading-none text-black dark:text-white"> Password </label>
                        <div className="relative flex items-center justify-center">
                            <input type="password" className="mt-2 w-full rounded border bg-gray-200 py-3 pl-3 text-xs font-medium leading-none text-gray-800" id="password"
                                placeholder="Enter password"
                                name="password"
                                required
                                value={data.password}
                                onChange={(e) => { setData({ ...data, password: e.target.value }); }} />
                            <div className="absolute text-gray-900 right-0 mr-3 mt-2 cursor-pointer">
                                <AiOutlineEye size={16} />
                            </div>
                        </div>
                    </div>
                    <div className="mt-8">
                        <button role="button" className="w-full rounded border border-purple-500 bg-purple-800 py-4 text-sm font-semibold leading-none text-white hover:bg-purple-600  focus:outline-none focus:shadow-outline">Sign In</button>
                    </div>
                    <div className="flex w-full items-center justify-between py-5">
                        <div className="w-full border-black border-opacity-30 dark:border-white border-t"></div>
                        <p className="px-2.5 text-base font-medium leading-4 text-black dark:text-white">OR</p>
                        <div className="w-full border-black border-opacity-30 dark:border-white border-t"></div>
                    </div>
                </form>
                {/* Google Sign In Button */}
                <button onClick={() => signIn('google', { callbackUrl: '/dashboard' })} type="button" className={styles.googlebtn}>
                    <span className="px-1"><FcGoogle className={styles.iconstyle} /></span>Continue with Google
                </button>
                {/* Google Sign In Button */}

                <p className="mt-10 text-center text-sm text-black dark:text-white">
                    Don't have an account ?
                    <Link href="./signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Sign up Here.</Link>
                </p>
            </div>
        </div>

    )
}