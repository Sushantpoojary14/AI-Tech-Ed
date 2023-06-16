import { Box, Dialog, Stack, Typography } from '@mui/material'
import { ReactElement } from 'react'
import { UserContext } from '../../Context/UserContext';
import { OButton, WButton } from '../Common/Button';
import { Header1 } from '../Common/HeaderText';
import {Link } from 'react-router-dom';

interface props {
    handleClose: () => void;
    open: boolean;
    header: string;
    icon: ReactElement;
    link:string;
    text:string;
}

const SuccessModel = (props: props) => {

    return (
        <Dialog onClose={props.handleClose} open={props.open} >
            <Box sx={{
                width: { lg: '482px', md: '482px', sm: '482px', xs: '340px' }, height: '330px', display: 'flex', flexDirection: 'column', justifyContent: 'center', py: '40px'
            }}>
                {props.icon}
                <Header1 header={props.text} css={{ m: 'auto', width: '340px', textAlign: 'center' }} />
                <Link to={props.link}>
                    <Typography sx={{ color: '#FA8128' }} align='center'>{props.text}</Typography>

                </Link>
            </Box>
        </Dialog>
    )
}

export default SuccessModel;
