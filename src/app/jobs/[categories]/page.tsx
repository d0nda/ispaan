"use client"

import { useRouter } from 'next/navigation';
import useSWR from 'swr';
import { Job, JobCategory } from '../../../../types/job';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function JobsByCategory({ params }: { params: { category: JobCategory } }) {
    //const router = useRouter();
    const { category } = params;

    if (!category) {
        // Handle the case when category is not present in the URL
        return <div>No category specified</div>;
    }

    // Fetch jobs based on the selected category
    const { data: jobs, error } = useSWR(`/api/job/category/${category}`, fetcher);
    console.log("Jobs by Cat: ", jobs)

    // ... (error handling)

    return (
        <div>
            <h1>Jobs in {category}</h1>

            {jobs && (
                <ul>
                    {jobs.map((job: Job) => (
                        <li key={job.id}>{job.job_title}</li>
                        // Display other job information as needed
                    ))}
                </ul>
            )}
        </div>
    );
}