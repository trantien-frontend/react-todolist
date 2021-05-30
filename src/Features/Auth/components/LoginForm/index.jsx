import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, LinearProgress, makeStyles, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import InputField from 'components/FormControls/InputField';
import PasswordField from 'components/FormControls/PasswordField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
};
LoginForm.defaultProps = {
    onSubmit: null,
};

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(2)
    },
    avater: {
        margin: '0 auto',
        backgroundColor: theme.palette.secondary.main,
    },
    title: {
        textAlign: 'center',
        margin: theme.spacing(1, 0, 0, 0),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },

}))

function LoginForm(props) {

    const { onSubmit } = props;

    const classes = useStyles();

    const schema = yup.object().shape({
        identifier: yup
            .string()
            .required('Please enter your email')
            .email('Please enter a valid email'),
        password: yup
            .string()
            .required('Please enter your password')
    });

    const form = useForm({
        defaultValues: {
            identifier: '',
            password: '',
        },
        resolver: yupResolver(schema),
    });

    const handelSubmit = async (values) => {

        if (onSubmit) {
            await onSubmit(values);
        }
    }

    const { isSubmitting } = form.formState;

    return (
        <div className={classes.root}>



            {isSubmitting && <LinearProgress color="secondary" />}

            <Avatar className={classes.avater}>
                <LockOutlined></LockOutlined>
            </Avatar>
            <Typography component="h3" variant="h5" className={classes.title}>
                Sign in
            </Typography>

            <form onSubmit={form.handleSubmit(handelSubmit)}>

                <InputField name="identifier" label="Email" form={form} />
                <PasswordField name="password" label="PassWord" form={form} />
                <Button disabled={isSubmitting} type="submit" variant="contained" fullWidth color="primary" className={classes.submit}>
                    Sign in
                </Button>
            </form>
        </div>
    );
}

export default LoginForm;