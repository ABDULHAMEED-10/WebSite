/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{css,js,astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',


	],
	theme: {
	  extend: {
		colors: {
		  brand: {
			turquoise: '#06A0A6',
			navy: '#0F0D3E',
			slate: '#2E3C44',
			light: '#E4E4E4',
			coral: '#EF5B6A',
		  },
		},
		fontFamily: {
		  'proxima': ['Proxima Nova', 'sans-serif'],
		  'proxima-bold': ['Proxima Nova Bold', 'sans-serif'],
		},
	  },
	},
	plugins: [

	],
  }