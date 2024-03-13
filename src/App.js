import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./Pages/main/main";
import Login from "../src/Pages/login/login";
import Signup from "../src/Pages/signup/signup";
import ForgetPass from "./Pages/forgetPassword/forgetPass";
import Courses from "./Pages/courses/courses";
import Nav from "./components/Home/banner/navbar/nav";
import Footer from "./components/Footer/footer";
import { useLocation } from "react-router-dom";
import Teachers from "./Pages/teachers/Teachers";
import Account from "./Pages/account/Account";

const App = () => {
  const location = useLocation();
  const { pathname } = location;
  const hideRoutes = ["/login", "/signup", "/recovery"];
  const shouldHide = hideRoutes.includes(pathname);

  return (
    <>
      {!shouldHide && <Nav />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/recovery" element={<ForgetPass />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      {!shouldHide && <Footer />}
    </>
  );
};
export default App;
