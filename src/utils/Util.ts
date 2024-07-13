import { getTranslations } from '../i18n/util.ts';
import { altTextsSkillIcons } from '../i18n/dictionary.ts';

/* Util class to use different utilities as static methods on it */
export default class Util {
  private static getSkillIconPath(fileName: string) {
    return `/images/languages-pixel-logos/${fileName}`;
  }

  public static getSkillsIcons(lang: string) {
    const altTexts = getTranslations(lang, altTextsSkillIcons);

    return [
      {
        'name': 'HTML',
        'filepath': Util.getSkillIconPath('html5.png'),
        'alt': altTexts('html5')
      },
      {
        'name': 'CSS',
        'filepath': Util.getSkillIconPath('css3.png'),
        'alt': altTexts('css3')
      },
      {
        'name': 'JavaScript',
        'filepath': Util.getSkillIconPath('js.png'),
        'alt': altTexts('js')
      },
      {
        'name': 'Java',
        'filepath': Util.getSkillIconPath('java.png'),
        'alt': altTexts('java')
      },
      {
        'name': 'PHP',
        'filepath': Util.getSkillIconPath('php.png'),
        'alt': altTexts('php')
      },
      {
        'name': 'MySQL',
        'filepath': Util.getSkillIconPath('mysql.png'),
        'alt': altTexts('mysql')
      },
      {
        'name': 'PostgreSQL',
        'filepath': Util.getSkillIconPath('postgresql.png'),
        'alt': altTexts('postgresql')
      },
      {
        'name': 'Git',
        'filepath': Util.getSkillIconPath('git.png'),
        'alt': altTexts('git')
      },
      {
        'name': 'Flutter',
        'filepath': Util.getSkillIconPath('flutter.png'),
        'alt': altTexts('flutter')
      },
      {
        'name': 'Dart',
        'filepath': Util.getSkillIconPath('dart.png'),
        'alt': altTexts('dart')
      },
      {
        'name': 'React',
        'filepath': Util.getSkillIconPath('react.png'),
        'alt': altTexts('react')
      },
      {
        'name': 'Astro',
        'filepath': Util.getSkillIconPath('astro.png'),
        'alt': altTexts('astro')
      },
    ];
  }

  public static getStickerPathFrom(stickerName: string, stickerSide: string) {
    return `/images/projects-previews/stickers/${stickerName}-${stickerSide}.svg`;
  }
}