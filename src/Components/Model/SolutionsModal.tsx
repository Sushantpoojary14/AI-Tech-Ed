import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import tokenAxios from "../../Hooks/TokenAxios";
import { useQuery } from "@tanstack/react-query";
import LoadingBar from "../Headers/LoadingBar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import {
  FormControlLabel,
  ImageList,
  ImageListItem,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";
import { ConverationComp, ParaText4 } from "../Common/ParaText";
import { Controller, useForm } from "react-hook-form";

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
  boxShadow: 24,
  p: 4,
  overflow: "auto",
};

type Inputs = {
  A?: string;
  B?: string;
  C?: string;
  D?: string;
  Answer: string;
};

interface ModalProps {
  setOpen: any;
  setQuestionID: any;
  open: boolean;
  id: string;
}

export default function SolutionsModal({
  open,
  id,
  setOpen,
  setQuestionID,
}: ModalProps) {
  const { control } = useForm<Inputs>();

  const handleClose = () => {
    setOpen(false);
    setQuestionID("");
  };

  const { isLoading, data, refetch } = useQuery({
    queryKey: ["get-user-set-question"],
    queryFn: () => {
      return tokenAxios.get(`/get-user-set-question/${id}`);
    },
    enabled: !!id,
  });

  console.log("sa", data?.data?.questions?.questions);

  if (isLoading) {
    return <LoadingBar />;
  }

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

            <Stack
              direction="column"
              spacing={3}
              marginX="auto"
              //   marginTop={3}
              maxWidth="950px"
              //   maxHeight="550px"
              //   sx={{
              //     overflow: "auto",
              //     "&::-webkit-scrollbar": {
              //       width: 2,
              //     },
              //     "&::-webkit-scrollbar-track": {
              //       backgroundColor: "white",
              //     },
              //     "&::-webkit-scrollbar-thumb": {
              //       backgroundColor: "gray",
              //       borderRadius: 2,
              //     },
              //   }}
              //   onCopy={(e) => props.preventCopyPaste(e)}
            >
              <Stack>
                {data?.data?.questions && (
                  <>
                    <ParaText4
                      text="Question Details"
                      css={{
                        fontWeight: "600",
                        marginBottom: "10px",
                        textAlign: "center",
                      }}
                    />
                    {!!data?.data?.questions?.questions.conversation ||
                    !!data?.data?.questions?.questions.paragraph ? (
                      <>
                        {data?.data?.questions?.questions.paragraph && (
                          <ParaText4
                            text={data?.data?.questions?.questions.paragraph}
                            css={{ fontWeight: "400", marginBottom: "10px" }}
                          />
                        )}
                        {data?.data?.questions?.questions.question_image &&
                          data?.data?.questions?.questions.question_image
                            .length !== 0 && (
                            <ImageList
                              sx={{
                                width: "100%",
                                // maxHeight: "340px",
                                maxWidth: "hidden",
                                display: "flex",
                                flexDirection: "row", // Horizontal layout
                                justifyContent: "space-between",
                                alignItems: "center",
                                mb: "1rem",
                              }}
                              cols={3}
                              gap={7}
                              // rowHeight={164}
                            >
                              {data?.data?.questions?.questions.question_image.map(
                                (item: any, key: number) => (
                                  <ImageListItem
                                    key={key}
                                    sx={{ width: "200px" }}
                                  >
                                    <img
                                      src={
                                        import.meta.env.VITE_IMAGE_URL +
                                        item.image_url
                                      }
                                      alt={`Image ${key}`}
                                    />
                                  </ImageListItem>
                                )
                              )}
                            </ImageList>
                          )}
                        {data?.data?.questions?.questions.conversation && (
                          <ConverationComp
                            text={data?.data?.questions.questions.conversation}
                          />

                          // <ParaText4
                          //   text={question.questions.conversation}
                          //   css={{ fontWeight: "400", marginBottom: "10px" }}
                          // />
                        )}
                        <ParaText4
                          text="Question"
                          css={{ fontWeight: "600" }}
                        />
                        <ParaText4
                          text={data?.data?.questions.questions.question}
                          css={{ fontWeight: "400", marginBottom: "10px" }}
                        />
                      </>
                    ) : (
                      <>
                        <ParaText4
                          text="Question"
                          css={{ fontWeight: "600" }}
                        />
                        <ParaText4
                          text={data?.data?.questions.questions.question}
                          css={{ fontWeight: "400", marginBottom: "10px" }}
                        />

                        {data?.data?.questions?.questions.question_image &&
                          data?.data?.questions?.questions.question_image
                            .length !== 0 && (
                            <ImageList
                              sx={{
                                width: "100%",
                                // maxHeight: "340px",
                                maxWidth: "hidden",
                                flex: "column",
                                justifyContent: "space-between",
                              }}
                              cols={3}
                              gap={7}
                              // rowHeight={164}
                            >
                              {data?.data?.questions?.questions.question_image.map(
                                (item: any, key: number) => (
                                  <ImageListItem
                                    key={key}
                                    sx={{ width: "200px" }}
                                  >
                                    <img
                                      src={
                                        import.meta.env.VITE_IMAGE_URL +
                                        item.image_url
                                      }
                                      alt={`Image ${key}`}
                                    />
                                  </ImageListItem>
                                )
                              )}
                            </ImageList>
                          )}
                      </>
                    )}
                  </>
                )}
              </Stack>
              <Stack>
                <ParaText4 text="Options" css={{ fontWeight: "600" }} />
                {/* <form onChange={handleSubmit(onSubmit)}> */}
                <Controller
                  name="Answer"
                  defaultValue=""
                  control={control}
                  render={({ field }) => (
                    <RadioGroup {...field} name="radio-buttons-group">
                      <FormControlLabel
                        value="A"
                        checked={data?.data?.questions?.test_answer === "A"}
                        control={<Radio readOnly />}
                        label={`A. ${data?.data?.questions?.questions.option_1}`}
                      />
                      <FormControlLabel
                        value="B"
                        checked={data?.data?.questions?.test_answer === "B"}
                        control={<Radio readOnly />}
                        label={`B. ${data?.data?.questions?.questions.option_2}`}
                      />
                      <FormControlLabel
                        value="C"
                        checked={data?.data?.questions?.test_answer === "C"}
                        control={<Radio readOnly />}
                        label={`C. ${data?.data?.questions?.questions.option_3}`}
                      />
                      <FormControlLabel
                        value="D"
                        checked={data?.data?.questions?.test_answer === "D"}
                        control={<Radio readOnly />}
                        label={`D. ${data?.data?.questions?.questions.option_4}`}
                      />
                    </RadioGroup>
                  )}
                />
                {/* </form> */}
              </Stack>
              <Stack spacing={2}>
                {data?.data?.questions?.test_answer === null ? (
                  <ParaText4
                    text="You have not Attempted"
                    css={{ fontWeight: "600", color: "red" }}
                  />
                ) : (
                  <ParaText4
                    text="You have Attempted"
                    css={{ fontWeight: "600", color: "green" }}
                  />
                )}
                <Stack direction={"row"} spacing={2}>
                  <ParaText4
                    text="Correct Answer: "
                    css={{ fontWeight: "600" }}
                  />
                  <ParaText4
                    text={data?.data?.questions.questions.correct_option}
                    css={{ fontWeight: "400", marginBottom: "10px" }}
                  />
                </Stack>

                <Stack>
                  <ParaText4 text="Explanation: " css={{ fontWeight: "600" }} />
                  <ParaText4
                    text={data?.data?.questions.questions.explanation}
                    css={{ fontWeight: "400", marginBottom: "10px" }}
                  />
                </Stack>

                <Stack>
                  <ParaText4 text="Time Taken" css={{ fontWeight: "600" }} />
                  <ParaText4
                    text={data?.data?.questions.test_time}
                    css={{ fontWeight: "400", marginBottom: "10px" }}
                  />
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
