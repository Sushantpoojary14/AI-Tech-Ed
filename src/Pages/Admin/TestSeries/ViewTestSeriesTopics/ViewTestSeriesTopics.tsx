import { Box, Container, Stack, Tab } from "@mui/material";
import React, { useState } from "react";
import { Header1 } from "../../../../Components/Common/HeaderText";
import { OButton } from "../../../../Components/Common/Button";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import adminTokenAxios from "../../../../Hooks/AdminTokenAxios";
import { useQuery } from "@tanstack/react-query";

import { Link } from "react-router-dom";
import TSTComp from "../Components/TSTComp";
import LoadingBar from "../../../../Components/Headers/LoadingBar";

const ViewTestSeriesTopics = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleClick = (id: number) => {
    console.log(id);
  };

  const getTestSeries = async () => {
    try {
      const response = await adminTokenAxios.get(`admin/get-test-series`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const testSeries = useQuery({
    queryKey: ["TestSeriesTopics"],
    queryFn: getTestSeries,
  });

  if (testSeries.isLoading) {
    return <LoadingBar />;
  }
  return (
    <>
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
          // height: "85vh",
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
            <Header1 header="View Topics" />
          </Box>

          <Stack direction="row" spacing={1}>
            <Link to="add-topics">
              <OButton name="Add Topics" />
            </Link>
          </Stack>
        </Stack>

        <TabContext value={value}>
          <Box sx={{ borderBottom: 2, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="Tabs">
              {testSeries?.data?.tsc.map((item: any) => (
                <Tab
                  label={item.tsc_type}
                  value={JSON.stringify(item.id)}
                  key={item.id}
                  onClick={() => handleClick(item.id)}
                />
              ))}

              {/* <Tab label="SOTT" value="1" />
            <Tab label="OTT" value="2" /> */}
            </TabList>
          </Box>
          {testSeries?.data?.tsc.map((item: any) => (
            <TabPanel value={JSON.stringify(item.id)} key={item.id}>
              {/* Render dynamic content based on the tab value */}
              {/* For example, you can fetch content related to this tab */}
              {/* {getContentForTab(item.id)} */}
              <TSTComp tabId={item.id} />
            </TabPanel>
          ))}
        </TabContext>
      </Container>
    </>
  );
};

export default ViewTestSeriesTopics;
