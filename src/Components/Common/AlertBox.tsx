import React from "react";
import { Alert, Snackbar, Stack } from "@mui/material";
import { UserContext } from "../../Context/UserContext";

interface props {
  name: string;
  type: "error" | "warning" | "info" | "success";
  bol: boolean;
  handleAlertBoxClose:()=>void;
}

const AlertBox = (props: props) => {
  const { handleAlertBoxClose, alertBox } = UserContext();
  return (
    <Stack sx={{ width: "100%" }}>
      <Snackbar
        open={props.bol}
        autoHideDuration={3000}
        onClose={props.handleAlertBoxClose}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
      >
        <Alert
          onClose={props.handleAlertBoxClose}
          severity={props.type}
          sx={{ width: "100%" }}
        >
          {props.name}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default AlertBox;
