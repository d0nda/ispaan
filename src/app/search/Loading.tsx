//app/search/Loading.tsx
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
    return (
      <div className="container mx-auto p-4 animate-pulse">
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="md:w-2/3">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <Skeleton className="bg-gray-500 w-24 h-24 rounded" />
                <div className="space-y-2">
                  <Skeleton className="bg-gray-500 h-4 w-[250px]" />
                  <Skeleton className="bg-gray-500 h-4 w-[200px]" />
                </div>
                <div>
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="mt-2 h-4 w-1/2" />
                  <Skeleton className="mt-1 h-4 w-1/2" />
                </div>
              </div>
              <Skeleton className="bg-gray-500 h-96 rounded" />
              <Skeleton className="bg-gray-500 h-64 rounded" />
            </div>
          </div>
          <div className="md:w-1/3 mt-3">
            <Skeleton className="bg-gray-500 h-64 rounded" />
            <Skeleton className="mt-4 h-10 bg-gray-500 rounded" />
          </div>
        </div>
      </div>
    );
  }
  

