import tailwindcss from '@tailwindcss/vite';
// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://simplexpay-landing-page.vercel.app/',
	vite: {
		plugins: [tailwindcss()],
	},
	experimental: {
		svg: true,
	},
});
