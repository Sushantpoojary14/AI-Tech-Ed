import { Box, outlinedInputClasses, TextField } from "@mui/material";
import { ParaText1 } from "./ParaText";

interface props {
  reg: any;
  val: boolean;
  label: string;
  type: string;
  css?: object;
  defaultVal?: any;
}
const Input = (props: props) => {
  return (
    <Box sx={{ ...props.css }}>
      <ParaText1 text={props.label} css={{ textAlign: "left" }} />
      <TextField
        error={props.val}
        type={props.type}
        required={true}
        defaultValue={props.defaultVal}
        helperText={props.val}
        InputLabelProps={{
          sx: {
            color: "#000000",
            fontWeight: "500",
          },
        }}
        sx={{
          width: "100%",
          height: "36px",

          "& .MuiOutlinedInput-root": {
            backgroundColor: "#FFFFFF",
            color: "#000000",
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "#FA8128",
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              border: "1px solid #FA8128",
            },
          },
        }}
        {...props.reg}
      />
    </Box>
  );
};

export default Input;
