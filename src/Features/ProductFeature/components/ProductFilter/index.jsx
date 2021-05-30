import { Box } from '@material-ui/core';
import React from 'react';
import PropTypes from "prop-types";
import FilterByCategory from '../Filters/FilterByCategory/FilterByCategory';
import FilterByPrice from '../Filters/FilterByPrice/FilterByPrice';
import FilterByService from '../Filters/FilterByService/FilterByService';

ProductFilters.propTypes = {
    filters: PropTypes.object.isRequired,
    onChange: PropTypes.func,
};


function ProductFilters(props) {
    const { onChange, filters } = props;

    const handleCategoryChange = (newCategoryId) => {
        if (!onChange) return;
        const newFilters = {
            ...filters,
            'category.id': newCategoryId,
        }
        onChange(newFilters);
    }

    const handleChange = (filterChange) => {
        if (onChange) onChange(filterChange);
    }

    return (
        <Box>
            <FilterByCategory onChange={handleCategoryChange} />
            <FilterByPrice filters={filters} onChange={handleChange} />
            <FilterByService filters={filters} onChange={handleChange} />
        </Box>
    );
}

export default ProductFilters;
