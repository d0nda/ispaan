//api/jsearch/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { searchJobs, searchFilters, getJobDetails, getEstimatedSalary } from '../../../lib/jsearch';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const action = searchParams.get('action');

  try {
    switch (action) {
      case 'searchJobs':
        const query = searchParams.get('query');
        const options = JSON.parse(searchParams.get('options') || '{}');
        const jobsResponse = await searchJobs(query as string, options as Record<string, any>);
        return NextResponse.json(jobsResponse);

      case 'searchFilters':
        const filtersQuery = searchParams.get('filtersQuery');
        const filtersOptions = JSON.parse(searchParams.get('filtersOptions') || '{}');
        const filtersResponse = await searchFilters(filtersQuery as string, filtersOptions as Record<string, any>);
        return NextResponse.json(filtersResponse);

      case 'getJobDetails':
        const jobId = searchParams.get('jobId');
        const jobDetailsOptions = JSON.parse(searchParams.get('jobDetailsOptions') || '{}');
        const jobDetailsResponse = await getJobDetails(jobId as string, jobDetailsOptions as Record<string, any>);
        return NextResponse.json(jobDetailsResponse);

      case 'getEstimatedSalary':
        const jobTitle = searchParams.get('jobTitle');
        const location = searchParams.get('location');
        const salaryOptions = JSON.parse(searchParams.get('salaryOptions') || '{}');
        const salaryResponse = await getEstimatedSalary(jobTitle as string, location as string, salaryOptions as Record<string, any>);
        return NextResponse.json(salaryResponse);

      default:
        return NextResponse.json({ error: 'Invalid action parameter' }, { status: 400 });
    }
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
