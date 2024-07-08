//app/api/jobs/[jobId]/route.ts
import { NextResponse } from "next/server";
import { getJobDetails } from '@/app/api/jsearch/route';

export async function GET(
  request: Request,
  { params }: { params: { jobId: string } }
): Promise<NextResponse> {
  try {
    const { jobId } = params;
    const decodedJobId = decodeURIComponent(jobId); // Decode the job ID
    console.log(`Fetching details for job ID: ${decodedJobId}`); // Debugging statement
    const data = await getJobDetails(decodedJobId);
    console.log(`Job details fetched:`, data); // Debugging statement
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching job details:", error);
    return NextResponse.json({ error: "Failed to fetch job details" }, { status: 500 });
  }
}
