import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ListLoading, PageTitle, ProductsList, SearchBar } from '../../components';
import { useProductsPage } from '../../hooks/products-page-hooks';
import * as S from './style';
import NoSearch from '../../components/no-search';

const ProductsPage = ({ title, categoryId }) => {

	const {
		getProducts,
		setPageTitle,
		pageTitle,
		searchProducts,
		loading,
		products
	} = useProductsPage();

	useEffect(() => {
		setPageTitle(title);
		getProducts(categoryId);
	}, [title, categoryId]);

	return (
		<>
			<S.WrapperHeader>
				<PageTitle>
					{pageTitle}
				</PageTitle>
				<SearchBar onSearch={searchProducts} />
			</S.WrapperHeader>
			{
				loading ?
					<ListLoading />
					:
					products.length === 0 ?
						<NoSearch>
							Nenhum item encontrado
						</NoSearch>
						:
						<ProductsList />
			}
		</>
	);
};

ProductsPage.propTypes = {
	title: PropTypes.string,
	categoryId: PropTypes.string.isRequired
};

export default memo(ProductsPage);