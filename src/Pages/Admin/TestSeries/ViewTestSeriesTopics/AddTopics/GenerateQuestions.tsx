import React, { useEffect, useRef, useState } from "react";
import { Configuration, OpenAIApi } from "openai";

import Test from "../../../../../Test";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Alert, Box, Dialog, Stack } from "@mui/material";
import { BButton2 } from "../../../../../Components/Common/Button";
import adminTokenAxios from "../../../../../Hooks/AdminTokenAxios";
import PdfMaker from "../../PdfMaker";

type CsvItem = {
  Answer: string;
  Explanation: string;
  Option_A: string;
  Option_B: string;
  Option_C: string;
  Option_D: string;
  Question: string;
};

const GenerateQuestions = ({ csvData, topic, topic1,setCsvData,reset }: any) => {
  const addTestCTMu = useMutation({
    mutationFn: async (data: object[]) => {
      return await adminTokenAxios.post(`/admin/add-test-series-topics`, {
        tsc_id: topic1[0],
        t_name: topic1[1],
        question: data,
      });
    },
    onError: (error: any) => {
      console.error("Error creating user:", error.response?.data);
    },
    onSuccess: (res: any) => {
      // navigate(`/admin/test-series/view-test-series-topics`);
      reset({
        tsc_id:"",
        topic:"",
      });
      setCsvData([]);
      <Alert severity="success">SuccessFully Generated</Alert>;
    },
  });

  const handleGenerate = async () => {
    // setButton(false);
    newRes.mutate(csvData);
    // const currentData = csvData[currentIndex];
  };

  const openAi = new OpenAIApi(
    new Configuration({
      apiKey: import.meta.env.VITE_OPENAI_KEY,
    })
  );

  const newRes = useMutation({
    mutationFn: async (csvData: CsvItem[]) => {
      // console.log("object");
      // console.log("object 2", input);
      const responses: any[] = [];

      for (const item of csvData) {
        // console.log("loop", item);

        const query = `Generate five unique multiple-choice questions (MCQs), keeping the question  sentence the same as the provided example, but changing variables like numbers, names, and genders. Do not include question numbers after 'Question'. An example is provided below with options, correct answer, explanation, and question based on the topic ${
          topic1[1]
        }. Also keep the explanation similar:
          
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
        const questions = message?.split("Question:");
        console.log(message);
        console.log(response);
        
        questions?.map((question: string, index: any) => {
          if (!question) return;
          if (index == 0) return;
          const objects: any = {};
          const val1 = question?.split("Options:");
          objects.question = val1?.length != 0 && val1[0];
          const val2 = val1[1]?.split("Answer:");
          objects.options = val2?.length != 0 && val2[0];
          const val3 = val2[1]?.split("Explanation:");
          objects.answer = val3?.length != 0 && val3[0];
          objects.explanation = val3?.length != 0 && val3[1];

          objects.options = {
            a: objects.options.split("a.")[1].split("b.")[0],
            b: objects.options.split("b.")[1].split("c.")[0],
            c: objects.options.split("c.")[1].split("d.")[0],
            d: objects.options.split("d.")[1],
          };

          responses.push(objects);
        });
      }

      return responses;
    },
    onSuccess: (data) => {
      console.log("Success Data", data);
      <Alert severity="success">SuccessFully Generated</Alert>;
    },
    onError: () => {
      <Alert severity="error">Error fetching data:</Alert>;
    },
  });

  console.log(!!newRes.data ||
    topic1[0] == 2);

  return (
    <>
      {csvData.length > 0 && (
        <Stack marginY="1rem" direction="row" spacing={2}>
          {topic1[0] != 2 && !newRes.data && (
            <BButton2
              type="button"
              func={handleGenerate}
              name={newRes.isLoading ? "Generating..." : "Generate"}
            />
          )}
          {!!newRes.data && (
            <PdfMaker
              data={newRes.data}
              bol={!!newRes.data}
              topic={topic1[1]}
            />
          )}
          {
            (!!newRes.data || topic1[0] == 2) && (
              <BButton2
                type="button"
                func={() => newRes.data && addTestCTMu.mutate(newRes.data)}
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
