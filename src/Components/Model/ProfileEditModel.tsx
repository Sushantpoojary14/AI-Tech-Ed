import { Box, Dialog, Stack, Typography } from "@mui/material";
import { UserContext } from "../../Context/UserContext";
import { OButton, WButton } from "../Common/Button";
import { Header1 } from "../Common/HeaderText";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import {Input} from "../Common/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import UseGet from "../../Hooks/UseGet";
import LoadingBar from "../Headers/LoadingBar";
import { AppContext } from "../../Context/AppContext";

type Inputs = {
  name: string;
  user_id: number;
  birth_date: Date;
  email: string;
  phone: string;
  name: string;
  user_id: number;
  birth_date: Date;
  email: string;
  phone: string;
};

const ProfileEditModal = () => {
  const { user } = AppContext();
  const {
    handlePEClose,
    openPE,
    handlePE2Open,
    handlePE2Close,
    dataSubmit,
    dispatch,
    handleSuccessOpen,
    openPE2,
    handlePESuccessOpen,
  } = UserContext();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    control,
  } = useForm<Inputs>();
  const [profileData, setProfileData] = useState({});

  // const { isLoading, data, refetch } = useQuery({
  //     queryKey: [], queryFn: UseGet('https://dummyjson.com/users/1'),
  // })

  useEffect(() => {
    if (dataSubmit == true && openPE2 == true) {
      console.log(profileData);
      dispatch({ type: "SET_dataSubmit", payload: false });
      handlePE2Close();
      handlePESuccessOpen();
    }
  }, [dataSubmit]);

  // if(isLoading){
  //     return <LoadingBar/>
  // }
  // useEffect(() => {
  //     reset({
  //         prev_password: '',
  //         new_password: '',
  //         confirm_password: '',
  //     });
  // }, [openPC]);

  const onSubmit: SubmitHandler<Inputs> = async (para_data: Object) => {
    handlePEClose();
    handlePE2Open();
    setProfileData(para_data);
  };
  const onSubmit: SubmitHandler<Inputs> = async (para_data: Object) => {
    handlePEClose();
    handlePE2Open();
    setProfileData(para_data);
  };

  return (
    <Dialog onClose={handlePEClose} open={openPE} sx={{ height: "630px",}}>
      <Box
        sx={{
          width: { lg: "482px", md: "482px", sm: "482px", xs: "320px" },
          height: "700px",
          display: "flex",
          flexDirection: "column",
          px: "40px",
        }}
      >
        <Stack spacing={1} direction="row" margin="auto" sx={{ my: "20px" }}>
          <LockOpenIcon
            sx={{ height: "30px", width: "30px", color: "#FA8128" }}
          />
          <Header1 header="EDIT PROFILE" />
        </Stack>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={4} direction="column" margin="auto">
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Input
                label="Name"
          
                type="text"
                reg={register("name")}
                defaultVal={user?.name}
              />
              {/* {errors.name &&
                                <Typography sx={{ mt: 3, p: 0, color: 'red' }}>
                                    *Minimum 8 - Maximum 16 character
                                </Typography>} */}
            </Box>
            {/* <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Input
                label="User Id"
                val={false}
                type="text"
                reg={register("user_id")}
                defaultVal={user?.id}
              />
               {errors.new_password &&
                                <Typography sx={{ mt: 3, p: 0, color: 'red' }}>
                                    *Minimum 8 - Maximum 16 character
                                </Typography>
                            } 
            </Box> */}
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Input
                label="Birth Date"        
                type="date"
                reg={register("birth_date")}
                defaultVal={user?.DOB}
              />
              {/* {errors.confirm_password &&
                                <Typography sx={{ mt: 3, p: 0, color: 'red' }}>
                                    {errors.new_password?.type == 'validate' ? '*Minimum 8 - Maximum 16 character' :
                                        'Passwords do not match'}
                                </Typography>} */}
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Input
                label="Email"
                inputProps={{ disabled: true }}
                type="email"
                reg={register("email")}
                defaultVal={user?.email}
              />
              {/* {errors.confirm_password &&
                                <Typography sx={{ mt: 3, p: 0, color: 'red' }}>
                                    {errors.new_password?.type == 'validate' ? '*Minimum 8 - Maximum 16 character' :
                                        'Passwords do not match'}
                                </Typography>} */}
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Input
                label="Phone Number"
                
                type="telephone"
                reg={register("phone")}
                defaultVal={user?.phone}
              />
              {/* {errors.confirm_password &&
                                <Typography sx={{ mt: 3, p: 0, color: 'red' }}>
                                    {errors.new_password?.type == 'validate' ? '*Minimum 8 - Maximum 16 character' :
                                        'Passwords do not match'}
                                </Typography>} */}
            </Box>
            <Stack
              spacing={{ lg: 6, md: 6, sm: 6, xs: 2 }}
              direction="row"
              marginX="auto"
             paddingTop={2}
            >
              <WButton
                name="CANCEL"
                css={{ width: "177px" }}
                func={handlePEClose}
              />
              <OButton name="NEXT" css={{ width: "177px" }} type="submit" />
            </Stack>
          </Stack>
        </form>
      </Box>
    </Dialog>
  );
};

export default ProfileEditModal;

