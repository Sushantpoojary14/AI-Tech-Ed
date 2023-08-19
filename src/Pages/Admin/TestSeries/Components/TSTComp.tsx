import { Button } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { MRT_ColumnDef } from "material-react-table";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import adminTokenAxios from "../../../../Hooks/AdminTokenAxios";
import SimpleTable from "../../../../Components/Common/SimpleTable";
import LoadingBar from "../../../../Components/Headers/LoadingBar";

interface TableCompProps {
  tabId: string | number;
}

type topicList = {
  id: number;
  t_name: string;
  tsc_id: number;
  status: number;
};
const TSTComp = ({ tabId }: TableCompProps) => {
  const topics = useQuery({
    queryKey: ["topicList", tabId],
    queryFn: async () => {
      return await adminTokenAxios.get(`admin/show-topics/${tabId}`);
    },
  });

  console.log(topics?.data?.data.topics);

  const columns = useMemo<MRT_ColumnDef<topicList>[]>(
    //column definitions...
    () => [
      {
        accessorKey: "t_name",
        header: "Topic Name",
      },
      {
        accessorKey: "id",
        header: "",
        Cell: ({ cell }) => (
          <Link to={`view-topic-questions/${cell.getValue<string>()}`}>
            <Button variant="outlined">View</Button>
          </Link>
        ),
      },
    ],
    []
    //end
  );
  return (
    <>
      {topics.isLoading ? (
        <LoadingBar />
      ) : topics.isSuccess ? (
        <SimpleTable columns={columns} data={topics?.data?.data.topics} />
      ) : (
        <div>No Data</div>
      )}
    </>
  );
};

export default TSTComp;
