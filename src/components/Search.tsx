import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import axios from 'axios';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger } from '@/components/ui/dialog';
import { CiSearch } from 'react-icons/ci';
import { Job } from '../../types/job'; // Import the Job interface from types/job.ts

export default function Search() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Job[]>([]);

  const fetchData = async (query: string) => {
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
      console.log(`Searchbar results: ${response.data.data}`); 
      setSearchResults(response.data.data);
    } catch (error) {
      console.error('Error fetching job data:', error);
    }
  };

  const handleSearch = () => {
    fetchData(searchQuery);
  };

  const filterJobs = (job: Job) => {
    // Filter jobs based on employer_name or job_title containing the search query
    return (
      job.employer_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.job_title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="mb-8 relative w-full mx-auto max-w-sm">
          <Input type="search" placeholder="Search for a Job" onChange={(e) => setSearchQuery(e.target.value)} />
          <button onClick={handleSearch} className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-auto">
            <CiSearch size={30} />
          </button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <div className="mb-8 relative w-[300px] mx-auto max-w-sm">
            <Input type="search" placeholder="Search for a Job" onChange={(e) => setSearchQuery(e.target.value)} />
            <button onClick={handleSearch} className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-auto">
              <CiSearch size={30} />
            </button>
          </div>
          <div className="mb-5 border-black border-opacity-30 dark:border-white border-t"></div>
          <DialogDescription>
            {/* Display search results here */}
            {searchResults.filter(filterJobs).map((result, index) => (
              <div key={index}>
                {/* Render individual search result items */}
                <p>{result.job_title}</p>
                <p>{result.employer_name}</p>
              </div>
            ))}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4"></div>
        <div className="mb-5 border-black border-opacity-30 dark:border-white border-t"></div>
      </DialogContent>
    </Dialog>
  );
}
