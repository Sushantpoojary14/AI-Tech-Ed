import React, { useEffect, useRef, useState } from "react";
import { Configuration, OpenAIApi } from "openai";

import Test from "../../../../../Test";
import { useMutation } from "@tanstack/react-query";
import { Stack } from "@mui/material";
import { BButton2 } from "../../../../../Components/Common/Button";
import adminTokenAxios from "../../../../../Hooks/AdminTokenAxios";

// type Form ={
//   tsc_id : string;
//   t_name : string
// }

const GenerateQuestions = ({
  csvData,

  topic,

  topic1,
}: any) => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [resData, setResData] = useState([]);
  const [totalQuestions, setTotalQuestions] = useState([]);
  const [shouldMoveNext, setShouldMoveNext] = useState(false);
  const [generate, setGenerate] = useState<boolean>(false);
  // const [topic, setTopic] = useState<string>("");

  const addTestCategoryTopicMutation = useMutation({
    mutationFn: async (formatedData: any) => {
      return await adminTokenAxios.post(
        `/admin/add-update-test-series-topics`,
        formatedData
      );
    },
    onError: (error: any) => {
      console.error("Error creating user:", error.response?.data);
    },
    onSuccess: (res: any) => {
      console.log("Mutation Reponse Success", res?.data);
      // handleNextClick();
    },
  });

  const handleGenerate = async () => {
    // setTopic(generate.topic);
    setGenerate(true);
    const formatedData = {
      tsc_id: topic1[0],
      t_name: topic1[1],
    };
    // console.log("Topic", formatedData);
    try {
      // await addTestCategoryTopicMutation.mutateAsync(formatedData);

      console.log("Data submitted successfully", formatedData);
      handleNextClick();
    } catch (error) {
      // The error will be handled by the onError callback in the mutation options
    }
  };

  const currentData = csvData[currentIndex];

  useEffect(() => {
    console.log("useEffect", input);
  }, [input]);

  useEffect(() => {
    // Push the new resData to the existing totalQuestions
    if (resData.length > 0) {
      console.log("resDAta");
      setTotalQuestions((prevTotal) => [...prevTotal, ...resData]);
      setShouldMoveNext(true);
    }
  }, [resData]);

  const initialRender = useRef(true); // Ref to track initial render

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false; // Set initial render to false
      return; // Skip running the effect on initial render
    }
    console.log("TOTAL Questions", totalQuestions);

    if (shouldMoveNext) {
      console.log("should move next");

      handleNextClick();
      setShouldMoveNext(false); // Reset the flag
    }
  }, [totalQuestions, shouldMoveNext]);

  const openAi = new OpenAIApi(
    new Configuration({
      apiKey: "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",
    })
  );

  const handleNextClick = () => {
    // console.log("NEXTT");
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, csvData.length - 1));
    setResData([]);
    handleGenerateQuestions();
  };

  const isLastIndex = currentIndex === csvData.length - 1;

  const handleGenerateQuestions = async () => {
    // let query = csvData.map((item: any) => {
    //   return `Generate 3 unique multiple-choice questions (MCQs),keep the question sentence same just change the variable like number, name, gender and don't give the questions number after Question, it should be based on ${topic}, with options, correct answers, explanations, the examples provided below:

    //   Question:${item.Question}

    //   Options:
    //   a. ${item.Option_A},
    //   b. ${item.Option_B},
    //   c. ${item.Option_C},
    //   d. ${item.Option_C}

    //   Answer: ${item.Answer}

    //   Explanation:${
    //     item.Explanation
    //       ? item.Explanation
    //       : "Generate an explanation based questions and correct answer"
    //   }
    //   `;
    // });
    // console.log("GENERATE1", query);

    setInput(`Generate 2 unique multiple-choice questions (MCQs),keep the question sentence same just change the variable like number, name, gender and don't give the questions number after Question, it should be based on ${topic}, with options, correct answers, explanations, the examples provided below:

    Question:${currentData.Question}
   
    Options:
    a. ${currentData.Option_A},
    b. ${currentData.Option_B},
    c. ${currentData.Option_C},
    d. ${currentData.Option_C}
    
    Answer: ${currentData.Answer}
    
    Explanation:${
      currentData.Explanation
        ? currentData.Explanation
        : "Generate an explanation based questions and correct answer"
    }
    `);
    console.log("GENERATE2", input);
    newRes.mutate();
  };

  const newRes = useMutation({
    mutationFn: async () => {
      // console.log("object");
      const response = await openAi.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: input }],
      });

      return response;
    },
    onSuccess: (response) => {
      const message = response?.data?.choices[0]?.message?.content;
      console.log("MESSAGE", message);

      message && setResponse(message);
      const questions = message?.split("Question:");

      const data: {
        [key: string]: {
          question: string;
          options: string[];
          answer: string;
          explanation: string;
        };
      } = {};

      console.log("Questions", questions);
      const tempArray: any = [];

      questions?.map((question: string, index: any) => {
        if (!question) return;
        if (index == 0) return;
        const objects: any = {};
        const val1 = question?.split("Options:");
        objects.question = val1[0];
        const val2 = val1[1]?.split("Answer:");
        objects.options = val2[0];
        const val3 = val2[1]?.split("Explanation:");
        objects.answer = val3[0].replace(/\s/g, "");
        objects.explanation = val3[1];

        objects.options = {
          a: objects.options.split("a.")[1].split("b.")[0].replace(/\s/g, ""),
          b: objects.options.split("b.")[1].split("c.")[0].replace(/\s/g, ""),
          c: objects.options.split("c.")[1].split("d.")[0].replace(/\s/g, ""),
          d: objects.options.split("d.")[1].replace(/\s/g, ""),
        };

        tempArray.push(objects);
      });
      setResData(tempArray);
      console.log(tempArray);
      setInput("");
    },
  });

  if (newRes.isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      {/* {csvData.map(
          (item: any, index: number) => ( */}
      {/* // Render the Test component only up to the current index */}
      {/* // index <= currentIndex && ( */}
      {csvData.length > 0 ? (
        <Stack marginY="1rem" direction="row">
          <BButton2 type="button" func={handleGenerate} name="Generate" />
          {/* <OButton3
                  type="submit"
                  name="Upload"
                  css={{ width: "360px" }}
                /> */}
        </Stack>
      ) : (
        <></>
      )}
      {/* <button onClick={handleNextClick} disabled={isLastIndex}> */}
      {/* Next */}
      {/* </button> */}
      {generate ? (
        <Test
          key={currentData.Question}
          item={currentData}
          topic={topic1[1]}
          totalQuestions={totalQuestions}
          // resData={resData}
          //   generate={generate}
        />
      ) : (
        <></>
      )}

      {/* )
          // )
        )} */}
    </>
  );
};

export default GenerateQuestions;
