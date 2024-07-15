import { defineConfig } from 'astro/config';
import { defaultLang } from './src/i18n/dictionary';
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en", "gl"]
  },
  // TODO: redirect checking current language
  redirects: {
    '/': `/${defaultLang}`
  },
  output: "server",
  adapter: netlify()
});