import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import {Input} from "../../../Components/Common/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { OButton2 } from "../../../Components/Common/Button";
import { useMutation } from "@tanstack/react-query";
import axiosBaseURL from "../../../Hooks/BaseUrl";
import { AppContext } from "../../../Context/AppContext";
import { AxiosError } from "axios";

type Inputs = {
  email: string;
  password: string;
  phone: string;
  fname: string;
  lname: string;
};

const Register = () => {
  const { login } = AppContext();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<Inputs>();
  const RegisterMU = useMutation({
    mutationFn: async (data: Inputs) => {
      return await axiosBaseURL.post("/register", data);
    },
    onSuccess: (response) => {
      const user = response.data?.user;
      const accessToken = response.data?.access_token;

      if (user && accessToken) {
        login(user, accessToken);
      }
    },
    // onError:(err) => {
    //     console.log(err.response);

    // }
  });
  const onSubmit: SubmitHandler<Inputs> = async (para_data: Inputs) => {
    RegisterMU.mutate(para_data);
  };
  const errorResponse: any = (RegisterMU.error as AxiosError)?.response?.data;
  if (errorResponse && errorResponse.email) {
    const emailErrorMessage = errorResponse.email[0];
  }

  return (
    <Box
      sx={{
        width: { lg: "440px" },
        height: { lg: "490px" },
        display: "flex",
        flexDirection: "column",
        px: "30px",
      }}
    >
      {errorResponse?.email && (
        <Typography sx={{ color: "red", textAlign: "left" }}>
          *Email is already taken
        </Typography>
      )}
      {errorResponse?.phone && (
        <Typography sx={{ color: "red", textAlign: "left" }}>
          *Phone Number is already taken
        </Typography>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label="Email" type="email" reg={register("email")} />
        <Input
          label="Phone Number"
        
          type="tel"
          reg={register("phone", { minLength: 10, maxLength: 10 })}
          css={{ my: "30px" }}
        />
        {errors.phone && (
          <Typography sx={{ mt: 3, p: 0, color: "red" }}>
            *It should contain 10 digits
          </Typography>
        )}
        <Input
          label="Password"
        
          type="password"
          reg={register("password", { minLength: 8, maxLength: 16 })}
          css={{ my: "30px" }}
        />
        {errors.password && (
          <Typography sx={{ mt: 3, p: 0, color: "red" }}>
            *Minimum 8 - Maximum 16 character
          </Typography>
        )}
        <Box
          sx={{
            display: "flex",
            flexWrap: { sm: "wrap", md: "nowrap", xs: "wrap" },
            my: "30px",
          }}
        >
          <Input
            label="First Name"
           
            type="text"
            reg={register("fname")}
            css={{ pr: { lg: "10px", md: "10px", sm: "0", xs: "0" } }}
          />
          <Input
            label="Last Name"
            
            type="text"
            reg={register("lname")}
            css={{
              pr: { lg: "10px", md: "10px", sm: "0", xs: "0" },
              mt: { lg: "0px", md: "0px", sm: "10px", xs: "30px" },
            }}
          />
        </Box>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="By signing up you agree to our terms and conditions."
          sx={{ fontSize: "14px" }}
        />
        <OButton2
          name="Login"
          css={{ my: "20px", width: "100%" }}
          type={"submit"}
        />
      </form>
    </Box>
  );
};

export default Register;
