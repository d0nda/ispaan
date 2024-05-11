"use client"

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
//import { AiOutlineEye } from "react-icons/ai";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { signIn } from 'next-auth/react';
//import Link from 'next/link'
import { useRouter } from 'next/navigation';
import styles from '../app/signin/page.module.css'

export function SigninSignup() {
    const router = useRouter();

    // State for sign-in form
    const [signInData, setSignInData] = useState({
        email: "",
        password: "",
    });

    // Function to handle sign-in form submission
    const handleSignIn = async (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      signIn('credentials', {
          ...signInData,
          redirect: true,
          callbackUrl: '/dashboard',
      });
  };

    // State for sign-up form
    const [signUpData, setSignUpData] = useState({
        name: '',
        email: '',
        password: '',
        repeatPassword: '',
    });

    

    // Function to handle sign-up form submission
    const handleSignUp = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const response = await fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({signUpData})
        });

        const userInfo = await response.json()
        console.log(userInfo)
        router.push('/signin')
    };

    return (
        <div className="flex mx-5 items-center justify-center">
            <Tabs defaultValue="signin" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="signin">Sign In</TabsTrigger>
                    <TabsTrigger value="signup">Sign Up</TabsTrigger>
                </TabsList>
                <TabsContent value="signin">
                    <form onSubmit={handleSignIn}>
                        <Card>
                            <CardHeader>
                                <CardTitle>Welcome Back</CardTitle>
                                <CardDescription>
                                    Sign in with your credentials to see dashboard.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        type="email"
                                        id="email"
                                        placeholder="Enter email"
                                        name="email"
                                        autoComplete="off"
                                        required
                                        value={signInData.email}
                                        onChange={(e) => {
                                            setSignInData({ ...signInData, email: e.target.value });
                                        }}
                                    />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                        type="password"
                                        id="password"
                                        placeholder="Enter password"
                                        name="password"
                                        required
                                        value={signInData.password}
                                        onChange={(e) => {
                                            setSignInData({ ...signInData, password: e.target.value });
                                        }}
                                    />
                                </div>
                            </CardContent>
                            <CardFooter className='mb-3'>
                                <Button type="submit" className="w-full py-4">Sign In</Button>
                            </CardFooter>
                            <CardFooter>
                                <div className="w-full border-black border-opacity-30 dark:border-white border-t"></div>
                                <p className="px-2.5 text-base font-medium leading-4 text-black dark:text-white">OR</p>
                                <div className="w-full border-black border-opacity-30 dark:border-white border-t"></div>
                            </CardFooter>
                            <CardFooter>
                                <Button onClick={() => signIn('google', { callbackUrl: '/dashboard' })} type="button" className={styles.googlebtn}>
                                    <span className="px-1"><FcGoogle className={styles.iconstyle} /></span>Continue with Google
                                </Button>
                            </CardFooter>
                        </Card>
                    </form>
                </TabsContent>
                <TabsContent value="signup">
                    <form onSubmit={handleSignUp}>
                        <Card>
                            <CardHeader>
                                <CardTitle>Sign Up</CardTitle>
                                <CardDescription>
                                    Sign up to get started.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        type="text"
                                        id="name"
                                        placeholder="Enter your name"
                                        name="name"
                                        autoComplete="name"
                                        required
                                        value={signUpData.name}
                                        onChange={(e) => setSignUpData({ ...signUpData, name: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        type="email"
                                        id="email"
                                        placeholder="Enter email"
                                        name="email"
                                        autoComplete="email"
                                        required
                                        value={signUpData.email}
                                        onChange={(e) => setSignUpData({ ...signUpData, email: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                        type="password"
                                        id="password"
                                        placeholder="Enter password"
                                        name="password"
                                        autoComplete="new-password"
                                        required
                                        value={signUpData.password}
                                        onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="repeatPassword">Repeat Password</Label>
                                    <Input
                                        type="password"
                                        id="repeatPassword"
                                        placeholder="Repeat password"
                                        name="repeatPassword"
                                        autoComplete="new-password"
                                        required
                                        value={signUpData.repeatPassword}
                                        onChange={(e) => setSignUpData({ ...signUpData, repeatPassword: e.target.value })}
                                    />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button role="button" type="submit" className="w-full py-4">Sign Up</Button>
                            </CardFooter>
                            <CardFooter>
                                <div className="w-full border-black border-opacity-30 dark:border-white border-t"></div>
                                <p className="px-2.5 text-base font-medium leading-4 text-black dark:text-white">OR</p>
                                <div className="w-full border-black border-opacity-30 dark:border-white border-t"></div>
                            </CardFooter>
                            <CardFooter>
                                <Button onClick={() => signIn('google', { callbackUrl: '/dashboard' })} type="button" className={styles.googlebtn}>
                                    <span className="px-1"><FcGoogle className={styles.iconstyle} /></span>Continue with Google
                                </Button>
                            </CardFooter>
                        </Card>
                    </form>
                </TabsContent>
            </Tabs>
        </div>
    );
}
