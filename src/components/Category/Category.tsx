"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Badge } from "@/components/ui/badge";
import Loading from "@/components/Category/Loading";
import { searchJobs } from '@/lib/jsearch';
import { SearchJobsResponse } from '../../../types/job';

const Category: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response: SearchJobsResponse = await searchJobs('jobs near me', { page: '1', num_pages: '2' });
        console.log('Jobs response:', response);
        const uniqueCategories = Array.from(new Set(response.data.map(job => job.employer_company_type)));
        console.log('Unique categories:', uniqueCategories);
        setCategories(uniqueCategories);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching jobs:', error);
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const handleCategoryClick = (category: string) => {
    router.push(`/category/${encodeURIComponent(category)}`);
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-4 gap-2 md:flex justify-center mb-5 px-2 py-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <Loading key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-2 md:flex justify-center mb-5 px-2 py-4">
      {categories.map((category, index) => (
        <Badge
          key={index}
          className="cursor-pointer"
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </Badge>
      ))}
    </div>
  );
};

export default Category;
