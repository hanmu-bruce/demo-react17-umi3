import Parent from './parent';
import { createContext, useState } from 'react';
export const ThemeContext = createContext('blue');
const grandParent = () => {
  const [theme, setTheme] = useState('yellow');
  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Parent></Parent>
      </ThemeContext.Provider>
    </>
  );
};

export default grandParent;
