import { NextApiRequest, NextApiResponse } from 'next';
import { getJobDetails } from '@/app/api/jsearch/route';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const jobId = req.query.jobId as string; // Type assertion to treat jobId as string

  try {
    const jobDetails = await getJobDetails(jobId);
    res.status(200).json(jobDetails);
  } catch (error) {
    console.error('Error fetching job details:', error);
    res.status(500).json({ error: 'Failed to fetch job details' });
  }
}
