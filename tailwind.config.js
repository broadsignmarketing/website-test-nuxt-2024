/** @type {import('tailwindcss').Config} */

export default {
	content: [],
	theme: {
		colors: {
			reflex: "#001464",
			cerulean: "#1056FB",
			scarlet: "#FF3F3F",
			dark: "#263f5d",
			ash: "#505969",
			lightAsh: "#8691A3",
			soft: "#ECECEC",
			ultra: "#E3F7FA",
			light: "#C8F0F5",
			medium: "#9BE0EB",
			campsiteGreen: "#18D7AA",
			zircon: "#F0F4FF",
			red: "#FF0000",
			teal: "#00C8FF",
			pink: "#FF5F5F",
			white: "#FFFFFF",
			black: "#000000",
		},
		screens: {
			sm: "600px",
			md: "900px",
			lg: "1088px",
			xl: "1440px",
		},
		container: {
			center: true,
			padding: {
				DEFAULT: "16px",
				md: "32px",
			},
		},
		extend: {},
	},
	plugins: [],
};
