import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle"
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useRecoilState } from "recoil";
import "./App.scss";
// import Loader from "./components/global/loader/Loader";
// import CustomSnackBar from "./components/global/snackBar/CustomSnackBar";
import AdminLayout from "./components/layout/AdminLayout";
import "./custom.scss";
// import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";

import { isLoaderState, snakeBarState } from "./util/RecoilStore";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Signup from "./pages/Signup";
import PricingPage from "./pages/PricingPage"
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";

function App() {

  const [isLoaderInfo, setIsLoaderInfo] = useRecoilState(isLoaderState);
  const [snackBarInfo, setSnackBarInfo] = useRecoilState(snakeBarState);
  return (
    <>
      {/* {isLoaderInfo && <Loader />} */}
      <div className="App">
        <Router>
          <Routes>
            <Route exact path={``} element={<Home />} />
            <Route exact path={'/login'} element={<Login />} />
            <Route exact path={'/signup'} element={<Signup />} />
            <Route exact path={'/product-detail'} element={<ProductPage />} />
            <Route exact path={'/contact-us'} element={<ContactUs />} />
            <Route exact path={'/about-us'} element={<AboutUs />} />
            <Route exact path={'/cart-page'} element={<CartPage />} />
            <Route exact path={'/checkout-page'} element={<CheckoutPage />} />
            <Route exact path={'/pricing'} element={<PricingPage />} />
            <Route exact path={`/admin`} element={<AdminLayout />}>
              {/* <Route exact path="dashboard" element={<Dashboard />} /> */}

            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </div>

      {/* <CustomSnackBar
        closeSnackPro={() => setSnackBarInfo({ snackStatus: false })}
        snackInfoPro={snackBarInfo}
      /> */}
    </>
  );
}

export default App;
