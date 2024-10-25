/** @type {import('tailwindcss').Config} */

export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				schibsted: ['Schibsted Grotesk', 'sans-serif'],
			},
			colors: {
				'primary-blue': '#071D55',
				'primary-lemon': '#CDE53D',
				'secondary-blue': '#3556AB',
			},
		},
	},
	plugins: [],
	important: true,
}
