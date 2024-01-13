import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function JobAccordion() {
    return (
        <div>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1" className="mt-8 md:space-x-5 space-y-3 md:space-y-0 rounded-xl max-w-xs md:max-w-3xl mx-4 md:mx-auto bg-slate-300 dark:bg-white dark:bg-opacity-20 dark:backdrop-blur-md border border-opacity-30  border-black dark:border-white shadow-lg p-4 mb-5 cursor-pointer">
                    <AccordionTrigger>
                        <div className="flex-shrink-0 w-10 h-10">
                            <img className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                alt="" />
                        </div>
                        <div className="ml-3">
                            <p className="text-black dark:text-white whitespace-no-wrap">
                                Vera Carpenter
                            </p>
                        </div>
                        <div className="px-5 py-5 text-sm">
                            <p className="text-black dark:text-white whitespace-no-wrap">Admin</p>
                        </div>
                        <div className="px-5 py-5 text-sm">
                            <p className="text-black dark:text-white whitespace-no-wrap">
                                Jan 21, 2020
                            </p>
                        </div>
                        <div className="px-5 py-5 text-sm">
                            <span
                                className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                <span aria-hidden
                                    className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                <span className="relative">Apply</span>
                            </span>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}
