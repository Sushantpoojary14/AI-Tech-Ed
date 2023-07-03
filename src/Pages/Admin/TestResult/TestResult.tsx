import { Container, Stack } from "@mui/material";

import { useState } from "react";
import { useParams } from "react-router-dom";
import ViewFirstSection from "../../User/TestResultAnalysis/Components/ViewFirstSection";
import ViewSecondSection from "../../User/TestResultAnalysis/Components/ViewSecondSection";
import ViewThirdSection from "../../User/TestResultAnalysis/Components/ViewThirdSection";
import ViewFourthSection from "../../User/TestResultAnalysis/Components/ViewFourthSection";

const TestResult = () => {
  const { testresult } = useParams();

  const [barData, setBarData] = useState({
    labels: [
      "SOTT Reading Test 1",
      "SOTT Math Test 1",
      "SOTT Thinking Skills Test 1",
    ],
    datasets: [
      {
        label: "Marks",
        data: [20, 22, 17],
        backgroundColor: "#FA8128",
      },
    ],
  });

  const [lineData, setLineData] = useState({
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    datasets: [
      {
        label: "Seconds",
        data: [5, 8, 15, 30, 40, 32, 12, 53, 21, 22],
        backgroundColor: "#3A9BDC",
      },
    ],
  });

  const [pieData, setPieData] = useState({
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
      },
    ],
  });
  return (
    <Container maxWidth="xl">
      <Stack direction="row" spacing={3} flexWrap="wrap" sx={{ width: "100%" }}>
        <ViewFirstSection />
        <Stack direction="column" spacing={3} useFlexGap flexWrap="wrap">
          <ViewSecondSection pieData={pieData} />
          <ViewThirdSection lineData={lineData} />
          <ViewFourthSection barData={barData} />
        </Stack>
      </Stack>
    </Container>
  );
};

export default TestResult;
