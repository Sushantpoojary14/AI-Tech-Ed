import { Box, Typography } from "@mui/material";
import {Input,InputPassword }from "../../../Components/Common/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { OButton2 } from "../../../Components/Common/Button";
import { useMutation } from "@tanstack/react-query";
import axiosBaseURL from "../../../Hooks/BaseUrl";
import LoadingBar from "../../../Components/Headers/LoadingBar";
import { AppContext } from "../../../Context/AppContext";
import { UserContext } from "../../../Context/UserContext";
import { CartContext } from "../../../Context/CartContext";


type Inputs = {
  email: string;
  password: string;
};
type userData = {
  id: number;
  name: string;
  email: string;
};
const Login = () => {
  const { login} = AppContext();
  const {addToCartFL} = CartContext();
  const {
    register,
    handleSubmit,
  
  } = useForm<Inputs>();
  
  const LoginMU = useMutation({
    mutationFn: async(data: Inputs) => {
      return await axiosBaseURL.post("/login", data);

    },
    onSuccess: (response) => {
      const user = response.data?.user;
      const accessToken = response.data?.access_token;

      if (user && accessToken) {
        login(user, accessToken);
         addToCartFL(user.id);
      }
 
    }
  });

  if (LoginMU.isLoading) {
    return <LoadingBar />;
  }

  const onSubmit: SubmitHandler<Inputs> = async (para_data: Inputs) => {
     LoginMU.mutate(para_data);
 
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
      {LoginMU?.status === "error" && (
        <Typography sx={{ color: "red", textAlign: "left" }}>
          *Email and Password does not match
        </Typography>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Email"

          type="email"
          reg={register("email")}
          css={{ my: "20px" }}
        />
        <InputPassword
          label="Password"
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
