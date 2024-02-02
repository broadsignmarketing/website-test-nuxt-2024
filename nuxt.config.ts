// https://nuxt.com/docs/api/configuration/nuxt-config
import router from "./router.json";

export default defineNuxtConfig({
	devtools: { enabled: true },

	eslint: {
		exclude: ["**/node_modules/**", "./.nuxt/", "./dist"],
	},

	modules: ["@nuxtjs/i18n", "@nuxt/image", "@pinia/nuxt", "@vueuse/nuxt", "@nuxtjs/tailwindcss", "nuxt-primevue"],

	app: {
		head: {
			charset: "utf-16",
			viewport: "width=device-width, initial-scale=1",
		},
	},

	runtimeConfig: {
		public: {
			WP_URL: process.env.WP_URL,
		},
	},

	css: ["~/assets/css/global.scss"],

	i18n: {
		baseUrl: "https://broadsign.com",
		lazy: true,
		langDir: "i18n",
		defaultLocale: "en",
		compilation: { strictMessage: false },
		customRoutes: "config",
		pages: router,
		locales: [
			{
				code: "en",
				iso: "en-US",
				name: "English",
				file: "en.js",
			},
			{
				code: "fr",
				iso: "fr-CA",
				name: "Français",
				file: "fr.js",
			},
			{
				code: "es",
				iso: "es-ES",
				name: "Español",
				file: "es.js",
			},
			{
				code: "de",
				iso: "de-DE",
				name: "Deutsch",
				file: "de.js",
			},
			{
				code: "jp",
				iso: "ja-JP",
				name: "中文",
				file: "jp.js",
			},
		],
	},

	routeRules: {},

	image: {
		domains: ["netlify.app", "wpengine.com", "broadsignstage.wpengine.com", "broadsign.com", "writers.broadsign.com"],
		format: ["avif", "webp"],
		screens: {
			xs: 320,
			sm: 600,
			md: 900,
			xl: 1400,
		},
		densities: [1, 2],
		quality: 80,
		cloudflare: {
			baseURL: "https://bs-nuxt-2024.pages.dev/",
		},
	},

	primevue: {
		/* Options */
	},
});
