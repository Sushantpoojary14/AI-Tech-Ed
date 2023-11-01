import {
  Box,
  FormControl,
  Grid,
  InputBase,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { BButton2 } from "../../../../../../Components/Common/Button";
import { useMutation } from "@tanstack/react-query";
import adminTokenAxios from "../../../../../../Hooks/AdminTokenAxios";
import AlertBox from "../../../../../../Components/Common/AlertBox";

type FormValues = {
  Question: string;
  OPTION_A: string;
  OPTION_B: string;
  OPTION_C: string;
  OPTION_D: string;
  Answer: string;
  Explanation: string;
};

interface Props {
  passage: string;
  tst_id: string | number;
  handleAddNewPassage: any;
}

const AddReadingQuestion = ({
  passage,
  tst_id,
  handleAddNewPassage,
}: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  const {
    register,
    control,
    handleSubmit,
    getValues,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const addReadingQuestionMU = useMutation({
    mutationFn: async (formattedData: any) => {
      return await adminTokenAxios.post(
        `/admin/add-reading-question`,
        formattedData
      );
    },
    onError: (error: any) => {
      console.error("Error creating user:", error.response?.data);
    },
    onSuccess: (res) => {
      handleAlertBoxOpen();
      reset();
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const formattedData = {
      tst_id: tst_id,
      question: {
        Question: data.Question,
        OPTION_A: data.OPTION_A,
        OPTION_B: data.OPTION_B,
        OPTION_C: data.OPTION_C,
        OPTION_D: data.OPTION_D,
        Answer: data.Answer,
        Explanation: data.Explanation,
        Paragraph: passage,
      },
    };
    // console.log("addQuestion", formattedData);
    try {
      addReadingQuestionMU.mutate(formattedData);
    } catch (error) {}
  };

  const handleAlertBoxOpen = () => {
    setOpen(true);
  };

  const handleAlertBoxClose = () => {
    setOpen(false);
  };

  return (
    <Box px={20}>
      <AlertBox
        name="Successfully added Question"
        type="success"
        bol={open}
        handleAlertBoxClose={handleAlertBoxClose}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={1}>
          {/* <Grid item xs={3}>
            <Typography variant="subtitle1">Question</Typography>
          </Grid> */}
          <Grid item xs={8}>
            <Controller
              name="Question"
              defaultValue=""
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  variant="outlined"
                  placeholder="Question"
                  sx={{ backgroundColor: "white" }}
                />
              )}
            />
          </Grid>
          {/* <Grid item xs={3}>
            <Typography variant="subtitle1">Option A</Typography>
          </Grid> */}
          <Grid item xs={8}>
            <Controller
              name="OPTION_A"
              defaultValue=""
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  variant="outlined"
                  placeholder="Option A"
                  sx={{ backgroundColor: "white" }}
                />
              )}
            />
          </Grid>
          {/* <Grid item xs={3}>
            <Typography variant="subtitle1">Option B</Typography>
          </Grid> */}
          <Grid item xs={8}>
            <Controller
              name="OPTION_B"
              defaultValue=""
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  variant="outlined"
                  placeholder="Option B"
                  sx={{ backgroundColor: "white" }}
                />
              )}
            />
          </Grid>
          {/* <Grid item xs={3}>
            <Typography variant="subtitle1">Option C</Typography>
          </Grid> */}
          <Grid item xs={8}>
            <Controller
              name="OPTION_C"
              defaultValue=""
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  variant="outlined"
                  sx={{ backgroundColor: "white" }}
                  placeholder="Option C"
                />
              )}
            />
          </Grid>
          {/* <Grid item xs={3}>
            <Typography variant="subtitle1">Option D</Typography>
          </Grid> */}
          <Grid item xs={8}>
            <Controller
              name="OPTION_D"
              defaultValue=""
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  variant="outlined"
                  placeholder="Option D"
                  sx={{ backgroundColor: "white" }}
                />
              )}
            />
          </Grid>
          {/* <Grid item xs={3}>
            <Typography variant="subtitle1">Correct Option</Typography>
          </Grid> */}
          <Grid item xs={8}>
            <Controller
              name="Answer"
              defaultValue=""
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  fullWidth
                  variant="outlined"
                  placeholder="Answer"
                  sx={{ backgroundColor: "white" }}
                >
                  <MenuItem value="1">Option A</MenuItem>
                  <MenuItem value="2">Option B</MenuItem>
                  <MenuItem value="3">Option C</MenuItem>
                  <MenuItem value="4">Option D</MenuItem>
                </Select>
              )}
            />
          </Grid>
          {/* <Grid item xs={3}>
            <Typography variant="subtitle1">Explanation</Typography>
          </Grid> */}
          <Grid item xs={8}>
            <Controller
              name="Explanation"
              defaultValue=""
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  variant="outlined"
                  placeholder="Explanation"
                  sx={{ backgroundColor: "white" }}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Stack direction={"row"} spacing={2}>
              {/* <BButton2 name="Next" type="submit" /> */}
              <BButton2
                name="Add New"
                type="button"
                func={handleAddNewPassage}
              />
              <BButton2
                name={addReadingQuestionMU.isLoading ? "Submiting" : "Submit"}
                type="submit"
              />
            </Stack>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AddReadingQuestion;
