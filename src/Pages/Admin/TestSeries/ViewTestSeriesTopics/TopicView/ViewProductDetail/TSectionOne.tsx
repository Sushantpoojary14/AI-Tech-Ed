import {
  Container,
  Stack,
  Card,
  Divider,
  Box,
  Switch,
  Typography,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { useMemo, useState } from "react";

import Grid from "@mui/material/Unstable_Grid2";
import {
  ParaText1,
  ParaText3,
} from "../../../../../../Components/Common/ParaText";
import { UserContext } from "../../../../../../Context/UserContext";
import { MRT_ColumnDef } from "material-react-table";
import SimpleTable from "../../../../../../Components/Common/SimpleTable";
import {
  DeleteIconButton,
  DownloadIconButton,
  OButton,
} from "../../../../../../Components/Common/Button";
import PdfMaker from "../../../PdfMaker";

interface Detail {
  title: string;
  data: string;
}

interface props {
  topics: {
    id: number;
    t_name: string;
    tsc_id: number;
    status: number;
  };
  questions: questionList[];
}

type questionList = {
  id: number;
  question: string;
  option_1: string;
  option_2: string;
  option_3: string;
  option_4: string;
  option_5: null;
  correct_option: string | number;
  explanation: string;
  tst_id: number;
  marks: null | number;
  status: number;
};
const TSectionOne = ({ topics, questions }: props) => {
  const { handlePEOpen, dataSubmit } = UserContext();

  const [checked, setChecked] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const columns = useMemo<MRT_ColumnDef<questionList>[]>(
    //column definitions...
    () => [
      {
        accessorKey: "question",
        header: "Question",
      },
      {
        accessorKey: "option_1",
        header: "Option 1",
      },
      {
        accessorKey: "option_2",
        header: "Option 2",
      },
      {
        accessorKey: "option_3",
        header: "Option 4",
      },
      {
        accessorKey: "option_4",
        header: "Option 4",
      },
      {
        accessorKey: "correct_option",
        header: "Correct Answer",
        Cell: ({ cell }) => {
          switch (cell.getValue<string>()) {
            case "1":
              return <span>A</span>;
            case "2":
              return <span>B</span>;
            case "3":
              return <span>C</span>;
            case "4":
              return <span>D</span>;
          }
        },
      },
      {
        accessorKey: "explanation",
        header: "Explanation",
      },
      // {
      //   accessorKey: "id",
      //   header: "",
      //   Cell: ({ cell }) => (
      //     <Link to={`view-product-detail/${cell.getValue<string>()}`}>
      //       <Button variant="outlined">View</Button>
      //     </Link>
      //   ),
      // },
    ],
    []
    //end
  );
  return (
    <Card
      sx={{
        // boxShadow: "6px 6px 20px 0px #808080",
        // my: "15px",
        width: { lg: "1020px", md: "900px", sm: "900px", xs: "360px" },
        // height: { lg: "auto", md: "286px", sm: "286px", xs: "286px" },
        py: "1rem",
        px: "2rem",
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <ParaText3 text={`Topic Name - ${topics.t_name}`} />
        {/* <Switch
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />*/}
        <Stack direction={"row"} alignItems={"center"} spacing={2}>
          <PdfMaker bol={true} topic={topics.t_name} data={questions} />

          <DeleteIconButton type="button" func={() => console.log("v")} />
        </Stack>
      </Stack>

      <Box marginY={2}>
        {questions ? (
          <SimpleTable columns={columns} data={questions} />
        ) : (
          <div>No Data</div>
        )}
      </Box>
      <Box sx={{ width: "100%", textAlign: "right" }}></Box>
    </Card>
  );
};

export default TSectionOne;
