import { Box, Chip, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

const useStyle = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexFlow: 'row wrap',
        alignItems: 'center',
        margin: theme.spacing(2, 0),
        listStyle: 'none',
        '& > li': {
            margin: 0,
            padding: theme.spacing(1),
        }
    },
}))

FilterViewer.propTypes = {
    filters: PropTypes.object,
    onChange: PropTypes.func,
};

const FILTER_LIST = [
    {
        id: 1,
        getLabel: () => 'Miễn Phí Giao Hàng',
        isActive: (filters) => filters.isFreeShip,
        isVisible: () => true,
        isRemovable: false,
        onRemove: () => { },
        onToggle: (filters) => {
            const newFilters = { ...filters };
            newFilters.isFreeShip === true ? delete newFilters.isFreeShip : newFilters.isFreeShip = true;
            return newFilters;
        },
    },
    {
        id: 2,
        getLabel: () => 'Có Khuyễn mãi',
        isActive: () => true,
        isVisible: (filters) => filters.isPromotion,
        isRemovable: true,
        onRemove: (filters) => {
            const newFilters = {
                ...filters,
            };
            delete newFilters.isPromotion;
            return newFilters;
        },
        onToggle: () => { },
    },
    {
        id: 3,
        getLabel: (filters) => `Từ ${filters.salePrice_gte} đến ${filters.salePrice_lte}`,
        isActive: () => true,
        isVisible: (filters) => (Object.keys(filters).includes('salePrice_lte') && (filters.salePrice_lte > 0 ? true : false)) && (Object.keys(filters).includes('salePrice_gte') && (filters.salePrice_gte > 0 ? true : false)),
        isRemovable: true,
        onRemove: (filters) => {
            const newFilters = {
                ...filters,
            };
            delete newFilters.salePrice_gte;
            delete newFilters.salePrice_lte

            return newFilters;
        },
        onToggle: () => { },
    },
    {
        id: 4,
        getLabel: () => 'Danh mục',
        isActive: () => true,
        isVisible: (filters) => Object.keys(filters).includes('category.id'),
        isRemovable: true,
        onRemove: (filters) => {
            const newFilters = {
                ...filters,
            };
            delete newFilters['category.id'];
            return newFilters;
        },
        onToggle: () => { },
    },
]

function FilterViewer({ filters = {}, onChange = null }) {
    const classes = useStyle();
    const visible = useMemo(() => {
        return FILTER_LIST.filter(x => x.isVisible(filters))
    }, [filters])
    return (
        <Box component="ul" className={classes.root}>
            {visible.map(x => (
                <li key={x.id}>
                    <Chip
                        label={x.getLabel(filters)}
                        color={x.isActive(filters) ? 'primary' : 'default'}
                        clickable={!x.isRemovable}
                        onClick={x.isRemovable ? null : () => {
                            if (!onChange) return;
                            const filterChange = x.onToggle(filters);
                            onChange(filterChange);
                        }}
                        onDelete={x.isRemovable ? () => {
                            if (!onChange) return;
                            const newFilters = x.onRemove(filters);
                            onChange(newFilters);
                        }
                            : null
                        }
                    />
                </li>
            ))}
        </Box>
    );
}

export default FilterViewer;