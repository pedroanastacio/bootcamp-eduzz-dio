import React from 'react';
import { Route, Routes as RRDRoutes } from 'react-router-dom';
import { ProductsPage } from './pages';

const Routes = () => {

	return (
		<RRDRoutes>
			<Route path='/'>
				<Route path="products/">
					{/* Remover categoryId após implementar back-end */}
					<Route path='frutas' element={<ProductsPage title="Frutas" categoryId="1" />} />
					<Route path='verduras' element={<ProductsPage title="Verduras" categoryId="2" />} />
				</Route>
			</Route>
		</RRDRoutes>
	);
};

export default Routes;