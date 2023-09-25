import { Route, Routes } from "react-router-dom";
import Index from "./Pages/Website/Index";
import UserIndex from "./Pages/User/UserIndex";
import AdminIndex from "./Pages/Admin/AdminIndex";
import { MainCartContext } from "../src/Context/CartContext";
import Test2 from "./Test2";
import Exam_Section from "./Pages/User/TestSchedule/Exam_Section";
import TestResult from "./Pages/User/TestSchedule/TestResult";
import SuccessModel from "./Components/Model/SuccessModel";
import { UserContext } from "./Context/UserContext";
// import TestResult from "./Pages/";
import img from "./Assets/images/password_success.jpg";
import { useEffect, useState } from "react";
import AlertBox from "./Components/Common/AlertBox";
import Test3 from "./Pages/test3";
function App() {
  const {
    handlePUSuccessClose,
    openPuSuccess,
    openPuSuccess2,
    handlePUSuccessClose2,
  } = UserContext();
  const [open, setOpen] = useState<boolean>(!navigator.onLine);
  const handleAlertBoxOpen = () => {
    setOpen(true);
  };

  const handleAlertBoxClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setOpen(!navigator.onLine);
  }, [navigator.onLine]);
  

  return (
    <>
      <AlertBox
        name="Please Check your Internet Connection"
        type="error"
        bol={open}
        duration={50000}
        handleAlertBoxClose={handleAlertBoxClose}
      />
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
          {/* <Route path="/test" element={<Test />} /> */}
          <Route path="/test2" element={<Test2 />} />
          <Route path="/test3" element={<Test3 />} />
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
