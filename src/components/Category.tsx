import React from 'react'
import useSWR from 'swr';
import Link from 'next/link';
import { Badge } from "@/components/ui/badge"


const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Category() {
    const { data: jobCategories, error } = useSWR('/api/categories', fetcher);

    //if (error) return <div className="text-center">An error occurred.</div>;
    //if (!jobCategories) return <div className="text-center">Loading Categories....</div>;

    return (
        <div className="mb-5 px-2">
            {jobCategories && (
                <div>
                    {jobCategories.map((categoryObject: { category: string }) => (
                        <Link href={`/jobs?category=${encodeURIComponent(categoryObject.category)}`} key={categoryObject.category}>
                            <Badge className="mr-3 mb-3 p-1 cursor-pointer">{categoryObject.category}</Badge>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}