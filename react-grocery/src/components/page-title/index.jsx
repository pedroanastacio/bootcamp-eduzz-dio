import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const PageTitle = ({ children }) => {
	return (
		<Typography color="primary" fontSize="2.5em">
			{children}
		</Typography>
	);
};

PageTitle.propTypes = {
	children: PropTypes.string.isRequired
};

export default memo(PageTitle);