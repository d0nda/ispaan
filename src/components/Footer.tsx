"use client"

import React from 'react'
import Link from 'next/link'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import Container from './ui/container';

const Footer = () => {
   
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
                            <h2 className="title-font font-medium text-black dark:text-white tracking-widest text-md mb-3">Service</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link href="#" className="text-black dark:text-white hover:opacity-75">Find Jobs</Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-black dark:text-white tracking-widest text-md mb-3">Helpful Links</h2>
                            <nav className="list-none mb-10">
                            <li>
                                    <Link href="#" className="text-black dark:text-white hover:opacity-75">About</Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-black dark:text-white hover:opacity-75">Contact</Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-black dark:text-white hover:opacity-75">FAQs</Link>
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
                            </nav>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="border-black border-opacity-20 dark:border-white border-t dark:border-opacity-20">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-black dark:text-white text-md text-center sm:text-left sm:mr-auto mb-3 sm:mb-0">© 2024 ispaan.com</p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-end">
                    <a className="text-black dark:text-white">
                        <FaFacebook size={25} />
                    </a>
                    <a className="ml-3 text-black dark:text-white">
                        <FaTwitter size={25} />
                    </a>
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer