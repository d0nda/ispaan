import Link from "next/link";

import { Card, CardContent, CardFooter } from "@/components/ui/card";

import { FeaturedJob } from "../../../types/job";

interface FeaturedCard {
    data: FeaturedJob;
}

const FeaturedCard: React.FC<FeaturedCard> = ({ data }) => {
    return (
      <Link href={data.link} target="_blank" className="">
        <Card className="h-full">
          <CardContent className="p-0">
            <div className="relative h-60 w-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="rounded-t-lg"
                src={data.images?.[0]}
                alt="website image"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  borderRadius: "0.5rem 0.5rem 0 0",
                }}
              />
            </div>
          </CardContent>
          <CardFooter className="flex-col items-start">
            <div>
              <p className="font-semibold text-lg">{data.name}</p>
              <p className="text-sm text-primary/80">{data.company_name}</p>
            </div>
          </CardFooter>
        </Card>
      </Link>
    );
};

export default FeaturedCard;