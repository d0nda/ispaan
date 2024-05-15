// components/Category/Loading.tsx
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex items-center px-2">
        <Skeleton className="h-6 w-[90px] rounded-full border text-xs font-semibold transition-colors" />
    </div>
  )
}
