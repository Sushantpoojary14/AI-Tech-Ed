import { SubmitHandler, useForm } from "react-hook-form";
import { Box, Container, Typography } from "@mui/material";
import {Input} from "../Common/Input";
import { OButton2 } from "../Common/Button";
import { Header1 } from "../Common/HeaderText";

type Inputs = {
  email: string;
  password: string;
};

const LoginComponent = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (para_data: Object) => {
    console.log(para_data);
  };
  return (
    <Container
      maxWidth="sm"
      sx={{
        my: "10rem",
      }}
    >
      <Box
        sx={{
          //   width: { lg: "440px" },
          //   height: { lg: "410px" },
          display: "flex",
          flexDirection: "column",
          textAlign: "center",

          px: "30px",
        }}
      >
        <Header1 header="Admin Login" css={{ mb: "1rem" }} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Email"
            type="email"
            reg={register("email")}
            css={{ mb: "30px" }}
          />
          <Input
            label="Password"
            type="password"
            reg={register("password")}
            css={{ my: "20px" }}
          />
          <Typography sx={{ color: "#FA8128", textAlign: "right" }}>
            Forgot Password?
          </Typography>
          <OButton2 name="Login" css={{ my: "30px", width: "100%" }} />
        </form>
      </Box>
    </Container>
  );
};

export default LoginComponent;
