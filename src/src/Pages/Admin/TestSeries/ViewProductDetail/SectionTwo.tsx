import {
  Box,
  Card,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Switch,
  Typography,
} from "@mui/material";

import { ParaText3 } from "../../../../Components/Common/ParaText";
import { Category } from "@mui/icons-material";

const SectionTwo = ({ sets }: any) => {
  console.log("SETS", sets);

  return (
    <Card
      sx={{
        // boxShadow: "6px 6px 20px 0px #808080",
        // my: "15px",
        width: { lg: "1020px", md: "900px", sm: "900px", xs: "360px" },
        // height: { lg: "auto", md: "286px", sm: "286px", xs: "286px" },
        py: "14px",
        px: "2rem",
      }}
    >
      <ParaText3 text="Sets" />
      <Divider
        sx={{
          borderColor: "#FA8128",
          borderWidth: "3px",
          borderRadius: "3px",
          width: "100px",
        }}
      />
      <Box width={"full"}>
        <Grid container spacing={2}>
          {sets.map((set: any) => (
            <Grid item xs={12} md={12}>
              <Typography component={"span"}>
                Category - {set.tsc_type}
              </Typography>
              <List>
                {set.sets.map((item: any) => (
                  <ListItem sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <ListItemText
                      primary={`Set - ${item.set_id}`}
                      secondary={`Topics - ${item.topics
                        .map((top: any) => top.t_name)
                        .join(", ")}`}
                    />
                    <ListItemSecondaryAction>
                      <Switch />
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Card>
  );
};

export default SectionTwo;
