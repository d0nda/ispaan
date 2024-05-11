import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import ReactMarkdown from 'react-markdown';

const JobAccordion: React.FC = () => {
  const [jobs, setJobs] = useState<any[]>([]);

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
              'X-RapidAPI-Key':
                'b7963e919bmshbf3f432a97ca6b5p1d7b5ajsnbbd1bc987092',
              'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
            },
          }
        );
        setJobs(response.data.data);
      } catch (error) {
        console.error('Error fetching job data:', error);
      }
    };

    fetchData();
  }, []);

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
