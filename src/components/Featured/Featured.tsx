// components/Featured/Featured.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import FeaturedList from './FeaturedList';
import Loading from './Loading'; // Import the Loading component
import { Job } from "../../../types/job";

export default function Featured() {
    const [latestJobs, setLatestJobs] = useState<Job[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true); // State to manage loading status

    useEffect(() => {
        const fetchLatestJobs = async () => {
            try {
                const response = await axios.get('https://jsearch.p.rapidapi.com/search', {
                    params: {
                        query: 'jobs near me',
                        page: '1',
                        num_pages: '1',
                    },
                    headers: {
                        'X-RapidAPI-Key': process.env.RAPID_API_KEY as string,
                        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
                    },
                });
                setLatestJobs(response.data.data); // Update state with latest jobs data
                setIsLoading(false); // Set loading to false after data is fetched
            } catch (error) {
                console.error('Error fetching latest jobs:', error);
            }
        };

        fetchLatestJobs();
    }, []);

    // Slice the latestJobs array to show only 5 jobs
    const limitedJobs = latestJobs.slice(0, 5);

    if (isLoading) {
        // Render three instances of the Loading component while data is being fetched
        return (
            <div className="flex flex-col gap-x-8 sm:gap-x-0 sm:flex-row gap-y-8 px-4 sm:px-6 lg:px-8">
                <div className="mt-11 mb-8 mx-auto space-x-4 sm:space-x-8 sm:space-y-0 sm:flex flex-row">
                {[...Array(3)].map((_, index) => (
                    <Loading key={index} />
                ))}
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <div className="mt-11 mb-8 mx-auto">
                <Carousel opts={{ align: "start" }} className="w-full grid grid-cols-1">
                    <CarouselContent>
                        {limitedJobs.map((job, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <FeaturedList items={[job]} />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    );
}
