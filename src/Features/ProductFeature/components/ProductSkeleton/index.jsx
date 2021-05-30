import { Box, Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import PropTypes from 'prop-types';
import React from 'react';

ProductSkeletonList.propTypes = {
    length: PropTypes.number,
};
ProductSkeletonList.defaultProps = {
    length: 6,
}
function ProductSkeletonList(props) {
    const { length } = props;
    return (
        <Box>
            <Grid container>
                {Array.from(new Array(length)).map((x, index) =>
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <Box padding={1}>
                            <Skeleton variant="react" width="100%" height={200} />
                            <Skeleton variant="text" />
                            <Skeleton width="60%" variant="text" />
                        </Box>
                    </Grid>
                )}
            </Grid>
        </Box>
    );
}

export default ProductSkeletonList;