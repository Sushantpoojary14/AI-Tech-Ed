import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import { ReactElement, ReactNode } from "react";

interface props {
  name?: ReactNode;
  func?: (e: any) => void;
  css?: object;
  type?: "button" | "submit" | "reset" | undefined;
}

const WButton = (props: props) => {
  return (
    <Button
      variant="contained"
      type={props.type}
      sx={{
        ...props.css,
        backgroundColor: "#FFFFFF",
        color: "#FA8128",
        borderRadius: "3px",
        height: "60px",
        fontSize: "16px",
        fontWeight: 600,
        border: "1px solid #FA8128",
        "&:hover": {
          backgroundColor: "#FFFFFF ",
        },
      }}
      size="large"
      disableElevation
      onClick={props.func}
    >
      {props.name}
    </Button>
  );
};

const OButton = (props: props) => {
  return (
    <Button
      variant="contained"
      color="warning"
      type={props.type}
      sx={{
        ...props.css,
        backgroundColor: "#FA8128",
        borderRadius: "3px",
        height: "60px",
        fontSize: "16px",
        fontWeight: 600,
        border: "1px solid #F0F0F0",
      }}
      size="large"
      disableElevation
      onClick={props.func}
    >
      {props.name}{" "}
    </Button>
  );
};

const BButton = (props: props) => {
  return (
    <Button
      variant="contained"
      type={props.type}
      sx={{
        ...props.css,
        backgroundColor: "#3A9BDC",
        borderRadius: "3px",
      }}
      size="large"
      disableElevation
      onClick={props.func}
    >
      {props.name}
    </Button>
  );
};

const PIButton = (props: props) => {
  return (
    <Button
      type={props.type}
      sx={{
        ...props.css,
        color: "#FA8128",
        backgroundColor: "#FFFFFF",
        borderRadius: "3px",
        border: "1px solid #FA8128",
        "&:hover": {
          color: "#FFFFFF ",
          backgroundColor: "#FA8128",
        },
      }}
      color="warning"
      variant="outlined"
      onClick={props.func}
    >
      <PersonIcon sx={{ ...props.css }} />
    </Button>
  );
};

const SIButton = (props: props) => {
  return (
    <Button
      type={props.type}
      sx={{
        ...props.css,
        color: "#FA8128",
        backgroundColor: "#FFFFFF",
        border: "1px solid #FA8128",
        "&:hover": {
          color: "#FFFFFF ",
          backgroundColor: "#FA8128",
        },
      }}
      variant="outlined"
      color="warning"
      onClick={props.func}
    >
      <SettingsIcon sx={{ ...props.css }} />
    </Button>
  );
};

const OButton2 = (props: props) => {
  return (
    <Button
      variant="contained"
      color="warning"
      type={props.type}
      sx={{
        ...props.css,
        backgroundColor: "#FA8128",
        borderRadius: "3px",
        height: "60px",
        width: "100%",
        fontSize: "16px",
        fontWeight: 600,
        border: "1px solid #F0F0F0",
      }}
      size="large"
      disableElevation
      onClick={props.func}
    >
      {props.name}{" "}
    </Button>
  );
};

const BButton2 = (props: props) => {
  return (
    <Button
      variant="contained"
      type={props.type}
      sx={{
        backgroundColor: "#3A9BDC",
        color: "#FFFFFF",
        borderRadius: "3px",
        height: "60px",
        width: "360px",
        fontSize: "16px",
        fontWeight: 600,
        border: "1px solid #FFFFFF",
        mx: "auto",
      }}
      size="large"
      disableElevation
      onClick={props.func}
    >
      {props.name}{" "}
    </Button>
  );
};

const OButton3 = (props: props) => {
  return (
    <Button
      variant="contained"
      color="warning"
      type={props.type}
      sx={{
        backgroundColor: "#FA8128",
        borderRadius: "3px",
        height: "60px",
        width: "284px",
        fontSize: "16px",
        fontWeight: 600,
        border: "1px solid #F0F0F0",
        m: "auto",
      }}
      size="large"
      disableElevation
      onClick={props.func}
    >
      {props.name}{" "}
    </Button>
  );
};
export {
  WButton,
  OButton,
  BButton,
  PIButton,
  SIButton,
  OButton2,
  BButton2,
  OButton3,
};
