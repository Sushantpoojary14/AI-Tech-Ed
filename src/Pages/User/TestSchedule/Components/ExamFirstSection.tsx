import { Card, Divider, FormControlLabel, Radio, RadioGroup, Stack } from "@mui/material"
import { ParaText4 } from "../../../../Components/Common/ParaText";
import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
  number:string;
  A: string;
  B: string;
  C: string;
  D: string;
}

const ExamFirstSection = () => {
  const { register, handleSubmit, watch, formState: { errors }, } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <Card sx={{ boxShadow: '6px 6px 20px 0px #808080', mb: '15px', display: 'flex', flexDirection: { lg: 'row', md: 'row', sm: 'row', xs: 'column' }, p: '20px', width: '1000px' }}>
      <Stack direction="column" spacing={2} margin="auto" sx={{}}>
        <ParaText4 text="Question 1" css={{ fontWeight: '600' }} />
        <ParaText4 text="I am a number. I have 7 in the ones place. I am less than 80 but greater than 70. What is my number?" css={{ fontWeight: '400', maxWidth: '443px' }} />
      </Stack>
      <Divider orientation="vertical" flexItem sx={{}} />
      <Stack direction="column" spacing={2} margin={{ lg: 'auto', md: 'auto', sm: 'auto', xs: '20px' }}>
        <ParaText4 text="Option" css={{ fontWeight: '600' }} />
        <form onChange={handleSubmit(onSubmit)}>
          <RadioGroup  {...register("number")}>
            <FormControlLabel value="A" control={<Radio />} label="(A) 74" {...register("A")} />
            <FormControlLabel value="B" control={<Radio />} label="(B) 54" {...register("B")}/>
            <FormControlLabel value="C" control={<Radio />} label="(C) 44" {...register("C")}/>
            <FormControlLabel value="D" control={<Radio />} label="(D) 84" {...register("D")}/>
          </RadioGroup>
        </form>
        {/* <ParaText4 text="(A) 74" css={{ fontWeight: '400', maxWidth: '443px' }} />
        <ParaText4 text="(A) 74" css={{ fontWeight: '400', maxWidth: '443px' }} />
        <ParaText4 text="(A) 74" css={{ fontWeight: '400', maxWidth: '443px' }} />
        <ParaText4 text="(A) 74" css={{ fontWeight: '400', maxWidth: '443px' }} /> */}

      </Stack>
    </Card>
  )
}

export default ExamFirstSection
