import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger } from '@/components/ui/dialog';
import { CiSearch } from 'react-icons/ci';
import { X } from 'lucide-react';
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
      const response = await axios.get('https://jsearch.p.rapidapi.com/search', {
        params: { query },
        headers: {
          'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
        },
      });

      if (response.data.data) {
        setSearchResults(response.data.data);
      } else {
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
    setSearchQuery('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleRemoveJob = (index: number) => {
    setSearchResults((prevResults) => prevResults.filter((_, i) => i !== index));
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
            className="absolute inset-y-0 right-0 flex items-center pr-5 pointer-events-auto"
          >
            <CiSearch size={30} />
          </button>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-screen-md mx-auto sm:max-w-[425px] px-4 sm:px-0">
        <DialogHeader>
          <div className="mb-8 relative w-[200px] sm:w-[300px] mx-auto max-w-sm">
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
          <DialogDescription className="overflow-y-auto max-h-[60vh]">
            {isLoading ? (
              <p className="text-center">Searching...</p>
            ) : searchResults.length > 0 ? (
              <div>
                {searchResults.map((job: any, index: number) => (
                  <div key={index} className="border p-4 hover:bg-gray-100 flex justify-between items-center">
                    <Link href={`/search/${encodeURIComponent(job.job_id)}`}>
                      {job.job_title} - {job.company_name}
                    </Link>
                    <button
                      onClick={() => handleRemoveJob(index)}
                      className="text-red-500 ml-4"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center">No jobs found.</p>
            )}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4"></div>
        <div className="mb-5 border-black border-opacity-20 dark:border-white border-t"></div>
      </DialogContent>
    </Dialog>
  );
}
