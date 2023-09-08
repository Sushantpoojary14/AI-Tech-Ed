import { Box, Typography, makeStyles } from "@mui/material";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const slideRightToLeft = keyframes`
  0% {
    transform: translateX(60%);
  }
  100% {
    transform: translateX(-70%);
  }
`;

const AnimatedText = styled.p`
  font-family: monospace;
  font-weight: bold;
  font-size: larger;
  letter-spacing: 1px;
  animation: ${slideRightToLeft} 25s linear infinite;
  /* width: 1/4; */
`;

const NotificationStrip = ({ data }: any) => {
  return (
    <Box bgcolor={"#ffbf69"} mb={1} py={1} textAlign={"center"}>
      {data.map((item: any) => (
        <AnimatedText key={item.id}>
          Package {item.p_name} is about to expire in {item.remaining_days} Take
          Exam before {item.valid_till}!!
        </AnimatedText>
      ))}
      <AnimatedText>
        Package is about to expire!! Take Exam Fast!! Package is about to
        expire!! Take Exam Fast!!Package is about to expire!! Take Exam Fast!!
      </AnimatedText>
    </Box>
  );
};

export default NotificationStrip;
