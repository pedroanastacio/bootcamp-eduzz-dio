import React from 'react';
import App from './App';
import { ResetCSS } from './global/resetCSS';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import theme from './assets/theme';

const Providers = () => {
	return (
		<main>
			<ThemeProvider theme={theme}>
				<SCThemeProvider theme={theme}>
					<ResetCSS />
					<Router>
						<App />
					</Router>
				</SCThemeProvider>
			</ThemeProvider>
		</main>
	);
};

export default Providers;
