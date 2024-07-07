import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import axios from 'axios';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger } from '@/components/ui/dialog';
import { CiSearch } from 'react-icons/ci';

export default function Search() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<any>(null); // Updated to any since data contains multiple arrays
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = async (query: string) => {
    if (!query) {
      // Clear search results when query is empty
      setSearchResults(null);
      return;
    }
  
    setIsLoading(true);
  
    try {
      const response = await axios.get('https://jsearch.p.rapidapi.com/search-filters', {
        params: {
          query: query,
        },
        headers: {
          'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
        },
      });
  
      console.log('Full API Response:', response);
      if (response.data && response.data.data) {
        console.log('API Response Data:', response.data.data);
        setSearchResults(response.data.data);
      } else {
        console.error('Invalid API response format:', response.data);
        setSearchResults(null);
      }
    } catch (error) {
      console.error('Error fetching job data:', error);
      setSearchResults(null);
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
          <button
            onClick={handleSearch}
            className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-auto"
          >
            <CiSearch size={30} />
          </button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <div className="mb-8 relative w-[300px] mx-auto max-w-sm">
            <Input
              type="search"
              placeholder="Search for a Job"
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              value={searchQuery}
            />
            <button
              onClick={handleSearch}
              className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-auto"
            >
              <CiSearch size={30} />
            </button>
          </div>
          <div className="mb-5 border-black border-opacity-20 dark:border-white border-t"></div>
          <DialogDescription>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              searchResults ? (
                <div>
                  <h3>Job Titles</h3>
                  {searchResults.job_titles.slice(0, 5).map((jobTitle: any, index: number) => (
                    <div key={index}>
                      <p>{jobTitle.name} ({jobTitle.est_count})</p>
                    </div>
                  ))}
                  <h3>Employers</h3>
                  {searchResults.employers.slice(0, 5).map((employer: any, index: number) => (
                    <div key={index}>
                      <p>{employer.name} ({employer.est_count})</p>
                    </div>
                  ))}
                  {/* You can add similar sections for categories, company_types, etc. */}
                </div>
              ) : (
                <p>No recent searches.</p>
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
