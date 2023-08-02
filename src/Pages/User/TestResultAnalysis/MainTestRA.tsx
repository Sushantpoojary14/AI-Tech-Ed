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
  "Test name",
  "Test date",
  "Subject",
  "Marks scored",
  "Percentage",
  "Time Taken",
  "Total Questions Answered",
  "Correct Questions Answered",
  "Rank",
];
const tableData = [
  {
    id: 1,
    name: "test1",
    test_date: "29/9/2022",
    subject: "Maths-1",
    Marks_scored: "37/50",
    Percentage: "75%",
    Time_Taken: "00.45.00",
    Total_Questions_Answered: "15/15",
    Correct_Questions_Answered: "15/15",
    Rank: "1",
  },
  {
    id: 2,
    name: "test2",
    test_date: "29/10/2022",
    subject: "maths-2",
    Marks_scored: "37/50",
    Percentage: "75%",
    Time_Taken: "00.45.00",
    Total_Questions_Answered: "15/15",
    Correct_Questions_Answered: "10/15",
    Rank: "1",
  },
  {
    id: 5,
    name: "test2",
    test_date: "29/10/2022",
    subject: "maths-2",
    Marks_scored: "37/50",
    Percentage: "75%",
    Time_Taken: "00.45.00",
    Total_Questions_Answered: "15/15",
    Correct_Questions_Answered: "9/15",
    Rank: "1",
  },
];

const MainTestRA = () => {
  const [selectVal, setSelectVal] = useState<number>(1);

  const { isLoading, data, refetch } = useQuery({
    queryKey: [],
    queryFn: UseGet("https://dummyjson.com/products?limit=100"),
  });

  if (isLoading) {
    return <LoadingBar />;
  }
  return (
    <Container maxWidth="xl">
      <SelectBox
        name="choose test type"
        selectName="test_type"
        options={options}
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
            <TableData data={tableData} url="/user/Test-result-analysis/view" />
          </Table>
        </TableContainer>
      </Card>
    </Container>
  );
};

export default MainTestRA;
