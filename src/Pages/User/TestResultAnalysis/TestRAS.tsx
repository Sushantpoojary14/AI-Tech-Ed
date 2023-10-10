import {
  Card,
  Container,
  Stack,
  Box,
  TableContainer,
  Table,
} from "@mui/material";
import { useMemo, useState } from "react";
import UseGet from "../../../Hooks/UseGet";
import { useQuery } from "@tanstack/react-query";
import LoadingBar from "../../../Components/Headers/LoadingBar";
import SelectBox from "../../../Components/Common/Select";
import { TableData, TableHeader } from "../../../Components/Common/Table";
import { useParams } from "react-router-dom";
import tokenAxios from "../../../Hooks/TokenAxios";
import { AppContext } from "../../../Context/AppContext";
import { MRT_ColumnDef } from "material-react-table";
import AdvanceTable from "../../Admin/components/AdvanceTable";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import SolutionsModal from "../../../Components/Model/SolutionsModal";

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

type SetResult = {
  id: number;
  q_id: number;
  status_id: number;
  test_answer: string | null;
  marks: number;
  uts_id: number;
  test_time: string;
  topic: string;
  correct_option: string;
  set_name: string;
};

const TestRAS = () => {
  const { id } = useParams();
  // const {user} = AppContext()

  const [questionID, setQuestionID] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = (id: string) => {
    setQuestionID(id);
    setOpen(true);
  };

  const { isLoading, data, refetch } = useQuery({
    queryKey: ["get-user-set-result"],
    queryFn: () => {
      return tokenAxios.get(`/get-user-set-result/${id}`);
    },
  });

  console.log(
    data,
  );

  const columns = useMemo<MRT_ColumnDef<SetResult>[]>(
    () => [
      // {
      //   accessorKey: "no",
      //   header: "No.",
      //   Cell: ({ row }) => {
      //     const { index } = row;
      //     return <span>{index + 1}</span>;
      //   },
      //   size: 100,
      //   muiTableHeadCellProps: {
      //     align: "center",
      //   },
      //   muiTableBodyCellProps: {
      //     align: "center",
      //   },
      // },
      {
        accessorKey: "set_name",
        header: "Test Name",
        size: 200,
      },
      {
        accessorKey: "topic",
        header: "Subject",
        size: 150,
      },

      {
        accessorKey: "test_answer",
        header: "Marked Answered",
        size: 100,
        muiTableHeadCellProps: {
          align: "center",
        },
        muiTableBodyCellProps: {
          align: "center",
        },
      },
      {
        accessorKey: "marks",
        header: "Marks",
        size: 100,
        muiTableHeadCellProps: {
          align: "center",
        },
        muiTableBodyCellProps: {
          align: "center",
        },
      },
      {
        accessorKey: "test_time",
        header: "Time Taken",
        size: 100,
        muiTableHeadCellProps: {
          align: "center",
        },
        muiTableBodyCellProps: {
          align: "center",
        },
      },
      {
        accessorKey: "correct_option",
        header: "Correct Answer",
        size: 100,
        muiTableHeadCellProps: {
          align: "center",
        },
        muiTableBodyCellProps: {
          align: "center",
        },
      },

      {
        accessorKey: "id",
        header: "",
        size: 100,
        Cell: ({ cell }: any) => (
          <ArticleOutlinedIcon
            sx={{
              width: "25px",
              height: "25px",
              color: "#3A9BDC",
              cursor: "pointer",
            }}
            onClick={() => handleOpen(cell.getValue())} //cell.getValue()
          />
        ),
        //   enableSorting: false,
        muiTableHeadCellProps: {
          align: "center",
        },
        muiTableBodyCellProps: {
          align: "center",
        },
      },
    ],
    []
  );

  if (isLoading) {
    return <LoadingBar />;
  }

  const props = {
    columns: columns,
    data: data?.data?.result,
    // isError: isError,
    // isFetching: isFetching,
    // isLoading: isFetching,
    // refetch: refetch,
    // setColumnFilters: setColumnFilters,
    // setGlobalFilter: setGlobalFilter,
    // setPagination: setPagination,
    // setSorting: setSorting,
  };

  return (
    <>
      <Container maxWidth="lg">
        {/* <Card
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
      </Card> */}
        <Stack mb={2}>
          <AdvanceTable {...props} />
        </Stack>
      </Container>

      <SolutionsModal
        setOpen={setOpen}
        setQuestionID={setQuestionID}
        open={open}
        id={questionID}
      />
    </>
  );
};

export default TestRAS;
