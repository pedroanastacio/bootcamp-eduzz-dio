import React from 'react';
import * as S from './style';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const NoSearch = ({ children }) => {
	return (
		<S.WrapperMessage>
			<Typography className="message">
				{children}
			</Typography>
		</S.WrapperMessage>
	);
};

NoSearch.propTypes = {
	children: PropTypes.string.isRequired
};

export default NoSearch;