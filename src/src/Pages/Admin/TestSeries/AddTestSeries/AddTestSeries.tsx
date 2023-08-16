import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Input,
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
import AddTestSetModal from "../../../../Components/Model/AddTestSetModal";

interface Categories {
  id: any;
  tsc_type: string;
}

interface TestSeriesData {
  tsc: Categories[];
}

type Option = {
  label: string;
  value: string;
};

type FormValues = {
  ts_id: string;
  // tsc_id: string;
  tsc_id: string[];
  // tst_id: Option[];
  p_name: string;
  p_description: string;
  p_price: string;
  p_image: any;
  test_month_limit: string;
  total_question: string;
  duration: string;
  release_date: string;
};

const AddTestSeries = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState<boolean>(false);
  const [subTopics, setSubTopics] = useState<any>([]);
  const [data, setData] = useState<any>([]);
  const [category, setCategory] = useState<any>({});

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  // const image = watch("p_image");
  // console.log(image);
  const isTopicSelected = (topicId: string, selectedTopics: string[]) =>
    selectedTopics.includes(topicId);

  const addTestSeriesProductMutation = useMutation({
    mutationFn: async (formattedData: FormValues) => {
      return await adminTokenAxios.post(
        `/admin/add-test-series-product`,
        formattedData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    },
    onError: (error: any) => {
      console.error("Error creating user:", error.response?.data);
    },
    onSuccess: (res: any) => {
      console.log("Mutation Reponse", res?.data?.data);
      setData(res?.data?.data);
      setCategory(res?.data?.tspc);
      setOpen(true);
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    // const formData = new FormData();

    // formData.append("p_image", data.p_image[0]);
    // data = { ...data, p_image: data.p_image[0] };
    // formData.append("data", JSON.stringify(data));
    console.log("DATA", data);

    try {
      await addTestSeriesProductMutation.mutateAsync(data);
      console.log("Data submitted successfully", data);
    } catch (error) {
      // The error will be handled by the onError callback in the mutation options
    }
  };

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

  console.log("TESTSERIES", testSeries.data);

  const callApi = async (selectedTopic: any) => {
    const response = await adminTokenAxios.get(
      `admin/get-test-series-topics/${selectedTopic}`
    );
    return (
      response.data?.tst.map((item: any) => ({
        value: item.id,
        label: item.t_name,
      })) || []
    );
  };

  // const mutation = useMutation({
  //   mutationFn: callApi,
  //   onSuccess: (data) => {
  //     setSubTopics((prevSubTopics: any) => [...prevSubTopics, data]);
  //   },
  // });

  // console.log("MUTATE", mutation);

  // console.log("SUB Array", subTopics);

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
                {/* <FormControl>
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
                </FormControl> */}
                <FormControl>
                  <FormLabel id="select-topic">Select Categories</FormLabel>
                  <Controller
                    name="tsc_id"
                    control={control}
                    defaultValue={[]}
                    rules={{ required: "Please select at least one category" }}
                    render={({ field }) => (
                      <FormGroup aria-labelledby="select-topic">
                        {testSeries?.data?.tsc.map((item: Categories) => (
                          <FormControlLabel
                            key={item.id}
                            control={
                              <Checkbox
                                {...field}
                                value={item.id.toString()}
                                checked={field.value.includes(
                                  item.id.toString()
                                )}
                                onChange={(event, checked) => {
                                  if (checked) {
                                    field.onChange([
                                      ...field.value,
                                      event.target.value,
                                    ]);
                                  } else {
                                    field.onChange(
                                      field.value.filter(
                                        (value) => value !== event.target.value
                                      )
                                    );
                                  }
                                }}
                                // onClick={console.log("click")}
                                // onClick={(e: any) =>
                                //   mutation.mutate(e.target.value)
                                // }
                              />
                            }
                            label={item.tsc_type}
                          />
                        ))}
                      </FormGroup>
                    )}
                  />
                </FormControl>
              </Grid>

              {/* <Grid item xs={12}>
                <FormControl fullWidth>
                  <FormLabel id="demo-controlled-radio-buttons-group">
                    Select Sub Topic
                  </FormLabel>

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
              </Grid> */}
              {/* Product Name */}
              <Grid item xs={12}>
                <Controller
                  name="p_name"
                  defaultValue=""
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
                  defaultValue=""
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
                  defaultValue=""
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
                  defaultValue=""
                  // accept="image/*"
                  control={control}
                  render={({ field: { value, onChange, ...field } }) => (
                    <Input
                      {...field}
                      type="file"
                      fullWidth
                      // label="Product Image"
                      // variant="outlined"
                      value={value?.fileName}
                      onChange={(event: any) => {
                        onChange(event.target.files[0]);
                      }}
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
                  defaultValue=""
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
                  defaultValue=""
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
                  defaultValue=""
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

              {/*Product Release Date */}
              <Grid item xs={12} sm={6}>
                <Controller
                  name="release_date"
                  defaultValue=""
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      // label="Product Price"
                      placeholder="Product Release Date"
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

      <AddTestSetModal
        open={open}
        // handleOpen={handleOpen}
        handleClose={handleClose}
        // handleSubmit={handleSubmit}
        // setCsvData={setCsvData}
        restAddProduct={reset}
        data={data}
        categoryObj={category}
      />
    </>
  );
};

export default AddTestSeries;
