import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Container, Stack, Tab } from "@mui/material";
import React from "react";

import { Header1 } from "../../../Components/Common/HeaderText";
import { OButton } from "../../../Components/Common/Button";
import { Link } from "react-router-dom";
import SOTT from "./AddTestSeries/SOTT";
import OTT from "./AddTestSeries/OTT";

const TestSeries = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        width: "96%",
        my: 1,
        // mx: "auto",
        // py: 2,

        // minHeight: "100vh",
        // display: "flex",
        // flexDirection: "column",
        // border: 1,
        height: "85vh",
        backgroundColor: "#F5F5F5",
      }}
      disableGutters
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        // spacing={2}
        paddingY={2}
      >
        <Box>
          <Header1 header="Test Series" />
        </Box>

        <Stack direction="row" spacing={1}>
          <Link to="view-test-series-topics">
            <OButton name="View Topics" />
          </Link>
          <Link to="add-test-series">
            <OButton name="Add Series" />
          </Link>
        </Stack>
      </Stack>

      <TabContext value={value}>
        <Box sx={{ borderBottom: 2, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="Tabs">
            <Tab label="SOTT" value="1" />
            <Tab label="OTT" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <SOTT />
        </TabPanel>
        <TabPanel value="2">
          <OTT />
        </TabPanel>
      </TabContext>
    </Container>
  );
};

export default TestSeries;
