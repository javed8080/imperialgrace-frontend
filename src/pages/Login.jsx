import React from "react";
import { Button, Container, Form, Image } from 'react-bootstrap';
import { FormProvider, useForm } from 'react-hook-form';
import { Link, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import LoginImage from "../assets/images/bg-logon.png";
import Footer from "../components/footer/Footer";
import CustomInputField from "../components/global/CustomInputField/CustomInputField";
import CustomPasswordField from "../components/global/CustomInputField/CustomPasswordField";
import AppHeader from "../components/navbar/AppHeader";
import '../scss/Login.scss';
import { apiPost } from "../util/ApiRequest";
import { ENDPOINTS } from "../util/EndPoint";
import { isLoaderAtom, snakeBarAtom } from "../util/RecoilStore";


const Login = () => {
  const navigate = useNavigate();


  const methods = useForm();
  const setIsLoader = useSetRecoilState(isLoaderAtom);
  const setSnackBarState = useSetRecoilState(snakeBarAtom);

  const onSubmit = (data) => {
    setIsLoader(true)
    console.log(data);

    apiPost({
      url: ENDPOINTS.UserLogin,
      data,
      onSuccess: (res) => {
        localStorage.setItem("accessToken", res?.data?.token);
        localStorage.setItem("user", JSON.stringify(res?.data?.user_details));

        // navigate(`/dsadsa`);
        setIsLoader(false)
        setSnackBarState({
          snackStatus: true,
          snackColor: "bg-success",
          snackMsg: "Successful",
        });

      },
      onFailure: (error) => {
        setIsLoader(false)
        setSnackBarState({
          snackStatus: true,
          snackColor: "bg-danger",
          snackMsg: "There is an Error Plz Try Again",
        });

      },
      auth: false,
    });
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
        <FormProvider {...methods}>

          <Form onSubmit={methods.handleSubmit(onSubmit)} className="d-flex flex-column gap-5 login-form-container p-5">
            <h1>Login</h1>
            <CustomInputField
              label="Email address"
              placeholder="Email address"
              name="email"
              type="email"
              required={true}
              validation={{
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              }}
            />
            <CustomPasswordField
              label="Password"
              placeholder="Enter password"
              name="password"
              required={true}
            />
            <Button type="submit" className="btn btn-primary text-white py-3 fs-4 fw-bold">Login</Button>
          </Form>
        </FormProvider>

        <Link to="/signup" className="text-primary">
          Create Account
        </Link>
      </Container>
      <Footer />
    </>
  );
};

export default Login;
