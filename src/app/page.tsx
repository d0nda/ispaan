"use client"

import Container from "@/components/ui/container";
import { MdDesignServices } from "react-icons/md";
import { RiUserHeartFill } from "react-icons/ri";
import { AiOutlineSolution } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
//import ProductList from "@/components/ProductList";


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
              Your Future starts here...
            </h3>
            <div className="mb-8 flex w-full mx-auto max-w-sm items-center space-x-2">
              <Input type="search" placeholder="Search" />
              <Button type="submit">Search</Button>
            </div>
          </div>
        </div>
      </section>
      <Container>
        <div className="mb-5">
          <Badge>Badge</Badge>
        </div>
        {/* Featured Jobs */}
        <section className="mb-8 p-4" >
          <div className="mx-auto sm:mx-4 md:mx-6 lg:mx-16 xl:mx-20 2xl:mx-24 max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-screen-2xl 2xl:max-w-screen-3xl">
            <h1 className="mb-4 text-center font-semibold text-black dark:text-white text-xl lg:text-4xl">Featured Jobs</h1>
            <p className="mb-6 text-center text-black dark:text-white">
              From sleek interfaces to seamless functionality, we redefine user interaction. Dive into innovation and make your digital journey extraordinary.
            </p>
            <div className="border-black border-opacity-30 dark:border-white border-t"></div>
            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
              <div className="mt-11 mb-8 mx-auto">
                <Carousel
                  opts={{
                    align: "start",
                  }}
                  className="w-full max-w-lg"
                >
                  <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                              <span className="text-3xl font-semibold">{index + 1}</span>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>

          </div>
        </section>

        {/* Newly Posted */}
        <section className="mt-8 mb-8">
          <div className="mx-2 sm:mx-4 md:mx-6 lg:mx-16 xl:mx-20 2xl:mx-24">
            <div className="text-center text-black dark:text-white mt-4 mb-3">
              <h1 className="mb-6 text-3xl lg:text-4xl font-semibold">Newly Posted</h1>
              <div className="border-black border-opacity-30 dark:border-white border-t"></div>

              <div className="w-full flex mt-8 mx-auto items-center justify-between pb-6">
                <div>
                  <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                      <table className="min-w-full leading-normal">
                        <thead>
                          <tr>
                            <th
                              className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                              Name
                            </th>
                            <th
                              className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                              products
                            </th>
                            <th
                              className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                              Created at
                            </th>
                            <th
                              className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                              QRT
                            </th>
                            <th
                              className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                              Status
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 w-10 h-10">
                                  <img className="w-full h-full rounded-full"
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                    alt="" />
                                </div>
                                <div className="ml-3">
                                  <p className="text-gray-900 whitespace-no-wrap">
                                    Vera Carpenter
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">Admin</p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Jan 21, 2020
                              </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">
                                43
                              </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <span
                                className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                <span aria-hidden
                                  className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                <span className="relative">Activo</span>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 w-10 h-10">
                                  <img className="w-full h-full rounded-full"
                                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                    alt="" />
                                </div>
                                <div className="ml-3">
                                  <p className="text-gray-900 whitespace-no-wrap">
                                    Blake Bowman
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">Editor</p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Jan 01, 2020
                              </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">
                                77
                              </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <span
                                className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                <span aria-hidden
                                  className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                <span className="relative">Activo</span>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 w-10 h-10">
                                  <img className="w-full h-full rounded-full"
                                    src="https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                    alt="" />
                                </div>
                                <div className="ml-3">
                                  <p className="text-gray-900 whitespace-no-wrap">
                                    Dana Moore
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">Editor</p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Jan 10, 2020
                              </p>
                            </td>

                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">
                                64
                              </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <span
                                className="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                                <span aria-hidden
                                  className="absolute inset-0 bg-orange-200 opacity-50 rounded-full"></span>
                                <span className="relative">Suspended</span>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-5 py-5 bg-white text-sm">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 w-10 h-10">
                                  <img className="w-full h-full rounded-full"
                                    src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80"
                                    alt="" />
                                </div>
                                <div className="ml-3">
                                  <p className="text-gray-900 whitespace-no-wrap">
                                    Alonzo Cox
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="px-5 py-5 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">Admin</p>
                            </td>
                            <td className="px-5 py-5 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">Jan 18, 2020</p>
                            </td>
                            <td className="px-5 py-5 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">70</p>
                            </td>
                            <td className="px-5 py-5 bg-white text-sm">
                              <span
                                className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                <span aria-hidden
                                  className="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                                <span className="relative">Inactive</span>
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
