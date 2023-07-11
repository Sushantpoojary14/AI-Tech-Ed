import { createContext, useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Index from "./Pages/Website/Index";
import UserIndex from "./Pages/User/UserIndex";
import AdminIndex from "./Pages/Admin/AdminIndex";
import { MainCartContext } from "../src/Context/CartContext";
import Test from "./Test";

function App() {
  return (
    <>
      <MainCartContext>
        <Routes>
          <Route path="/*" element={<Index />} />

          <Route path="/user/*" element={<UserIndex />} />
          <Route path="/admin/*" element={<AdminIndex />} />
          <Route path="/test" element={<Test />} />
          {/* <Route path="/admin/login" element={<LoginComponent />} /> */}
        </Routes>
      </MainCartContext>
    </>
  );
}

export default App;
