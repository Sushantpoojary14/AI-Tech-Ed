import {
  Button,
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

import { ParaText4, ParaText3 } from "../../../../Components/Common/ParaText";
import { useState, useRef, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  BButton,
  DeleteIconButton,
  DownloadIconButton,
  SwitchComp,
} from "../../../../Components/Common/Button";
import PdfMaker from "../Components/PdfMaker";
import { useMutation } from "@tanstack/react-query";
import adminTokenAxios from "../../../../Hooks/AdminTokenAxios";
import AlertBox from "../../../../Components/Common/AlertBox";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const SectionTwo = ({ sets, onSwitchToggle, handleDelete, addNewSet }: any) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [setData, setSetData] = useState<any>(null);
  const { productdetails } = useParams();
  const [open, setOpen] = useState<boolean>(false);
  const [open2, setOpen2] = useState<boolean>(false);

  const handleAlertBoxOpen = () => {
    setOpen(true);
  };

  const handleAlertBoxClose = () => {
    setOpen(false);
  };

  const handleAlertBoxOpen2 = () => {
    setOpen2(true);
  };

  const handleAlertBoxClose2 = () => {
    setOpen2(false);
  };

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const deleteSetMU = useMutation({
    mutationFn: async (id: number) => {
      return await adminTokenAxios.delete(`/admin/delete-set/${id}`);
    },
    onSuccess: (res) => {
      console.log(res.status);
      if (res.status == 200) {
        handleAlertBoxOpen2();
      } else {
        handleAlertBoxOpen();
      }
    },
  });

  const handleButtonClick = (id: number | String, t_id: number | String ) => {
    console.log(id, t_id);
  };

  // useEffect(() => {}, [setData]);

  return (
    <>
      {/* {setData && (
        <PdfMaker
          bol={!!setData}
          data={setData?.questions}
          key={setData?.id}
          // total={setData?.questions.length}
          topic={setData?.set_name}
          button={<button ref={buttonRef} type="button" hidden></button>}
        />
      )} */}

      <AlertBox
        name="Cannot Delete The Set"
        type="error"
        bol={open}
        duration={6000}
        handleAlertBoxClose={handleAlertBoxClose}
      />
      <AlertBox
        name="Successfully Deleted The Set"
        type="success"
        bol={open2}
        handleAlertBoxClose={handleAlertBoxClose2}
      />
      <Card
        sx={{
          width: { lg: "1020px", md: "900px", sm: "900px", xs: "360px" },
          py: "14px",
          px: "2rem",
        }}
      >
        <Stack spacing={2}>
          <Stack flexDirection={"row"} justifyContent={"space-between"}>
            <ParaText4
              text="Sets"
              css={{ fontWeight: 550, paddingTop: "13px" }}
            />

            <BButton
              name="Add New Set"
              func={() =>
                addNewSet.mutate({p_id:productdetails, tsc_id:(value + 1)})
              }
            />
          </Stack>
          <Divider
            sx={{
              // borderColor: "#FA8128",
              borderWidth: "2px",
              borderRadius: "3px",
              width: "100%",
            }}
          />
        </Stack>

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
              {sets?.map((category: any, index: number) => (
                <Tab key={index} label={category.tsc_type} />
              ))}
            </Tabs>
            {sets?.map((category: any, index: number) => (
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
                          {set.set_name}
                        </Typography>
                        <Stack
                          direction={"row"}
                          alignItems={"center"}
                          spacing={2}
                        >
                          {/* <DownloadIconButton
                            type="button"
                            func={() => handleButtonClick(set)}
                          /> */}

                          <DeleteIconButton
                            type="button"
                            func={() => handleDelete.mutate(set.id)}
                          />
                          {/* <button
                            type="button"
                            hidden
                            onClick={() => console.log("click")}
                          ></button> */}
                          {
                            // <PdfMaker
                            //   bol={!!set}
                            //   data={set?.questions}
                            //   key={set?.id}
                            //   randomG={true}
                            //   total={setData?.questions.length}
                            //   topic={set?.set_name}
                            //   button={<DownloadIconButton type="button" />}
                            // />
                          }
                          {/* <Switch
                      checked={set.status === 1} // Set the initial state based on API response
                      onChange={() => onSwitchToggle(set.id, set.status)} // Attach the event handler
                    /> */}
                          <SwitchComp
                            checked={set.status === 1}
                            onChange={() => onSwitchToggle(set.id, set.status)}
                          />
                        </Stack>
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
                                borderRight: "4px solid orange",
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
    </>
  );
};

export default SectionTwo;
