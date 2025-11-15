import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./ViewProduct.css";
import AboutProduct from "./components/AboutProduct";

function ViewProduct() {
  const location = useLocation();
  const productID_Details = location.state?.productID_Details;

  const productDtls = productID_Details.ProductDetailsforID[0];
  const imageGalleryUrls = productDtls.imageGalleryUrls || [];
  const [selectedImage, setSelectedImage] = useState(imageGalleryUrls[0]);

  if (!productID_Details || !productID_Details.ProductDetailsforID?.length) {
    return <h2> No product details available </h2>;
  }

  return (
    <div className="view-product">
      <div className="view-product__img-pre-view-div">
        {imageGalleryUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Product ${index}`}
            className="view-product__image"
            onClick={() => setSelectedImage(url)}
            onMouseEnter={() => setSelectedImage(url)}
          />
        ))}
      </div>
      <div className="view-product__prime-img-div">
        <img
          src={selectedImage}
          alt="Selected Product"
          className="view-product__prime-img"
        />
      </div>
      <AboutProduct productID_Details={productID_Details} />
    </div>
  );
}

export default ViewProduct;
