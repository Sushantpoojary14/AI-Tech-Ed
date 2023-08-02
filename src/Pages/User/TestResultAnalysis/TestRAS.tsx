import {
  Card,
  Container,
  Stack,
  Box,
  TableContainer,
  Table,
} from "@mui/material";
import { useState } from "react";
import UseGet from "../../../Hooks/UseGet";
import { useQuery } from "@tanstack/react-query";
import LoadingBar from "../../../Components/Headers/LoadingBar";
import SelectBox from "../../../Components/Common/Select";
import { TableData, TableHeader } from "../../../Components/Common/Table";

interface option {
  name: string;
  value: number;
}
const options: option[] = [
  { name: "OC Online Trial test", value: 1 },
  { name: "Selective Test", value: 2 },
];

const header = [
  "Sr. No",
  "Section",
  "Topic",
  "Correct option",
  "Result",
  "Marks(each question)",
  "Time Taken(seconds)",
  "Real Time Difficulty Level",
];
const tableData = [
  {
    id: 1,
    name: "Reading",
    Topic: "SOTT - I",
    Correct_option: "A",
    Result: "37/50",
    Marks: "1/1",
    Time_Taken: "00.45.00",
    Total_Questions_Answered: "Easy",
  },
  {
    id: 2,
    name: "Thinking Skills",
    Topic: "SOTT - I",
    Correct_option: "A",
    Result: "37/50",
    Marks: "1/1",
    Time_Taken: "00.45.00",
    Level: "Easy",
  },
  {
    id: 5,
    name: "Reading",
    Topic: "SOTT - I",
    Correct_option: "A",
    Result: "37/50",
    Marks: "1/1",
    Time_Taken: "00.45.00",
    Level: "Easy",
  },
];

const TestRAS = () => {
  const { isLoading, data, refetch } = useQuery({
    queryKey: [],
    queryFn: UseGet("https://dummyjson.com/products?limit=100"),
  });

  if (isLoading) {
    return <LoadingBar />;
  }
  return (
    <Container maxWidth="xl">
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
            <TableData data={tableData} url="/user/Test-result-analysis/view" />
          </Table>
        </TableContainer>
      </Card>
    </Container>
  );
};

export default TestRAS;
