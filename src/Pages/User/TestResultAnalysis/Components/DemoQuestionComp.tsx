import { useState } from "react";
import {
  Typography,
  Radio,
  Button,
  Select,
  MenuItem,
  Stack,
  FormControl,
  InputLabel,
  Box,
} from "@mui/material";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const StyledRoot = styled.div`
  text-align: center;
  max-width: 100%;
  margin: 0 auto;
  padding: 2px;
`;

const StyledQuestion = styled(Typography)`
  text-align: left;
  margin-bottom: 2px;
`;

const StyledParagraph = styled.div`
  text-align: left;
  margin-top: 2px;
  padding: 2px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
`;

const StyledConversation = styled.div`
  text-align: left;
  margin-top: 2px;
  padding: 2px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
  white-space: pre-line;

  & .speaker {
    font-weight: bold;
  }
`;

const StyledOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledSelect = styled(Select)`
  /* margin-top: 2px; */
  min-width: 300px;
`;

const StyledStack = styled(Stack)`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
`;

const StyledBuyButton = styled(Button)`
  /* margin-top: 2px; */
`;

const StyledButton = styled(Button)`
  margin-top: 2px;
`;

const DemoQuestionComp = ({ questions }: any) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [userAnswers, setUserAnswers] = useState(
    Array(questions.length).fill("")
  );
  const [showResults, setShowResults] = useState(false);

  const handleAnswerChange = (e: any) => {
    const updatedUserAnswers = [...userAnswers];
    updatedUserAnswers[currentQuestionIndex] = e.target.value;
    setUserAnswers(updatedUserAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleSelectChange = (event: any) => {
    setSelectedOption(event.target.value as string);
  };

  const calculateScore = () => {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
      if (userAnswers[i].toUpperCase() === questions[i].correct_option) {
        score++;
      }
    }
    return score;
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers(Array(questions.length).fill(""));
    setShowResults(false);
  };

  const splitConversation = (conversation: any) => {
    const lines = conversation.split("\n");
    const styledLines = lines.map((line: any, index: any) => {
      const speakerRegex = /^(.*?):\s/;
      const match = line.match(speakerRegex);
      if (match) {
        const speaker = match[1];
        const dialogue = line.replace(match[0], "");
        return (
          <div key={index}>
            <span className="speaker">{speaker}:</span> {dialogue}
          </div>
        );
      }
      return <div key={index}>{line}</div>;
    });
    return styledLines;
  };

  return (
    <StyledRoot>
      {showResults ? (
        <div>
          <Typography variant="h5">Quiz Results</Typography>
          <Typography variant="body1">
            Your Score: {calculateScore()} out of {questions.length}
          </Typography>
          <StyledStack direction="row" spacing={2}>
            <FormControl>
              <InputLabel htmlFor="select-option">
                Select Question to buy
              </InputLabel>
              <StyledSelect
                label="Select Question to buy"
                value={selectedOption}
                onChange={handleSelectChange}
              >
                <MenuItem value={"15"}>15 Questions</MenuItem>
                <MenuItem value={"30"}>30 Questions</MenuItem>
                <MenuItem value={"45"}>45 Questions</MenuItem>
              </StyledSelect>
            </FormControl>

            <StyledBuyButton
              variant="contained"
              color="primary"
              onClick={restartQuiz}
            >
              Buy
            </StyledBuyButton>
          </StyledStack>
        </div>
      ) : (
        <div>
          <StyledParagraph>
            {questions[currentQuestionIndex].paragraph}
          </StyledParagraph>
          <StyledConversation>
            {splitConversation(questions[currentQuestionIndex].conversation)}
          </StyledConversation>
          <StyledQuestion variant="h6">
            Question {currentQuestionIndex + 1}:{" "}
            {questions[currentQuestionIndex].question}
          </StyledQuestion>
          <StyledOptions>
            {["1", "2", "3", "4"].map((option) => (
              <div key={option}>
                <Radio
                  name="answer"
                  value={option}
                  checked={userAnswers[currentQuestionIndex] === option}
                  onChange={handleAnswerChange}
                />
                {
                  questions[currentQuestionIndex][
                    "option_" + option.toLowerCase()
                  ]
                }
              </div>
            ))}
          </StyledOptions>
          <StyledButton
            variant="contained"
            color="primary"
            onClick={handleNextQuestion}
          >
            Next
          </StyledButton>
        </div>
      )}
    </StyledRoot>
  );
};

export default DemoQuestionComp;
