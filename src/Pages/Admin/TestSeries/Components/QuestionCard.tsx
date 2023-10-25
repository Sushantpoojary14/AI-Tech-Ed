import React from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ImageList,
  ImageListItem,
} from "@mui/material";

interface QuestionCardProps {
  questionNo?: number;
  conversation?: string | null;
  paragraph?: string | null;
  question: string;
  options: {
    [key: string]: string;
  };
  images?: any;
  answer: string;
  explanation: string;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  // questionNo,
  conversation,
  paragraph,
  question,
  options,
  answer,
  explanation,
  images,
}) => {
  return (
    <Card>
      <CardContent>
        {paragraph && (
          <Typography variant="h6" component="h2">
            Question : {paragraph}
          </Typography>
        )}
        {conversation && (
          <Typography variant="h6" component="h2">
            {  paragraph ? conversation : `Question : ${conversation}`}
          </Typography>
        )}
       { 
        <Typography variant="h6" component="h2">
          {(conversation || paragraph)  ?  question :`Question : ${question} `}
        </Typography>
        }
        {images && images.length !== 0 && (
          <ImageList
            sx={{
              width: "100%",
              // maxHeight: "340px",
              maxWidth: "hidden",
              flex: "column",
              justifyContent: "space-between",
            }}
            cols={3}
            // gap={7}
            // rowHeight={164}
          >
            {images.map((item: any, key: number) => (
              <ImageListItem key={key} sx={{ width: "200px" }}>
                <img
                  src={import.meta.env.VITE_IMAGE_URL + item}
                  alt={`Image ${import.meta.env.VITE_IMAGE_URL + item}`}
                />
              </ImageListItem>
            ))}
          </ImageList>
        )}
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
