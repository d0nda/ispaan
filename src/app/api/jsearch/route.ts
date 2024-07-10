
import { NextApiRequest, NextApiResponse } from 'next';
import { searchJobs, searchFilters, getJobDetails, getEstimatedSalary } from '../../../lib/jsearch';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { action } = req.query;

  try {
    switch (action) {
      case 'searchJobs':
        const { query, options } = req.query;
        const jobsResponse = await searchJobs(query as string, options as Record<string, any>);
        return res.status(200).json(jobsResponse);

      case 'searchFilters':
        const { filtersQuery, filtersOptions } = req.query;
        const filtersResponse = await searchFilters(filtersQuery as string, filtersOptions as Record<string, any>);
        return res.status(200).json(filtersResponse);

      case 'getJobDetails':
        const { jobId, jobDetailsOptions } = req.query;
        const jobDetailsResponse = await getJobDetails(jobId as string, jobDetailsOptions as Record<string, any>);
        return res.status(200).json(jobDetailsResponse);

      case 'getEstimatedSalary':
        const { jobTitle, location, salaryOptions } = req.query;
        const salaryResponse = await getEstimatedSalary(jobTitle as string, location as string, salaryOptions as Record<string, any>);
        return res.status(200).json(salaryResponse);

      default:
        return res.status(400).json({ error: 'Invalid action parameter' });
    }
  } catch (error) {
    console.error('API error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
