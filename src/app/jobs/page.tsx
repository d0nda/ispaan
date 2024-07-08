// app/jobs/page.tsx
"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import ReactMarkdown from 'react-markdown';
import { searchJobs } from '@/app/api/jsearch/route';
import { SearchJobsResponse } from '../../../types/job';

const JobsPage: React.FC = () => {
  const [jobs, setJobs] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        console.log('Fetching jobs...'); // Debugging statement
        const response: SearchJobsResponse = await searchJobs('jobs near me', { page: '1', num_pages: '1' });
        console.log('Jobs fetched:', response.data); // Debugging statement
        setJobs(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const handleJobClick = (jobId: string) => {
    const encodedJobId = encodeURIComponent(jobId); // Encode the job ID
    console.log(`Navigating to job ID: ${encodedJobId}`); // Debugging statement
    router.push(`/jobs/${encodedJobId}`);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Accordion type="single" collapsible className="w-full">
        {jobs.map((job) => (
          <AccordionItem key={job.job_id} className="mb-5" value={`item-${job.job_id}`}>
            <AccordionTrigger>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {job.employer_logo && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={job.employer_logo} alt={`${job.employer_name} Logo`} style={{ width: '50px', height: '50px' }} />
                  )}
                  <div>
                    <h2>{job.job_title}</h2>
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="px-5 py-5 text-sm">
                {job.job_description && (
                  <>
                    <ReactMarkdown>{job.job_description}</ReactMarkdown>
                    <br />
                  </>
                )}
              </div>
              <button onClick={() => handleJobClick(job.job_id)} className="mt-2 p-2 bg-red-500 text-white rounded">
                View Job
              </button>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default JobsPage;
