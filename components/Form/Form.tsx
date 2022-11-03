import React from "react";
import { Grid , Paper, Box } from "@material-ui/core";
import { Field, reduxForm } from 'redux-form';
import validationForm from "../../store/userForm/User/Form/validationForm";
import { BoxView } from './useStyles';

let Form = (props: any) => {
    const { handleSubmit, reset, handleCancel } = props;

    return(
        <Paper>
            <Grid container spacing={2}>
                <form onSubmit={handleSubmit} noValidate autoComplete="off">
                    <Box {...BoxView}>
                        <Field name="title" component={Title} type="text" />
                    </Box>
                </form>
            </Grid>
        </Paper>
    )
}

Form = reduxForm({
    form: 'user',
    enableReinitialize: true,
    validate: validationForm,
  })
(Form)

export default Form;