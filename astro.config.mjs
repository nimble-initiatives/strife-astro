// @ts-check
import { defineConfig } from 'astro/config';
import basicSsl from "@vitejs/plugin-basic-ssl";

import strife from '@strifeapp/astro';

import tailwindcss from '@tailwindcss/vite';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  integrations: [strife(), svelte()],
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