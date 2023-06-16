import { Box, Dialog, Stack, Typography } from '@mui/material'
import { UserContext } from '../../Context/UserContext';
import { OButton, WButton } from '../Common/Button';
import { Header1 } from '../Common/HeaderText';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Input from '../Common/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';


type Inputs = {
    prev_password: string;
    new_password: string;
    confirm_password: string;

};


const PasswordChangeModal = () => {
    const { openPC, handlePCClose, handlePC2Open,dataSubmit,dispatch,handleSuccessOpen} = UserContext();
    const { register, handleSubmit, watch, formState: { errors }, reset, control } = useForm<Inputs>();
    const [passwordData,setPasswordData]= useState({});

    
    useEffect(() => {
        reset({
            prev_password: '',
            new_password: '',
            confirm_password: '',
        });
      }, [openPC]);
      
      useEffect(() => {
        if(dataSubmit==true){
            console.log(passwordData);
            dispatch({ type: 'SET_dataSubmit', payload: false });
            handleSuccessOpen();
        }
      }, [dataSubmit]);    

    const onSubmit: SubmitHandler<Inputs> = async (para_data: Object) => {
        handlePCClose();
        handlePC2Open();
        setPasswordData(para_data);
    }

    return (
        <Dialog onClose={handlePCClose} open={openPC} >
            <Box sx={{
                width: { lg: '482px', md: '482px', sm: '482px', xs: '320px' }, height: '499px', display: 'flex', flexDirection: 'column', px: '40px'
            }}>
                <Stack spacing={1} direction="row" margin="auto" sx={{ my: '28px' }}>
                    <LockOpenIcon sx={{ height: '30px', width: '30px', color: '#FA8128' }} />
                    <Header1 header="CHANGE PASSWORD"  />
                </Stack>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <Stack spacing={4} direction="column" margin="auto">
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Input label="Current Password" val={false} type="password" 
                            reg={register("prev_password", {minLength: 8, maxLength: 16 })} />
                            {errors.prev_password &&
                                <Typography  sx={{ mt: 3, p: 0, color: 'red' }}>
                                     *Minimum 8 - Maximum 16 character
                                </Typography>}
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Input label="New Password" val={false} type="password" 
                            reg={register("new_password", { minLength: 8, maxLength: 16 })} />
                            {errors.new_password &&
                                <Typography sx={{ mt: 3, p: 0, color: 'red' }}>
                                    *Minimum 8 - Maximum 16 character
                                </Typography>
                                }
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Input label="Confirm Password" val={false} type="password" 
                            reg={register("confirm_password", { minLength: 8, maxLength: 16 , validate: (value) => value === watch("new_password") || "" })} />
                            {errors.confirm_password &&
                                <Typography sx={{ mt: 3, p: 0, color: 'red' }}>
                                    {  errors.new_password?.type=='validate'? '*Minimum 8 - Maximum 16 character' :
                                        'Passwords do not match'}
                                </Typography>}
                        </Box>
                        <Stack spacing={{ lg: 6, md: 6, sm: 6, xs: 2 }} direction="row" marginX="auto">
                            <WButton name="CANCEL" css={{ width: '177px' }} func={handlePCClose} />
                            <OButton name="NEXT" css={{ width: '177px' }} type="submit" />
                        </Stack>
                    </Stack>
                </form>
            </Box>
        </Dialog >
    )
}

export default PasswordChangeModal;