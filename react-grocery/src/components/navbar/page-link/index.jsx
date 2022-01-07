import React, { memo } from 'react';
import * as S from './style';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { useMatch, useResolvedPath } from 'react-router-dom';

function PageLink({ page }) {

	let resolved = useResolvedPath(page.path);
	let match = useMatch({ path: resolved.pathname, end: true });

	return (
		<S.WrapperLink
			match={match}
			to={page.path}
		>
			<Typography className='text'>{page.name}</Typography>
		</S.WrapperLink>
	);
}

PageLink.propTypes = {
	page: PropTypes.object.isRequired,
};

export default memo(PageLink);