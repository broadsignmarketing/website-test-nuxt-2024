// https://nuxt.com/docs/api/configuration/nuxt-config
import router from "./router.json";

export default defineNuxtConfig({
	devtools: { enabled: true },

	eslint: {
		exclude: ["**/node_modules/**", "./.nuxt/", "./dist"],
	},

	modules: ["@nuxtjs/i18n", "@nuxt/image", "@pinia/nuxt", "@vueuse/nuxt", "@nuxtjs/tailwindcss"],

	app: {
		head: {
			charset: "utf-16",
			viewport: "width=device-width, initial-scale=1",
		},
	},

	css: ["~/assets/css/global.scss"],

	i18n: {
		/* lazy: true,
		langDir: "i18n", */
		defaultLocale: "en",
		compilation: { strictMessage: false },
		pages: router,
		locales: [
			{
				code: "en",
				name: "English",
				// file: "en.js",
			},
			{
				code: "fr",
				name: "Français",
				// file: "fr.js",
			},
			{
				code: "es",
				name: "Español",
				// file: "es.js",
			},
			{
				code: "de",
				name: "Deutsch",
				// file: "de.js",
			},
			{
				code: "jp",
				name: "中文",
				// file: "ja.js",
			},
		],
	},

	image: {
		domains: ["netlify.app"],
		format: ["avif", "webp"],
		screens: {
			xs: 320,
			sm: 600,
			md: 900,
			xl: 1400,
		},
		quality: 80,
	},
});
