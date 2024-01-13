import { useRouter } from 'next/router';
import useSWR from 'swr';
import { Job } from '../../../types/job';


const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function JobsByCategory() {
    const router = useRouter();
    const { category } = router.query;

    // Fetch jobs based on the selected category
    const { data: jobs, error } = useSWR(`/api/jobs?category=${category}`, fetcher);

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
