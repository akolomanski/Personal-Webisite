import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Navbar from '../components/navbar/Navbar';

const GlobalStyles = createGlobalStyle`
    body {
    font-family: 'Playfair Display SC', serif;
    padding: 0;
    margin: 0;
	overflow: hidden;
    }
    *, *::before, *::after{
    box-sizing: border-box;
    }  
`;

const StyledWrapper = styled.main`
	--primary-color: #004225;
	--secondary-color: #d29e17;
	--font: 'Playfair Display SC';
	background-color: var(--primary-color);
	font-family: var(--font);
	height: 100%;
	min-height: 100vh;
	width: 100%;
`;

const Layout = ({ children }) => {
	return (
		<StyledWrapper>
			<GlobalStyles />
			<Navbar />
			{children}
		</StyledWrapper>
	);
};

export default Layout;
