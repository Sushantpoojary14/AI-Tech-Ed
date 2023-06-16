import { Box, Dialog, Stack } from '@mui/material'
import { ReactElement } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import { OButton, WButton } from '../Common/Button';
import { Header1 } from '../Common/HeaderText';

interface props {
    handleClose: () => void;
    open: boolean;
    text: string;
    icon: ReactElement;
    func?:()=>void;
}

const ConfirmModel = (props: props) => {

    return (
        <Dialog onClose={props.handleClose} open={props.open} >
            <Box sx={{
                width: { lg: '482px',md: '482px',sm: '482px',xs: '340px' }, height:  '330px' , display: 'flex', flexDirection: 'column',justifyContent:'center',py:'40px'
            }}>
                {props.icon}
                <Header1 header={props.text} css={{m:'auto',width:'340px',textAlign:'center'}}/>
                <Stack spacing={4} direction="row" margin="auto">
                        <WButton name="NO" css={{ width: '157px' }} func={props.handleClose}/>
                        <OButton name="Yes" css={{ width: '157px' }} func={props.func}/>
                </Stack>
            </Box>
        </Dialog>
    )
}

export default ConfirmModel;
