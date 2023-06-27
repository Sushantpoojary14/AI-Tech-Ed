import { Box, Typography } from "@mui/material";
import Input from "../../../Components/Common/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { OButton2 } from "../../../Components/Common/Button";
import { useMutation } from "@tanstack/react-query";
import axiosBaseURL from "../../../Hooks/BaseUrl";
import LoadingBar from "../../../Components/Headers/LoadingBar";
import { Navigate } from "react-router-dom";
import { AppContext } from "../../../Context/AppContext";
type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const { setUser } = AppContext();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<Inputs>();
  const LoginMU = useMutation({
    mutationFn: (data: Inputs) => {
      return axiosBaseURL.post("/login", data);
    },
  });

  if (LoginMU.isLoading) {
    return <LoadingBar />;
  }
  const onSubmit: SubmitHandler<Inputs> = async (para_data: Inputs) => {
    LoginMU.mutate(para_data);

    if (LoginMU?.data?.data.status != "failed") {
     
      setUser(true);
      <Navigate to="/" replace={true} />;
    }
  };

  return (
    <Box
      sx={{
        width: { lg: "440px" },
        height: { lg: "410px" },
        display: "flex",
        flexDirection: "column",
        px: "30px",
      }}
    >
      {LoginMU?.data?.data.status == "failed" && (
        <Typography sx={{ color: "red", textAlign: "left" }}>
          *Email and Password does not match
        </Typography>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Email"
          val={false}
          type="email"
          reg={register("email")}
          css={{ my: "20px" }}
        />
        <Input
          label="Password"
          val={false}
          type="password"
          reg={register("password")}
          css={{ my: "30px" }}
        />
        <Typography sx={{ color: "#FA8128", textAlign: "right" }}>
          Forgot Password?
        </Typography>
        <OButton2
          name="Login"
          css={{ my: "30px", width: "100%" }}
          type="submit"
        />
      </form>
    </Box>
  );
};

export default Login;
