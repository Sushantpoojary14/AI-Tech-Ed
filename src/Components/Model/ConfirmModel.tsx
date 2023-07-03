import { Box, Dialog, Stack } from "@mui/material";
import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { OButton, WButton } from "../Common/Button";
import { Header1 } from "../Common/HeaderText";

interface props {
  handleClose: () => void;
  open: boolean;
  text: string;
  icon: ReactElement;
  func?: () => void;
}

const ConfirmModel = (props: props) => {
  return (
    <Dialog
      onClose={props.handleClose}
      open={props.open}
      sx={{ "& .MuiDialog-paper": { width: "100%", maxHeight: 435 } }}
    >
      <Box
        sx={{
          width: { lg: "482px", md: "482px", sm: "482px", xs: "300px" },
          height: "330px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          py: "40px",
          px: { lg: "0px", md: "0px", sm: "0px", xs: "8px" },
        }}
      >
        {props.icon}
        <Header1
          header={props.text}
          css={{
            m: "auto",
            width: { lg: "330px", md: "330px", sm: "330px", xs: "300px" },
            textAlign: "center",
          }}
        />
        <Stack
          spacing={{ lg: 4, md: 4, sm: 4, xs: 1 }}
          direction="row"
          margin="auto"
          sx={{ width: { lg: "330px", md: "330px", sm: "330px", xs: "300px" } }}
        >
          <WButton
            name="NO"
            css={{ width: "157px" }}
            func={props.handleClose}
          />
          <OButton name="Yes" css={{ width: "157px" }} func={props.func} />
        </Stack>
      </Box>
    </Dialog>
  );
};

export default ConfirmModel;
