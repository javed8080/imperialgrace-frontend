import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useRecoilState } from "recoil";
import "./App.scss";
import AdminLayout from "./components/layout/AdminLayout";
import "./custom.scss";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import AboutUs from "./pages/AboutUs";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import PricingPage from "./pages/PricingPage";
import ProductPage from "./pages/ProductPage";
import SignUp from "./pages/Signup";
import { isLoaderState, snakeBarState } from "./util/RecoilStore";
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
            <Route exact path={'/signup'} element={<SignUp />} />
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
