import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles, Typography } from '@material-ui/core';
import categories from 'api/categoriesApi';

const useStyle = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
    menu: {
        listStyle: 'none',
        '& > li': {
            marginTop: theme.spacing(2),
            transition: 'all .25s',
            '&:hover': {
                color: theme.palette.primary.main,
                cursor: 'pointer',
            }
        }
    },
}))

FilterByCategory.propTypes = {
    onChange: PropTypes.func,
};

function FilterByCategory(props) {
    const classes = useStyle();
    const { onChange } = props;

    const [categoryList, setCategorylist] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await categories.getAll();
                console.log(response);
                const newList = response.map((x) => ({
                    id: x.id,
                    name: x.name
                }))
                setCategorylist(newList);
            }
            catch (erorr) {
                console.log('Faild To fetch', erorr);
            }
        })()
    }, [])
    const handleCategoryClick = (category) => {
        if (!onChange) return;
        onChange(category.id);
    }
    return (
        <Box className={classes.root}>
            <Typography variant="subtitle2"> DANH MỤC SẢN PHẨM </Typography>
            <ul className={classes.menu}>
                {categoryList.map(category =>
                    <li onClick={() => handleCategoryClick(category)} key={category.id}>
                        <Typography variant="body2">{category.name}</Typography>
                    </li>
                )}
            </ul>
        </Box >
    );
}

export default FilterByCategory;