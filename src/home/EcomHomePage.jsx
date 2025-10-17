import React, { useEffect } from "react";
import { usePreLoginHomeStore } from "../store/preLoginHomeStore";
import "./EcomHomePage.css";
function EcomHomePage() {
  const { response, loading, error, homeAds, getPreloginHome } =
    usePreLoginHomeStore();

  useEffect(() => {
    getPreloginHome();
  }, []);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!response || response.length === 0) return <p>No data available</p>;

  return (
    <div className="ads-slider">
      {homeAds.map((item) => (
        <div key={item.id} className="ads-slider__item">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="ads-slider__img"
          />
        </div>
      ))}
    </div>
  );
}

export default EcomHomePage;
