export default function (slug: string, lang: string = "en") {
	const { locale } = useI18n();
	console.log(locale.value);
	if (slug) {
		// Most languages will have a URL start with /:lang/blog ; a few exceptions only
		const exceptions: I18nObject = { fr: "/fr/blogue" };
		const pathPrefix: string = lang === "en" ? "/blog" : exceptions[lang as keyof I18nObject] ? exceptions[lang] : `/${lang}/blog`;
		return `${pathPrefix}/${slug}`;
	} else {
		console.warn("Invalid post slug :", slug);
		return "";
	}
}
