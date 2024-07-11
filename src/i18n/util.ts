import type { Dictionary } from './dictionary.ts';
import { defaultLang, globalDictionary } from './dictionary.ts';

export function getLangFromURL(url: URL, dictionary = globalDictionary) {
  const [, lang] = url.pathname.split('/');
  return lang as keyof typeof dictionary || defaultLang;
}

export function getTranslations(lang: string, dictionary: Dictionary) {
  return function translate(key: keyof typeof dictionary[typeof defaultLang]) {
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