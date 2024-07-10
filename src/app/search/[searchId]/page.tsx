"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

interface SearchDetailsPageProps {
  params: {
    searchId: string;
  };
}

const SearchDetailsPage: React.FC<SearchDetailsPageProps> = ({ params: { searchId } }) => {
  const [jobDetails, setJobDetails] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const decodedSearchId = decodeURIComponent(searchId);
        const response = await axios.get('https://jsearch.p.rapidapi.com/job-details', {
          params: { job_id: decodedSearchId },
          headers: {
            'x-rapidapi-host': 'jsearch.p.rapidapi.com',
            'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
          },
        });

        setJobDetails(response.data.data[0]);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching job details:', error);
        setIsLoading(false);
      }
    };

    fetchJobDetails();
  }, [searchId]);

  if (isLoading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  if (!jobDetails) {
    return <div className="flex items-center justify-center h-screen">Job details not found</div>;
  }

  // Split job description into paragraphs and bullet points
  const jobDescriptionLines = jobDetails.job_description.split('\n');
  const jobDescriptionElements: (string | JSX.Element)[] = [];
  let currentParagraph: string[] = [];

  jobDescriptionLines.forEach((line: string) => {
    const trimmedLine = line.trim();
    if (trimmedLine.startsWith('•')) {
      if (currentParagraph.length > 0) {
        jobDescriptionElements.push(currentParagraph.join(' '));
        currentParagraph = [];
      }
      jobDescriptionElements.push(<li key={trimmedLine}>{trimmedLine.slice(1).trim()}</li>);
    } else {
      currentParagraph.push(trimmedLine);
      if (currentParagraph.join(' ').length >= 300) {
        jobDescriptionElements.push(currentParagraph.join(' '));
        currentParagraph = [];
      }
    }
  });

  if (currentParagraph.length > 0) {
    jobDescriptionElements.push(currentParagraph.join(' '));
  }

  return (
    <div className="container mx-auto p-4">
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">{jobDetails.job_title}</h1>
        <p className="text-lg text-gray-700 mb-2">Company: {jobDetails.company_name}</p>
        <p className="text-lg text-gray-700 mb-4">Location: {jobDetails.job_location}</p>
        <div className="bg-slate-400 shadow-md rounded p-4">
          <h2 className="text-xl font-semibold mb-4">Job Description</h2>
          {jobDescriptionElements.map((element, index) => (
            <div key={index}>
              {typeof element === 'string' ? <p className="mb-4">{element}</p> : <ul className="list-disc pl-5">{element}</ul>}
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/">
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
              Back to Search
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchDetailsPage;
