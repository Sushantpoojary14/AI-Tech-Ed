import {
  Backdrop,
  Box,
  Fade,
  FormControl,
  FormLabel,
  IconButton,
  MenuItem,
  Modal,
  Select,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import PdfMaker from "../../Pages/Admin/TestSeries/Components/PdfMaker";
import { BButton, BButton2 } from "../Common/Button";
import { fetchAndReplaceImagesTopic } from "../../utils/docx";
import DownloadPDF from "../../Pages/Admin/TestSeries/Components/PDF/DownloadPDF";
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
interface ModalProps {
  handleClose: () => void;
  open: boolean;
  data: any;
}
type FormValues = {
  total_questions: number;
};
const DownloadPdfModel = ({
  open,
  handleClose,
  data,
}: //   handleSubmit,
ModalProps) => {
  const { register, control, watch, reset } = useForm<FormValues>();
  const [setData, setSetData] = useState<any>(null);
  // console.log(watch("total_questions"));
  // console.log(data);
  useEffect(() => {
    setSetData(null);
    reset({
      total_questions: 0,
    });
  }, [open == false]);

  useEffect(() => {
    setSetData(data);
  }, [watch("total_questions")]);

  return (
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
              top: "10px",
              right: "10px",
            }}
          >
            <CloseIcon />
          </IconButton>
          <Stack spacing={2}>
            <Stack spacing={1}>
              <FormLabel
                sx={{ fontWeight: "900", fontSize: "1.1rem" }}
                id="demo-controlled-open-select-label"
              >
                Total Questions
              </FormLabel>

              <Controller
                name="total_questions"
                control={control}
                defaultValue={0} // Set a default value here
                render={({ field }) => (
                  <FormControl fullWidth>
                    <Select
                      {...field}
                      placeholder="Enter Total Questions"
                      // sx={{ width: "50%" }}
                    >
                      <MenuItem value={0} disabled>
                        <em>None</em>
                      </MenuItem>
                      {/* <MenuItem value={5}>5</MenuItem> */}
                      <MenuItem value={15}>15</MenuItem>
                      <MenuItem value={20}>20</MenuItem>
                      <MenuItem value={25}>25</MenuItem>
                      <MenuItem value={30}>30</MenuItem>
                      <MenuItem value={50}>50</MenuItem>
                    </Select>
                  </FormControl>
                )}
              />
            </Stack>
            {setData ? (
              <Stack direction={"row"} justifyContent={"space-between"}>
                {/* <PdfMaker
                  bol={!!setData}
                  data={setData?.get_question}
                  randomG={true}
                  // button={
                  //   <BButton
                  //     type="button"
                  //     name="Download PDF"
                  //     css={{ width: "100%" }}
                  //   />
                  // }
                  total={watch("total_questions")}
                  topic={setData?.t_name}
                /> */}
                <DownloadPDF
                  bol={!!setData}
                  data={setData?.get_question}
                  randomG={true}
                  total={watch("total_questions")}
                  topic={setData?.t_name}
                  set={false}
                />
                <BButton
                  type="button"
                  name="Download Docx"
                  // css={{ width: "100%" }}
                  func={() =>
                    fetchAndReplaceImagesTopic(
                      setData,
                      watch("total_questions")
                    )
                  }
                />
              </Stack>
            ) : (
              <Stack direction={"row"} justifyContent={"space-between"}>
                <BButton disabled={true} type="button" name="Download PDF" />
                <BButton disabled={true} type="button" name="Download Docx" />
              </Stack>
            )}
          </Stack>
        </Box>
      </Fade>
    </Modal>
  );
};

export default DownloadPdfModel;
