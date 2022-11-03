import React from "react";
import { InputType } from "../../../../interface/userForm/user/InputType";
import { Box } from '@mui/material';
import useStyles from './useStyles';

const index = (props : InputType) =>{
    const classes = useStyles();

    return(
        <Box className={classes.BoxInline} p={1}>
            <Box className={classes.BoxText} pr={1}>
                {props.label || props.labels } : {props.req && <span>*</span>}
            </Box>
        </Box>
    )
}