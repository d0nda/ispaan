import React, { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import FeaturedList from './FeaturedList';
import Loading from './Loading'; 
// import { Job } from "../../../types/job";
import { searchJobs } from '@/lib/jsearch';
import { SearchJobsResponse } from '../../../types/job';

export default function Featured() {
    const [latestJobs, setLatestJobs] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true); 

    useEffect(() => {
        const fetchLatestJobs = async () => {
            try {
                console.log('Fetching jobs...');
                const response: SearchJobsResponse = await searchJobs('jobs near me', { page: '1', num_pages: '1' });
                console.log('Jobs fetched:', response.data);
                setLatestJobs(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching jobs:', error);
                setIsLoading(false);
            }
        };

        fetchLatestJobs();
    }, []);

    const limitedJobs = latestJobs.slice(0, 5);

    if (isLoading) {
        return (
            <div className="flex flex-col gap-x-8 sm:gap-x-0 sm:flex-row gap-y-8 px-4 sm:px-6 lg:px-8">
                <div className="mt-11 mb-8 mx-auto space-x-4 sm:space-x-8 sm:space-y-0 sm:flex flex-row">
                    <div className="block sm:hidden">
                        <Loading />
                    </div>
                    <div className="hidden sm:flex flex-row space-x-4">
                        {[...Array(3)].map((_, index) => (
                            <Loading key={index} />
                        ))}
                    </div>
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
