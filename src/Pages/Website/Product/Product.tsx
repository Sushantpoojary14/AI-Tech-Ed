import {
  Container,
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Stack,
} from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { OButton, WButton } from "../../../Components/Common/Button";
import { Header1 } from "../../../Components/Common/HeaderText";
import UseGet from "../../../Hooks/UseGet";
import LoadingBar from "../../../Components/Headers/LoadingBar";
import { ParaText1 } from "../../../Components/Common/ParaText";
import axiosBaseURL from "../../../Hooks/BaseUrl";
import tokenAxios from "../../../Hooks/TokenAxios";
import { UserContext } from "../../../Context/UserContext";
import { AppContext } from "../../../Context/AppContext";
import img from "../../../Assets/images/product.jpg"
import { CartContext } from "../../../Context/CartContext";

const Product = () => {
  const params = useParams();
  const navigate = useNavigate();
  const {handlePUSuccessOpen,handlePUSuccessOpen2,handleClickOpen}= UserContext();
  const { user } = AppContext();

  const { isLoading, data } = useQuery(
    [params],
    async () => await  axiosBaseURL.get(`/one-product-data/${params.id}`)
  );

  const purchaseMU = useMutation({
    mutationFn: async (p_id: number ) => {
      return await tokenAxios.post(`add-user-purchase`, {
        p_id: p_id,
      });
    },
    onSuccess: (res:any) => {
      // console.log(res?.response?.status);

      if(res?.status==200){
        handlePUSuccessOpen2();
      }
      else{
        handlePUSuccessOpen();
        navigate('/');
      }  
    },
    onError:(err)=>{
      console.log(err);
      
    }
  });
  
  const loginCheck = (id:number)=>{
    if(user){
      purchaseMU.mutate(id)
      return 0;
    }
    handleClickOpen('1');
  }


  let product = data?.data.product_data;

  if (isLoading) {
    return <LoadingBar />;
  }

  return (
    <Container maxWidth="xl" sx={{ my: "50px" }}>
      <Header1 header={product.p_name} />
      <Card
        sx={{
          display: "flex",
          flexDirection: { sm: "row", xs: "column", md: "row", lg: "row" },
          my: "30px",
          justifyContent: "space-between",
          width: { lg: "900px", xs: "350px", md: "900px", sm: "700px" },
          boxShadow: "none",
          backgroundColor: "transparent",
        }}
      >
        <CardMedia
          sx={{
            height: "330px",
            width: { lg: "400px", xs: "330px", sm: "400px", md: "400px" },
          }}
          image={product.p_image ? import.meta.env.VITE_IMAGE_URL+product.p_image : img }
          
        />
        <Stack spacing={{ lg: 9, md: 9, sm: 9, xs: 4 }}>
          <CardContent
            sx={{
              width: { lg: "400px", xs: "330px", sm: "400px", md: "400px" },
            }}
          >
            <Header1 header={product.p_name} />
            <Header1 header={`Rs. ${product.p_price}`} />
            <ParaText1 text="Description" />
            <ParaText1 text={product.p_description} />
          </CardContent>
          <CardActions>
            <Stack spacing={8} direction="row" sx={{ maxWidth: "370px" }}>
              <Link to="/">
                <WButton name="Back" css={{ width: "127px" }} />
              </Link>
              <OButton name="Checkout" func={()=>loginCheck(product.id)}/>
            </Stack>
          </CardActions>
        </Stack>
      </Card>
    </Container>
  );
};

export default Product;
