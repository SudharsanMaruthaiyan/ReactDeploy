import React, { useState } from "react";

const Counter = () => {
  //   var val = 5; // default variable

  var [val, setVal] = useState(5); // local state variable

  var [name, setName] = useState("Raj");

  var [valid, setValid] = useState(false);

  return (
    <div>
      {/* Number  */}
      <div className=" flex flex-col gap-1 p-5">
        <h1>Counter</h1>
        <div className=" flex flex-col gap-1">
          <h1>{val}</h1>

          <div className=" flex gap-1">
            <button
              className=" py-2 px-6 rounded-lg bg-red-600 text-white"
              onClick={() => {
                setVal(val - 1);
              }}
            >
              -
            </button>
            <button
              className=" py-2 px-6 rounded-lg bg-green-600 text-white"
              onClick={() => {
                //   val = val + 1;
                setVal(val + 1); // re-render
                console.log("val:", val);
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <hr />

      {/* String  */}
      <div className=" flex flex-col gap-1 p-5">
        <h1>String</h1>
        <div className=" flex flex-col gap-1">
          <h1>{name}</h1>

          <div className=" flex gap-1">
            <button
              className=" py-2 px-6 rounded-lg bg-green-600 text-white"
              onClick={() => {
                setName("Ram");
              }}
            >
              Change
            </button>
          </div>
        </div>
      </div>

      <hr />

      {/* Boolean  */}
      <div className=" flex flex-col gap-1 p-5">
        <h1>Boolean</h1>
        <div className=" flex flex-col gap-1">
          <h1>{valid ? "True 💚" : "False ❤️"}</h1>

          <div className=" flex gap-1">
            <button
              className={`py-2 px-6 rounded-lg  text-white ${
                valid ? "bg-green-600" : "bg-red-600"
              }`}
              onClick={() => setValid(!valid)}
            >
              Toggle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
