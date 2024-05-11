import React from 'react';
import FeaturedCard from "@/components/ui/FeaturedCard";
import { Job } from "../../types/job";

interface FeaturedListProps {
    items: Job[];
}

const FeaturedList: React.FC<FeaturedListProps> = ({ items }) => {
    const mappedItems = items.map(job => ({
        id: job.job_id,
        category: '', 
        name: job.job_title,
        company_name: job.employer_name,
        images: [job.employer_logo], 
        link: job.job_apply_link,
    }));

    return (
        <div className="space-y-4">
            <div className="outline-0 focus:ring-2 hover:ring-2 ring-primary transition duration-300 rounded-lg">
                {mappedItems.map((item) => (
                    <div key={item.id} className="featured-card">
                        <FeaturedCard data={item} />
                    </div>
                ))}
            </div>
            <style jsx>{`
                .featured-card {
                    height: 350px;
                }
            `}</style>
        </div>
    );
};

export default FeaturedList;
