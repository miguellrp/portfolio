import { defineConfig } from 'astro/config';
import { defaultLang } from './src/i18n/dictionary';

export default defineConfig({
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en", "gl"],
  },
  // TODO: redirect checking current language
  redirects: {
    '/': `/${defaultLang}`
  }
});