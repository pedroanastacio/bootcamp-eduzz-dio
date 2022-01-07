import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { createContext } from 'use-context-selector';
import { productsService } from '../services/products';
import { useLocation } from 'react-router-dom';

export const ProductsPageContext = createContext({
	products: [],
	pageTitle: '',
	loading: false
});

const ProductsPageProvider = ({ children }) => {

	const [products, setProducts] = useState([]);
	const [pageTitle, setPageTitle] = useState('');
	const [loading, setLoading] = useState(false);

	const location = useLocation();

	const getProducts = async (categoryId) => {
		setLoading(true);
		const newProducts = await productsService.findByCategory(categoryId);
		setProducts(newProducts);
		setLoading(false);
	};

	const searchProducts = async (term) => {
		setLoading(true);

		//Alterar após implementar back-end
		let categoryId = '';

		const [ , ,category] = location.pathname.split('/');

		if(category === 'frutas')
			categoryId = '1';
		else
			categoryId = '2';

		const newProducts = await productsService.searchFromCategory(categoryId, term);
		setProducts(newProducts);
		setLoading(false);
	};
    
	const contextValue = useMemo(() => ({ 
		products,
		pageTitle,
		loading, 
		getProducts, 
		setPageTitle,
		searchProducts
	}), [products, pageTitle, loading]);

	return (
		<ProductsPageContext.Provider value={contextValue}>
			{children}
		</ProductsPageContext.Provider>
	);
};

ProductsPageProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default ProductsPageProvider;