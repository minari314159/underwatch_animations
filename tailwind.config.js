/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				zentry: ["zentry", "sans-serif"],
				general: ["general", "sans-serif"],
				"circular-web": ["circular-web", "sans-serif"],
				"robert-medium": ["robert-medium", "sans-serif"],
				"robert-regular": ["robert-regular", "sans-serif"],
			},
			colors: {
				primary: "#9aa9c9", //light aqua
				secondary: "#05d9e8", //aqua
				tertiary: "#005678", //slate blue
				neon: "#d9682b", //neon salmon pink
				dark: "#01012b", //dark blue
				violet: {
					300: "#5724FF",
				},
				yellow: {
					100: "#8E983A",
					300: "#EDFF66",
				},
			},
		},
	},
	plugins: [],
};
