import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// Diğer konfigürasyon ayarlarını buraya ekleyebilirsiniz
		files: {
		  assets: 'static'
		},
		adapter: adapter({
		  pages: 'build',
		  assets: 'build',
		  fallback: 'index.html', // veya 'index.html' gibi bir değer belirleyebilirsiniz
		  precompress: false,
		  strict: true
		})
	  },
	preprocess: vitePreprocess()
};

export default config;
