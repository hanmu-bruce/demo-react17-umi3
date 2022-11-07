import { useContext } from 'react';
import { ThemeContext } from './grandParent';
const child = () => {
  const name = useContext(ThemeContext);
  return <h2>child: {name}</h2>;
};

export default child;
