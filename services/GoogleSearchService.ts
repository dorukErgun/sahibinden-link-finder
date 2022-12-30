const findSahibindenListingLink = async (
	listingNo : string
) => {
	const result = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_API_KEY}&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&q=${listingNo}&start=0&gl=tr`);
	const json = await result.json();
	return json.items[0].link;
}

export default findSahibindenListingLink;