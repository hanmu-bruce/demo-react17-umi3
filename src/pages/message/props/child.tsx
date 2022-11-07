const child = (props) => {
  const changeName = () => {
    props.changeName('ZENG');
  };
  return <h2 onClick={changeName}>child: {props.name}</h2>;
};
export default child;
