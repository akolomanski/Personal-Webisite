import React from 'react'
import styled from 'styled-components';

const Head = styled.h1`
    color: var(--secondary-color);
    text-align: center;
    transform: translate(-22px,0);
    font-size: 80px;
    margin-top: 0;
    
    
    span{
        color: var(--primary-color);
        -webkit-text-stroke: 1px var(--secondary-color);
    }
`;

const Header = ({content}) => {
    return (
        <Head>
            <span>My</span> {content}
        </Head>
    )
}

export default Header;