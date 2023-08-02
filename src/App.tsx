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
// import TestResult from "./Pages/";

function App() {
  return (
    <>
      <MainCartContext>
        <Routes>
          <Route path="/*" element={<Index />} />

          <Route path="/user/*" element={<UserIndex />} />
          <Route path="/admin/*" element={<AdminIndex />} />
          <Route path="/test" element={<Test />} />
          <Route path="/test2" element={<Test2 />} />
          <Route path="/user/Test-schedule/Exam-section/:id" element={<Exam_Section />} />
          <Route path="/user/Test-result/:id" element={<TestResult />} />
          {/* <Route path="/admin/login" element={<LoginComponent />} /> */}
        </Routes>
      </MainCartContext>
    </>
  );
}

export default App;
