import { createContext } from 'react';
import { getTheme } from 'utils/theme';

export default createContext({
  darkMode: getTheme() === 'dark',
  setDarkMode: null,
});
