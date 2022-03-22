import React, { Route, Routes as RRDRoutes } from 'react-router-dom';
import { ProductsPage, LoginPage, NotFoundPage } from '../pages';
import { useSelector } from 'react-redux';
import { selectorIsAuthenticated } from '../store/selectors';
import ProtectedRoute from './ProtectedRoute';

const Routes = () => {

	const isAuthenticated = useSelector(selectorIsAuthenticated);

	/*<ProtectedRoute redirectPath='/login' isAllowed={isAuthenticated} >
		<ProductsPage title='Verduras' />
		</ProtectedRoute>*/

	return (
		<RRDRoutes>
			<Route path='/'>
				<Route path='products/'>
					<Route path='frutas' element={<ProductsPage title='Frutas' />} />
					<Route path='verduras' element={ <ProductsPage title='Verduras' />} />
				</Route>
				<Route path='login/' element={<LoginPage />} />
			</Route>
			<Route path='*' element={<NotFoundPage />} />
		</RRDRoutes>
	);
};

export default Routes;