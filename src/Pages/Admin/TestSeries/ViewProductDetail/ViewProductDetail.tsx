import { Container, Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import SectionOne from "./SectionOne";

import ViewFirstSection from "../../../User/TestResultAnalysis/Components/ViewFirstSection";
import SectionTwo from "./SectionTwo";
import adminTokenAxios from "../../../../Hooks/AdminTokenAxios";
import { useMutation, useQuery } from "@tanstack/react-query";

const ViewProductDetail = () => {
  const { productdetails } = useParams();

  const testSeries = useQuery({
    queryKey: ["ViewProductDetails", productdetails],
    queryFn: async () => {
      try {
        const response = await adminTokenAxios.get(
          `admin/show-product-details/${productdetails}`
        );
        console.log("Products Details", response.data?.product_detail);

        return response.data?.product_detail;
      } catch (error) {
        console.error(error);
      }
    },
  });

  const updateSetStatus = useMutation({
    mutationFn: async ({ setId, newStatus }: any) => {
      console.log("mutation data", setId, newStatus);
      return await adminTokenAxios.post(`/admin/update-set-status/${setId}`, {
        status: newStatus,
      });
    },
    onError: (error: any) => {
      console.error("Error creating user:", error.response?.data);
    },
    onSuccess: (res: any) => {
      console.log("Mutation Reponse", res?.data);
      // setChecked();
    },
  });

  if (testSeries.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Container maxWidth="lg">
      <Stack
        mt={2}
        // direction="row"
        spacing={2}
        // flexWrap="wrap"
        // sx={{ width: "100%" }}
      >
        <SectionOne product={testSeries?.data} />
        {/* <Stack direction="column" spacing={3} useFlexGap flexWrap="wrap"> */}
        <SectionTwo
          sets={testSeries?.data?.categories}
          updateSetStatus={updateSetStatus}
        />
        {/* </Stack> */}
      </Stack>
    </Container>
  );
};

export default ViewProductDetail;
