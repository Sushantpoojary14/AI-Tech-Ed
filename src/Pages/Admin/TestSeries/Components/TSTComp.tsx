import { Button, Stack } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { MRT_ColumnDef } from "material-react-table";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import adminTokenAxios from "../../../../Hooks/AdminTokenAxios";
import SimpleTable from "../../../../Components/Common/SimpleTable";
import LoadingBar from "../../../../Components/Headers/LoadingBar";
import { DeleteIconButton } from "../../../../Components/Common/Button";
import AlertBox from "../../../../Components/Common/AlertBox";

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
  const [open, setOpen] = useState<boolean>(false);
  const [open2, setOpen2] = useState<boolean>(false);

  const handleAlertBoxOpen = () => {
    setOpen(true);
  };

  const handleAlertBoxClose = () => {
    setOpen(false);
  };

  const handleAlertBoxOpen2 = () => {
    setOpen2(true);
  };

  const handleAlertBoxClose2 = () => {
    setOpen2(false);
  };

  const topics = useQuery({
    queryKey: ["topicList", tabId],
    queryFn: async () => {
      return await adminTokenAxios.get(`admin/show-topics/${tabId}`);
    },
  });

  console.log(topics?.data?.data.topics);

  const deleteTopicMutation = useMutation({
    mutationFn: async (topicId: any) => {
      console.log("mutation data", topicId);
      return await adminTokenAxios.delete(`/admin/delete-topic/${topicId}`);
    },
    onError: (error: any) => {
      console.log("Error Deleting Set:", error);
    },
    onSuccess: (res: any) => {
      console.log("Mutation Reponse", res?.response?.data?.Message);
      // setMessage(res?.response?.data?.Message);
      // handleAlertBoxOpen();
      // navigate(-1);
      if (res.status == 200) {
        handleAlertBoxOpen2();
      } else {
        handleAlertBoxOpen();
      }
    },
  });

  const handleDeleteTopic = (topicId: any) => {
    console.log("delete", topicId);
    deleteTopicMutation.mutate(topicId);
  };

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
          <Stack direction={"row"} spacing={1}>
            <Link to={`view-topic-questions/${cell.getValue<string>()}`}>
              <Button variant="outlined">View</Button>
            </Link>
            <DeleteIconButton
              type="button"
              func={() => handleDeleteTopic(cell.getValue<string>())}
            />
          </Stack>
        ),
      },
    ],
    []
    //end
  );
  return (
    <>
      <AlertBox
        name="Cannot Delete The Product"
        type="error"
        bol={open}
        duration={6000}
        handleAlertBoxClose={handleAlertBoxClose}
      />
      <AlertBox
        name="Successfully Deleted The Product"
        type="success"
        duration={6000}
        bol={open2}
        handleAlertBoxClose={handleAlertBoxClose2}
      />

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
