export default function () {
	const route = useRoute();

	let pageType = "page";

	if (route.fullPath.match(/\/(blog|blogue)\/[^?&]{2,}/)) {
		pageType = "blog-post";
	}

	return {
		pageType: pageType,
	};
}
