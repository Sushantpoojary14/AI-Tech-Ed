import { Box, Container, Stack, TextField } from "@mui/material";
import React, { useRef, useState } from "react";
import { Header1 } from "../../../Components/Common/HeaderText";
import SelectBox from "../../../Components/Common/Select";
import { BButton } from "../../../Components/Common/Button";
import { generateQuestionObjects } from "./HtmlToImage";
import { ParaText1 } from "../../../Components/Common/ParaText";
import cube2 from "./Cube/Cube2";
import cube1 from "./Cube/Cube1";
import cube3 from "./Cube/Cube3";
import mirror1 from "./Mirror/Mirror1";
import Mirror2 from "./Mirror/Mirror2";
import { useMutation, useQuery } from "@tanstack/react-query";
import adminTokenAxios from "../../../Hooks/AdminTokenAxios";
import LoadingBar from "../../../Components/Headers/LoadingBar";

const options = [
  {
    test_type: "cube & dice",
    id: 1,
  },
  {
    test_type: "water & mirror",
    id: 2,
  },
  //   {
  //     test_type: "dice",
  //     id: 3,
  //   },
];

const NonVebal = () => {
  const [selectValue, setSelectValue] = useState(1);
  const [selectValue1, setSelectValue1] = useState(1);
  const [inputValue, setInputValue] = useState<string>("");
  const [newData, setNewData] = useState<any>([]);

  const questionRefs: any = useRef([]);

  for (let index = 0; index < 15; index++) {
    const questionRef = useRef(null);
    const optionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

    questionRefs.current.push({ questionRef, optionRefs });
  }

  const generateQuestions = async () => {
    console.log("selectd Value", selectValue);
    let newArr2: any = [];
    let count = -1;
    setNewData([]);
    if (selectValue === 1) {
      for (let index = 0; index < 2; index++) {
        count++;
        let newA = await cube1(count, questionRefs);
        newArr2.push(newA);
      }

      for (let index = 0; index < 2; index++) {
        count++;
        let newA = await cube2(count, questionRefs);
        newArr2.push(newA);
      }

      for (let index = 0; index < 2; index++) {
        count++;
        let newA = await cube3(count, questionRefs);
        newArr2.push(newA);
      }
    } else if (selectValue === 2) {
      for (let index = 0; index < 2; index++) {
        count++;
        let newA2 = await mirror1(count, questionRefs);
        newArr2.push(newA2);
      }
      for (let index = 0; index < 2; index++) {
        count++;
        let newA2 = await Mirror2(count, questionRefs);
        newArr2.push(newA2);
      }
    }

    setNewData(newArr2);
    console.log(newArr2);
  };

  const addNonVerbalMU = useMutation({
    mutationFn: async (formattedData: any) => {
      return await adminTokenAxios.post(
        `/admin/add-nv-question`,
        formattedData
        // {
        //   headers: {
        //     "Content-Type": "multipart/form-data",
        //   },
        // }
      );
    },
    onError: (error: any) => {
      console.error("Error creating user:", error.response?.data);
    },
    onSuccess: (res) => {
      // if (res.status == 200) {
      //   setData(res?.data?.data);
      //   setCategory(res?.data?.tspc);
      //   setOpen(true);
      // } else {
      //   handleAlertBoxOpen();
      // }
      console.log("Success", res);
    },
  });

  const imageG = async (e: any) => {
    e.preventDefault();
    const res = await generateQuestionObjects(newData);
    let data = {
      t_name: inputValue,
      topic:
        selectValue === 1
          ? "cubes & dice"
          : selectValue === 2
          ? "water & mirror"
          : "",
      tsc_id: 3,
      ts_id: selectValue1,
      question: res,
    };
    console.log("NVData", data);
    addNonVerbalMU.mutate(data);
  };

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const getTestSeries = async () => {
    try {
      const response = await adminTokenAxios.get(`admin/get-test-series`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  const testSeries = useQuery({
    queryKey: ["TestSeriesTopicsss"],
    queryFn: getTestSeries,
  });

  if (testSeries.isLoading) {
    return <LoadingBar />;
  }

  return (
    <Container
      maxWidth="lg"
      sx={{
        width: "96%",
        my: 1,
        // mx: "auto",
        // py: 2,

        // minHeight: "100vh",
        // display: "flex",
        // flexDirection: "column",
        // border: 1,
        // height: "85vh",
        backgroundColor: "#F5F5F5",
      }}
      disableGutters
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        // spacing={2}
        paddingY={2}
      >
        <Box>
          <Header1 header="Non Verbal" />
        </Box>

        <Stack direction="row" spacing={1}>
          {/* <Link to="view-test-series-topics">
          <OButton name="View Topics" />
        </Link> */}
          {/* <Link to="add-test-packages">
          <OButton name="Add Packages" />
        </Link> */}
        </Stack>
      </Stack>

      <Stack spacing={2}>
        <SelectBox
          name="select-test-type"
          defaultValue="1"
          selectName="test-type"
          options={testSeries?.data?.ts}
          func={setSelectValue1}
        />

        <SelectBox
          name="select-nonverbal-topic"
          defaultValue="1"
          selectName="test-type"
          options={options}
          func={setSelectValue}
        />

        <TextField
          label="Enter Topic Name"
          variant="outlined"
          margin="normal"
          sx={{ backgroundColor: "white", maxWidth: "400px" }}
          value={inputValue} // Bind the input value to the state variable
          onChange={handleInputChange} // Handle input changes
        />
      </Stack>
      <Box flexDirection={"row"} marginTop={2}>
        <BButton
          func={generateQuestions}
          type="button"
          name="Generate"
          css={{}}
        />
      </Box>

      <Box flexDirection={"row"} marginTop={2}>
        {newData.length > 1 && (
          <BButton func={imageG} type="button" name="Upload" />
        )}
      </Box>

      <Box flexDirection={"row"} textAlign={"left"}>
        <React.Fragment>
          {newData?.map((item2: any, key2: number) => (
            <Stack
              margin={"auto"}
              width={"90%"}
              height={"auto"}
              spacing={2}
              key={key2}
              marginY={"15px"}
            >
              <ParaText1 text={"Q) " + item2?.question} />
              <Box>{item2?.question_image}</Box>
              <Stack
                direction={"row"}
                margin={"auto"}
                width={"90%"}
                marginY={"15px"}
                sx={{
                  gridColumn: "auto auto auto auto",
                  columnGap: "30px",
                }}
              >
                {item2?.options?.map((item3: any, key3: number) => (
                  <>
                    <Box key={key3}>
                      {String.fromCharCode("A".charCodeAt(0) + key3) + ")"}{" "}
                      {item3}
                    </Box>
                  </>
                ))}
              </Stack>
              <ParaText1
                text={`Answer: ${String.fromCharCode(
                  "A".charCodeAt(0) + (item2.correct_ans - 1)
                )}`}
              />
            </Stack>
          ))}
        </React.Fragment>

        {/* <img src={svgImage} /> */}
        {/* <ImageToSvgConverter url={"http://localhost:8000/images/car.jpg"} /> */}
      </Box>
    </Container>
  );
};

export default NonVebal;
