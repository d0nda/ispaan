import React from 'react';
//import { Badge } from "@/components/ui/badge";
import Loading from "@/components/Category/Loading";

// This category component is a landing page category badge to showcase available jobs under each category

export default function Category() {
  // Number of skeleton loaders you want to display
  const skeletonCount = 8;

  return (
    <div className="grid grid-cols-4 gap-2 md:flex justify-center mb-5 px-2 py-4">
      {Array.from({ length: skeletonCount }).map((_, index) => (
        <Loading key={index} />
      ))}
    </div>
  );
}
