import React from 'react'
import { StaticQuery, graphql} from "gatsby"
import {Img} from 'gatsby-image'
import styled from 'styled-components'

const StyledWrapper = styled.div`
    ul{
        list-style: none;
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-gap: 10px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 10%;
        align-content: center;
        justify-items: center;
        li{
            margin: 0;
            min-width: 200px;
        }
        
        
        
        
    }
`;

const SkillsList = () => (
    <StaticQuery 
        query={graphql`
            query SkillsQuery {
                allFile(filter: {relativeDirectory: {eq: "skills"}}) {
                    edges {
                        node {
                            absolutePath
                            relativeDirectory
                            publicURL
                        }
                    }
                }
            }
        `}
        render={data =>(
            <StyledWrapper>
                <ul>
                    {data.allFile.edges.map((skill, i)=>(
                        <li>
                            <img src={skill.node.publicURL} alt={i}/>
                        </li>                    
                    ))}
                </ul>
            </StyledWrapper>
        )

        }
    
    
    />
)

export default SkillsList;
