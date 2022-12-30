import type { NextApiRequest, NextApiResponse } from 'next'
import findSahibindenListingLink from '../../services/GoogleSearchService';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req);
  const { listingNo } = req.query;
  if(!listingNo){
    res.status(400).json({
      message : 'Listing number was wrong.'
    })
    return;
  }
  const link = await findSahibindenListingLink(listingNo as string);
  res.status(200).json({
    link
  });
}