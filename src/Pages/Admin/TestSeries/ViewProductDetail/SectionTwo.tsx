import {
  Card,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Stack,
  Switch,
} from "@mui/material";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { ParaText1, ParaText3 } from "../../../../Components/Common/ParaText";
import { useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Link } from "react-router-dom";
import { inherits } from "util";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Box>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const SectionTwo = ({ sets, onSwitchToggle }: any) => {
  console.log("SETS", sets);

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleClick = (id: number) => {
    console.log(id);
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
        {/* <Grid container spacing={2}>
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
                        onChange={() => onSwitchToggle(item.id, item.status)} // Attach the event handler
                      />
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </Grid>
          ))}
        </Grid> */}

        <Box sx={{ width: "100%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            {sets.map((category: any, index: number) => (
              <Tab key={index} label={category.tsc_type} />
            ))}
          </Tabs>
          {sets.map((category: any, index: number) => (
            <CustomTabPanel key={index} value={value} index={index}>
              <Stack spacing={2}>
                {category.sets.map((set: any) => (
                  <Box
                    paddingBottom={1}
                    borderBottom={1}
                    borderColor={"gray"}
                    key={set.id}
                  >
                    <Stack direction={"row"} justifyContent={"space-between"}>
                      <Typography variant="h6" fontWeight={"bold"}>
                        Set - {set.set_id}
                      </Typography>
                      <Switch
                        checked={set.status === 1} // Set the initial state based on API response
                        onChange={() => onSwitchToggle(set.id, set.status)} // Attach the event handler
                      />
                    </Stack>

                    <Typography
                      marginBottom={1}
                      variant="subtitle2"
                      color={"gray"}
                    >
                      Topics
                    </Typography>
                    {set.topics.map((topic: any) => (
                      <Link
                        key={topic.id}
                        to={`/admin/view-topics/view-topic-questions/${topic.id}`}
                      >
                        <Typography
                          sx={{
                            padding: "0 1rem",
                            paddingBottom: "4px",
                            "&:hover": {
                              borderLeft: "4px solid orange",
                              fontWeight: 600,
                            },
                          }}
                        >
                          {topic.t_name}
                        </Typography>
                      </Link>

                      // <div key={topic.id}>{topic.t_name}</div>
                    ))}
                  </Box>
                ))}
              </Stack>
            </CustomTabPanel>
          ))}
        </Box>
      </Box>
    </Card>
  );
};

export default SectionTwo;
