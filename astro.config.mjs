import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import image from '@astrojs/image';
import tailwind from '@astrojs/tailwind';


// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      langs: ['js', 'html']
    }
  },
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), image(), tailwind()],
  output: 'server',
  adapter: vercel()
});