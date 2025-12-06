import React, { useContext } from "react";
import Herosection from "../components/Herosection";
import { ProductSection } from "../components/ProductSection";

const Homepage = () => {
  return (
    <div>
      <Herosection />
      <ProductSection />
    </div>
  );
};

export default Homepage;
