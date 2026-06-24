// @ts-check

import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["en", {
      path: "es",
      codes: ["es", "es-ES", "es-MX"]
    }],
    defaultLocale: "en"
  },
  vite: {
      plugins: [tailwindcss()],
    },

  integrations: [mdx(), icon()],
});