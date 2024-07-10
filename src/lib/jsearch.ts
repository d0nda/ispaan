import axios, { AxiosResponse } from 'axios';
import {
  SearchJobsResponse,
  SearchFiltersResponse,
  JobDetailsResponse,
  JobDetails,
  EstimatedSalaryResponse,
} from '../../types/job';

const rapidApiHost = 'jsearch.p.rapidapi.com';
const rapidApiKey = process.env.NEXT_PUBLIC_RAPID_API_KEY;

const api = axios.create({
  headers: {
    'x-rapidapi-host': rapidApiHost,
    'x-rapidapi-key': rapidApiKey
  }
});

export const searchJobs = async (query: string, options: Record<string, any> = {}): Promise<SearchJobsResponse> => {
  try {
    const response: AxiosResponse<SearchJobsResponse> = await api.get('https://jsearch.p.rapidapi.com/search', {
      params: {
        query,
        ...options
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw error;
  }
};

export const searchFilters = async (query: string, options: Record<string, any> = {}): Promise<SearchFiltersResponse> => {
  try {
    const response: AxiosResponse<SearchFiltersResponse> = await api.get('https://jsearch.p.rapidapi.com/search-filters', {
      params: {
        query,
        date_posted: 'all',
        ...options
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching search filters:', error);
    throw error;
  }
};

export const getJobDetails = async (jobId: string, options: Record<string, any> = {}): Promise<JobDetailsResponse> => {
  try {
    const response: AxiosResponse<JobDetailsResponse> = await api.get('https://jsearch.p.rapidapi.com/job-details', {
      params: {
        job_id: jobId,
        //extended_publisher_details: 'false',
        ...options
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching job details:', error);
    throw error;
  }
};

export const getEstimatedSalary = async (jobTitle: string, location: string, options: Record<string, any> = {}): Promise<EstimatedSalaryResponse> => {
  try {
    const response: AxiosResponse<EstimatedSalaryResponse> = await api.get('https://jsearch.p.rapidapi.com/estimated-salary', {
      params: {
        job_title: jobTitle,
        location,
        ...options
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching estimated salary:', error);
    throw error;
  }
};
