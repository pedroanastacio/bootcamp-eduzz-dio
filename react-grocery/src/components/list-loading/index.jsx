import React from 'react';
import { Grid } from '@mui/material';
import { LoadingCard } from '..';

const ListLoading = () => {

	const renderCards = (item, index) => {
		return (
			<LoadingCard key={index} />
		);
	};

	return (
		<Grid container spacing={2}>
			{Array.from(new Array(8)).map(renderCards)}
		</Grid>
	);
};

export default ListLoading;