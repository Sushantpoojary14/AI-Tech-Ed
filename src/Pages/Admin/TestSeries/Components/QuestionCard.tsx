import React from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";

interface QuestionCardProps {
  questionNo?: number;
  question: string;
  options: {
    [key: string]: string;
  };

  answer: string;
  explanation: string;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  // questionNo,
  question,
  options,
  answer,
  explanation,
}) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="h2">
          Question : {question}
        </Typography>
        <List disablePadding>
          {Object.keys(options).map((optionKey, index) => (
            <ListItem key={optionKey} disablePadding>
              {/* <input type="radio" name={`question${index}`} value={optionKey} />
                {options[optionKey]} */}
              <ListItemIcon>{optionKey.toUpperCase()}</ListItemIcon>
              <ListItemText primary={options[optionKey]} />
            </ListItem>
          ))}
        </List>
        <Typography variant="subtitle1" component="p">
          Correct Answer: {answer.toUpperCase()}
        </Typography>
        <Typography variant="body2" component="p">
          Explanation: {explanation}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default QuestionCard;
