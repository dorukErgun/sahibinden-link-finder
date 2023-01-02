import type { NextApiRequest, NextApiResponse } from 'next'
import { getLinkByListingNo, findSListingLink, insertLinkToDB } from '../../services/linkService';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader('Access-Control-Allow-Headers', "*");

  const { listingNo } = req.query;
  if(!listingNo){
    return res.status(400).json({
      message : 'Listing number is missing.'
    })
  }

  const { data, error } = await getLinkByListingNo(listingNo as string);
  console.log(error);
  if(error){
    return res.status(500).json({
      message : "Internal server error."
    });
  }

  if(data?.length === 0){
    const foundLink = await findSListingLink(listingNo as string);
    if(!foundLink){
      return res.status(402).json({
        message : "Could not find the link for given listing link."
      });
    }
    const { error } = await insertLinkToDB(listingNo as string, foundLink);
    if(error){
      return res.status(500).json({
        message : "Internal server error, could not put the data into the db."
      });
    }
    return res.status(200).json({
      link : foundLink
    });
  }

  return res.status(200).json({
    link : data[0].link
  })
}
