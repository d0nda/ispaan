"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface JobDetailsPageProps {
  params: {
    jobId: string;
  };
}

const JobDetailsPage: React.FC<JobDetailsPageProps> = ({ params: { jobId } }) => {
  const [jobDetails, setJobDetails] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const decodedJobId = decodeURIComponent(jobId); // Decode the job ID
        console.log(`Fetching details for job ID: ${decodedJobId}`); // Debugging statement
        const response = await axios.get(`https://jsearch.p.rapidapi.com/job-details`, {
          params: {
            job_id: decodedJobId
          },
          headers: {
            'x-rapidapi-host': 'jsearch.p.rapidapi.com',
            'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY
          }
        });
        console.log('Job details fetched:', response.data.data[0]); // Debugging statement
        setJobDetails(response.data.data[0]); // Assuming the data is an array
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching job details:', error);
        setIsLoading(false);
      }
    };

    fetchJobDetails();
  }, [jobId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!jobDetails) {
    return <div>No job details found.</div>;
  }

  return (
    <div>
      <h1>{jobDetails.job_title}</h1>
      <h2>Job ID: {jobDetails.job_id}</h2>
      <p>Employer: {jobDetails.employer_name}</p>
      {jobDetails.employer_logo && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={jobDetails.employer_logo} alt={`${jobDetails.employer_name} Logo`} style={{ width: '100px', height: '100px' }} />
      )}
      <p>Website: {jobDetails.employer_website ? <a href={jobDetails.employer_website}>{jobDetails.employer_website}</a> : 'No website available'}</p>
      <p>{jobDetails.job_description}</p>
    </div>
  );
};

export default JobDetailsPage;
