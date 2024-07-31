"use client"
import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import ReactMarkdown from 'react-markdown';
import { searchJobs } from '@/lib/jsearch';
import { SearchJobsResponse } from '../../../types/job';

const JobAccordion: React.FC = () => {
  const [jobs, setJobs] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        console.log('Fetching jobs...'); // Debugging statement
        const response: SearchJobsResponse = await searchJobs('jobs near me', { page: '1', num_pages: '1' });
        console.log('Jobs fetched:', response.data); // Debugging statement
        setJobs(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching jobs:', error);
        setIsLoading(false);
      }
    };

    fetchJobs();
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

  
  const extractSentences = (text: string, numSentences: number = 1) => {
    const sentences = text.match(/[^.!?]*[.!?]/g) || [];
    return sentences.slice(0, numSentences).join(' ');
  };

  return (
    <div>
      <Accordion type="single" collapsible className="w-full">
        {jobs.map((job) => (
          <AccordionItem key={job.job_id} className="mb-5" value={`item-${job.job_id}`}>
            <AccordionTrigger showApplyButton={true} applyLink={job.job_id}>
              <div className="flex items-center space-x-4">
                {job.employer_logo && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={job.employer_logo} alt={`${job.employer_name} Logo`} style={{ width: '50px', height: '50px' }} />
                )}
                <div>
                  <h2>{job.job_title}</h2>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="px-5 py-5 text-sm">
                {job.job_description && (
                  <>
                    <ReactMarkdown>{extractSentences(job.job_description, 2)}</ReactMarkdown>
                    <br />
                  </>
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default JobAccordion;
