//components/JobAccordion/Loading.tsx
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex flex-1 items-center justify-between py-4 font-medium transition-all mb-5 border-black border-opacity-20 dark:border-white border-b dark:border-opacity-20">
      <Skeleton className="bg-gray-500 h-[50px] w-[50px] rounded" />
      <div className="space-y-1">
        <Skeleton className="bg-gray-500 h-4 w-[90px] rounded sm:w-[300px]" />
      </div>
      <Skeleton className="bg-gray-500 h-12 w-[100px] py-2 px-4 rounded" />
    </div>
  )
}