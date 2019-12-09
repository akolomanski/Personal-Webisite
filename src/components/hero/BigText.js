import React from 'react'
import styled from "styled-components"



const StyledWrapper = styled.div`
    position: absolute;
    transform: translate(30%, 40%);
    font-size: 65px;
    font-weight: 700;
    letter-spacing: -8px;
    line-height: 148.8%;
    color: var(--secondary-color);
`;

const BigText = () => {
    return (
        <StyledWrapper>
           <h1>I'm</h1>
           <h1>Andrzej</h1>
           <h1>Kołomański</h1> 
        </StyledWrapper>
    )
}

export default BigText;