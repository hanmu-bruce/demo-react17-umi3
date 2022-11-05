export default ({ data }) => {
  return (
    <ul>
      {data.map((item) => {
        return <li key={item}>{item}</li>;
      })}
    </ul>
  );
};
