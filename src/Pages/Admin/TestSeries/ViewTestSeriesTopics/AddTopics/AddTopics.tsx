import {
  Box,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Header1 } from "../../../../../Components/Common/HeaderText";
import {
  BButton2,
  OButton,
  OButton3,
} from "../../../../../Components/Common/Button";

import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useMutation, useQuery } from "@tanstack/react-query";
import UploadIcon from "@mui/icons-material/Upload";
import UploadModal from "../../../../../Components/Model/UploadModal";
import QuestionCard from "./QuestionCard";
import adminTokenAxios from "../../../../../Hooks/AdminTokenAxios";
import CSVParser from "./CSVParser";

import GenerateQuestions from "./GenerateQuestions";
import LoadingBar from "../../../../../Components/Headers/LoadingBar";

type FormValues = {
  // ts_id: string;
  tsc_id: string;
  topic: string;
};

const AddTopics = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [csvData, setCsvData] = useState<any>([]);
  const [topic, setTopic] = useState<string>("");
  // const [generate, setGenerate] = useState<boolean>(false);
  // const [currentIndex, setCurrentIndex] = useState(0);
  const [formData, setFormData] = useState<any>(null);

  // console.log(csvData.length);
  console.log("csvData", csvData);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const handleSubmit = () => {
  //   handleClose();
  //   console.log(csvData);
  // };

  const {

    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  // const handleGenerate = () => {
  //   const generate = getValues();
  //   setTopic(generate.topic);
  //   setGenerate(true);
  // };

  const topic1 = watch(["tsc_id", "topic"]);

  const handleSubmitData = () => {
    // setGenerate(false);
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    // const formattedData = {
    //   ts_id: data.ts_id,
    //   tsc_id: data.tsc_id,
    // };
    // console.log("AddTopics", data);
    // console.log("AddTopics", data.topic);
    // setTopic(data.topic);
  };

  // const [subTopics, setSubTopics] = useState<any>([]);

  const getTestSeries = async () => {
    try {
      const response = await adminTokenAxios.get(`admin/get-test-series`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const testSeries = useQuery({
    queryKey: ["TestSeries"],
    queryFn: getTestSeries,
  });

  if(testSeries.isLoading){
    <LoadingBar/>
  }
  // const mutation = useMutation({
  //   mutationFn: (selectedTopic: any) => {
  //     return adminTokenAxios.get(
  //       `admin/get-test-series-topics/${selectedTopic}`
  //     );
  //   },
  //   onSuccess: (data) => {
  //     const transformedData =
  //       data?.data?.tst.map((item: any) => ({
  //         value: item.id,
  //         label: item.t_name,
  //       })) || []; // Set the data to the state variable

  //     setSubTopics(transformedData);
  //   },
  // });

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

          {/* <Stack direction="row" spacing={1}>
            <OButton
              func={handleOpen}
              name="Upload Topics"
              children={<UploadIcon />}
            />
          </Stack> */}
        </Stack>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={1}>
            <Grid container spacing={2}>
              {/* <Grid item xs={12}>
                <FormControl>
                  <FormLabel id="select-test-type">Select Test Type</FormLabel>
                  <Controller
                    name="ts_id"
                    control={control}
                    defaultValue="" // Set default value as needed
                    rules={{ required: "This field is required" }} // Add validation rules as needed
                    render={({ field }) => (
                      <RadioGroup
                        row
                        aria-labelledby="select-test-type"
                        {...field}
                      >
                        {testSeries?.data?.ts?.map((item: any) => (
                          <FormControlLabel
                            key={item.test_type}
                            value={item.id}
                            control={<Radio />}
                            label={item.test_type}
                          />
                        ))}
                      </RadioGroup>
                    )}
                  />
                </FormControl>
              </Grid> */}
              <Grid item xs={12}>
                <FormControl>
                  <FormLabel id="select-category">Select Category</FormLabel>
                  <Controller
                    name="tsc_id"
                    control={control}
                    defaultValue="" // Set default value as needed
                    rules={{ required: "This field is required" }} // Add validation rules as needed
                    render={({ field }) => (
                      <RadioGroup
                        row
                        aria-labelledby="select-category"
                        {...field}
                        // onChange={handleRadioChange}
                      >
                        {testSeries?.data?.tsc.map((item: any) => (
                          <FormControlLabel
                            // onClick={(e: any) =>
                            //   mutation.mutate(e.target.value)
                            // }
                            key={item.tsc_type}
                            value={item.id}
                            control={<Radio />}
                            label={item.tsc_type}
                          />
                        ))}
                      </RadioGroup>
                    )}
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Stack spacing={1}>
                  <FormLabel id="enter-topic">Enter Topic</FormLabel>
                  <Controller
                    name="topic"
                    control={control}
                    defaultValue=""
                    rules={{ required: "This field is required" }} // Add any other validation rules here
                    render={({ field }) => (
                      <TextField
                        {...field}
                        // label="Enter Topic
                        placeholder="Enter Topic"
                        variant="outlined"
                        sx={{ width: "50%" }}
                        // error={!!errors.inputField}
                        // helperText={errors.inputField ? errors.inputField.message : ''}
                      />
                    )}
                  />
                </Stack>
              </Grid>

              <Grid item xs={12}>
                <Stack spacing={1}>
                  <FormLabel id="upload-csv">Upload CSV</FormLabel>
                  <CSVParser csvData={csvData} setCsvData={setCsvData} />
                </Stack>
              </Grid>

              {/* <OButton3  name="Add" css={{ marginTop: "1rem" }} /> */}
            </Grid>

            {/* {csvData.length > 0 ? (
              <Stack marginY="1rem" direction="row">
                <BButton2 type="button" func={handleGenerate} name="Generate" /> */}
            {/* <OButton3
                  type="submit"
                  name="Upload"
                  css={{ width: "360px" }}
                /> */}
          </Stack>
        </form>

        {/* <Stack spacing={2}>
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
        </Stack> */}

        {/* {generate ? ( */}
        <GenerateQuestions topic1={topic1} csvData={csvData} topic={topic} setCsvData={setCsvData} reset={reset}/>

        {/* {GenerateQuestions()} */}
      </Container>

      <UploadModal
        open={open}
        // handleOpen={handleOpen}
        handleClose={handleClose}
        // handleSubmit={handleSubmit}
        setCsvData={setCsvData}
      />
    </>
  );
};

export default AddTopics;
