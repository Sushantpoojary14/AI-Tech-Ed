import { Box, Typography } from "@mui/material";
import React from "react";

const NotificationStrip = () => {
  return (
    <Box bgcolor={"white"} mb={1} py={1} textAlign={"center"}>
      <Typography
        component={"p"}
        fontWeight={"bold"}
        letterSpacing={1}
        fontFamily={"monospace"}
      >
        Package is about to expire!! Take Exam Fast!!
      </Typography>
    </Box>
  );
};

export default NotificationStrip;
