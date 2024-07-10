"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { JobDetails } from '../../../../types/job'; // Adjust the path according to your project structure
import Link from 'next/link';
import Loading from '../Loading';

interface JobDetailsPageProps {
  params: {
    jobId: string;
  };
}

const JobDetailsPage: React.FC<JobDetailsPageProps> = ({ params: { jobId } }) => {
  const [jobDetails, setJobDetails] = useState<JobDetails | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const decodedJobId = decodeURIComponent(jobId);
        const response = await axios.get(`https://jsearch.p.rapidapi.com/job-details`, {
          params: {
            job_id: decodedJobId
          },
          headers: {
            'x-rapidapi-host': 'jsearch.p.rapidapi.com',
            'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY
          }
        });
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
    return <Loading />;
  }

  if (!jobDetails) {
    return <div className="flex items-center justify-center h-screen">No job details found refresh the page.</div>;
  }

  
  const jobDescriptionLines = jobDetails.job_description.split('\n');
  const jobDescriptionElements: (string | JSX.Element)[] = [];
  let currentParagraph: string[] = [];

  jobDescriptionLines.forEach(line => {
    const trimmedLine = line.trim();
    if (trimmedLine.startsWith('•')) {
      if (currentParagraph.length > 0) {
        jobDescriptionElements.push(currentParagraph.join(' '));
        currentParagraph = [];
      }
      jobDescriptionElements.push(<li key={trimmedLine}>{trimmedLine.slice(1).trim()}</li>);
    } else {
      currentParagraph.push(trimmedLine);
    }
  });

  if (currentParagraph.length > 0) {
    jobDescriptionElements.push(currentParagraph.join(' '));
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="md:w-2/3">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-4">
              {jobDetails.employer_logo && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={jobDetails.employer_logo}
                  alt={`${jobDetails.employer_name} Logo`}
                  className="w-24 h-24 rounded"
                />
              )}
              <div>
                <h1 className="text-2xl font-bold">{jobDetails.job_title}</h1>
                <p className="text-gray-600">{jobDetails.employer_name}</p>
                <div className="flex items-center space-x-2 text-gray-500">
                  <span>{jobDetails.job_city}, {jobDetails.job_state}, {jobDetails.job_country}</span>
                  <span>|</span>
                  <span>{jobDetails.job_employment_type}</span>
                  <span>|</span>
                  {jobDetails.job_min_salary && jobDetails.job_max_salary && (
                    <span>{`${jobDetails.job_min_salary} - ${jobDetails.job_max_salary} ${jobDetails.job_salary_currency}`}</span>
                  )}
                </div>
              </div>
            </div>
            <div className="bg-slate-400 shadow-md rounded p-4">
              <h2 className="text-xl font-semibold mb-4">Job Description</h2>
              {jobDescriptionElements.map((element, index) => (
                <div key={index}>
                  {typeof element === 'string' ? <p className="mb-4">{element}</p> : <ul className="list-disc pl-5">{element}</ul>}
                </div>
              ))}
            </div>
            {jobDetails.job_highlights && jobDetails.job_highlights.responsibilities && (
              <div className="bg-slate-500 shadow-md rounded p-4">
                <h2 className="text-xl font-semibold mb-4">Key Responsibilities</h2>
                <ul className="list-disc pl-5 space-y-2">
                  {jobDetails.job_highlights.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            )}
            {jobDetails.job_required_skills && (
              <div className="bg-slate-400 shadow-md rounded p-4">
                <h2 className="text-xl font-semibold mb-4">Skills & Experience</h2>
                <ul className="list-disc pl-5 space-y-2">
                  {jobDetails.job_required_skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            )}
            {jobDetails.job_benefits && (
              <div className="bg-slate-400 shadow-md rounded p-4">
                <h2 className="text-xl font-semibold mb-4">Benefits</h2>
                <ul className="list-disc pl-5 space-y-2">
                  {jobDetails.job_benefits.map((benefit: any, index: any) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="md:w-1/3 mt-3">
          <div className="bg-slate-400 shadow-md rounded p-4">
            <h2 className="text-xl font-semibold mb-4">Job Overview</h2>
            <div className="space-y-2">
              <p><strong>Date Posted:</strong> {new Date(jobDetails.job_posted_at_timestamp * 1000).toLocaleDateString()}</p>
              <p><strong>Expiration Date:</strong> {new Date(jobDetails.job_offer_expiration_timestamp * 1000).toLocaleDateString()}</p>
              <p><strong>Location:</strong> {jobDetails.job_city}, {jobDetails.job_state}, {jobDetails.job_country}</p>
              <p><strong>Job Type:</strong> {jobDetails.job_employment_type}</p>
              <p><strong>Remote:</strong> {jobDetails.job_is_remote ? "Yes" : "No"}</p>
              <p><strong>Publisher:</strong> {jobDetails.job_publisher}</p>
              <p><strong>Company Type:</strong> {jobDetails.employer_company_type}</p>
              {jobDetails.job_min_salary && jobDetails.job_max_salary && (
                <p><strong>Salary:</strong> {`${jobDetails.job_min_salary} - ${jobDetails.job_max_salary} ${jobDetails.job_salary_currency}`}</p>
              )}
            </div>
          </div>
          <div className="mt-4">
            <Link href={jobDetails.job_apply_link} target="_blank" rel="noopener noreferrer">
              <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                Apply For Job
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPage;
