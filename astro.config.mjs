// @ts-check
import { defineConfig } from 'astro/config';

import strife from '@strifeapp/astro';

import tailwindcss from '@tailwindcss/vite';

import svelte from '@astrojs/svelte';

import Home from './src/collections/Home';
// https://astro.build/config
export default defineConfig({
  integrations: [strife({ collections: [Home] }), svelte()],
  server: {
    port: 4322,
  },
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: ["@strifeapp/strife"],
    },
  },

});