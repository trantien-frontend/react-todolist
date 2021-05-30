import { Box, Typography } from '@material-ui/core';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constants/index';
import PropTypes from 'prop-types';
import React from 'react';

Product.propTypes = {
    product: PropTypes.object,
};
Product.defaultProps = {
    product: null,
}

function Product(props) {
    const { product } = props;
    const thumbnailUrl = product.thumbnail ? `${STATIC_HOST}${product.thumbnail.url}` : THUMBNAIL_PLACEHOLDER;
    return (
        <Box padding={1}>
            <Box padding={1} minHeight={215}>
                <img width="100%" src={thumbnailUrl} alt={product.name} />
                <Typography variant="body2">{product.name}</Typography>

                <Typography variant="body2">
                    <Box component="span" fontSize="16px" fontWeight="bold">
                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.salePrice)}
                    </Box>

                    {product.promotionPercent > 0 ? ` - ${product.promotionPercent}%` : ''}

                </Typography>
            </Box>
        </Box>
    );
}

export default Product;