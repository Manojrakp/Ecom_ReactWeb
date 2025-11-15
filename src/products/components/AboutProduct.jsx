import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./AboutProduct.css";
function AboutProduct() {
  const location = useLocation();
  const productID_Details = location.state?.productID_Details;

  const productDtls = productID_Details.ProductDetailsforID[0];
  const ProductTitleDesc = productDtls.productNameDesc || [];
  const description = productDtls.description || [];
  return (
    <div className="about-product__wrapper">
      <h3>{ProductTitleDesc}</h3>
      <ul>
        <h4>About this item </h4>
        {description.split("\n").map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>{" "}
    </div>
  );
}

export default AboutProduct;
