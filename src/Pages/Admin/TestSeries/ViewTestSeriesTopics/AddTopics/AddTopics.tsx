import { Box, Container, Stack } from "@mui/material";
import React, { useState } from "react";
import { Header1 } from "../../../../../Components/Common/HeaderText";
import { OButton } from "../../../../../Components/Common/Button";
import UploadIcon from "@mui/icons-material/Upload";
import UploadModal from "../../../../../Components/Model/UploadModal";
import QuestionCard from "./QuestionCard";

const AddTopics = () => {
  const [open, setOpen] = useState(false);
  const [csvData, setCsvData] = useState<any>(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
    handleClose();
    console.log(csvData);
  };

  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          width: "96%",
          my: 1,
          // mx: "auto",
          // py: 2,

          // minHeight: "100vh",
          // display: "flex",
          // flexDirection: "column",
          // border: 1,
          // height: "85vh",
          backgroundColor: "#F5F5F5",
        }}
        disableGutters
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          // spacing={2}
          paddingY={2}
        >
          <Box>
            <Header1 header="Add Topics" />
          </Box>

          <Stack direction="row" spacing={1}>
            <OButton
              func={handleOpen}
              name="Upload Topics"
              children={<UploadIcon />}
            />
          </Stack>
        </Stack>

        <Stack spacing={2}>
          {csvData?.data.map((questionData: any, index: any) => (
            <QuestionCard
              key={index}
              questionNo={index + 1}
              question={questionData.Question}
              Option_A={questionData.Option_A}
              Option_B={questionData.Option_B}
              Option_C={questionData.Option_C}
              Option_D={questionData.Option_D}
              answer={questionData.Answer}
              explanation={questionData.Explanation}
            />
          ))}
        </Stack>
      </Container>

      <UploadModal
        open={open}
        // handleOpen={handleOpen}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        setCsvData={setCsvData}
      />
    </>
  );
};

export default AddTopics;
