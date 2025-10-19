import React from "react";
import "./FourProductCard.css";
function FourProductCard({ title = "Deals you might like", products = [] }) {
  const chunkedProducts = [];
  for (let i = 0; i < products.length; i += 4) {
    chunkedProducts.push(products.slice(i, i + 4));
  }

  const handleProductClick = (product) => {
    console.log("handleProductClick-->", JSON.stringify(product));
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
                {/* <p className="name">{product.name}</p> */}
              </div>
            </div>
          ))}
        </div>
      ))}

      {/* <a href="#" className="see-all">
        See all deals
      </a> */}
    </div>
  );
}

export default FourProductCard;
