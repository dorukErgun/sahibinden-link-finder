const findSListingLinkFromGoogle = async (
	listingNo : string
) => {
	const result = await fetch(`https://www.googleapis.com/customsearch/v1
		?key=${process.env.NEXT_PUBLIC_API_KEY}
		&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}
		&q=${listingNo}
		&start=0
		&gl=tr
		&num=1
		&hl=tr
	`);
	const jsonRes = await result.json();
	if(!jsonRes){
		return undefined;
	}
	return jsonRes.items[0].link;
}

export { findSListingLinkFromGoogle }