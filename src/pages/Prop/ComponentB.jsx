import React, { useContext } from "react";
import ComponentC from "./ComponentC";
import UserStore from "../../store/UserStore";

const ComponentB = ({ name, setName }) => {
  const data = useContext(UserStore);
  console.log(data);
  return (
    <div>
      <div>ComponentB {data.age}</div>
      <ComponentC name={name} />

      <button onClick={() => setName("Revamp")}>change</button>
    </div>
  );
};

export default ComponentB;
