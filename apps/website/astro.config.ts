import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
	output: 'hybrid',
	adapter: cloudflare(),
	vite: {
		css: {
			transformer: 'lightningcss',
			lightningcss: {
				drafts: {
					customMedia: true,
				},
			},
		},
		build: {
			minify: false,
			cssMinify: false,
		},
	},
});
