import type { Dictionary } from './dictionary.ts';
import { defaultLang } from './dictionary.ts';

export function getLangFromURL(url: URL) {
  let [, lang] = url.pathname.split('/');
  if (lang !== 'es' && lang !== 'gl' && lang !== 'en') {
    lang = defaultLang;
  }

  return lang;
}

export function getTranslations(lang: string, dictionary: Dictionary) {
  return function translate(key: keyof typeof dictionary[typeof lang]) {
    return dictionary[lang][key] || dictionary[defaultLang][key];
  }
}

export function getPagePath(lang: string, section: string) {
  const normalizedSectionPath = section.toLocaleLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, "");
  let pagePath = `/${lang}/${normalizedSectionPath}`;

  if (normalizedSectionPath === 'inicio' || normalizedSectionPath === 'home') {
    pagePath = `/${lang}`;
  }
  
  return pagePath;
}