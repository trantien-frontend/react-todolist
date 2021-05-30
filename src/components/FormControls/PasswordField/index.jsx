import FormControl from '@material-ui/core/FormControl';
import { FormHelperText } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';


PasswordField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function PasswordField(props) {
    const { form, name, label, disabled } = props;
    const { formState: { errors } } = form;
    const hasError = !!errors[name];

    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(x => !x);
    }
    return (
        <div>
            {/* <Controller
                name={name}
                control={form.control}
                render={({ field }) =>
                    <TextField {...field}
                        label={label}
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        disabled={disabled}
                        error={hasError}
                        helperText={errors[name]?.message}
                    />}
            /> */}


            <FormControl fullWidth margin='normal' variant="outlined">

                <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>

                <Controller
                    name={name}
                    control={form.control}

                    render={({ field }) =>
                        <OutlinedInput {...field}

                            id={name}
                            type={showPassword ? 'text' : 'password'}
                            label={label}
                            variant="outlined"

                            fullWidth

                            disabled={disabled}
                            error={hasError}
                            // helperText={errors[name]?.message}

                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={toggleShowPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />}
                />
                <FormHelperText error={hasError}>{errors[name]?.message}</FormHelperText>
            </FormControl>
        </div>

    );
}

export default PasswordField;