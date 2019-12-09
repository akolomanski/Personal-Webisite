import React from 'react';
import styled from 'styled-components';
import graphql from 'gatsby';

const StyledWrapper = styled.div`
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
				// background-color: var(--secondary-color);
				color: var(--primary-color);
                &::before{
                    content:' ';
                    position: absolute;
                    z-index: -2;
                    display: inline-block;
                    background-color: var(--secondary-color);
                    height: 300px;
                    width: 20000px;
                    transform: translate(-50%, -44%)
                }
			}
            &:nth-child(even){
                //background-color: var(--primary-color);
				color: var(--secondary-color);
                &::before{
                    content:' ';
                    position: absolute;
                    z-index: -1;
                    display: inline-block;
                    background-color: var(--primary-color);
                    height: 200px;
                    width: 20000px;
                    transform: translate(-50%, -20%)
                }
            }
		}
	}
`;

const Links = ({ location }) => {
	return (
		<StyledWrapper>
			<ul>
				{location !== 'about' && <li>about</li>}
				{location !== 'works' && <li>works</li>}
				{location !== 'skills' && <li>skills</li>}
				{location !== '/' && <li>homepage</li>}
			</ul>
		</StyledWrapper>
	);
};

export default Links;
