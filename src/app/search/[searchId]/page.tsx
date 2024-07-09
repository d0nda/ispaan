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
  const [searchDetails, setSearchDetails] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchSearchDetails = async () => {
      try {
        const decodedSearchId = decodeURIComponent(searchId);
        const response = await axios.get('https://jsearch.p.rapidapi.com/search', {
          params: { query: decodedSearchId },
          headers: {
            'x-rapidapi-host': 'jsearch.p.rapidapi.com',
            'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
          },
        });

        setSearchDetails(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching search details:', error);
        setIsLoading(false);
      }
    };

    fetchSearchDetails();
  }, [searchId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!searchDetails) {
    return <div>Search details not found</div>;
  }

  return (
    <div>
      <h1>Search Results for `{searchId}`</h1>
      <ul>
        {searchDetails.data && searchDetails.data.map((item: any, index: number) => (
          <li key={index}>
            <Link href={`/search/${encodeURIComponent(item.id)}`} passHref>
              {item.title} - {item.company}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchDetailsPage;
