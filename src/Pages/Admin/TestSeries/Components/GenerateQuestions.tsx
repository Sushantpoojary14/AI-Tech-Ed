import React, { useEffect, useRef, useState } from "react";
import { Configuration, OpenAIApi } from "openai";

import Test from "../../../../Test";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Alert, Box, Dialog, Stack } from "@mui/material";
import { BButton2 } from "../../../../Components/Common/Button";
import adminTokenAxios from "../../../../Hooks/AdminTokenAxios";
import PdfMaker from "./PdfMaker";
import AlertBox from "../../../../Components/Common/AlertBox";
import { UserContext } from "../../../../Context/UserContext";

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
  answer: string;
  explanation: string;
  options: string[];
  question: string;
};

interface GenerateProps {
  csvData?: any;

  topic1?: any;
  setCsvData?: any;
  reset?: any;
  edit: boolean;
  topicId?: number | string;
}

const GenerateQuestions = ({
  csvData,

  topic1,
  setCsvData,
  reset,
  edit,
  topicId,
}: GenerateProps) => {
  const [resData, setResData] = useState([]);
  const [open, setOpen] = useState<boolean>(false);
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
        `/admin/update-test-series-topics/${topicId}`
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
        reset({
          tsc_id: "",
          topic: "",
        });
        setCsvData([]);
        setResData([]);
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
    console.log(topic1[1]);
    const array2 = Object.keys(csvData[0]);
    if (JSON.stringify(array1) === JSON.stringify(array2)) {
      console.log("CSVDATA", csvData);
      newRes.mutate(csvData);
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
        }". Maintain the question sentence structure provided in the example while modifying variables like numbers, names, and genders. Exclude question numbers after 'Question'. An example with options, correct answer, explanation, and question based on the topic is provided below:

        ---
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
            "Explanation": "Explanation for the correct answer"
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
        console.log(message);
        const questions = message && JSON.parse(message);

        questions?.map((item: mapData, index: any) => {
          // const objects: any = {};
          // objects.question = item.question;
          // item?.options.forEach((element: string, key: number) => {
          //   key++;
          //   objects.option_[key] = element;
          //   key++;
          //   objects.option_[key] = element;
          // });
          // objects.answer = item.answer;
          // objects.explanation = item.explanation;

          // objects.options = {
          //   a: objects.options.split("a.")[1].split("b.")[0],
          //   b: objects.options.split("b.")[1].split("c.")[0],
          //   c: objects.options.split("c.")[1].split("d.")[0],
          //   d: objects.options.split("d.")[1],
          // };

          responses.push(item);
        });
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

  console.log(resData);

  return (
    <>
      <AlertBox
        name="There is something wrong with Generator"
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
                  data={newRes.data}
                  bol={!!newRes.data}
                  topic={topic1[1]}
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
    </>
  );
};

export default GenerateQuestions;
