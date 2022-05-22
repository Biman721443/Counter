import React, { useState } from "react";

// import { CountColor } from "../CounterColor";
import styles from "./Counter.module.css";

const Counter = ({ item }) => {
  let color = styles.red;
  const [count, setCount] = useState(0);

  const handleIncreament = (value) => {
    setCount(count + value);
  };

  const handleDouble = () => {
    setCount(count * 2);
  };

  if (count % 2 == 0) {
    color = styles.green;
  }
  return (
    <>
      <h1 id={styles.heading}>Counter</h1>
      {/* {count % 2 == 0 ? (color = styles.green) : (color = styles.red)} */}
      <h1 className={color}>{count}</h1>
      <button onClick={() => handleIncreament(-1)}>decrease</button>
      <button onClick={() => handleIncreament(+1)}>increase </button>
     <br></br>
      <button onClick={() => handleDouble()}>Double</button>
    </>
  );
};
export default Counter;