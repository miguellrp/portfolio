import { dictionary, defaultLang } from './dictionary.ts';

export function getLangFromURL(url: URL) {
  const [, lang] = url.pathname.split('/');
  return lang as keyof typeof dictionary || defaultLang;
}

export function useTranslations(lang: string) {
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