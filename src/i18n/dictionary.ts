import Util from '../utils/Util';

// Dictionary interface
export type Dictionary = {
  [lang: string]: {
    [key: string]: string;
  };
};

export const languages = {
  es: 'español',
  gl: 'galego',
  en: 'english'
}

export const defaultLang = 'es';

export const globalDictionary = {
  es: {
    // HEAD
    'head.description': 'Portfolio de Miguel Romero (programador web)',
    'head.title': 'Miguel Romero | Portfolio',

    // NAVBAR
    'navbar.home': 'Inicio',
    'navbar.education': 'Formación',
    'navbar.projects': 'Proyectos',
    'navbar.contact': 'Contacto',

    // HOME
    'navbar.404': '404',
    'home.title': 'Hola, soy Miguel Romero',
    'home.aboutMe': 'Soy un programador web aficionado a buscar armonías de colores, los <div> bien centrados, los píxeles (cuanto más grandes mejor) y las consultas con JOINS facilitos',
    'home.portraitAltA': 'Parte A de mi retrato en la que se ve mi rostro dibujado en estilo \'cartoon\' dentro de un círculo delimitado con un borde grueso de color violeta con un fondo sólido de un color más rosáceo',
    'home.portraitAltB': 'Parte B de mi retrato en la que se ve mi rostro real dentro de un círculo delimitado con un borde grueso de color violeta y varias líneas serpenteantes de este mismo color que rodean mi rostro junto con un fondo sólido de un color más rosáceo',

    // PERSONAL PROJECTS
    'projects.title': 'Mis proyectos',

    // EDUCATION
    'education.title': 'Mi formación',

    // CONTACT
    'contact.title': 'Contacto',

    // FOOTER
    'footer.credits': 'Hecho con 🩷 por ',

  },
  gl: {
    // HEAD
    'head.description': 'Portfolio de Miguel Romero (programador web)',

    // NAVBAR
    'navbar.home': 'Inicio',
    'navbar.education': 'Formación',
    'navbar.projects': 'Proxectos',
    'navbar.contact': 'Contacto',
    
    // HOME
    'home.title': 'Ola, son Miguel Romero',
    'home.aboutMe': 'Son un programador web afeccionado a buscar armonías de cores, os <div> ben centrados, os píxeles (canto máis grandes mellor) e as consultas con JOINS sinxeliños',
    'home.portraitAltA': 'Parte A do meu retrato onde vése a miña faciana debuxada en estilo \'cartoon\' dentro dun círculo delimitado cun borde groso de cor violeta e cun fondo sólido dunha cor máis rosácea',
    'home.portraitAltB': 'Parte B do meu retrato onde vése a miña faciana real dentro dun círculo delimitado cun borde groso de cor violeta e varias liñas serpenteantes desta mesma cor que rodean a miña faciana xunto cun fondo sólido dunha cor máis rosácea',

    // PERSONAL PROJECTS
    'projects.title': 'Os meus proxectos',

    // EDUCATION
    'education.title': 'A miña formación',

    // FOOTER
    'footer.credits': 'Feito con 🩷 por ',

  },
  en: {
    // HEAD
    'head.description': 'Miguel Romero\'s Portfolio (web developer)',

    // NAVBAR
    'navbar.home': 'Home',
    'navbar.education': 'Education',
    'navbar.projects': 'Projects',
    'navbar.contact': 'Contact',

    // HOME
    'home.title': 'Hi, I\'m Miguel Romero',
    'home.aboutMe': 'I\'m a web developer fond of looking for color harmonies, well centered <div>, pixels (the bigger the better) and easy JOINS queries',
    'home.portraitAltA': 'Part A of my portrait showing my face drawn in cartoon style inside a circle delimited by a thick violet border with a solid background of a more pinkish color',
    'home.portraitAltB': 'Part B of my portrait showing my actual face within a circle delimited with a thick violet border and several meandering lines of the same color surrounding my face along with a solid background of a more pinkish color',

    // PERSONAL PROJECTS
    'projects.title': 'My projects',

    // EDUCATION
    'education.title': 'Education',

    // CONTACT
    'contact.title': 'Contact',

    // FOOTER
    'footer.credits': 'Made with 🩷 by ',
  }
}

export const altTextsSkillIcons = {
  es: {
    'html5': 'Logo de HTML5',
    'css3': 'Logo de CSS3',
    'js': 'Logo de JavaScript',
    'java': 'Logo de Java',
    'php': 'Logo de PHP',
    'mysql': 'Logo de MySQL',
    'postgresql': 'Logo de PostgreSQL',
    'git': 'Logo de Git',
    'flutter': 'Logo de Flutter',
    'dart': 'Logo de Dart',
    'react': 'Logo de React',
    'astro': 'Logo de Astro'
  },
  gl: {},
  en: {
    'html5': 'HTML5 logo',
    'css3': 'CSS3 logo',
    'js': 'JavaScript logo',
    'java': 'Java logo',
    'php': 'PHP logo',
    'mysql': 'MySQL logo',
    'postgresql': 'PostgreSQL logo',
    'git': 'Git logo',
    'flutter': 'Flutter logo',
    'dart': 'Dart logo',
    'react': 'React logo',
    'astro': 'Astro logo'
  }
}

export const pageNotFoundContent = {
  es: {
    'title': 'Ups...',
    'subtitle': 'Parece que esa página a la que intentabas acceder no existe',
    'back-home-text': 'Volver a INICIO',
  },
  gl: {
    'subtitle': 'Parece que esa páxina á que intentabas acceder non existe',
  },
  en: {
    'title': 'Oops...',
    'subtitle': 'It seems that the page you were trying to access does not exist',
    'back-home-text': 'Return to HOME',
  }
}