import { Box, Dialog, Stack } from '@mui/material'
import { ReactElement } from 'react'
import { Link } from 'react-router-dom';
import { OButton, WButton } from '../Common/Button';
import { Header2 } from '../Common/HeaderText';

interface props {
    handleClose: () => void;
    open: boolean;
    text: string;
    icon: ReactElement;
}

const Logout = (props: props) => {
    return (
        <Dialog onClose={props.handleClose} open={props.open} >
            <Box sx={{
                width: { lg: '440px' }, height: { lg: '410px' }, display: 'flex', flexDirection: 'column',
                px: '30px'
            }}>
                {props.icon}
                <Header2 header={props.text} />
                <Stack spacing={2} direction="row">
                    <Link to="/logout">
                        <WButton name="Yes" css={{ width: '127px' }} />
                    </Link>
                    <Link to="/user/">
                        <OButton name="No" />
                    </Link>
                </Stack>
            </Box>
        </Dialog>
    )
}

export default Logout
