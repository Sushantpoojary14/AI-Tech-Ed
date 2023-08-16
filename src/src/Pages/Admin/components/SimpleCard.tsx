import { Box, Card, CardContent, Typography } from "@mui/material";

interface Props {
  title: string;
  subtitle?: string | number;
}

const SimpleCard = ({ title, subtitle }: Props) => {
  return (
    <Card
      sx={{
        // background: "inherit",
        width: 1,
        // height: "10rem",
        border: "1px solid lightgray",
        boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.1)",
        p: 2,
      }}
    >
      <CardContent>
        <Box textAlign="center">
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography mt={1} variant="body1" color="textSecondary">
            {subtitle}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SimpleCard;
