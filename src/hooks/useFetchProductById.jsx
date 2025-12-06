import React, { useEffect, useState } from "react";

const useFetchProductById = (productData) => {
  const [ProductDetailsData, setProductDetailsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProductDetails = async () => {
    try {
      setIsLoading(true);
      const product_res = await fetch(
        `https://dummyjson.com/products/${productData.product_id}`
      );

      const product_data = await product_res.json();

      setProductDetailsData(product_data);
      setIsLoading(false);
    } catch (error) {
      console.log("Internal server error", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, [productData]);

  console.log("Product Details Data", ProductDetailsData);

  return { ProductDetailsData, isLoading };
};

export default useFetchProductById;
