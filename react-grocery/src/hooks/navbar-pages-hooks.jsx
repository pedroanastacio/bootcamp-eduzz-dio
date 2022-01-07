import { useContextSelector } from 'use-context-selector';
import { NavBarPagesContext } from '../providers/navbar-pages-provider';

export const useNavBarPages = () => {
	const pages = useContextSelector(NavBarPagesContext, context => context.pages);
	const getPages = useContextSelector(NavBarPagesContext, context => context.getPages);

	return { 
		pages, 
		getPages
	};
};

