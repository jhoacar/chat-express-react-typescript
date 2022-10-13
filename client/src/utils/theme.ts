export function getTheme() {
  return localStorage.getItem('theme');
}

export function setTheme(theme: string) {
  localStorage.setItem('theme', theme);
}

export function removeTheme() {
  localStorage.removeItem('theme');
}
