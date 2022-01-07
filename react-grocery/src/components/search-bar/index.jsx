import React, { useState, memo } from 'react';
import * as S from './style';
import { TextField, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';
import PropTypes from 'prop-types';

const SearchBar = ({ onSearch }) => {

	const [searchTerm, setSearchTerm] = useState('');

	const handleSubmit = e => {
		e.preventDefault();

		return onSearch(searchTerm);
	};

	return (
		<S.WrapperSearchBar onSubmit={handleSubmit}>
			<TextField
				label='Pesquisar'
				size='small'
				color='primary'
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
			<IconButton	type='submit' color='secondary'>
				<Search fontSize='small' />
			</IconButton>
		</S.WrapperSearchBar>
	);
};

SearchBar.propTypes = {
	onSearch: PropTypes.func.isRequired
};

export default memo(SearchBar);
