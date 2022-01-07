import React, { memo } from 'react';
import { ProductCard } from '..';
import { Grid } from '@mui/material';
import PropTypes from 'prop-types';
import { useProductsPage } from '../../hooks/products-page-hooks';

const ProductsList = () => {

	const { products } = useProductsPage();

	const renderProducts = (product, index) => {
		return (
			<ProductCard key={index} data={product} />
		);
	};

	return (
		<Grid container spacing={2}>
			{products.map(renderProducts)}
		</Grid>
	);
};

ProductsList.propTypes = {
	products: PropTypes.array
};

export default memo(ProductsList);