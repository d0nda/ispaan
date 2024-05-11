"use client"
import React from 'react';
import { categoryFilter } from '@/constant';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
//import Link from 'next/link';
import { Badge } from "@/components/ui/badge"

export const Filter = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const pathName = usePathname();
    const searchParams = useSearchParams();

    const category = searchParams.get('category');

    const handleTags = (item: string | null) => {
        router.push(`${pathName}?category=${item}`);
    };

    return (
        <div className="mb-5 px-2">
            <Badge className="mr-3 mb-3 p-1 cursor-pointer" onClick={() => router.push('/')}>
                All
            </Badge>
            {categoryFilter && (
                <div>
                    {categoryFilter.map((category) => (
                        <Badge
                            key={category}
                            className={`mr-3 mb-3 p-1 cursor-pointer ${category === category ? 'selected' : ''}`}
                            onClick={() => handleTags(category)}
                        >
                            {category}
                        </Badge>
                    ))}
                </div>
            )}
            <div className="sm:space-y-8">{children}</div>
        </div>
    );
};