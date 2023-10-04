import styled from "styled-components"

export const Header = styled.header `
background-color: brown;

display:flex;
align-items:center;
justify-content:center;
width: 100%;
position: relative;
margin: 10px;
padding: 20px;

img {
    width:450px;
    margin-bottom: 20px;
}

@media (max-width: 450px){
    img {
        max-width: 350px;
    }
}
`