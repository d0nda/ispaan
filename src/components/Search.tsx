import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger } from '@/components/ui/dialog';
import { CiSearch } from 'react-icons/ci';
import axios from 'axios';
import Link from 'next/link';

export default function Search() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query') || '';
    setSearchQuery(query);
    if (query) {
      fetchData(query);
    }
  }, [searchParams]);

  const fetchData = async (query: string) => {
    if (!query) {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.get('https://jsearch.p.rapidapi.com/search-filters', {
        params: { query },
        headers: {
          'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
        },
      });

      console.log('Full API Response:', response);
      if (response.data.data) {
        console.log('API Response Data:', response.data.data);
        setSearchResults(response.data.data.job_titles); // Use job_titles for demo, you can add others
      } else {
        console.error('Invalid API response format:', response.data);
        setSearchResults([]);
      }
    } catch (error) {
      console.error('Error fetching job data:', error);
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = () => {
    fetchData(searchQuery);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="mb-8 relative w-full mx-auto max-w-sm">
          <Input
            type="search"
            placeholder="Search for a Job"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            value={searchQuery}
          />
          <button onClick={handleSearch} className="absolute inset-y-0 right-0 flex items-center pr-5 pointer-events-auto">
            <CiSearch size={30} />
          </button>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-screen-sm mx-auto sm:max-w-[425px]">
        <DialogHeader>
          <div className="mb-8 relative w-[300px] mx-auto max-w-sm">
            <Input
              type="search"
              placeholder="Search for a Job"
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              value={searchQuery}
            />
            <button onClick={handleSearch} className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-auto">
              <CiSearch size={30} />
            </button>
          </div>
          <div className="mb-5 border-black border-opacity-20 dark:border-white border-t"></div>
          <DialogDescription>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              searchResults.length > 0 ? (
                <div>
                  <h3>Job Titles</h3>
                  {searchResults.map((jobTitle: any, index: number) => (
                    <div key={index}>
                      <Link href={`/jobs/${jobTitle.value}`} passHref>
                        {jobTitle.name} ({jobTitle.est_count})
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No jobs found.</p>
              )
            )}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4"></div>
        <div className="mb-5 border-black border-opacity-20 dark:border-white border-t"></div>
      </DialogContent>
    </Dialog>
  );
}
