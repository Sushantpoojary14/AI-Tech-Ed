import {
  Box,
  Container,
  Stack,
  Card,
  TableContainer,
  Table,
} from "@mui/material";
import React from "react";
import SelectBox from "../../../Components/Common/Select";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import UseGet from "../../../Hooks/UseGet";
import LoadingBar from "../../../Components/Headers/LoadingBar";
import SimpleCard from "../components/SimpleCard";
import Grid from "@mui/material/Unstable_Grid2";
import { TableData, TableHeader } from "../../../Components/Common/Table";
import { Header2, Header4 } from "../../../Components/Common/HeaderText";

const SOTT = () => {
  interface option {
    name: string;
    value: number;
  }

  const options: option[] = [
    { name: "STT Package 1", value: 1 },
    { name: "STT Package 2", value: 2 },
    { name: "STT Package 3", value: 3 },
    { name: "STT Package 4", value: 4 },
    { name: "STT Package 5", value: 5 },
  ];

  const header = ["Package Name", "Total Purchases"];
  const tableData = [
    { name: "STT Package 1", total_purchases: "2" },
    { name: "STT Package 1", total_purchases: "4" },
    { name: "STT Package 1", total_purchases: "4" },
    { name: "STT Package 1", total_purchases: "4" },
    { name: "STT Package 1", total_purchases: "4" },
  ];

  const header2 = ["Student Name", "Percentage"];
  const studentPerformance = [
    { name: "John Doe", percentage: "80%" },
    { name: "John Doe", percentage: "80%" },
    { name: "John Doe", percentage: "80%" },
    { name: "John Doe", percentage: "80%" },
    { name: "John Doe", percentage: "80%" },
    { name: "John Doe", percentage: "80%" },
    { name: "John Doe", percentage: "80%" },
    { name: "John Doe", percentage: "80%" },
    { name: "John Doe", percentage: "80%" },
  ];

  const [selectVal, setSelectVal] = useState<number>(1);

  const { isLoading, data, refetch } = useQuery({
    queryKey: ["selectTest", selectVal],
    queryFn: UseGet("https://dummyjson.com/products?limit=6"),
  });

  if (isLoading) {
    return <LoadingBar />;
  }

  return (
    <Container maxWidth={false} sx={{ p: 0, border: 1 }}>
      <Box my={1}>
        <SelectBox
          name="Select Test"
          selectName="Select_Test"
          options={options}
          func={setSelectVal}
        />
      </Box>
      <Box mt={0} mb={1} sx={{ flexGrow: 1 }}>
        <Box display={"flex"} justifyContent={"space-between"}>
          {/* Left Side */}
          <Stack>
            <Box>
              <Stack
                marginY={2}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                <SimpleCard />
                <SimpleCard />
              </Stack>
            </Box>
            <Box>
              <Header2 header="Test Series" css={{ fontSize: "1.2rem" }} />
              <Card sx={{ boxShadow: "5px 5px 20px 0px #808080", my: "15px" }}>
                <Box sx={{ height: 240, overflow: "auto" }}>
                  <TableContainer>
                    <Table sx={{ minWidth: 650 }}>
                      <TableHeader header={header} />
                      <TableData
                        data={tableData}
                        url="/user/Test-result-analysis"
                      />
                    </Table>
                  </TableContainer>
                </Box>
              </Card>
            </Box>
          </Stack>
          {/* Right Side */}
          <Stack>
            <Box>
              <Header2
                header="Student Perforamnce"
                css={{ mt: "1rem", fontSize: "1.2rem" }}
              />
              <Card
                sx={{ boxShadow: "5px 5px 20px 0px #808080", mt: "0.5rem" }}
              >
                <Box sx={{ height: 400, overflow: "auto" }}>
                  <TableContainer>
                    <Table sx={{ minWidth: 650 }}>
                      <TableHeader header={header2} />
                      <TableData
                        data={studentPerformance}
                        url="/user/Test-result-analysis"
                      />
                    </Table>
                  </TableContainer>
                </Box>
              </Card>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default SOTT;
