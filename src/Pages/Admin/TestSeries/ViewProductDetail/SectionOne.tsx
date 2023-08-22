import {
  Container,
  Stack,
  Card,
  Divider,
  Box,
  Switch,
  Typography,
} from "@mui/material";

import { useMutation, useQuery } from "@tanstack/react-query";

import { Link } from "react-router-dom";
import { UserContext } from "../../../../Context/UserContext";
import UseGet from "../../../../Hooks/UseGet";
import LoadingBar from "../../../../Components/Headers/LoadingBar";
import { ParaText1, ParaText3 } from "../../../../Components/Common/ParaText";
import { OButton, SwitchComp } from "../../../../Components/Common/Button";
import { useState } from "react";

import Grid from "@mui/material/Unstable_Grid2";
import adminTokenAxios from "../../../../Hooks/AdminTokenAxios";

interface Detail {
  title: string;
  data: string;
}
const SectionOne = ({ product }: any) => {
  console.log("section !", product);

  const { handlePEOpen, dataSubmit } = UserContext();

  const [checked, setChecked] = useState<boolean>(product?.status === 1);

  const productStatus = useMutation({
    mutationFn: async (checked: boolean) => {
      const newStatusValue = checked ? 1 : 0;
      console.log("value", newStatusValue);

      return await adminTokenAxios.post(
        `/admin/update-product-status/${product.id}`,
        { status: newStatusValue }
      );
    },
    onError: (error: any) => {
      console.error("Error creating user:", error.response?.data);
    },
    onSuccess: (res: any) => {
      console.log("Mutation Reponse", res?.data);
      // setChecked();
    },
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSwitchStatus = event.target.checked;
    productStatus.mutate(newSwitchStatus);
    setChecked(event.target.checked);
  };

  const details: Detail[] = [
    { title: "Package Name", data: product.p_name },
    { title: "Description", data: product.p_name },
    { title: "Price", data: product.p_price },
    // { title: "Duration", data: product.duration },
    { title: "Test Month Limit", data: product.test_month_limit },
    { title: "Total Question", data: product.total_question },
    { title: "Release Date", data: product.release_date },
  ];
  return (
    <Card
      sx={{
        // boxShadow: "6px 6px 20px 0px #808080",
        // my: "15px",
        width: { lg: "1020px", md: "900px", sm: "900px", xs: "360px" },
        // height: { lg: "auto", md: "286px", sm: "286px", xs: "286px" },
        py: "1rem",
        px: "2rem",
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <ParaText3 text="Package Details" />
        <SwitchComp
          checked={checked}
          onChange={handleChange}
          // inputProps={{ "aria-label": "controlled" }}
        />
      </Stack>

      <Divider
        sx={{
          borderColor: "#FA8128",
          borderWidth: "3px",
          borderRadius: "3px",
          width: "90px",
        }}
      />

      <Box>
        {details?.map((item: Detail, key: number) => {
          return (
            <Stack
              //   flexDirection="row"
              //   sx={{ alignItems: "center", justifyContent: "space-between" }}
              marginY="1rem"
              //   marginBottom="50px"
              key={key}
            >
              <Grid container spacing={2}>
                <Grid xs={4}>
                  <ParaText3 text={item?.title} />
                </Grid>
                <Grid xs={8}>
                  <ParaText1 text={item?.data} css={{ m: "0", p: 0 }} />
                </Grid>
              </Grid>
            </Stack>
          );
        })}
      </Box>
      <Box sx={{ width: "100%", textAlign: "right" }}></Box>
    </Card>
  );
};

export default SectionOne;
