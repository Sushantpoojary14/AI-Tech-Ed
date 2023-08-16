import React from "react";
import { Typography, Box, Grid, Card, CardContent } from "@mui/material";

interface StudentDetailsProps {
  student: {
    id: string;
    name: string;
    email: string;
    phone: string;
    birthDate: string;
    state: string;
    city: string;
    totalTestsAnswered: number;
    completedTests: number;
    incompleteTests: number;
    missedTests: number;
    remainingTests: number;
  };
}

const Details: React.FC<StudentDetailsProps> = ({ student }) => {
  const fields = [
    { label: "Student ID:", value: student.id },
    { label: "Name:", value: student.name },
    { label: "Email:", value: student.email },
    { label: "Phone No.:", value: student.phone },
    { label: "Birth Date:", value: student.birthDate },
    { label: "State:", value: student.state },
    { label: "City:", value: student.city },
    { label: "Total Tests Answered:", value: student.totalTestsAnswered },
    { label: "Completed Tests:", value: student.completedTests },
    { label: "Incomplete Tests:", value: student.incompleteTests },
    { label: "Missed Tests:", value: student.missedTests },
    { label: "Remaining Tests:", value: student.remainingTests },
  ];
  return (
    <Card elevation={3}>
      <CardContent>
        <Grid paddingLeft={4} container spacing={2}>
          {fields.map((field) => (
            //React.Fragment same as <></>
            <React.Fragment key={field.label}>
              <Grid item xs={4}>
                <Typography variant="body1" align="left">
                  <strong>{field.label}</strong>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1">{field.value}</Typography>
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Details;
