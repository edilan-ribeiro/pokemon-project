import styled from "styled-components"

export const Header = styled.header `
display:flex;
align-items:center;
justify-content:center;
width: 100%;
position: relative;
padding: 20px;

img {
    width:300px;
    margin-bottom: 20px;
}

@media (max-width: 450px){
    img {
        max-width: 350px;
    }
}
`