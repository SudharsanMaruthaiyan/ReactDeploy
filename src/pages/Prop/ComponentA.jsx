import React, { useContext, useState } from "react";
import ComponentB from "./ComponentB";
import UserStore from "../../store/UserStore";
import { da } from "zod/v4/locales";

const ComponentA = () => {
  const [name, setName] = useState("Ram");

  const HandleChange = (newData) => {
    setName(newData);
  };

  const userData = useContext(UserStore);

  console.log("userData", userData);

  return (
    <div>
      <div>ComponentA {userData.name}</div>
      <ComponentB name={name} setName={HandleChange} />
    </div>
  );
};

export default ComponentA;
