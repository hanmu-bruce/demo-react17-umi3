import { useReducer } from 'react';

const useReducerHook = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
        break;
      case 'decrement':
        return { count: state.count - 1 };
        break;
    }
  };
  const [{ count }, dispatch] = useReducer(reducer, { count: 1 });
  return {
    count,
    dispatch,
  };
};

export default useReducerHook;
