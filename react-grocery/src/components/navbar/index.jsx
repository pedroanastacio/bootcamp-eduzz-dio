import React, { memo } from 'react';
import { Storefront } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import * as S from './style';
import { PageLink } from '..';

const pages = [
	{
		'id': 1,
		'name': 'Frutas',
		'path': '/products/frutas'
	},
	{
		'id': 2,
		'name': 'Verduras',
		'path': '/products/verduras'
	}
];

const NavBar = () => {

	const renderPageLinks = (page, index) => {
		return (
			<li key={`page-${index}`}>
				<PageLink page={page} />
			</li>
		);
	};

	return (
		<S.Wrapper>
			<Link to={'/'}>
				<Storefront sx={{ fontSize: 45, color: 'secondary.contrastText' }} />
				<Typography className='title'>GROCERY</Typography>
			</Link>
			<div>
				<ul>
					{pages.map(renderPageLinks)}
				</ul>
			</div>
		</S.Wrapper>
	);
};

export default memo(NavBar);