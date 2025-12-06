import React, { createContext } from "react";

const UserStore = createContext({
  name: "Sam",
  age: 22,
});

export default UserStore;
