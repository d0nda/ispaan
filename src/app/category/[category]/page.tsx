// app/category/[category]/page.tsx
import React from 'react';
import CategoryJobList from '@/components/Category/CategoryJobList';

interface CategoryJobsPageProps {
  params: {
    category: string;
  };
}

const CategoryJobsPage: React.FC<CategoryJobsPageProps> = ({ params }) => {
  const { category } = params;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">Jobs in {decodeURIComponent(category)}</h1>
      <CategoryJobList category={decodeURIComponent(category)} />
    </div>
  );
};

export default CategoryJobsPage;
