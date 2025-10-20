import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import EcomHomePage from "./home/EcomHomePage.jsx";
import ViewProduct from "./products/ViewProduct.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EcomHomePage />} />
        <Route path="/viewproducts" element={<ViewProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
