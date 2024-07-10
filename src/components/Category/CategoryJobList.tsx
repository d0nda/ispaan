// components/Category/CategoryJobList.tsx
"use client"
import React, { useEffect, useState } from 'react';
import Loading from '@/components/Category/Loading';
import { searchJobs } from '@/lib/jsearch';
import { SearchJobsResponse } from '../../../types/job';

interface CategoryJobListProps {
  category: string;
}

const CategoryJobList: React.FC<CategoryJobListProps> = ({ category }) => {
  const [jobs, setJobs] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        console.log('Fetching jobs for category:', category); // Add this line
        const response: SearchJobsResponse = await searchJobs('jobs near me', { page: '1', num_pages: '1', employer_company_type: category });
        console.log('Jobs fetched for category:', response.data); // Add this line
        setJobs(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching jobs:', error);
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, [category]);

  if (isLoading) {
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
      {jobs.map((job) => (
        <div key={job.job_id} className="mb-5">
          <div className="flex items-center space-x-4">
            {job.employer_logo && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={job.employer_logo} alt={`${job.employer_name} Logo`} style={{ width: '50px', height: '50px' }} />
            )}
            <div>
              <h2>{job.job_title}</h2>
            </div>
          </div>
          <div className="px-5 py-5 text-sm">
            {job.job_description}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryJobList;
