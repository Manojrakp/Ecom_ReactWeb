import React, { useEffect } from "react";
import "./FourProductCard.css";
import { fetchProductDetails } from "../../api/productDetailsService";
import { useProductDetailsStore } from "../../store/productDetailsStore";
import { useNavigate, useLocation } from "react-router-dom";
function FourProductCard({ title = "Deals you might like", products = [] }) {
  const navigate = useNavigate();
  const {
    loading,
    error,
    productID_Details,
    getProductDetails,
    clearProductDetails,
  } = useProductDetailsStore();

  useEffect(() => {
    console.log("productID_Details----------->", productID_Details);
  }, [productID_Details]);

  const chunkedProducts = [];

  for (let i = 0; i < products.length; i += 4) {
    chunkedProducts.push(products.slice(i, i + 4));
  }

  const handleProductClick = async (product) => {
    clearProductDetails();
    getProductDetails(product.id);

    const data = await getProductDetails(product.id); // wait for API
    if (data) {
      console.log("handleProductClick --->", JSON.stringify(data, null, 2));
      navigate("/viewproducts", { state: { productID_Details: data } });
    }

    // if (!loading && productID_Details) {
    //   console.log(
    //     "handleProductClick --->",
    //     JSON.stringify(productID_Details, null, 2)
    //   );

    //   navigate("/viewproducts", { state: { productID_Details } });
    // }
  };
  return (
    <div className="deals-container">
      {chunkedProducts.map((group, index) => (
        <div key={index} className="four-card">
          {group.map((product) => (
            <div
              className="four-card__Products"
              onClick={() => handleProductClick(product)}
            >
              <img
                src={product.thumbnailUrl}
                alt={product.name}
                className="four-card__image"
              />
              <div className="four-card__details">
                <p className="four-card__offer">{product.offer}% off</p>
                <p className="four-card__festival">
                  {product.offersDescription}
                </p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default FourProductCard;
