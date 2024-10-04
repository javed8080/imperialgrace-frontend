import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import "./App.scss";
import Loader from "./components/global/Loader/Loader";
import AdminLayout from "./components/layout/AdminLayout";
import "./custom.scss";
import AboutUs from "./pages/AboutUs";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ContactUs from "./pages/ContactUs";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PricingPage from "./pages/PricingPage";
import ProductPage from "./pages/ProductPage";
import SignUp from "./pages/SignUp";
import { isLoaderAtom, snakeBarAtom } from "./util/RecoilStore";
import CustomSnackBar from "./components/global/snackBar/CustomSnackBar";
function App() {

  const isLoaderState = useRecoilValue(isLoaderAtom);
  const [snackBarState, setSnackBarState] = useRecoilState(snakeBarAtom);

  return (
    <>
      {isLoaderState && <Loader />}
      <div className="App">
        <Router>
          <Routes>
            <Route exact path={``} element={<Home />} />
            <Route exact path={'/login'} element={<Login />} />
            <Route exact path={'/signup'} element={<SignUp />} />
            <Route exact path={'/product-detail'} element={<ProductPage />} />
            <Route exact path={'/contact-us'} element={<ContactUs />} />
            <Route exact path={'/about-us'} element={<AboutUs />} />
            <Route exact path={'/cart-page'} element={<CartPage />} />
            <Route exact path={'/checkout-page'} element={<CheckoutPage />} />
            <Route exact path={'/pricing'} element={<PricingPage />} />
            <Route exact path={`/admin`} element={<AdminLayout />}>

            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </div>

      <CustomSnackBar
        closeSnackPro={() => setSnackBarState({ snackStatus: false })}
        snackInfoPro={snackBarState}
      />
    </>
  );
}

export default App;
