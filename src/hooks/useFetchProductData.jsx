import { useEffect, useState } from "react";

const useFetchProductData = () => {
  const [ProductsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProductsData(data.products);
      setIsLoading(false);
    } catch (error) {
      console.log("Internal server error", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { ProductsData, isLoading };
};

export default useFetchProductData;
