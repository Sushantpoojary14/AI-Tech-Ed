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
  questionNo: number;
  question: string;
  Option_A: any;
  Option_B: any;
  Option_C: any;
  Option_D: any;
  answer: string;
  explanation: string;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  questionNo,
  question,
  Option_A,
  Option_B,
  Option_C,
  Option_D,
  answer,
  explanation,
}) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="h2">
          Question {questionNo}: {question}
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>A.</ListItemIcon>
            <ListItemText primary={Option_A} />
          </ListItem>
          <ListItem>
            <ListItemIcon>B.</ListItemIcon>
            <ListItemText primary={Option_B} />
          </ListItem>
          <ListItem>
            <ListItemIcon>C.</ListItemIcon>
            <ListItemText primary={Option_C} />
          </ListItem>
          <ListItem>
            <ListItemIcon>D.</ListItemIcon>
            <ListItemText primary={Option_D} />
          </ListItem>
        </List>
        <Typography variant="subtitle1" component="p">
          Correct Answer: {answer}
        </Typography>
        <Typography variant="body2" component="p">
          Explanation: {explanation}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default QuestionCard;
