"use client"

import Container from "@/components/ui/container";
import { MdEmail } from "react-icons/md";
import Category from "@/components/Category";
import Featured from "@/components/Featured/Featured";
import JobAccordion from "@/components/JobAccordion/JobAccordion";
import Search from "@/components/Search";


export default function Home() {
  return (
    <main>

      {/* hero Section */}
      <section className="mt-5 mb-5 bg-gradient-to-r from-blue-500 to-green-500 flex flex-col">
        <div className="px-12 mx-auto max-w-7xl">
          <div className="w-full mx-auto text-center md:w-11/12 xl:w-9/12 md:text-center">
            <h1 className="mt-8 mb-8 text-2xl font-extrabold leading-none tracking-normal text-black dark:text-white md:text-6xl md:tracking-tight">
              <span>Connecting you to your next job opportunity.</span>
            </h1>
            <h3 className="mb-8 text-sm text-black dark:text-white md:text-lg">
              Your Career starts here...
            </h3>
            {/* Search Bar */}
            <Search />
          </div>
        </div>
      </section>
      <Container>

        {/* Category badge */}
        <Category />

        {/* Featured Jobs */}
        <section className="mb-8 p-4" >
          <div className="mx-auto sm:mx-4 md:mx-6 lg:mx-16 xl:mx-20 2xl:mx-24 max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-screen-2xl 2xl:max-w-screen-3xl">
            <h1 className="mb-4 text-center font-semibold text-black dark:text-white text-xl lg:text-4xl">Featured Jobs</h1>
            <p className="mb-6 text-center text-black dark:text-white">
              All featured jobs will be displayed here.
            </p>
            <div className="mb-5 border-black border-opacity-30 dark:border-white border-t"></div>

            {/* Featured Jobs Carousel */}
            <Featured />

          </div>
        </section>

        {/* Newly Posted */}
        <section className="mt-8 mb-8">
          <div className="mx-2 sm:mx-4 md:mx-6 lg:mx-16 xl:mx-20 2xl:mx-24">
            <div className="text-center text-black dark:text-white mt-4 mb-3">
              <h1 className="mb-6 text-3xl lg:text-4xl font-semibold">Newly Posted</h1>
              <p className="mb-6 text-center text-black dark:text-white">
                All Daily updated jobs will be displayed here.
              </p>
              <div className="border-black border-opacity-30 dark:border-white border-t"></div>

              
            </div>
            {/* Job Accordion */}
            <JobAccordion />
          </div>
        </section>


      </Container>

      {/* newsletter Section */}
      <section className="mt-5 mb-10 bg-slate-300 dark:bg-white dark:bg-opacity-20 dark:backdrop-blur-md shadow-lg">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md sm:text-center">
            <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-black dark:text-white sm:text-4x">Sign up for our newsletter</h2>
            <p className="mx-auto mb-8 max-w-2xl font-light text-black dark:text-white md:mb-12 sm:text-xl">Stay up to date with the announcements and exclusive discounts feel free to sign up with your email.</p>
            <form action="#">
              <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                <div className="relative w-full">
                  <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-400 dark:text-gray-300">Email address</label>
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <MdEmail size={20} />
                  </div>
                  <input className="block p-3 pl-10 w-full text-sm text-gray-400 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your email" type="email" id="email" required />
                </div>
                <div>
                  <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg bg-indigo-500 border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Subscribe</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>

  )
}