/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: 'rgb(var(--primary))',
				'primary-light': 'rgb(var(--primary-light))',
				'primary-dark': 'rgb(var(--primary-dark))',
				accent: 'rgb(var(--accent))',
			},
		},
	},
	plugins: [],
}