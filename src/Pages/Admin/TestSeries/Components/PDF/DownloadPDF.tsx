import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { BButton } from "../../../../../Components/Common/Button";
import React, { useEffect, useRef, useState } from "react";
import jsPDF from "jspdf";
import PDF2 from "./PDF2";
import { Box, Button } from "@mui/material";
import ReactDOM from "react-dom/client";
import PdfMaker from "../PdfMaker";
import { BlobProvider, PDFViewer } from "@react-pdf/renderer";
import MyPDF from "./MyPDF";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import ComponentToPrint from "./ComponentToPrint";

interface props {
  data: questions[];
  randomG?: boolean;
  bol: boolean;
  topic: string;
  total: number;
  button?: ReactJSXElement;
}

type questions = {
  Question?: string;
  question?: string;
  Options?: {
    a: string;
    b: string;
    c: string;
    d: string;
  };
  option_1?: string;
  option_2?: string;
  option_3?: string;
  option_4?: string;
  Answer?: string;
  Explanation?: string;
  Conversation?: string;
  Paragraph?: string;
  conversation?: string;
  paragraph?: string;
  explanation?: string;
  correct_option?: string | number;
  tst_id?: number;
  marks?: null | number;
  status?: number;
  images?: string;
  question_image?: any;
};

const DownloadPDF = ({ bol, data, randomG, topic, total }: props) => {
  const [selected_question, setSelected_question] = useState<questions[]>([]);
  const pdfRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => pdfRef.current,
    documentTitle: topic,
  });

  useEffect(() => {
    setSelected_question(data);
  }, []);

  useEffect(() => {
    const questions: questions[] = data;

    if (!randomG) {
      if (!!questions) {
        if (questions?.length > 15) {
          const updatedSelectedQuestions = [];
          let count: number = total;
          // const updatedSelectedQuestions = [...selected_question];

          for (let i = count - 1; i >= 0; i--) {
            const ran = Math.floor(Math.random() * (i + 1));
            const temp = questions[i];
            questions[i] = questions[ran];
            questions[ran] = temp;
            updatedSelectedQuestions.push(questions[i]);
            console.log("3");
          }
          setSelected_question(updatedSelectedQuestions);
        } else {
          setSelected_question(questions);
          console.log("2");
        }
      }
    } else {
      console.log("1");

      setSelected_question(questions);
    }
    // console.log("change");
  }, [total]);

  // let selected_question: questions[] = [];

  // const questions: questions[] = data;

  // if (!randomG) {
  //   if (!!questions) {
  //     if (questions?.length > 15) {
  //       let count: number = total;
  //       for (let i = count - 1; i >= 0; i--) {
  //         const ran = Math.floor(Math.random() * (i + 1));
  //         const temp = questions[i];
  //         questions[i] = questions[ran];
  //         questions[ran] = temp;
  //         selected_question.push(questions[i]);
  //       }
  //     } else {
  //       selected_question = questions;
  //       console.log("pdf", selected_question);
  //     }
  //   }
  // } else {
  //   selected_question = questions;
  // }

  const openPDFInNewTab = async (
    data: any,
    total: any,
    topic: any,
    bol: boolean
  ) => {
    let selected_question: questions[] = [];
    // console.log(props.data,props.total);

    // const random: questions[] = [];
    const questions: questions[] = data;

    if (!!questions) {
      if (questions?.length > 15) {
        let count: number = total;
        for (let i = count - 1; i >= 0; i--) {
          const ran = Math.floor(Math.random() * (i + 1));
          const temp = questions[i];
          questions[i] = questions[ran];
          questions[ran] = temp;
          selected_question.push(questions[i]);
        }
      } else {
        selected_question = questions;
      }
    }
  };
  return (
    <>
      <Box display={"none"}>
        <ComponentToPrint
          ref={pdfRef}
          selected_question={selected_question}
          topic={topic}
        />
      </Box>
      <BButton type="button" name="New PDF" func={handlePrint} />
    </>
  );
};

export default DownloadPDF;
