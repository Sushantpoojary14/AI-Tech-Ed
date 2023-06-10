import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { Dialog, Tab } from '@mui/material';
import Login from './Login';
import { UserContext } from '../../../Context/UserContext';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import Register from './Register';

const MainAuth = () => {
    const { open, handleClose} = UserContext();
    const [value, setValue] = useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Dialog onClose={handleClose} open={open} >
            <Box sx={{maxWidth:"480px"}}>
            <TabContext value={value} >
                <Box sx={{mt:'10px',}} >
                    <TabList onChange={handleChange} 
                   sx={{ '& .MuiTab-root': {mx:{lg:'70px',xs:'12px',md:'80px',sm:'50px'} } }} centered>
                        <Tab label="Login" value="1" />
                        <Tab label="Register" value="2" />
                    </TabList>
                </Box>
                <TabPanel value="1"><Login /></TabPanel>
                <TabPanel value="2"> <Register /></TabPanel>
            </TabContext>
            </Box>
        </Dialog>
    )
}

export default MainAuth

