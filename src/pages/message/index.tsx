import PropsMessage from './props/parent';
import ContextMessage from './context/parent';
const message = () => {
  return (
    <>
      <h2>1,props</h2>
      <PropsMessage></PropsMessage>
      <h2>2,context</h2>
      <ContextMessage></ContextMessage>
      <h2>1,props</h2>
      <PropsMessage></PropsMessage>
    </>
  );
};
export default message;
