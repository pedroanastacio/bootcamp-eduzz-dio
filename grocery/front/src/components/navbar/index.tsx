import React, { memo, useCallback, useState } from 'react';
import { Typography, Badge, IconButton, Avatar, Fab } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import * as S from './style';
import { PageLink } from '..';
import IPage from '../../interfaces/page';
import Drawer from './drawer';
import { useSelector } from 'react-redux';
import { selectorIsAuthenticated } from '../../store/selectors';
import { store } from '../../store';
import UserPopover from './user-popover';

export const pages = [
	{
		name: 'Frutas',
		path: '/products'
	},
	{
		name: 'Verduras',
		path: '/products'
	}
];

const NavBar: React.FC = () => {

	const [showDrawer, setShowDrawer] = useState<boolean>(false);
	const navigate = useNavigate();
	const isAuthenticated = useSelector(selectorIsAuthenticated);
	const user = store.getState().user.value;
	const [popoverAnchor, setPopoverAnchor] = useState<HTMLButtonElement | null>(null);

	const renderPageLinks = useCallback((page: IPage, index: number) => {
		return (
			<li key={`page-${index}`}>
				<PageLink page={page} />
			</li>
		);
	}, []);

	const toggleShowDrawer = useCallback((status: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
		if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) return;
		setShowDrawer(status);
	}, []);

	const handleAvatarClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setPopoverAnchor(event.currentTarget);
	};

	const UserLoggedIn = useCallback(() => {
		if (isAuthenticated) {
			return (
				<button onClick={handleAvatarClick}>
					<Avatar sx={{ bgcolor: 'primary.dark' }}>{user.name.charAt(0)}</Avatar>
					<UserPopover anchor={popoverAnchor} setAnchor={setPopoverAnchor} />
				</button>
			);
		}
		else {
			return (
				<S.WrapperLoginButton
					variant='contained'
					disableElevation
					onClick={() => navigate('/login', { replace: true })}
				>
					<span>Entrar</span>
				</S.WrapperLoginButton>
			);
		}
	}, [isAuthenticated, user]);

	return (
		<>
			<S.Wrapper>
				<S.WrapperDrawerButton>
					<IconButton onClick={toggleShowDrawer(true)}>
						<S.WrapperMenu />
					</IconButton>
				</S.WrapperDrawerButton>
				<S.WrapperLogo>
					<Link to={'/'}>
						<S.WrapperStorefront />
						<Typography className='title'>GROCERY</Typography>
					</Link>
				</S.WrapperLogo>
				<S.WrapperNavItems>
					<S.WrapperNavLinks>
						<ul>
							{pages.map(renderPageLinks)}
						</ul>
					</S.WrapperNavLinks>
					<S.WrapperNavButtons>
						<Badge
							badgeContent={10}
							color='secondary'
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
						>
							<S.WrapperShoppingBasket />
						</Badge>
						<UserLoggedIn />
					</S.WrapperNavButtons>
				</S.WrapperNavItems>
			</S.Wrapper>
			<Drawer
				show={showDrawer}
				toggleShow={toggleShowDrawer}
				items={pages}
			/>
		</>
	);
};

export default memo(NavBar);