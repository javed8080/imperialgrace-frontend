import React, { useState } from "react";
import { Button, Form, Container, Image } from 'react-bootstrap';
import { apiPostWithoutAuth } from "../util/ApiRequest";
import { ENDPOINTS } from "../util/EndPoint";
import { isLoaderState, snakeBarState } from "../util/RecoilStore";
import { useRecoilState } from "recoil";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import AppHeader from "../components/navbar/AppHeader";
import Footer from "../components/footer/Footer";
import LoginImage from "../assets/images/bg-logon.png";
import { Link } from "react-router-dom";
import '../scss/Login.scss'

const Login = () => {

  const [isLoaderInfo, setIsLoaderInfo] = useRecoilState(isLoaderState);
  const [snackBarInfo, setSnackBarInfo] = useRecoilState(snakeBarState);

  const [passwordVisible, setPasswordVisible] = useState(false);

  const emailEl = React.useRef(null);
  const passwordEl = React.useRef(null);
  
  const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (event) => {
    setIsLoaderInfo(true);

    event.preventDefault();
    const body = {
      email: emailEl.current.value,
      password: passwordEl.current.value,
      device_token: "testing",
    };
    apiPostWithoutAuth(
      ENDPOINTS.UserLogin,
      body,
      (res) => {
        const Roles = res.data?.user_details?.role;
        localStorage.setItem("accessToken", res?.data?.token);
        localStorage.setItem("user", JSON.stringify(res?.data?.user_details));
        console.log(res);

        if (Roles === "admin") {
          setSnackBarInfo({
            snackStatus: true,
            snackColor: "bg-success",
            snackMsg: "Successful",
          });
          window.location.href = `/admin/dashboard`;
        }
        if (Roles !== "admin") {
          setIsLoaderInfo(false);
          setSnackBarInfo({
            snackStatus: true,
            snackColor: "bg-primary",
            snackMsg: "admin is not valid",
          });
        }
      },
      (error) => {
        setIsLoaderInfo(false);

        setSnackBarInfo({
          snackStatus: true,
          snackColor: "bg-primary",
          snackMsg: "There is an Error Plz Try Again",
        });
      }
    );
  };

  return (
    <>
      <AppHeader />
      <Image 
        src={LoginImage}
        className="w-100 login-banner"
        fluid 
      />
      <Container fluid className="d-flex flex-column justify-content-center align-items-center py-4">
                <Form className="d-flex flex-column gap-5 login-form-container p-5">
                    <h1>Login</h1>
                    <Form.Group className="position-relative" controlId="InputEmail1">
                        <Form.Label className="login-input-label">Email address</Form.Label>
                        <Form.Control type="email" className="login-input" aria-describedby="emailHelp" />
                    </Form.Group>
                    <Form.Group className="position-relative" controlId="InputPassword1">
                        <Form.Label className="login-input-label">Password</Form.Label>
                        <Form.Control type={passwordVisible ? "text" : "password"} className="login-input" />
                        <Button
                            className="btn-white show-hide-btn position-absolute"
                            type="button"
                            onClick={togglePasswordVisibility}
                            // style={{ right: '10px', top: '50%', transform: 'translateY(-50%)' }}
                        >
                            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                        </Button>
                    </Form.Group>
                    <Button className="btn btn-primary text-white py-3 fs-4 fw-bold">Login</Button>
                </Form>
                <Link to="/signup" className="text-primary">
                    Create Account
                </Link>
            </Container>
      <Footer />
    </>
  );
};

export default Login;
