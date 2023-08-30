import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Controller, useForm } from "react-hook-form";
import { Button, Grid, Input, TextField } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useMutation } from "@tanstack/react-query";
import adminTokenAxios from "../../Hooks/AdminTokenAxios";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",

  height: "full",
  minHeight: "300px",
  maxHeight: "calc(100vh - 200px)",
  bgcolor: "background.paper",
  //   border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "auto",
};

interface ModalProps {
  handleClose?: () => void;
  open: boolean;
}

type FormData = {
  images: any;
};

const ImageUploadModal = ({ open, handleClose }: ModalProps) => {
  const { register, control, handleSubmit } = useForm<FormData>();

  const [multipleImages, setMultipleImages] = React.useState([]);
  // Functions to preview multiple images
  const changeMultipleFiles = (e: any) => {
    if (e.target.files) {
      const imageArray = Array.from(e.target.files).map((file: any) =>
        URL.createObjectURL(file)
      );

      setMultipleImages((prevImages: any) => {
        return prevImages.concat(imageArray);
      });
    }
  };

  const uploadImagesMutation = useMutation({
    mutationFn: async (formattedData: any) => {
      console.log("muttate", formattedData);
      return await adminTokenAxios.post(`/admin/image-upload`, formattedData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    },
    onError: (error: any) => {
      console.error("Error creating user:", error.response?.data);
    },
    onSuccess: (res) => {
      if (res.status == 200) {
        // setData(res?.data?.data);
        // setCategory(res?.data?.tspc);
        // setOpen(true);
        alert("Success");
      } else {
        // handleAlertBoxOpen();
      }
    },
  });

  const onSubmit = (data: any) => {
    // console.log("multipleImages", multipleImages);
    // const formData = new FormData();
    // for (const key of Object.keys(multipleImages)) {
    //   console.log("loop", data.images[key]);
    //   formData.append("picture", data.images[key]);
    // }
    // fetch('http://localhost:3001/files', {
    //   method: 'POST',
    //   body: formData,
    // }).then((res) => console.log(res));
    const newData = Object.values(data.images);
    // console.log("image upload F", formData);
    // console.log("image upload DATA", data);
    console.log("image upload D", newData);
    uploadImagesMutation.mutateAsync(data);
    setMultipleImages([]); // You'll get an array of File objects here
  };

  return (
    <div>
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
              onClick={handleClose}
              aria-label="close"
              sx={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
              }}
            >
              <CloseIcon />
            </IconButton>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12}>
                  {/* <Controller
            name="images"
            control={control}
            defaultValue={[]}
            render={({ field }) => (
              <input
                {...field}
                type="file"
                multiple
        
              />
            )}
          /> */}
                  <input
                    type="file"
                    multiple
                    {...register("images", { required: true })}
                    // onChange={changeMultipleFiles}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary">
                    Upload Images
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ImageUploadModal;
