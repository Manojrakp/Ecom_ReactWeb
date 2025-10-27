import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import EcomHomePage from "./home/EcomHomePage.jsx";
import ViewProduct from "./products/ViewProduct.jsx";
import LoginPage from "./login/loginPage.jsx";
import ProtectedRoute from "./componet/ProtectedRoute.jsx";
import PublicOnlyRoute from "./componet/PublicOnlyRoute.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PublicOnlyRoute />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<EcomHomePage />} />
          <Route path="/viewproducts" element={<ViewProduct />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
