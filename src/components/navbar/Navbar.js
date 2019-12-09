import React from 'react';
import styled from 'styled-components';
import { Location } from '@reach/router';

import Links from './Links';

const StyledWrapper = styled.div``;

const Navbar = (props) => {
	return (
		<StyledWrapper>
			<Location>
				{({ location }) => {
					switch (location.pathname) {
						case '/':
							console.log('homepage');
							return <Links location={location.pathname} />;
						default:
							console.log('Why are you even here');
					}
				}}
			</Location>
		</StyledWrapper>
	);
};

export default Navbar;
