import React from 'react';
import { Link } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';

import BigText from '../components/hero/BigText';

import Layout from '../components/Layout';

import SEO from '../components/seo';

const IndexPage = () => (
	<Layout>
		<SEO title='Homepage'/>
		<BigText />
	</Layout>
);

export default IndexPage;
