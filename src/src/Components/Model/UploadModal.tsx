import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Stack } from "@mui/material";

import React, { useState, CSSProperties } from "react";

import {
  useCSVReader,
  lightenDarkenColor,
  formatFileSize,
} from "react-papaparse";

const GREY = "#CCC";
const GREY_LIGHT = "rgba(255, 255, 255, 0.4)";
const DEFAULT_REMOVE_HOVER_COLOR = "#A01919";
const REMOVE_HOVER_COLOR_LIGHT = lightenDarkenColor(
  DEFAULT_REMOVE_HOVER_COLOR,
  40
);
const GREY_DIM = "#686868";

const styles = {
  zone: {
    alignItems: "center",
    border: `2px dashed ${GREY}`,
    borderRadius: 20,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    padding: 20,
  } as CSSProperties,
  file: {
    background: "linear-gradient(to bottom, #EEE, #DDD)",
    borderRadius: 20,
    display: "flex",
    height: 120,
    width: 120,
    position: "relative",
    zIndex: 10,
    flexDirection: "column",
    justifyContent: "center",
  } as CSSProperties,
  info: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    paddingLeft: 10,
    paddingRight: 10,
  } as CSSProperties,
  size: {
    backgroundColor: GREY_LIGHT,
    borderRadius: 3,
    marginBottom: "0.5em",
    justifyContent: "center",
    display: "flex",
  } as CSSProperties,
  name: {
    backgroundColor: GREY_LIGHT,
    borderRadius: 3,
    fontSize: 12,
    marginBottom: "0.5em",
  } as CSSProperties,
  progressBar: {
    bottom: 14,
    position: "absolute",
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
  } as CSSProperties,
  zoneHover: {
    borderColor: GREY_DIM,
  } as CSSProperties,
  default: {
    borderColor: GREY,
  } as CSSProperties,
  remove: {
    height: 23,
    position: "absolute",
    right: 6,
    top: 6,
    width: 23,
  } as CSSProperties,
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 300,
  bgcolor: "background.paper",
  //   border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface ModalProps {
  handleOpen?: () => void;
  handleClose?: () => void;
  handleSubmit?: () => void;
  open: boolean;
  setCsvData?: any;
}

const UploadModal = ({
  open,
  handleClose,
  setCsvData,
  handleSubmit,
}: ModalProps) => {
  const { CSVReader } = useCSVReader();
  const [zoneHover, setZoneHover] = useState(false);
  const [removeHoverColor, setRemoveHoverColor] = useState(
    DEFAULT_REMOVE_HOVER_COLOR
  );

  // const [result, setResult] = useState<any>(null);

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
            {/* <Stack spacing={3}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Upload CSV File"
                  type="file"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconButton edge="start">
                          <CloudUploadIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Button size="large" variant="contained">
                  Upload
                </Button>
              </Stack> */}

            <CSVReader
              onUploadAccepted={(results: any) => {
                setCsvData(results);
                // console.log("---------------------------");
                // console.log(results);
                // console.log("---------------------------");
                setZoneHover(false);
              }}
              onDragOver={(event: DragEvent) => {
                event.preventDefault();
                setZoneHover(true);
              }}
              onDragLeave={(event: DragEvent) => {
                event.preventDefault();
                setZoneHover(false);
              }}
              config={{
                header: true,
              }}
            >
              {({
                getRootProps,
                acceptedFile,
                ProgressBar,
                getRemoveFileProps,
                Remove,
              }: any) => (
                <>
                  <div
                    {...getRootProps()}
                    style={Object.assign(
                      {},
                      styles.zone,
                      zoneHover && styles.zoneHover
                    )}
                  >
                    {acceptedFile ? (
                      <>
                        <div style={styles.file}>
                          <div style={styles.info}>
                            <span style={styles.size}>
                              {formatFileSize(acceptedFile.size)}
                            </span>
                            <span style={styles.name}>{acceptedFile.name}</span>
                          </div>
                          <div style={styles.progressBar}>
                            <ProgressBar />
                          </div>
                          <div
                            {...getRemoveFileProps()}
                            style={styles.remove}
                            onMouseOver={(event: Event) => {
                              event.preventDefault();
                              setRemoveHoverColor(REMOVE_HOVER_COLOR_LIGHT);
                            }}
                            onMouseOut={(event: Event) => {
                              event.preventDefault();
                              setRemoveHoverColor(DEFAULT_REMOVE_HOVER_COLOR);
                            }}
                          >
                            <Remove color={removeHoverColor} />
                          </div>
                        </div>
                      </>
                    ) : (
                      "Drop CSV file here or click to upload"
                    )}
                  </div>
                  <button onClick={handleSubmit}>Click</button>
                </>
              )}
            </CSVReader>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default UploadModal;
