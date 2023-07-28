import { Box, outlinedInputClasses, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { OButton3 } from "../../../../Components/Common/Button";

type Inputs = {
  name: string;
  email: string;
  number: string;
  message: string;
};

interface formInput {
  type: string;
  label: string;
  area?: boolean;
  name: "number" | "name" | "email" | "message";
}
const formData: formInput[] = [
  { type: "text", label: "Name", name: "name" },
  { type: "email", label: "Email", name: "email" },
  { type: "text", label: "Phone Number", name: "number" },
  { type: "text", label: "Message", area: true, name: "message" },
];
const ContactForm = () => {
  const [val, setVal] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (para_data: Object) => {
    console.log(para_data);
  };

  return (
    <Stack sx={{ width: { lg: "640px" } }} spacing={2}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {formData.map((item: formInput, key) => {
          return (
            <TextField
              error={val}
              type={item.type}
              placeholder={item.label}
              key={key}
              required={true}
              helperText={val}
              multiline={item.area}
              rows={4}
              InputLabelProps={{
                sx: {
                  color: "#000000",
                  fontWeight: "500",
                },
              }}
              sx={{
                width: "100%",
                mb: "25px",
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
              {...register(item.name)}
            />
          );
        })}
        <OButton3 name="Submit" />
      </form>
    </Stack>
  );
};

export default ContactForm;
