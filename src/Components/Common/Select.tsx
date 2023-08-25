import {
  Select,
  MenuItem,
  InputLabel,
  SelectChangeEvent,
  FormControl,
} from "@mui/material";
import { useState } from "react";

interface option {
  test_type: string;
  id: number;
}
interface props {
  name: string;
  selectName: string;
  options: option[];
  defaultValue?:string;
  func?: (val: number) => void;
}

const SelectBox = (props: props) => {
  const [val, setVal] = useState<string>("");
  const handleChange = (event: SelectChangeEvent) => {
    setVal(event.target.value as string);
    if (props.func) {
      props.func(parseInt(event.target.value));
    }
  };
  return (
    <FormControl>
  
      <Select
        sx={{
          fontSize: "16px",
          width: { xs: "175px", sm: "175px", md: "270px" },
          height: "28px",
          border: "1px #1D1D1D",
          backgroundColor: "#FFFFFF",
          color: "black",
        }}
        value={val}
        onChange={handleChange}
        defaultValue={props.defaultValue}
        // label={props.label}
        displayEmpty
        name={props.selectName}
        inputProps={{
          name: `${props.name}`,
          id: 'uncontrolled-native',
        }}
      >
        <MenuItem value="" disabled>
          <em>{props.name}</em>
        </MenuItem>
        {props.options?.map((item: option, key) => {
          return (
            <MenuItem key={key} value={item.id}>
              {item.test_type}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SelectBox;
