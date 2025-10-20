import React, { useEffect } from "react";
import { usePreLoginHomeStore } from "../store/preLoginHomeStore";
import "./EcomHomePage.css";
import AdsSlider from "./component/AdsSlider";
import FourProductCard from "./component/FourProductCard";
function EcomHomePage() {
  const { response, loading, error, homeAds, products, getPreloginHome } =
    usePreLoginHomeStore();

  useEffect(() => {
    getPreloginHome();
  }, [getPreloginHome]);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!response || response.length === 0) return <p>No data available</p>;

  return (
    <div className="home-container">
      <AdsSlider homeAds={homeAds} />
      <FourProductCard products={products} />
    </div>
  );
}

export default EcomHomePage;
