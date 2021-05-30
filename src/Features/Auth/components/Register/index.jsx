import { unwrapResult } from '@reduxjs/toolkit';
import { register } from 'Features/Auth/userSlice';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import RegisterForm from '../RegisterForm';

Register.propTypes = {
    closeDialog: PropTypes.func,
};
Register.defaultProps = {
    closeDialog: null,
};

function Register(props) {

    const { closeDialog } = props;

    const dispatch = useDispatch();

    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = async (values) => {
        try {
            // rule-api : set username = email 
            values.username = values.email;
            const action = register(values)

            const resultAction = await dispatch(action);

            const user = unwrapResult(resultAction);

            // close dialog
            if (closeDialog) {
                closeDialog();
            }
            // do something when register submit successfully
            enqueueSnackbar('Register Successfully !!!', { variant: 'success' })
        }
        catch (error) {
            console.log("error", error);
            enqueueSnackbar(`${error.message}`, { variant: 'error' })
        }
    }
    return (
        <div>
            <RegisterForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Register;