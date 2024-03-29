import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { FormControl, FormLabel, Stack, Typography } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import AsyncSelect from "react-select/async";
import React, { useState, CSSProperties } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import Select from "react-select";
import { OButton3 } from "../Common/Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import adminTokenAxios from "../../Hooks/AdminTokenAxios";
import { useParams } from "react-router-dom";
import AlertBox from "../Common/AlertBox";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  //   height: 300,
  bgcolor: "background.paper",
  //   border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type FormValues = Record<string, any>;

interface ModalProps {
  handleOpen?: () => void;
  handleClose?: () => void;
  handleSubmit?: () => void;
  restAddProduct?: () => void;
  open: boolean;
  categoryObj: any;
  data: any;
  ts_id?: any;
}

const AddTestSetModal = ({
  open,
  handleClose,
  data,
  categoryObj,
  restAddProduct,
  ts_id,
}: //   handleSubmit,
ModalProps) => {
  // const [result, setResult] = useState<any>(null);
  const [counter, setCounter] = useState(1);
  const para = useParams();
  const queryClient = useQueryClient();
  const p_id = para.productdetails;
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
  const updatedData: any = queryClient.getQueryData([
    "ViewProductDetails1",
    p_id,
  ]);
  // console.log(updatedData?.categories);
  const [openStatus, setOpenStatus] = useState(false);
  const [message, setMessage] = useState("");
  const addTestSeriesProductSetMutation = useMutation({
    mutationFn: async (formattedDatav2: any) => {
      return await adminTokenAxios.post(
        `/admin/add-test-series-product-topics`,
        formattedDatav2
      );
    },
    onError: (error: any) => {
      console.error("Error creating user:", error.response?.data);
    },
    onSuccess: (res: any) => {
      if(res.status == 200){
        setMessage("Successfully Added New Set");
        setOpenStatus(true);
        let data = res?.data.categories_data;
        reset();
        setCounter(counter + 1);
        console.log(updatedData?.categories, res?.data);
  
        updatedData &&
          updatedData.categories?.map((item: any, key: number) => {
            // console.log(item);
  
            return data?.map((item2: any) => {
              // console.log(item2);
              if (item.id == item2.id) {
                return (updatedData.categories[key] = item2);
              }
              return item;
            });
          });
        // console.log(newData);
        queryClient.getQueryData(["ViewProductDetails1", p_id], updatedData);
      }else{
        setMessage("Not Able add New Set");
        setOpenStatus(true);
      }
    },
  });

  const selectedCategories = Object.keys(categoryObj);
  // console.log("selectedCategories", selectedCategories);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    // const formattedData = [{setId: counter,}]
    // console.log("modal", data);

    const formattedData = selectedCategories.map((category) => ({
      tspc_id: categoryObj[category],
      tst_id: data[category].map((topic: any) => topic.value),
    }));

    const formattedDatav2 = {
      data: formattedData,
      total_set: counter,
    };

    // console.log("Formatted data:", formattedDatav2);

    try {
      await addTestSeriesProductSetMutation.mutateAsync(formattedDatav2);
      // console.log("Data submitted successfully", formattedDatav2);
    } catch (error) {
      // The error will be handled by the onError callback in the mutation options
    }

    // [{
    // tspc: "id",
    // setId: "",
    // topic: []
    // }, {},{}]
  };

  const handleClick = () => {
    setCounter(1);
    restAddProduct?.();
    handleClose?.();
  };
  let typeStatus = addTestSeriesProductSetMutation.data?.status;
  // console.log("MODAL", categoryObj, data,ts_id);
  return (
    <div>
        <AlertBox
        type={typeStatus == 200 ? "success" : "error"}
        name={message}
        bol={openStatus}
        handleAlertBoxClose={() => setOpenStatus(false)}
      />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleClick}
              aria-label="close"
              sx={{
                position: "absolute",
                top: "10px",
                right: "10px",
              }}
            >
              <CloseIcon />
            </IconButton>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={2}>
                <Controller
                  name="setId"
                  control={control}
                  defaultValue={counter}
                  render={({ field }) => (
                    <Typography {...field} variant="h5" component="h5">
                      Set {counter}
                    </Typography>
                  )}
                />

                {data.map((item: any) => (
                  <FormControl key={item.tsc_type} fullWidth>
                    <FormLabel id="demo-controlled-radio-buttons-group">
                      Select {item.tsc_type} Topic
                    </FormLabel>

                    <Controller
                      name={item.tsc_type}
                      control={control}
                      defaultValue={[]}
                      render={({ field }) => (
                        <Select
                          {...field}
                          isMulti
                          isClearable
                          // cacheOptions
                          // defaultOptions
                          options={
                            item.topics
                              .filter((topic: any) => topic.ts_id == ts_id)
                              .map((filteredTopic: any) => ({
                                value: filteredTopic.id,
                                label: filteredTopic.t_name,
                              })) || []
                          }
                          placeholder={`Select ${item.tsc_type} Topic`}
                        />
                      )}
                    />
                  </FormControl>
                ))}

                <OButton3
                  type="submit"
                  name={
                    addTestSeriesProductSetMutation.isLoading
                      ? "Submitting..."
                      : "Submit"
                  }
                  css={{ marginTop: "1rem" }}
                />
              </Stack>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default AddTestSetModal;
