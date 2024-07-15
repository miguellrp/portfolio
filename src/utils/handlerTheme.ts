export function handleTheme() {
  let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme')
  }
  
  if (theme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
  
  window.localStorage.setItem('theme', theme);
}

export function handleToggleClick() {
  const rootHTMLTag = document.documentElement;
  const newTheme = (rootHTMLTag.getAttribute('data-theme') == 'light') ? 'dark' : 'light';
  
  rootHTMLTag.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  setVisibilityIcons();
}

export function setVisibilityIcons () {
  const rootHTMLTag = document.documentElement;
  const sunIcon = document.querySelector('.sun') as HTMLElement;
  const moonIcon = document.querySelector('.moon') as HTMLElement;
  
  if (rootHTMLTag.getAttribute('data-theme') === 'dark') {
    sunIcon.style.display = 'flex';
    moonIcon.style.display = 'none';
  } else {
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'flex';
  }
}