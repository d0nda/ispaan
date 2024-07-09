// app/api/jsearch/route.ts
import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';
import {
  SearchJobsResponse,
  SearchFiltersResponse,
  JobDetailsResponse,
  EstimatedSalaryResponse,
} from '../../../../types/job';

const rapidApiHost = 'jsearch.p.rapidapi.com';
const rapidApiKey = process.env.NEXT_PUBLIC_RAPID_API_KEY;

const api = axios.create({
  headers: {
    'x-rapidapi-host': rapidApiHost,
    'x-rapidapi-key': rapidApiKey
  }
});

export const searchJobs = async (query: string, options: Record<string, any> = {}): Promise<SearchJobsResponse> => {
  const response = await api.get('https://jsearch.p.rapidapi.com/search', {
    params: { query, ...options }
  });
  return response.data;
};

export const searchFilters = async (query: string, options: Record<string, any> = {}): Promise<SearchFiltersResponse> => {
  const response = await api.get('https://jsearch.p.rapidapi.com/search-filters', {
    params: { query, date_posted: 'all', ...options }
  });
  return response.data;
};

export const getJobDetails = async (jobId: string, options: Record<string, any> = {}): Promise<JobDetailsResponse> => {
  const response = await api.get('https://jsearch.p.rapidapi.com/job-details', {
    params: { job_id: jobId, ...options }
  });
  return response.data;
};

export const getEstimatedSalary = async (jobTitle: string, location: string, options: Record<string, any> = {}): Promise<EstimatedSalaryResponse> => {
  const response = await api.get('https://jsearch.p.rapidapi.com/estimated-salary', {
    params: { job_title: jobTitle, location, ...options }
  });
  return response.data;
};

// Type guard to check if error is an instance of Error
function isError(obj: unknown): obj is Error {
  return obj instanceof Error;
}

export async function POST(request: Request) {
  try {
    const { type, query, jobId, jobTitle, location, options } = await request.json();

    let result;
    switch (type) {
      case 'searchJobs':
        result = await searchJobs(query, options);
        break;
      case 'searchFilters':
        result = await searchFilters(query, options);
        break;
      case 'getJobDetails':
        result = await getJobDetails(jobId, options);
        break;
      case 'getEstimatedSalary':
        result = await getEstimatedSalary(jobTitle, location, options);
        break;
      default:
        return new Response(JSON.stringify({ error: 'Invalid type' }), { status: 400 });
    }

    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    if (isError(error)) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    } else {
      return new Response(JSON.stringify({ error: 'Unknown error occurred' }), { status: 500 });
    }
  }
}