import { useState } from 'react';
import Child from './child';
const parent = () => {
  const [name, setName] = useState('zeng');
  return <Child name={name} changeName={setName}></Child>;
};
export default parent;
