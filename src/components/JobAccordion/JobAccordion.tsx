import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import ReactMarkdown from 'react-markdown';
import Loading from './Loading'; // Import the Loading component

const JobAccordion: React.FC = () => {
  const [jobs, setJobs] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true); // State to manage loading status

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://jsearch.p.rapidapi.com/search',
          {
            params: {
              query: 'jobs near me',
              page: '1',
              num_pages: '1',
            },
            headers: {
              'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
              'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
            },
          }
        );
        setJobs(response.data.data);
        setIsLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching job data:', error);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    // Render ten instances of the Loading component while data is being fetched
    return (
      <div>
        {[...Array(10)].map((_, index) => (
          <Loading key={index} />
        ))}
      </div>
    );
  }

  return (
    <div>
      <Accordion type="single" collapsible className="w-full">
        {jobs.map((job) => (
          <AccordionItem
            key={job.job_id}
            className="mb-5"
            value={`item-${job.job_id}`}
          >
            <AccordionTrigger showApplyButton={true} applyLink={job.job_apply_link}>
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
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default JobAccordion;
