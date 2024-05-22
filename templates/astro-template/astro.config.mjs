import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import partytown from '@astrojs/partytown'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		react(),
		partytown(),
		sitemap(),
	],
	output: 'server',
	adapter: vercel(),
})
