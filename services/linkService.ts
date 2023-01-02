import { supabaseClient } from './supabaseClientService';
import { findSListingLinkFromGoogle } from './GoogleSearchService';

const getLinkByListingNo = async (
	listingNo : string
) => {
	return await supabaseClient.from('link').select('*').eq('listingNo', listingNo.toString()).limit(1);
}

const insertLinkToDB = async (
	listingNo : string,
	link : string
) => {
	return await supabaseClient.from('link').insert({ listingNo: listingNo, link: link });
}

const findSListingLink = async (
	listingNo : string
) => {
	return await findSListingLinkFromGoogle(listingNo);
}

export { getLinkByListingNo, insertLinkToDB, findSListingLink }