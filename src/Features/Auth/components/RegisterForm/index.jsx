import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, LinearProgress, makeStyles, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import InputField from 'components/FormControls/InputField';
import PasswordField from 'components/FormControls/PasswordField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};
RegisterForm.defaultProps = {
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

function RegisterForm(props) {

    const { onSubmit } = props;

    const classes = useStyles();

    const schema = yup.object().shape({
        fullName: yup
            .string()
            .required('Please enter your fullName')
            .test('should has of least two words', 'Please enter at least two words', (value) => {
                return value.split(' ').length >= 2;
            }),

        email: yup
            .string()
            .required('Please enter your email')
            .email('Please enter a valid email'),

        password: yup
            .string()
            .required('Please enter your password')
            .min(6, 'Please enter at least 6 character'),
        retypePassword: yup
            .string()
            .required('Pleas enter your password')
            .oneOf([yup.ref('password')], 'Password does not match')
    });

    const form = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            retypePassword: '',
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
                Create An Acount
            </Typography>

            <form onSubmit={form.handleSubmit(handelSubmit)}>

                <InputField name="fullName" label="FullName" form={form} />
                <InputField name="email" label="Email" form={form} />
                <PasswordField name="password" label="PassWord" form={form} />
                <PasswordField name="retypePassword" label="RetypePassword" form={form} />

                <Button disabled={isSubmitting} type="submit" variant="contained" fullWidth color="primary" className={classes.submit}>
                    Create An Account
                </Button>
            </form>
        </div>
    );
}

export default RegisterForm;