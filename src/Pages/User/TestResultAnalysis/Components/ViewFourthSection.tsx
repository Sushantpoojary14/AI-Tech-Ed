import { Box, Card, Divider } from "@mui/material";

import { ParaText3 } from "../../../../Components/Common/ParaText";
import BarChart from "../../../../Components/Charts/BarChart";
import { relative } from "path";
const ViewFourthSection = ({ barData }: any) => {
  return (
    <Card
      sx={{
        boxShadow: "6px 6px 20px 0px #808080",
        my: "15px",
        width: { lg: "1020px", md: "900px", sm: "900px", xs: "360px" },
        height: { lg: "300px", md: "286px", sm: "286px", xs: "286px" },
        p: "14px",
      }}
    >
      <ParaText3 text="Performance Analysis" />
      <Divider
        sx={{
          borderColor: "#FA8128",
          borderWidth: "3px",
          borderRadius: "3px",
          width: "185px",
        }}
      />
      <Box width={1 / 2}>
        <BarChart barData={barData} />
      </Box>
    </Card>
  );
};

export default ViewFourthSection;
