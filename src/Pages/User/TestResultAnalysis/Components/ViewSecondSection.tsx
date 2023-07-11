import { Stack, Card, Divider, Box } from "@mui/material";

import { ParaText3 } from "../../../../Components/Common/ParaText";
import PieChart from "../../../../Components/Charts/PieChart";
const ViewSecondSection = ({ pieData }: any) => {
  return (
    <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap" margin="auto">
      <Card
        sx={{
          boxShadow: "6px 6px 20px 0px #808080",
          my: "15px",
          width: { lg: "500px", md: "400px", sm: "400px", xs: "360px" },
          height: { lg: "auto", md: "286px", sm: "286px", xs: "286px" },
          p: "14px",
          // pl: "14px",
        }}
      >
        <ParaText3 text="Questions Distribution" />
        <Divider
          sx={{
            borderColor: "#FA8128",
            borderWidth: "3px",
            borderRadius: "3px",
            width: "182px",
          }}
        />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <PieChart pieData={pieData} />
        </Box>
      </Card>

      <Card
        sx={{
          boxShadow: "6px 6px 20px 0px #808080",
          my: "15px",
          width: { lg: "500px", md: "400px", sm: "400px", xs: "360px" },
          height: { lg: "auto", md: "286px", sm: "286px", xs: "286px" },
          p: "14px",
        }}
      >
        <ParaText3 text="Marks Distribution" />
        <Divider
          sx={{
            borderColor: "#FA8128",
            borderWidth: "3px",
            borderRadius: "3px",
            width: "152px",
          }}
        />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <PieChart pieData={pieData} />
        </Box>
      </Card>
    </Stack>
  );
};

export default ViewSecondSection;
