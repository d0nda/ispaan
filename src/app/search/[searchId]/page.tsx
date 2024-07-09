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
    return <div>Loading...</div>;
  }

  if (!jobDetails) {
    return <div>Job details not found</div>;
  }

  return (
    <div>
      <h1>{jobDetails.job_title}</h1>
      <p>Company: {jobDetails.company_name}</p>
      <p>Location: {jobDetails.job_location}</p>
      <p>Job Description: {jobDetails.job_description}</p>
      <Link href="/">Back to Search</Link>
    </div>
  );
};

export default SearchDetailsPage;
