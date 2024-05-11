import React, { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import FeaturedList from './FeaturedList';
import axios from 'axios'; 
import { Job } from "../../types/job";

export default function Featured() {
    const [latestJobs, setLatestJobs] = useState<Job[]>([]);

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
                        'X-RapidAPI-Key': 'b7963e919bmshbf3f432a97ca6b5p1d7b5ajsnbbd1bc987092',
                        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
                    },
                });
                setLatestJobs(response.data.data); // Update state with latest jobs data
            } catch (error) {
                console.error('Error fetching latest jobs:', error);
            }
        };

        fetchLatestJobs();
    }, []);

    // Slice the latestJobs array to show only 5 jobs
    const limitedJobs = latestJobs.slice(0, 5);

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
