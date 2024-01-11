import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Container,
  Paper,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
const data = [
  "Opportunity Class (OC) placement tests",
  "FREE OC Samples",
  "Selective School Placement tests",
  "FREE Selective Samples",
];

const FreeResources = () => {
  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4">Free Resources</Typography>
        {data.map((item) => (
          <ListItemButton
            key={item}
            sx={{ py: 0, minHeight: 32, color: "black" }}
          >
            <ListItemIcon sx={{ color: "inherit" }}></ListItemIcon>
            <ListItemText
              primary={item}
              primaryTypographyProps={{ fontSize: 14, fontWeight: "medium" }}
            />
          </ListItemButton>
        ))}

        <Typography variant="h5">
          Opportunity Class (OC) placement tests
        </Typography>
        <Typography variant="body1">
          An OC (Opportunity Class) Placement Test is a form of examination used
          in New South Wales (NSW), Australia, to select students for placement
          in Opportunity Classes. Opportunity classrooms are specialised
          classrooms in some primary schools for academically exceptional and
          talented students. These classes offer a more difficult and enriching
          educational environment for kids with exceptional intellectual
          potential.
        </Typography>

        <Typography variant="body1">
          Students often take the OC Placement Test in Year 4, which tests their
          skills in:
        </Typography>

        <List>
          <ListItem>
            <ListItemText primary="Reading: is the capacity to comprehend and interpret written material." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Mathematics: Problem-solving ability and mathematical thinking." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Thinking Skills: refers to cognitive abilities such as the ability to reason and think logically." />
          </ListItem>
        </List>

        <Typography variant="body1">
          The test is designed to identify students who would benefit from the
          advanced and accelerated curriculum available in Opportunity Classes.
          It's important for parents and students to be aware of the specific
          details, dates, and requirements related to the OC Placement Test in
          NSW. The NSW Department of Education or the relevant educational
          authorities typically provide information on the test, including
          sample questions and guidelines for preparation. Parents can obtain
          information about the test from their child's school or through
          official channels to ensure they are well-prepared for the testing
          process.
        </Typography>
      </Paper>
    </Container>
  );
};

export default FreeResources;
