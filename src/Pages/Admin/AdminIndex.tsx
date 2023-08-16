import React from "react";
import { AppContext } from "../../Context/AppContext";
import { Container } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import ErrorPage from "../Error";
import LogoutIcon from "@mui/icons-material/Logout";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import img from "../../Assets/images/password_success.jpg";

// import LoginComponent from "../../Components/BodyComponent/AdminLoginComponent";

import AdminMainDash from "./Dashboard/AdminMainDash";
import AdminNavbar from "../../Components/Headers/AdminNavbar";
import LoginComponent from "../../Components/BodyComponent/AdminLoginComponent";
import AdminProfile from "./Profile/AdminProfile";
import ConfirmModel from "../../Components/Model/ConfirmModel";
import { UserContext } from "../../Context/UserContext";
import PasswordChangeModal from "../../Components/Model/PasswordChangeModal";
import ProfileEditModal from "../../Components/Model/ProfileEditModel";
import SuccessModel from "../../Components/Model/SuccessModel";
import StudentData from "./StudentData/StudentData";
import StudentDetails from "./StudentDetails/StudentDetails";
import TestResult from "./TestResult/TestResult";

import TestAnswered from "./TestAnswered/TestAnswered";
import TestSeries from "./TestSeries/TestSeries";
import AddTestSeries from "./TestSeries/AddTestSeries/AddTestSeries";
import TestSeriesIndex from "./TestSeries/TestSeriesIndex";

const AdminIndex = () => {
  const { admin, adminLogout } = AppContext();
  const {
    handleMenuClose,
    openMenu,
    openPC2,
    handlePC2Close,
    handleSubmit,
    openSuccess,
    handleSuccessClose,
    openPE2,
    handlePESuccessClose,
    handlePE2Close,
    openPESuccess,
  } = UserContext();
  return (
    <>
      {admin ? (
        <>
          <ConfirmModel
            handleClose={handleMenuClose}
            open={openMenu}
            icon={
              <LogoutIcon
                sx={{
                  height: "100px",
                  width: "100px",
                  color: "#FA8128",
                  mx: "auto",
                }}
              />
            }
            text="Are you sure you want to log out?"
            func={adminLogout}
          />

          <ConfirmModel
            handleClose={handlePC2Close}
            open={openPC2}
            icon={
              <LockOpenIcon
                sx={{
                  height: "100px",
                  width: "100px",
                  color: "#FA8128",
                  mx: "auto",
                }}
              />
            }
            text="Are you sure you want to Change your password?"
            func={handleSubmit}
          />

          <ConfirmModel
            handleClose={handlePE2Close}
            open={openPE2}
            icon={
              <LockOpenIcon
                sx={{
                  height: "100px",
                  width: "100px",
                  color: "#FA8128",
                  mx: "auto",
                }}
              />
            }
            text="Are you sure you want to Change your Details?"
            func={handleSubmit}
          />

          <PasswordChangeModal />

          {/* <ProfileEditModal /> */}

          <SuccessModel
            handleClose={handleSuccessClose}
            open={openSuccess}
            icon={
              <img
                alt=""
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
            header="Your password has been changed successfully!"
            text="Back to Dashboard"
            link="/admin/login"
          />

          <SuccessModel
            handleClose={handlePESuccessClose}
            open={openPESuccess}
            icon={
              <img
                alt=""
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
            header="Your Details has been changed successfully!"
            text="Back to Dashboard"
            link="/user"
          />
          <Container
            maxWidth={false}
            sx={{
              width: "100%",
              m: 0,
              p: 0,
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#F5F5F5",
            }}
            disableGutters
          >
            <AdminNavbar />
            <Routes>
              {/* <Route index element={<MainDash />} />
      <Route path='/profile' element={<ProfileIndex />} />
      <Route path='/Test-result-analysis' element={<TestRA />} /> */}
              {/* <Route path="/login" element={<LoginComponent />} /> */}
              <Route index element={<AdminMainDash />} />
              <Route path="/profile" element={<AdminProfile />} />
              <Route path="/students" element={<StudentData />} />

              <Route path="/students/:studentid" element={<StudentDetails />} />
              <Route
                path="/students/:studentid/testanswered"
                element={<TestAnswered />}
              />
              <Route
                path="/students/:studentid/testanswered/:testresult"
                element={<TestResult />}
              />

              <Route path="/test-series/*" element={<TestSeriesIndex />} />

              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Container>
        </>
      ) : (
        <>
          {/* {admin ? (
            <Routes>
              <Route path="/login" element={<LoginComponent />} />
            </Routes>
          ) : (
            <Navigate to="/admin" replace={true} />
          )} */}
          <Routes>
            <Route path="/login" element={<LoginComponent />} />
          </Routes>
          <Navigate to="/admin/login" replace={true} />
        </>
      )}
    </>
  );
};

export default AdminIndex;
