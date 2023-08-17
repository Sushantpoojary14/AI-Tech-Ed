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
import { QueryClient } from "@tanstack/react-query";

const SectionTwo = ({ sets, updateSetStatus }: any) => {
  console.log("SETS", sets);

  const queryClient = new QueryClient();

  const handleSwitchToggle = (setId:number | string, currentStatus:number | string) => {
    const newStatus = !currentStatus ? 1 : 0; // Toggle the status

    console.log("handleSwitchToggle", setId, currentStatus, newStatus);
    // Call the mutation function
    updateSetStatus.mutate({ setId, newStatus });

    // const updatedData = queryClient
    //   .getQueryData(["ViewProductDetails"])
    //   .map((category) => ({
    //     ...category,
    //     sets: category.sets.map((set) =>
    //       set.id === setId ? { ...set, status: newStatus } : set
    //     ),
    //   }));

    // queryClient.setQueryData(["ViewProductDetails"], updatedData);
  };

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
            <Grid key={set.id} item xs={12} md={12}>
              <Typography component={"span"}>
                Category - {set.tsc_type}
              </Typography>
              <List>
                {set.sets.map((item: any) => (
                  <ListItem
                    key={item.id}
                    sx={{ borderBottom: 1, borderColor: "divider" }}
                  >
                    <ListItemText
                      primary={`Set - ${item.set_id}`}
                      secondary={`Topics - ${item.topics
                        .map((top: any) => top.t_name)
                        .join(", ")}`}
                    />
                    <ListItemSecondaryAction>
                      <Switch
                        checked={item.status === 1} // Set the initial state based on API response
                        onChange={() =>
                          handleSwitchToggle(item.id, item.status)
                        } // Attach the event handler
                      />
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
