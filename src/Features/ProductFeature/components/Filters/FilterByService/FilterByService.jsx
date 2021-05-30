import { Box, Checkbox, FormControlLabel, makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const useStyle = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        borderTop: `1px solid ${theme.palette.grey[300]}`,
    },
    list: {
        listStyle: 'none',
    },
}))
FilterByService.propTypes = {
    filters: PropTypes.object,
    onChange: PropTypes.func,
};
FilterByService.defaultProps = {
    filters: {},
}

function FilterByService(props) {
    const classes = useStyle();

    const { onChange, filters } = props;

    const handleValuesChange = (e) => {
        if (!onChange) return;
        const { name, checked } = e.target;
        onChange({
            ...filters,
            [name]: checked,
        })
    }

    return (
        <Box className={classes.root}>
            <Typography variant="subtitle2">DỊCH VỤ </Typography>

            <ul className={classes.list}>
                {[{ label: 'Khuyến mãi', value: 'isPromotion' },
                { label: 'Miễn Phí Giao Hàng', value: 'isFreeShip' }].map(service => (
                    <li key={service.value}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={Boolean(filters[service.value])}
                                    onChange={handleValuesChange}
                                    name={service.value}
                                    color="primary"
                                />
                            }
                            label={service.label}
                        />
                    </li>
                ))}
            </ul>
        </Box>
    );
}

export default FilterByService;