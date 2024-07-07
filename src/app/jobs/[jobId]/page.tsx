import React from 'react';
import { getJobDetails } from '@/app/api/jsearch/route';
import { JobDetailsResponse } from '../../../../types/job';

interface JobDetailsPageProps {
  params: {
    jobId: string;
  };
}

const fetchJobDetails = async (jobId: string) => {
  try {
    console.log('Fetching job details for Job ID:', jobId); // Debugging statement
    const response: JobDetailsResponse = await getJobDetails(jobId, {
      extended_publisher_details: 'true',
    });
    console.log('API Response:', response); // Debugging statement
    return response;
  } catch (error) {
    console.error('Error fetching job details:', error);
    return null;
  }
};

export default async function JobDetailsPage({ params: { jobId } }: JobDetailsPageProps) {
  jobId = decodeURIComponent(jobId); // Decode jobId if it's URL encoded
  console.log('Decoded Job ID:', jobId); // Debugging statement
  const jobPreview = await fetchJobDetails(jobId);

  console.log('Job Preview:', jobPreview); // Debugging statement

  if (!jobPreview) {
    return <div>No job details found.</div>;
  }

  return (
    <div>
      <h1>{jobPreview.job_title}</h1>
      <h1>Job ID: {jobPreview.job_id}</h1>
      <p>Employer: {jobPreview.employer_name}</p>
      {jobPreview.employer_logo && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={jobPreview.employer_logo} alt={`${jobPreview.employer_name} Logo`} style={{ width: '100px', height: '100px' }} />
      )}
      <p>Website: {jobPreview.employer_website ? <a href={jobPreview.employer_website}>{jobPreview.employer_website}</a> : 'No website available'}</p>
      <p>{jobPreview.job_description}</p>
    </div>
  );
}
