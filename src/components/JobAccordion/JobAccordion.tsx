//components/JobAccordion.tsx
"use client"
import React, { useEffect, useState } from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import ReactMarkdown from 'react-markdown';
import Loading from './Loading';
import { SearchJobsResponse } from '../../../types/job';
import { searchJobs } from '@/app/api/jsearch/route';
import { useRouter } from 'next/navigation';

const JobAccordion: React.FC = () => {
  const [jobs, setJobs] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: SearchJobsResponse = await searchJobs('jobs near me', {
          page: '1',
          num_pages: '1',
        });
        setJobs(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching job data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div>
        {[...Array(10)].map((_, index) => (
          <Loading key={index} />
        ))}
      </div>
    );
  }

  const handleApplyClick = (jobId: string) => {
    router.push(`/jobs/${jobId}`);
  };

  return (
    <div>
      <Accordion type="single" collapsible className="w-full">
        {jobs.map((job) => (
          <AccordionItem
            key={job.job_id}
            className="mb-5"
            value={`item-${job.job_id}`}
          >
            <AccordionTrigger showApplyButton={true} applyLink={`/jobs/${job.job_id}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {job.employer_logo && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={job.employer_logo}
                      alt={`${job.employer_name} Logo`}
                      style={{ width: '50px', height: '50px' }}
                    />
                  )}
                  <div>
                    <h2>{job.job_title}</h2>
                    {/*<p>Employer: {job.employer_name}</p>*/}
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="px-5 py-5 text-sm">
                {job.job_description && (
                  <>
                    <ReactMarkdown>{job.job_description}</ReactMarkdown>
                    <br /> {/* Add line break */}
                  </>
                )}
              </div>
              <button
                      onClick={() => handleApplyClick(job.job_id)}
                      className="mt-2 p-2 bg-red-500 text-white rounded"
                    >
                      Apply
                    </button>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default JobAccordion;