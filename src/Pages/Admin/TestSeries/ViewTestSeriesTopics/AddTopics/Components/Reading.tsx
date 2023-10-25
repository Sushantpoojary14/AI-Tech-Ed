import { Pagination, Stack } from "@mui/material";
import React, { useState } from "react";
import { BButton2 } from "../../../../../../Components/Common/Button";
import DownloadPDF from "../../../Components/PDF/DownloadPDF";
import AlertBox from "../../../../../../Components/Common/AlertBox";
import { useMutation, useQuery } from "@tanstack/react-query";
import adminTokenAxios from "../../../../../../Hooks/AdminTokenAxios";
import QuestionCard from "../../../Components/QuestionCard";

type CsvItem = {
  Answer: string;
  Conversation?: string;
  Paragraph?: string;
  Explanation: string;
  Option_A: string;
  Option_B: string;
  Option_C: string;
  Option_D: string;
  Question: string;
};

type mapData = {
  Conversation?: string;
  Paragraph?: string;
  Answer: string;
  Explanation: string;
  Options: string[];
  Question: string;
  images?: string[];
};
interface ReadingProps {
  csvData?: any;

  formData: any;
  setCsvData?: any;
  reset?: any;
  edit: boolean;
  topicId?: number | string;
  handleClose?: () => void;
  setTopic?: any;
}

const Reading = ({
  csvData,
  formData,
  setCsvData,
  reset,
  edit,
  topicId,
  handleClose,
  setTopic,
}: ReadingProps) => {
  const [category, topicGen, totalQuestions, testType, topicName] = formData;
  const [resData, setResData] = useState([]);
  const [open, setOpen] = useState<boolean>(false);
  const [errMessage, setErrMessage] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = resData.slice(startIndex, endIndex);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    setCurrentPage(newPage);
  };

  const handleAlertBoxOpen = () => {
    setOpen(true);
  };

  const handleAlertBoxClose = () => {
    setOpen(false);
  };

  const [open2, setOpen2] = useState<boolean>(false);
  const handleAlertBoxOpen2 = () => {
    setOpen2(true);
  };

  const handleAlertBoxClose2 = () => {
    setOpen2(false);
  };

  const { data } = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      return await adminTokenAxios.get(`/admin/get-image/${category}`);
    },
    enabled: !!category,
  });
  let image_data = data?.data.images;
  // console.log(image_data);

  const addTestCTMu = useMutation({
    mutationFn: async (data: object[]) => {
      console.log(data);

      return await adminTokenAxios.post(`/admin/add-test-series-topics`, {
        tsc_id: category,
        t_name: topicName,
        question: data,
        topic: topicGen,
        ts_id: testType,
      });
    },
    onError: (error: any) => {
      console.error("Error creating user:", error.response?.data);
    },
    onSuccess: (res: any) => {
      if (res.status == 200) {
        console.log(res);
        handleAlertBoxOpen2();
        // navigate(`/admin/test-series/view-test-series-topics`);
        reset({
          tsc_id: "",
          topic: "",
        });
        setCsvData([]);
        setResData([]);
      }
    },
  });

  const updateTestCTMu = useMutation({
    mutationFn: async (data: object[]) => {
      return await adminTokenAxios.put(
        `/admin/update-test-series-topics/${topicId}`,
        { question: data }
      );
    },
    onError: (error: any) => {
      console.error("Error creating user:", error.response?.data);
    },
    onSuccess: (res: any) => {
      if (res.status == 200) {
        console.log(res);
        handleAlertBoxOpen2();
        // navigate(`/admin/test-series/view-test-series-topics`);
        // reset({
        //   tsc_id: "",
        //   topic: "",
        // });
        setCsvData([]);
        setResData([]);
        setTopic(null);
        handleClose?.();
      }
    },
  });

  const handleUpload = async (data: any) => {
    if (category == 2) {
      const header3 = [
        "Paragraph",
        "Question",
        "Option_A",
        "Option_B",
        "Option_C",
        "Option_D",
        "Answer",
        "Explanation",
      ];

      const array2 = Object.keys(data[0]);

      if (JSON.stringify(header3) === JSON.stringify(array2)) {
        const filteredCsvData = csvData.filter((item: any) => {
          if (item.Question && item.Answer) {
            return true;
          }
          return false;
        });
        addTestCTMu.mutate(filteredCsvData);
      } else {
        alert("upload csv in correct formast");
      }
    } else {
      addTestCTMu.mutate(data);
    }
  };

  // console.log(!(totalQuestions));

  return (
    <>
      <AlertBox
        name={errMessage}
        type="error"
        bol={open}
        handleAlertBoxClose={handleAlertBoxClose}
      />

      <AlertBox
        name="Successfully added Topic"
        type="success"
        bol={open2}
        handleAlertBoxClose={handleAlertBoxClose2}
      />

      {!edit
        ? (csvData.length > 0 || category == "1") && (
            <Stack marginY="1rem" direction="row" spacing={2}>
              {(resData.length != 0 || category == 2) && (
                <BButton2
                  type="button"
                  func={() => handleUpload(csvData)}
                  name={addTestCTMu.isLoading ? "Uploading..." : "Upload"}
                />
              )}
              {(resData.length != 0 || category == 2) && (
                <BButton2
                  type="button"
                  func={() => setResData([])}
                  name={"Reset"}
                />
              )}
            </Stack>
          )
        : csvData.length > 0 && (
            <Stack marginY="1rem" direction="row" spacing={2}>
              {/* {resData.length != 0 && newRes.data && (
                        // <DownloadPDF
                        //   data={resData}
                        //   bol={!!resData}
                        //   topic={topicGen}
                        //   total={totalQuestions}
                        //   button={<BButton2 type="button" name="Download" />}
                        // />
                      )} */}
              {(resData.length != 0 || category == 2) && (
                <BButton2
                  type="button"
                  func={() => updateTestCTMu.mutate(csvData)}
                  name={updateTestCTMu.isLoading ? "Uploading..." : "Upload"}
                />
              )}
            </Stack>
          )}
      {/* { csvData.length - 2 < currentIndex && <PdfMaker data={resData} />} */}
      {/* {generate ? (
                <Test
                  key={currentData.Question}
                  item={currentData}
                  topic={topicGen}
                  totalQuestions={totalQuestions}
                /> */}
      {/* ) : ( */}
      {/* <></> */}
      {/* )} */}
      {resData?.length > 1 && (
        <>
          <Stack alignItems={"center"} mt={2} mb={1}>
            <Pagination
              color="secondary"
              variant="outlined"
              count={Math.ceil(resData.length / itemsPerPage)} // Calculate the number of pages
              page={currentPage}
              onChange={handlePageChange}
            />
          </Stack>
          <Stack spacing={2}>
            {currentData?.map((questionData: any, index: any) => (
              <QuestionCard
                key={index}
                // questionNo={index + 1}
                paragraph={questionData?.Paragraph}
                conversation={questionData?.Conversation}
                images={questionData?.images}
                question={questionData?.Question}
                options={questionData?.Options}
                answer={questionData?.Answer}
                explanation={questionData?.Explanation}
              />
            ))}
          </Stack>
          <Stack alignItems={"center"} mt={2} mb={1}>
            <Pagination
              color="secondary"
              variant="outlined"
              count={Math.ceil(resData.length / itemsPerPage)} // Calculate the number of pages
              page={currentPage}
              onChange={handlePageChange}
            />
          </Stack>
        </>
      )}
    </>
  );
};

export default Reading;
