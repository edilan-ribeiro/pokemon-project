import styled from "styled-components";

export const MovesContainer = styled.div`

   max-height: 155px;
   max-width: 400px;
   overflow: auto;

   h3 {
    margin-bottom: 30px;
   }
    
    ul{
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        gap: 15px;
        margin: 10px 0 20px;

        li{
            background-color: ${props => props.theme.background};
            color: ${props => props.theme.color};
            padding: 8px;
            border-radius: 30px;
        }
    }
   
`