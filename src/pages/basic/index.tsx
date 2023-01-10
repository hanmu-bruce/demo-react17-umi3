import PropTSX from './prop';
export default () => {
  const stu = { name: 'zeng', age: '18' };
  return (
    <>
      <PropTSX {...stu} />
    </>
  );
};
