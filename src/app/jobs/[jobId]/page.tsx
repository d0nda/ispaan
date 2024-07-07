// src/app/jobs/[jobId]/page.tsx
"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getJobDetails } from '@/app/api/jsearch/route';
import { JobDetails, JobDetailsResponse } from '../../../../types/job';

const JobDetailsPage: React.FC = () => {
  const { jobId } = useParams();
  const [jobPreview, setJobDetails] = useState<JobDetailsResponse | null>(); //JobDetailsResponse | null>(null) | any[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  useEffect(() => {
    console.log('Job ID:', jobId); 
    if (typeof jobId === 'string') {
        const fetchJobDetails = async () => {
          try {
            const response: JobDetailsResponse = await getJobDetails(jobId, {
              extended_publisher_details: 'true'
            });
            console.log('API Response:', response); 
            setJobDetails(response);
            setIsLoading(false);
          } catch (error) {
            console.error('Error fetching job details:', error);
            setIsLoading(false);
          }
      };

      fetchJobDetails();
    }
  }, [jobId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!jobPreview) {
    return <div>No job details found.</div>;
  }

  return (
    <div>
      <h1>{jobPreview.job_title}</h1>
      <p>Employer: {jobPreview.employer_name}</p>
      {jobPreview.employer_logo && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={jobPreview.employer_logo} alt={`${jobPreview.employer_name} Logo`} style={{ width: '100px', height: '100px' }} />
      )}
      <p>Website: {jobPreview.employer_website ? <a href={jobPreview.employer_website}>{jobPreview.employer_website}</a> : 'No website available'}</p>
      <p>{jobPreview.job_description}</p>
    </div>
  );
};

export default JobDetailsPage;
