import styled from "styled-components";

export const NameTypeContainer = styled.div`
    display: flex;
    flex-direction: column;

    h2{
        span{
            color: #00000090;
        }
    }

        ul{
            display: flex;
            gap: 10px;
            padding: 10px 0;

            li{
                background-color: #bebebe;
                padding: 3px;
            }
        }
`