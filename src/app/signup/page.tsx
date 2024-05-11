"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css'
import { useRouter } from 'next/navigation';

export default function Signup() {
    const router = useRouter()
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        repeatPassword: '',

    })

    const signupUser = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        const response = await fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({data})
        })

        const userInfo = await response.json()
        console.log(userInfo)
        router.push('/signin')
    }
    

    return (
        <div className="flex mx-4 items-center justify-center">
            <div className="mt-8 mb-12 w-full rounded-2xl bg-slate-300 dark:bg-white dark:bg-opacity-20 dark:backdrop-blur-md border border-opacity-30  border-black dark:border-white shadow-lg p-4 md:w-1/2 lg:w-1/3">
                <h2 className="mx-auto text-center text-2xl font-bold text-black dark:text-white">Create an Account</h2>
                <p className="mt-9 mb-6 text-center text-black dark:text-white">Sign up to get started.</p>
                <form onSubmit={signupUser}>
                    <div className="mt-3">
                        <label htmlFor="name" className="text-sm font-medium leading-none text-black dark:text-white">Name</label>
                        <input type="text" className="mt-2 w-full rounded border bg-gray-200 py-3 pl-3 text-xs font-medium leading-none text-gray-800" id="name"
                            placeholder="Enter your name"
                            name="name"
                            autoComplete="name"
                            required
                            value={data.name}
                            onChange={(e) => setData({ ...data, name: e.target.value })} />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="email" className="text-sm font-medium leading-none text-black dark:text-white">Email</label>
                        <input type="email" className="mt-2 w-full rounded border bg-gray-200 py-3 pl-3 text-xs font-medium leading-none text-gray-800" id="email"
                            placeholder="Enter email"
                            name="email"
                            autoComplete="email"
                            required
                            value={data.email}
                            onChange={(e) => setData({ ...data, email: e.target.value })} />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="password" className="text-sm font-medium leading-none text-black dark:text-white">Password</label>
                        <div className="relative flex items-center justify-center">
                            <input type="password" className="mt-2 w-full rounded border bg-gray-200 py-3 pl-3 text-xs font-medium leading-none text-gray-800" id="password"
                                placeholder="Enter password"
                                name="password"
                                autoComplete="current-password"
                                required
                                value={data.password}
                                onChange={(e) => setData({ ...data, password: e.target.value })} />
                        </div>
                    </div>
                    <div className="mt-3">
                        <label htmlFor="repeatPassword" className="text-sm font-medium leading-none text-black dark:text-white">Repeat Password</label>
                        <input type="password" className="mt-2 w-full rounded border bg-gray-200 py-3 pl-3 text-xs font-medium leading-none text-gray-800" id="repeatPassword"
                            placeholder="Repeat password"
                            name="repeatPassword"
                            autoComplete="repeat-password"
                            required
                            value={data.repeatPassword}
                            onChange={(e) => setData({ ...data, repeatPassword: e.target.value })} />
                    </div>
                    <div className="mt-8">
                        <button role="button" type="submit" className="w-full rounded border border-purple-500 bg-purple-800 py-4 text-sm font-semibold leading-none text-white hover:bg-purple-600  focus:outline-none focus:shadow-outline">Sign Up</button>
                    </div>
                </form>
                <p className="mt-10 text-center text-sm text-black dark:text-white">
                    Already have an account?{' '}
                    <Link href="/signin" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Sign in here.
                    </Link>
                </p>
            </div>
        </div>
    );
}
