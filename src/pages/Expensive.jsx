import React, { useMemo, useState } from "react";

const Expensive = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  //   use memo

  const expensiveCalculation = useMemo(() => {
    console.log("Running Calculation");
    let total = 0;
    for (let i = 0; i < 200000; i++) {
      total += count;
    }

    return total;
  }, [count]);

  //   const expensiveCalculation = () => {
  //     console.log("Running Calculation...");
  //     let total = 0;
  //     for (let i = 0; i < 200000; i++) {
  //       total += count;
  //     }

  //     return total;
  //   };

  return (
    <div>
      <h2>UseMemo Mehtod</h2>
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <br /> <br />
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Enter the text..."
          onChange={(e) => setText(e.target.value)}
        />
        <p>Heavy Result : {expensiveCalculation}</p>
      </div>
    </div>
  );
};

export default Expensive;
