import {
  Box,
  Button,
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
import { useState } from "react";
import { OButton3 } from "../../../../Components/Common/Button";
import adminTokenAxios from "../../../../Hooks/AdminTokenAxios";

import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useMutation, useQuery } from "@tanstack/react-query";
import Select from "react-select";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { useNavigate } from "react-router-dom";
import UploadModal from "../../../../Components/Model/UploadModal";

type Option = {
  label: string;
  value: string;
};

type FormValues = {
  ts_id: string;
  tsc_id: string;
  tst_id: Option[];
  p_name: string;
  p_description: string;
  p_price: string;
  p_image: any;
  test_month_limit: string;
  total_question: string;
  duration: string;
};

const AddTestSeries = () => {
  const navigate = useNavigate();

  const {
    register,
    control,
    handleSubmit,
    getValues,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const formattedData = {
      ts_id: data.ts_id,
      tsc_id: data.tsc_id,
      tst_id: data.tst_id.map((option) => option.value),
      p_name: data.p_name,
      p_description: data.p_description,
      p_price: data.p_price,
      p_image: data.p_image,
      test_month_limit: data.test_month_limit,
      total_question: data.total_question,
      duration: data.duration,
    };

    try {
      await adminTokenAxios.post(
        `/admin/add-test-series-product`,
        formattedData
      );
      console.log("Data submitted successfully", formattedData);
    } catch (error: any) {
      console.error("Error creating user:", error.response.data);
    }
  };

  const [subTopics, setSubTopics] = useState<any>([]);

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

  const mutation = useMutation({
    mutationFn: (selectedTopic: any) => {
      return adminTokenAxios.get(
        `admin/get-test-series-topics/${selectedTopic}`
      );
    },
    onSuccess: (data) => {
      const transformedData =
        data?.data?.tst.map((item: any) => ({
          value: item.id,
          label: item.t_name,
        })) || []; // Set the data to the state variable

      setSubTopics(transformedData);
    },
  });

  console.log("MUTATE", mutation.data?.data?.tst);

  console.log("SUB Array", subTopics);

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
          height: "85vh",
          backgroundColor: "#F5F5F5",
        }}
        disableGutters
      >
        <Box>
          <Button
            onClick={() => navigate(-1)}
            size="small"
            variant="contained"
            color="primary"
            sx={{ paddingRight: "1rem" }}
          >
            <ArrowBackIosNewRoundedIcon />
            Back
          </Button>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack marginX="auto" spacing={1} sx={{ width: 1 / 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
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
              </Grid>
              <Grid item xs={12}>
                <FormControl>
                  <FormLabel id="select-topic">Select Topic</FormLabel>
                  <Controller
                    name="tsc_id"
                    control={control}
                    defaultValue="" // Set default value as needed
                    rules={{ required: "This field is required" }} // Add validation rules as needed
                    render={({ field }) => (
                      <RadioGroup
                        row
                        aria-labelledby="select-topic"
                        {...field}
                        // onChange={handleRadioChange}
                      >
                        {testSeries?.data?.tsc.map((item: any) => (
                          <FormControlLabel
                            onClick={(e: any) =>
                              mutation.mutate(e.target.value)
                            }
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

              <Grid item xs={12}>
                <FormControl fullWidth>
                  {/* <FormLabel id="demo-controlled-radio-buttons-group">
                    Select Sub Topic
                  </FormLabel> */}

                  <Controller
                    name="tst_id"
                    control={control}
                    defaultValue={[]}
                    render={({ field }) => (
                      <Select
                        {...field}
                        isMulti
                        isClearable
                        // cacheOptions
                        // defaultOptions
                        options={subTopics}
                        placeholder="Select Sub Topic"
                      />
                    )}
                  />
                </FormControl>
              </Grid>
              {/* Product Name */}
              <Grid item xs={12}>
                <Controller
                  name="p_name"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      // label="Product Name"
                      variant="outlined"
                      placeholder="Product Name"
                      required
                      sx={{ backgroundColor: "white" }}
                    />
                  )}
                />
              </Grid>

              {/* Product Description */}
              <Grid item xs={12}>
                <Controller
                  name="p_description"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      multiline
                      rows={2}
                      // label="Product Description"
                      placeholder="Product Description"
                      variant="outlined"
                      required
                      sx={{ backgroundColor: "white" }}
                    />
                  )}
                />
              </Grid>

              {/* Product Price */}
              <Grid item xs={12} sm={6}>
                <Controller
                  name="p_price"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      // label="Product Price"
                      placeholder="Product Price"
                      variant="outlined"
                      required
                      sx={{ backgroundColor: "white" }}
                    />
                  )}
                />
              </Grid>

              {/* Product Image */}
              <Grid item xs={12} sm={6}>
                <Controller
                  name="p_image"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type="file"
                      fullWidth
                      // label="Product Image"
                      variant="outlined"
                      required
                      sx={{ backgroundColor: "white" }}
                    />
                  )}
                />
              </Grid>

              {/* Product Month Limit */}
              <Grid item xs={12} sm={4}>
                <Controller
                  name="test_month_limit"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      // label="Product Month Limit"
                      placeholder="Product Month Limit"
                      variant="outlined"
                      required
                      sx={{ backgroundColor: "white" }}
                    />
                  )}
                />
              </Grid>

              {/* Total Questions */}
              <Grid item xs={12} sm={4}>
                <Controller
                  name="total_question"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      // label="Total Questions"
                      placeholder="Total Questions"
                      variant="outlined"
                      required
                      sx={{ backgroundColor: "white" }}
                    />
                  )}
                />
              </Grid>

              {/* Duration */}
              <Grid item xs={12} sm={4}>
                <Controller
                  name="duration"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      // label="Duration"
                      placeholder="Duration"
                      variant="outlined"
                      required
                      sx={{ backgroundColor: "white" }}
                    />
                  )}
                />
              </Grid>

              <OButton3 type="submit" name="Add" css={{ marginTop: "1rem" }} />
            </Grid>
          </Stack>
        </form>
      </Container>

      {/* <UploadModal /> */}
    </>
  );
};

export default AddTestSeries;
