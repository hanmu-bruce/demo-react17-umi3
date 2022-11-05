import TodoList from './todo';

export default () => {
  return (
    <h2>
      <TodoList data={['banana', 'waterlon']}></TodoList>
    </h2>
  );
};
