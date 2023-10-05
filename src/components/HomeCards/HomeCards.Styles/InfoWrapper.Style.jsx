import styled from "styled-components"

export const InfoWrapper = styled.div`

width: 100%;
letter-spacing: 0.5px;
display: flex;
align-items: center;
justify-content: space-between;

h2 {
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 10px;
}

h2 > span{
 font-size: 16px;
 color: #00000079;
 margin-bottom: 2px;
}

p{
    display: flex;
    flex-direction: column;
    gap: 5px;
}


`
