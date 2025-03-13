// @ts-check
import { defineConfig } from 'astro/config';
import basicSsl from "@vitejs/plugin-basic-ssl";

import strife from '@strifeapp/astro';

import tailwindcss from '@tailwindcss/vite';

import svelte from '@astrojs/svelte';

const { PROD } = import.meta.env;

import Home from './src/collections/Home';
// https://astro.build/config
export default defineConfig({
  integrations: [strife({ collections: [Home] }), svelte()],
  server: {
    port: 4322,
  },
  vite: {
    plugins: [tailwindcss(), basicSsl()],
    server: {
      https: true,
    },
    ssr: {
      noExternal: ["@strifeapp/strife"],
    },
  },

});