import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IncrementAction, DecrementAction } from "../../redux/action/action";

const Home = () => {
  let counterState = useSelector((state) => state);
  let dispatch = useDispatch();
  function plusCounter() {
    dispatch(IncrementAction(1));
  }
  function minusCounter() {
    dispatch(DecrementAction(1));
  }
  return (
    <div className="container">
      <h1>Counter Application</h1>
      <h2>{counterState.changeTheNumber.state}</h2>
      <button onClick={plusCounter}>Plus</button>
      <button onClick={minusCounter}>Minus</button>
      <style jsx="true" global="true">{`
        .container {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        button {
          margin: 0.5rem;
        }
      `}</style>
    </div>
  );
};

export default Home;
