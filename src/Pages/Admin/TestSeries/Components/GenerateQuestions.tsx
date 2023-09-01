import React, { useEffect, useRef, useState } from "react";
import { Configuration, OpenAIApi } from "openai";

import Test from "../../../../Test";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Alert, Box, Dialog, Pagination, Stack } from "@mui/material";
import { BButton2 } from "../../../../Components/Common/Button";
import adminTokenAxios from "../../../../Hooks/AdminTokenAxios";
import PdfMaker from "./PdfMaker";
import AlertBox from "../../../../Components/Common/AlertBox";
import { UserContext } from "../../../../Context/UserContext";
import QuestionCard from "./QuestionCard";

type CsvItem = {
  Answer: string;
  Explanation: string;
  Option_A: string;
  Option_B: string;
  Option_C: string;
  Option_D: string;
  Question: string;
};

type mapData = {
  Answer: string;
  Explanation: string;
  Options: string[];
  Question: string;
  images?: string[];
};

interface GenerateProps {
  csvData?: any;
  topic?: any;
  topic1?: any;
  setCsvData?: any;
  reset?: any;
  edit: boolean;
  topicId?: number | string;
  handleClose?: () => void;
  setTopic?: any;
}

const GenerateQuestions = ({
  csvData,
  topic,
  topic1,
  setCsvData,
  reset,
  edit,
  topicId,
  handleClose,
  setTopic,
}: GenerateProps) => {
  const [resData, setResData] = useState([]);
  const [open, setOpen] = useState<boolean>(false);
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
      return await adminTokenAxios.get("/admin/get-image");
    },
    enabled: true,
  });
  let image_data = data?.data.images;
  // console.log(image_data);

  const addTestCTMu = useMutation({
    mutationFn: async (data: object[]) => {
      return await adminTokenAxios.post(`/admin/add-test-series-topics`, {
        tsc_id: topic1[0],
        t_name: topic1[4],
        question: data,
        topic: topic1[1],
        ts_id: topic1[3],
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

  const handleGenerate = async () => {
    const array1 = [
      "Question",
      "Option_A",
      "Option_B",
      "Option_C",
      "Option_D",
      "Answer",
      "Explanation",
    ];

    const array2 = Object.keys(csvData[0]);
    if (JSON.stringify(array1) === JSON.stringify(array2)) {
      const filteredCsvData = csvData.filter((item: any) => {
        if (item.Question) {
          // console.log(!!item.Question);
          return true;
        }
        return false;
      });
      console.log(filteredCsvData);
      newRes.mutate(filteredCsvData);
    } else {
      alert("upload csv in correct format");
    }
  };

  const openAi = new OpenAIApi(
    new Configuration({
      apiKey: import.meta.env.VITE_OPENAI_KEY,
    })
  );

  const newRes = useMutation({
    mutationFn: async (csvData: CsvItem[]) => {
      // console.log("object 2", input);
      const exception = new Error();
      exception.name = "CustomError";
      // throw exception;
      const responses: any[] = [];

      for (const item of csvData) {
        // console.log("loop", item);
        const query = `Generate five unique multiple-choice questions (MCQs) for the topic "${
          topic1[1]
        }". Follow the format below, maintaining the sentence structure while modifying variables like numbers. If there is a person's name in the question, use one of the specified names only for persons that is for male - sushant and for girl - sneha , and do not use these names for any other purpose. Ensure that each question includes options (a, b, c, d), a correct answer, and an explanation. If an explanation is not provided, mention that one should be generated.

        Example Question:
        Question: ${item.Question}
        Options:
        a. ${item.Option_A}
        b. ${item.Option_B}
        c. ${item.Option_C}
        d. ${item.Option_D}
        Answer: ${item.Answer}
        Explanation: ${
          item.Explanation
            ? item.Explanation
            : "Generate an explanation based on the question and correct answer"
        }
        
        ---
        Provide the JSON representation of the five MCQs in the following format:
        
        [
          {
            "Question": "Replace with question text",
            "Options": {
              "a": "Option A text",
              "b": "Option B text",
              "c": "Option C text",
              "d": "Option D text"
            },
            "Answer": "Correct answer letter (a, b, c, or d)",
            "Explanation": "Explanation for the correct answer"
          },
          {
            "Question": "Replace with question text",
            "Options": {
              "a": "Option A text",
              "b": "Option B text",
              "c": "Option C text",
              "d": "Option D text"
            },
            "Answer": "Correct answer letter (a, b, c, or d)",
            "Explanation": "Explanation for the correct answer and give it all text in on one line don't go to next line"
          },
       ...
        ]   
    `;
        // console.log("QUERY", query);
        const response = await openAi.createChatCompletion({
          model: "gpt-3.5-turbo-16k",
          messages: [{ role: "user", content: query }],
        });

        const message = response?.data?.choices[0]?.message?.content;
        // const questions = message?.split("Question:");
        // console.log(message);
        const questions = message && JSON.parse(message);

        questions?.map((item: mapData, index: any) => {
          let data = item.Question.split(" ");
          item.images = []; // Initialize an empty array for images

          image_data.forEach(
            (search: { image_name: string; image_url: string }) => {
              // Convert image name to uppercase for case-insensitive comparison
              const caps = search.image_name.toUpperCase();

              // Check if any word in the question matches the image name
              const match = data.find(
                (word: string) => word.toUpperCase() === caps
              );

              if (match) {
                item.images?.push(search.image_url); // Add the image URL to the question
              }
            }
          );

          if (item.images?.length === 0) {
            delete item.images; // Remove the 'images' property if it's empty
          }

          responses.push(item); // Add the modified item to the responses array
        });
        // console.log(responses);
      }

      return responses;
    },
    onSuccess: (data: any) => {
      setResData(data);
      console.log("Success Data", data);
    },
    onError: (error) => {
      console.log(error);
      handleAlertBoxOpen();
      // <AlertBox />
    },
  });

  // console.log(resData);

  return (
    <>
      <AlertBox
        name="There is something wrong with Generator. Please try Again"
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
        ? csvData.length > 0 && (
            <Stack marginY="1rem" direction="row" spacing={2}>
              {resData.length == 0 &&
                topic1[0] != 2 &&
                (newRes.isLoading ? (
                  <BButton2 type="button" name="Generating..." />
                ) : (
                  <BButton2
                    type="button"
                    func={handleGenerate}
                    name="Generate"
                  />
                ))}
              {resData.length != 0 && newRes.data && (
                <PdfMaker
                  data={newRes.data}
                  bol={!!newRes.data}
                  topic={topic1[1]}
                  button={<BButton2 type="button" name="Download" />}
                  total={topic1[2]}
                />
              )}
              {(resData.length != 0 || topic1[0] == 2) && (
                <BButton2
                  type="button"
                  func={() =>
                    !addTestCTMu.isLoading &&
                    (newRes.data
                      ? addTestCTMu.mutate(newRes.data)
                      : addTestCTMu.mutate(csvData))
                  }
                  name={addTestCTMu.isLoading ? "Uploading..." : "Upload"}
                />
              )}
              {(resData.length != 0 || topic1[0] == 2) && (
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
              {resData.length == 0 &&
                topic1[0] != 2 &&
                (newRes.isLoading ? (
                  <BButton2 type="button" name="Generating..." />
                ) : (
                  <BButton2
                    type="button"
                    func={handleGenerate}
                    name="Re-Generate"
                  />
                ))}
              {resData.length != 0 && newRes.data && (
                <PdfMaker
                  data={resData}
                  bol={!!resData}
                  topic={topic1[1]}
                  total={topic1[2]}
                  button={<BButton2 type="button" name="Download" />}
                />
              )}
              {(resData.length != 0 || topic1[0] == 2) && (
                <BButton2
                  type="button"
                  func={() =>
                    !updateTestCTMu.isLoading &&
                    (newRes.data
                      ? updateTestCTMu.mutate(newRes.data)
                      : updateTestCTMu.mutate(csvData))
                  }
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
          topic={topic1[1]}
          totalQuestions={totalQuestions}
        /> */}
      {/* ) : ( */}
      {/* <></> */}
      {/* )} */}
      {resData.length > 1 && (
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
            {currentData.map((questionData: any, index: any) => (
              <QuestionCard
                key={index}
                // questionNo={index + 1}
                images={questionData.images}
                question={questionData.Question}
                options={questionData.Options}
                answer={questionData.Answer}
                explanation={questionData.Explanation}
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

export default GenerateQuestions;
