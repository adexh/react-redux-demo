import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./action";

function FunctionBased() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <center>
      <h1>{count}</h1>
      <button style={{ marginRight: "10px" }} onClick={handleIncrement}>
        increment
      </button>
      <button onClick={handleDecrement}>decrement</button>
    </center>
  );
}

export default FunctionBased;
