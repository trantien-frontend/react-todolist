import { unwrapResult } from '@reduxjs/toolkit';
import { login } from 'Features/Auth/userSlice';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import LoginForm from '../LoginForm';

Login.propTypes = {
    closeDialog: PropTypes.func,
};


function Login(props) {

    const { closeDialog } = props;

    const dispatch = useDispatch();

    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = async (values) => {
        try {

            const action = login(values)

            const resultAction = await dispatch(action);

            const user = unwrapResult(resultAction);

            // close dialog
            if (closeDialog) {
                closeDialog();
            }
            // do something when register submit successfully
        }
        catch (error) {
            console.log("error", error);
            enqueueSnackbar(`${error.message}`, { variant: 'error' })
        }
    }
    return (
        <div>
            <LoginForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Login;