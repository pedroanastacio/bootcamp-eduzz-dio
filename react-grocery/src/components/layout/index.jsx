import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';
import { NavBar } from '..';
import ProductsPageProvider from '../../providers/products-page-provider';

const Layout = ({ children }) => {
	return (
		<S.WrapperLayout>
			<NavBar />
			<S.WrapperContainer>
				<S.WrapperContent>
					<ProductsPageProvider>
						{children}
					</ProductsPageProvider>
				</S.WrapperContent>
			</S.WrapperContainer>
		</S.WrapperLayout>
	);
};

Layout.propTypes = {
	children: PropTypes.node,
};

export default Layout;