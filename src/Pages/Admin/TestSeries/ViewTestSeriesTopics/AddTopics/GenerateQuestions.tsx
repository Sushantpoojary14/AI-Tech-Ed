import React, { useEffect, useRef, useState } from "react";
import { Configuration, OpenAIApi } from "openai";

import Test from "../../../../../Test";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Alert, Box, Dialog, Stack } from "@mui/material";
import { BButton2 } from "../../../../../Components/Common/Button";
import adminTokenAxios from "../../../../../Hooks/AdminTokenAxios";
import PdfMaker from "../../PdfMaker";
import AlertBox from "../../../../../Components/Common/AlertBox";
import { UserContext } from "../../../../../Context/UserContext";

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

const GenerateQuestions = ({ csvData, topic1, setCsvData, reset }: any) => {
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
        t_name: topic1[1],
        question: data,
        ts_id: topic1[3],
      });
    },
    onError: (error: any) => {
      console.error("Error creating user:", error.response?.data);
    },
    onSuccess: (res: any) => {
      console.log(res);
      handleAlertBoxOpen2();
      // navigate(`/admin/test-series/view-test-series-topics`);
      reset({
        tsc_id: "",
        topic: "",
      });
      setCsvData([]);
    },
  });

  const handleGenerate = async () => {
    newRes.mutate(csvData);
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
        const query = `Generate five unique multiple-choice questions (MCQs), keeping the question  sentence the same as the provided example, but changing variables like numbers, names, and genders. Do not include question numbers after 'Question'. An example is provided below with options, correct answer, explanation, and question based on the topic 
        ${
          topic1[1]
        }. Also keep the explanation similar and give me in json and wrap it array keep options in object:
          
    Question:${item.Question}
    Options:
    a. ${item.Option_A},
    b. ${item.Option_B},
    c. ${item.Option_C},
    d. ${item.Option_D}
    Answer: ${item.Answer}
    Explanation:${
      item.Explanation
        ? item.Explanation
        : "Generate an explanation based questions and correct answer"
    }
    `;

        const response = await openAi.createChatCompletion({
          model: "gpt-3.5-turbo-16k",
          messages: [{ role: "user", content: query }],
        });

        const message = response?.data?.choices[0]?.message?.content;
        // const questions = message?.split("Question:");
        // console.log(response);
        const questions = message && JSON.parse(message);

        questions?.map((item: mapData, index: any) => {
          // const objects: any = {};
          // objects.question = item.question;
          // item?.options.forEach((element: string, key: number) => {
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
    onSuccess: (data) => {
      console.log("Success Data", data);
    },
    onError: (error) => {
      console.log(error);
      handleAlertBoxOpen();
      // <AlertBox />
    },
  });

  // console.log(!newRes.data);

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

      {csvData.length > 0 && (
        <Stack marginY="1rem" direction="row" spacing={2}>
          {!newRes.data &&
            topic1[0] != 2 &&
            (newRes.isLoading ? (
              <BButton2 type="button" name="Generating..." />
            ) : (
              <BButton2 type="button" func={handleGenerate} name="Generate" />
            ))}
          {!!newRes.data && (
            <PdfMaker
              data={newRes.data}
              bol={!!newRes.data}
              topic={topic1[1]}
              button={<BButton2 type="button" name="Download" />}
            />
          )}
          {(!!newRes.data || topic1[0] == 1) && (
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
