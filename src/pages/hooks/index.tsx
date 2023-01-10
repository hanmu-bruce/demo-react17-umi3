import { useRef } from 'react';
import useReducerHook from './useReducerHook';
const hooks = () => {
  const { count, dispatch } = useReducerHook();
  console.log(`count: `, count);
  const inputRef = useRef(null);
  const handleInputFocus = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <div>
        <h2>1,useReducer</h2>
        <h2>{count}</h2>
        <button onClick={() => dispatch({ type: 'increment' })}>
          increment
        </button>
        <button onClick={() => dispatch({ type: 'decrement' })}>
          decrement
        </button>

        <h2>2,useRef</h2>
        <input type="text" ref={inputRef} />
        <button onClick={handleInputFocus}>focus input</button>
        <h2>3,useEffect</h2>
      </div>
    </>
  );
};

export default hooks;
