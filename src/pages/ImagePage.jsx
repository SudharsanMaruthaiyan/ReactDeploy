import React from "react";
import Home1 from "../assets/HomepageImg/home1.webp";
import { home1 } from "../assets/Image";
const ImagePage = () => {
  return (
    <div>
      <img
        // src={
        //   "https://ik.imagekit.io/jjyo3gsee/HI-Study/image/Frame%20796.png?updatedAt=1724494882841"
        // }
        src={home1}
        alt="homepage"
      />
    </div>
  );
};

export default ImagePage;
