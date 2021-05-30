import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import productApi from 'api/productApi';
import queryString from 'query-string';
import FilterViewer from 'Features/ProductFeature/components/FilterViewer/FilterViewer';
import ProductFilters from 'Features/ProductFeature/components/ProductFilter';
import ProductList from 'Features/ProductFeature/components/ProductList';
import ProductSkeletonList from 'Features/ProductFeature/components/ProductSkeleton';
import ProductSort from 'Features/ProductFeature/components/ProductSort';
import React, { useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation } from 'react-router';

ListPageProduct.propTypes = {

};
const useStyle = makeStyles(theme => ({
    root: {},

    left: {
        width: "250px",
    },

    right: {
        flex: "1 1 0",
    },
    pagination: {
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: 'center',
        padding: '20px',
    }
}));

function ListPageProduct(props) {

    const classes = useStyle();

    const history = useHistory();
    const location = useLocation();
    const queryParams = useMemo(() => {
        const params = queryString.parse(location.search);
        return {
            ...params,
            _page: Number.parseInt(params._page) || 1,
            _limit: Number.parseInt(params._limit) || 9,
            _sort: params._sort || 'salePrice:ASC',
            isPromotion: params.isPromotion === 'true',
            isFreeShip: params.isFreeShip === 'true',
        }
    }, [location.search]);


    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pagination, setPagination] = useState({
        limit: 10,
        total: 10,
        page: 1,
    })

    // const [filter, setFilter] = useState(() => ({
    //     ...queryParams,
    //     _page: Number.parseInt(queryParams._page) || 1,
    //     _limit: Number.parseInt(queryParams._limit) || 9,
    //     _sort: queryParams._sort || 'salePrice:ASC',
    // }));

    // useEffect(() => {
    //     history.push({
    //         pathname: history.location.pathname,
    //         search: queryString.stringify(filter),
    //     })
    // }, [history, queryParams]) //history or filter change 

    useEffect(() => {
        async function axiosProdcutList() {
            try {

                const response = await productApi.getAll(queryParams);
                const { data, pagination } = response;
                setProductList(data);
                setPagination(pagination);
            } catch (erorr) {
                console.log(erorr);
            }
            setLoading(false);
        };
        axiosProdcutList();
    }, [queryParams]);

    const handlePageOnChange = (e, page) => {

        // setFilter(prevFilters => ({
        //     ...prevFilters,
        //     _page: page,
        // }))
        const filters = {
            ...queryParams,
            _page: page,
        }

        history.push({
            pathname: history.location.pathname,
            search: queryString.stringify(filters),
        })
    };

    const handleSortChange = (newSortValue) => {
        // setFilter(prevFilters => ({
        //     ...prevFilters,
        //     _sort: newSortValue,
        // }))
        const filters = {
            ...queryParams,
            _sort: newSortValue,
        }

        history.push({
            pathname: history.location.pathname,
            search: queryString.stringify(filters),
        })
    }
    const handleFilterChange = (filterChange) => {
        // setFilter(filterChange);


        history.push({
            pathname: history.location.pathname,
            search: queryString.stringify(filterChange),
        })
    }

    return (
        <Box>
            <Container>
                <Grid container spacing={1}>
                    <Grid item className={classes.left} >
                        <Paper elevation={0}>
                            <ProductFilters filters={queryParams} onChange={handleFilterChange} />
                        </Paper>
                    </Grid>
                    <Grid item className={classes.right}>

                        <Paper elevation={0}>

                            <ProductSort currentSort={queryParams._sort} onChange={handleSortChange} />

                            <FilterViewer onChange={handleFilterChange} filters={queryParams} />

                            {loading ? <ProductSkeletonList length={6} /> : <ProductList data={productList} />}

                            <Box className={classes.pagination} >
                                <Pagination
                                    color="primary"
                                    count={Math.ceil(pagination.total / pagination.limit)}
                                    page={pagination.page}
                                    onChange={handlePageOnChange}
                                >
                                </Pagination>
                            </Box>

                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ListPageProduct;