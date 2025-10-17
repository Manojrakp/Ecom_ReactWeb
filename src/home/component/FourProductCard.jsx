import React from "react";
import "./FourProductCard.css";
function FourProductCard({ title = "Deals you might like", products = [] }) {
  const chunkedProducts = [];
  for (let i = 0; i < products.length; i += 4) {
    chunkedProducts.push(products.slice(i, i + 4));
  }

  return (
    <div className="deals-container">
      {/* <h1>{title}</h1> */}

      {chunkedProducts.map((group, index) => (
        <div key={index} className="four-productcard">
          {group.map((product) => (
            <div>
              <img
                src={product.thumbnailUrl}
                alt={product.name}
                className="product-card-image"
              />
              <div className="product-details">
                {/* <p className="offer">{product.offer}% off</p>
                <p className="festival">{product.offersDescription}</p> */}
                <p className="name">{product.name}</p>
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
