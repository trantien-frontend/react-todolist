import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, makeStyles, TextField, Typography } from '@material-ui/core';
const useStyle = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        borderTop: `1px solid ${theme.palette.grey[300]}`,
    },
    range: {
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center',
        margin: `${theme.spacing(1)}px 0px ${theme.spacing(1)}px 0px`,
        '& > span': {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
        }
    },
}))
FilterByPrice.propTypes = {
    onChange: PropTypes.func,
    filters: PropTypes.object,
};

function FilterByPrice(props) {
    const classes = useStyle();

    const { filters, onChange } = props;

    const [values, setValues] = useState({
        salePrice_gte: 0,
        salePrice_lte: 0,
    });

    const handleValuesChange = (e) => {
        setValues((prevValues) => ({
            ...prevValues,
            [e.target.name]: e.target.value,
        }));
    }

    const handleSubmit = () => {
        if (!onChange) return;
        const newValues = {
            ...filters,
            ...values,
        }
        onChange(newValues);
        setValues({
            salePrice_gte: 0,
            salePrice_lte: 0,
        });
    }

    return (
        <Box className={classes.root}>
            <Typography variant="subtitle2">Giá</Typography>

            <Box className={classes.range}>
                <TextField name="salePrice_gte" value={values.salePrice_gte} onChange={handleValuesChange} />
                <span>-</span>
                <TextField name="salePrice_lte" value={values.salePrice_lte} onChange={handleValuesChange} />
            </Box>

            <Button onClick={handleSubmit} variant="outlined" color="primary">Áp dụng</Button>
        </Box>
    );
}

export default FilterByPrice;