// @ts-check
import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],

  vite: {
    plugins: [tailwindcss()]
  },

  site: 'https://h2o-orchestra.github.io',
  base: '',
  image: {
    domains: ["images.ctfassets.net"],
    remotePatterns: [
      { protocol: "https", hostname: "images.ctfassets.net" },
      { protocol: "http", hostname: "images.ctfassets.net" },
    ],
  },
});