"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaTwitter, FaGithub } from "react-icons/fa6";
import Container from './ui/container';
import { useTheme } from "next-themes"
import { BsSun, BsMoonStars } from "react-icons/bs";
import { Button } from "./ui/button"

const Footer = () => {
    const { theme, setTheme } = useTheme();
    return (

        <footer className="border-black border-opacity-20 dark:border-white border-t dark:border-opacity-20">
            <Container>
                <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <Link href="/"
                            className="flex-shrink-0">
                            ISPAAN
                        </Link>
                        <p className="mt-2 text-sm text-black dark:text-white">Find your dream job</p>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-black dark:text-white tracking-widest text-md mb-3">Company</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link href="#" className="text-black dark:text-white hover:opacity-75">About</Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-black dark:text-white hover:opacity-75">Meet the Team</Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-black dark:text-white hover:opacity-75">History</Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-black dark:text-white hover:opacity-75">Careers</Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-black dark:text-white tracking-widest text-md mb-3">Products</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link href="#" className="text-black dark:text-white hover:opacity-75">Find Jobs</Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-black dark:text-white hover:opacity-75">Post a Job</Link>
                                </li>

                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-black dark:text-white tracking-widest text-md mb-3">Helpful Links</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link href="#" className="text-black dark:text-white hover:opacity-75">Contact</Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-black dark:text-white hover:opacity-75">FAQs</Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-black dark:text-white hover:opacity-75">Live Chat</Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-black dark:text-white tracking-widest text-md mb-3">Legal</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link href="#" className="text-black dark:text-white hover:opacity-75">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-black dark:text-white hover:opacity-75">Terms &amp; Conditions</Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-black dark:text-white hover:opacity-75">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-black dark:text-white hover:opacity-75">Accessibility</Link>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="border-black border-opacity-20 dark:border-white border-t dark:border-opacity-20">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <span className="inline-flex sm:mr-auto sm:mt-0 mt-2 mb-3 justify-center sm:justify-start">
                        <a className="text-black dark:text-white">
                            <FaFacebook size={25} />
                        </a>
                        <a className="ml-3 text-black dark:text-white">
                            <FaTwitter size={25} />
                        </a>
                        <a className="ml-3 text-black dark:text-white">
                            <FaInstagram size={25} />
                        </a>
                        <a className="ml-3 text-black dark:text-white">
                            <FaGithub size={25} />
                        </a>
                    </span>
                    <p className="text-black dark:text-white text-md text-center sm:text-center mx-auto">© 2024 ispaan.com
                    </p>
                    <Button
                        variant="ghost"
                        size="icon"
                        aria-label="Toggle Theme"
                        className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-items-center sm:justify-center"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    >
                        <BsSun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <BsMoonStars className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle Theme</span>
                    </Button>
                </div>
            </div>
        </footer>
    )
}

export default Footer