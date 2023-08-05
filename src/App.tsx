import { createContext, useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Index from "./Pages/Website/Index";
import UserIndex from "./Pages/User/UserIndex";
import AdminIndex from "./Pages/Admin/AdminIndex";
import { MainCartContext } from "../src/Context/CartContext";
import Test from "./Test";
import Test2 from "./Test2";
import Exam_Section from "./Pages/User/TestSchedule/Exam_Section";
import TestResult from "./Pages/User/TestSchedule/TestResult";
import SuccessModel from "./Components/Model/SuccessModel";
import { UserContext } from "./Context/UserContext";
// import TestResult from "./Pages/";
import img from "./Assets/images/password_success.jpg";
function App() {
  const { handleMenuClose, openMenu, handlePUSuccessClose, openPuSuccess,openPuSuccess2,handlePUSuccessClose2 } =
    UserContext();
  return (
    <>
      <SuccessModel
        handleClose={handlePUSuccessClose2}
        open={openPuSuccess2}
        icon={
          <img
            src={img}
            style={{
              height: "150px",
              width: "150px",
              color: "#FA8128",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
        }
        header="You have Successfully Purchased"
        // text="Back to Dashboard"
        // link="/"
      />

      <SuccessModel
        handleClose={handlePUSuccessClose}
        open={openPuSuccess}
        icon={
          <img
            src={img}
            style={{
              height: "150px",
              width: "150px",
              color: "#FA8128",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
        }
        header="You have already Purchased"
        // text="Back to Dashboard"
        // link="/"
      />
      <MainCartContext>
        <Routes>
          <Route path="/*" element={<Index />} />

          <Route path="/user/*" element={<UserIndex />} />
          <Route path="/admin/*" element={<AdminIndex />} />
          <Route path="/test" element={<Test />} />
          <Route path="/test2" element={<Test2 />} />
          <Route
            path="/user/Test-schedule/Exam-section/:id"
            element={<Exam_Section />}
          />
          <Route path="/user/Test-result/:id" element={<TestResult />} />
          {/* <Route path="/admin/login" element={<LoginComponent />} /> */}
        </Routes>
      </MainCartContext>
    </>
  );
}

export default App;
