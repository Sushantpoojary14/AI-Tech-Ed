import { Container, Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import SectionOne from "./SectionOne";

import ViewFirstSection from "../../../User/TestResultAnalysis/Components/ViewFirstSection";
import SectionTwo from "./SectionTwo";
import adminTokenAxios from "../../../../Hooks/AdminTokenAxios";
import { useQuery } from "@tanstack/react-query";

const product = {
  name: "Product Name",
  description: "Product Description",
  price: "$99.99",
  image: "/path/to/product-image.jpg",
  duration: "3 months",
  test_month_limit: "Unlimited",
  total_question: "100",
  release_date: "2023-08-15",
  purchaseCount: "500",
};

const ViewProductDetail = () => {
  const { productdetails } = useParams();

  const testSeries = useQuery({
    queryKey: ["TestSeriesTopics", productdetails],
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
        <SectionTwo sets={testSeries?.data?.categories} />
        {/* </Stack> */}
      </Stack>
    </Container>
  );
};

export default ViewProductDetail;
