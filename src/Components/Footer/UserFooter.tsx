import { Box } from "@mui/material";
import React from "react";

const UserFooter = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
      bgcolor={"#3A9BDC"}
      height={"5vh"}
    ></Box>
  );
};

export default UserFooter;
