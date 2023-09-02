import {
  Card,
  Container,
  Link,
  Stack,
  Table,
  TableContainer,
} from "@mui/material";
import EventRepeatOutlinedIcon from "@mui/icons-material/EventRepeatOutlined";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Header1 } from "../../../Components/Common/HeaderText";
import SelectBox from "../../../Components/Common/Select";
import { TableData, TableHeader } from "../../../Components/Common/Table";
import LoadingBar from "../../../Components/Headers/LoadingBar";
import tokenAxios from "../../../Hooks/TokenAxios";
import TestPurchasesTable from "./Components/TestPurchasesTable";
import axiosBaseURL from "../../../Hooks/BaseUrl";


const header = [
  "Sr. No",
  "Test Name",
  "Subject",
  "Time Limit",
  "Valid From",
  "Valid Till",
];


const MainTestSchedule = () => {
  const [selectVal, setSelectVal] = useState<number>(1);

  const {  data:ts_data } = useQuery( 
    ['ts'],
    ()=> axiosBaseURL.get(`/get-test-series`),
  );


  const { isLoading, data } = useQuery( 
    [selectVal,'purchases'],
    ()=> tokenAxios.get(`/get-user-purchases/${selectVal}`),
  );
  const tableData:any = data?.data?.tsp;
   
  
console.log(data);

  
  if (isLoading) {
    return <LoadingBar />;
  }
  return (
    <Container maxWidth="xl">
      <Stack
        direction="row"
        sx={{
          my: "18px",
          justifyContent: "center",
          mx: "auto",
          pr: { lg: "100px", xs: "0px", sm: "100px", md: "100px" },
        }}
      >
        <EventRepeatOutlinedIcon 
          sx={{
            height: "28px",
            width: "28px",
            color: "#FA8128",
            mx: "8px",
            my: "auto",
          }}
        />
        <Header1 header="TEST SCHEDULE" />
      </Stack>
      <SelectBox
        name="choose test type"
        selectName="test_type"
        defaultValue="OC"
        options={ts_data?.data.ts}
        func={setSelectVal}
      />
      <Card
        sx={{
          boxShadow: "6px 6px 20px 0px #808080",
          my: "15px",
          display: "flex",
          justifyContent: "space-between",
          py: "20px",
        }}
      >
        <TableContainer>
          <Table sx={{ minWidth: 650 }}>
            <TableHeader header={header} />
            <TestPurchasesTable data={tableData}  />
          </Table>
        </TableContainer>
      </Card>
    </Container>
  );
};

export default MainTestSchedule;
