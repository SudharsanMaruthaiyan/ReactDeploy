import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UserStore from "../store/UserStore";
import { CartStore } from "../store/CartStore";

const AppLayout = () => {
  return (
    <UserStore.Provider value={{ name: "Revamp B - 22", age: "30" }}>
      <CartStore>
        <Navbar />
        <Outlet />
        <Footer />
      </CartStore>
    </UserStore.Provider>
  );
};

export default AppLayout;
