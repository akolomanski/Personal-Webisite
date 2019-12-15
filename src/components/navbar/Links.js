import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledWrapper = styled.nav`
	a {
		text-decoration: none;
	}
	&.home {
		transform: rotate(51.8deg) translate(31%, -60%);
		right: 0;
		top: 0;
		transform-origin: top;
		position: absolute;

		ul {
			list-style: none;
			text-align: center;
			li {
				font-size: 80px;
				font-weight: 700;
				padding: 40px 0px;
				width: 1000px;
				&:nth-child(odd) {
					a {
						color: var(--primary-color);
					}
					&:before {
						content: ' ';
						position: absolute;
						z-index: -2;
						display: inline-block;
						background-color: var(--secondary-color);
						height: 300px;
						width: 20000px;
						transform: translate(-50%, -44%);
					}
					&:hover {
						a {
							color: var(--secondary-color);
							-webkit-text-stroke: 2px var(--primary-color);
						}
					}
				}
				&:nth-child(even) {
					a {
						color: var(--secondary-color);
					}
					&:before {
						content: ' ';
						position: absolute;
						z-index: -1;
						display: inline-block;
						background-color: var(--primary-color);
						height: 200px;
						width: 20000px;
						transform: translate(-50%, -20%);
					}
					&:hover {
						a {
							color: var(--primary-color);
							-webkit-text-stroke: 2px var(--secondary-color);
						}
					}
				}
			}
		}
	}
	&.other {
		ul {
			list-style: none;
			text-align: center;
			display: flex;
			align-content: center;
			justify-content: space-around;
			margin-top: 0px;
			background-color: var(--secondary-color);
			a {
				color: var(--primary-color);
			}
			li {
				padding: 10px 0;
				margin-top: -10px;
				font-size: 40px;
				font-weight: 700;
				&:hover {
					a {
						color: var(--secondary-color);
						-webkit-text-stroke: 2px var(--primary-color);
						padding: 8px 0;
					}
				}
			}
		}
	}
`;

const Links = ({ location }) => {
	return (
		<StyledWrapper className={location === '/' ? 'home' : 'other'}>
			<ul>
				{location !== '/about' && (
					<li>
						<Link to="/about">about</Link>
					</li>
				)}
				{location !== '/works' && (
					<li>
						<Link to="/works">works</Link>
					</li>
				)}
				{location !== '/skills' && (
					<li>
						<Link to="/skills">skills</Link>
					</li>
				)}
				{location !== '/' && (
					<li>
						<Link to="/">homepage</Link>
					</li>
				)}
			</ul>
		</StyledWrapper>
	);
};

export default Links;
