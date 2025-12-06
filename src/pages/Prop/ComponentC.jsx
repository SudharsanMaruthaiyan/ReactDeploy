import React, { useContext } from "react";
import UserStore from "../../store/UserStore";

const ComponentC = () => {
  const data = useContext(UserStore);
  console.log(data);

  return <div>ComponentC {data.name}</div>;
};

export default ComponentC;
