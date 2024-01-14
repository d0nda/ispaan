"use client"

import { useRouter } from 'next/navigation';
import useSWR from 'swr';
import { Job } from '../../../../types/job';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function JobsByCategory() {
    const router = useRouter();
    const { category } = router.query;

    if (!category) {
        // Handle the case when category is not present in the URL
        return <div>No category specified</div>;
    }

    // Fetch jobs based on the selected category
    const { data: jobs, error } = useSWR(`/api/categories/[category]/${encodeURIComponent(category)}`, fetcher);
    console.log('Category:', category);
    console.log('Jobs:', jobs);
    console.log('Error:', error);

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
