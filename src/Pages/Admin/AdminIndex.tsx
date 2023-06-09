import React from "react";
import { AppContext } from "../../Context/AppContext";
import { Container } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import ErrorPage from "../Error";
// import LoginComponent from "../../Components/BodyComponent/AdminLoginComponent";

import AdminMainDash from "./Dashboard/AdminMainDash";
import AdminNavbar from "../../Components/Headers/AdminNavbar";
import LoginComponent from "../../Components/BodyComponent/AdminLoginComponent";

const AdminIndex = () => {
  const { admin } = AppContext();
  return (
    <>
      {admin ? (
        <>
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
