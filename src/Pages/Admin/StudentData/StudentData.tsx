import {
  Box,
  Container,
  Stack,
  Card,
  TableContainer,
  Table,
} from "@mui/material";
import { Header1 } from "../../../Components/Common/HeaderText";
import { TableData, TableHeader } from "../../../Components/Common/Table";
import AdvanceTable from "../components/AdvanceTable";

interface DataItem {
  user_Id: string | number;
  student_Name: string;
  test_Type: string;
  date_Of_Purchase: String;
  valid_From: string;
  valid_To: string;
  //   total_Purchases: string | number;
}

const StudentData = () => {
  const header = [
    "User Id",
    "Student Name",
    "Test Type",
    "Date of Purchase",
    "Valid From",
    "Valid To",
    // "Details",
  ];
  const tableData: DataItem[] = [
    {
      user_Id: "STT Package 1",
      student_Name: "2",
      test_Type: "STTP",
      date_Of_Purchase: "30/06/2023",
      valid_From: "29/9/2022",
      valid_To: "29/10/2022",
    },
    {
      user_Id: "STT Package 1",
      student_Name: "2",
      test_Type: "OTTP",
      date_Of_Purchase: "30/06/2023",
      valid_From: "29/9/2022",
      valid_To: "29/10/2022",
    },
    {
      user_Id: "STT Package 1",
      student_Name: "2",
      test_Type: "STTP",
      date_Of_Purchase: "30/06/2023",
      valid_From: "29/9/2022",
      valid_To: "29/10/2022",
    },
    {
      user_Id: "STT Package 1",
      student_Name: "2",
      test_Type: "OTTP",
      date_Of_Purchase: "30/06/2023",
      valid_From: "29/9/2022",
      valid_To: "29/10/2022",
    },
    {
      user_Id: "STT Package 1",
      student_Name: "2",
      test_Type: "STTP",
      date_Of_Purchase: "30/06/2023",
      valid_From: "29/9/2022",
      valid_To: "29/10/2022",
    },
    {
      user_Id: "STT Package 1",
      student_Name: "2",
      test_Type: "OTTP",
      date_Of_Purchase: "30/06/2023",
      valid_From: "29/9/2022",
      valid_To: "29/10/2022",
    },
    {
      user_Id: "STT Package 1",
      student_Name: "2",
      test_Type: "STTP",
      date_Of_Purchase: "30/06/2023",
      valid_From: "29/9/2022",
      valid_To: "29/10/2022",
    },
    {
      user_Id: "STT Package 1",
      student_Name: "2",
      test_Type: "OTTP",
      date_Of_Purchase: "30/06/2023",
      valid_From: "29/9/2022",
      valid_To: "29/10/2022",
    },
    {
      user_Id: "STT Package 1",
      student_Name: "2",
      test_Type: "STTP",
      date_Of_Purchase: "30/06/2023",
      valid_From: "29/9/2022",
      valid_To: "29/10/2022",
    },
    {
      user_Id: "STT Package 1",
      student_Name: "2",
      test_Type: "OTTP",
      date_Of_Purchase: "30/06/2023",
      valid_From: "29/9/2022",
      valid_To: "29/10/2022",
    },
  ];

  return (
    <Container maxWidth="lg">
      <Stack>
        <Header1 header="Student Data" />
        <Box>
          {/* <Card sx={{ boxShadow: "5px 5px 20px 0px #808080", my: "10px" }}>
            <Box sx={{ height: 570, overflow: "auto" }}>
              <TableContainer>
                <Table sx={{}}>
                  <TableHeader header={header} />
                  <TableData
                    data={tableData}
                    url="/user/Test-result-analysis"
                  />
                </Table>
              </TableContainer>
            </Box>
          </Card> */}
          <AdvanceTable />
        </Box>
      </Stack>
    </Container>
  );
};

export default StudentData;
