import {
  Card,
  Divider,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";
import { ParaText4 } from "../../../../Components/Common/ParaText";
import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
  number: string;
  A: string;
  B: string;
  C: string;
  D: string;
};
interface props {
  data: any;
  count:number;
}
const ExamFirstSection = (props: props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
console.log(props.data?.question);

  return (
    <Card
      sx={{
        boxShadow: "6px 6px 20px 0px #808080",
        mb: "15px",
        display: "flex",
        flexDirection: { lg: "row", md: "row", sm: "row", xs: "column" },
        p: "25px",
        width: "1000px",
      }}
    >
      {props.data &&
        <>
          <Stack direction="column" spacing={2} margin="auto">
            <ParaText4 text={`Question ${props.count+1}`} css={{ fontWeight: "600" }} />
            <ParaText4
              text={props.data.questions.question}
              css={{ fontWeight: "400", maxWidth: "443px" }}
            />
          </Stack>
          <Divider orientation="vertical" flexItem sx={{}} />
          <Stack
            direction="column"
            spacing={2}
            margin={{ lg: "auto", md: "auto", sm: "auto", xs: "20px" }}
          >
            <ParaText4 text="Option" css={{ fontWeight: "600" }} />
            <form onChange={handleSubmit(onSubmit)}>
              <RadioGroup {...register("number")}>
                <FormControlLabel
                  value="A"
                  control={<Radio />}
                  label={`(A) ${props.data.questions.A}`}
                  {...register("A")}
                />
                <FormControlLabel
                  value="B"
                  control={<Radio />}
                  label={`(A) ${props.data.questions.B}`}
                  {...register("B")}
                />
                <FormControlLabel
                  value="C"
                  control={<Radio />}
                  label={`(A) ${props.data.questions.C}`}
                  {...register("C")}
                />
                <FormControlLabel
                  value="D"
                  control={<Radio />}
                  label={`(A) ${props.data.questions.D}`}
                  {...register("D")}
                />
              </RadioGroup>
            </form>
            {/* <ParaText4 text="(A) 74" css={{ fontWeight: '400', maxWidth: '443px' }} />
    <ParaText4 text="(A) 74" css={{ fontWeight: '400', maxWidth: '443px' }} />
    <ParaText4 text="(A) 74" css={{ fontWeight: '400', maxWidth: '443px' }} />
    <ParaText4 text="(A) 74" css={{ fontWeight: '400', maxWidth: '443px' }} /> */}
          </Stack>
        </>
      }
    </Card>
  );
};

export default ExamFirstSection;
