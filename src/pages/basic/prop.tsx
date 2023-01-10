export default (props: { name: string; age: number }) => {
  return (
    <>
      <h2>name: {props.name}</h2>
      <h2>age: {props.age}</h2>
    </>
  );
};
