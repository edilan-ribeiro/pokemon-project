import styled from "styled-components";

export const AbilitiesContainer = styled.div`

    h3 {
        font-size: 20px;
        margin-bottom: 15px;
    }

    li {
        margin: 10px 0;
        border-bottom: 1px solid #00000021;
        padding-bottom: 15px;
        max-width: 370px;

        p:first-child{
            cursor: pointer;
            display: flex;
            gap: 10px;
            padding: 5px 0;
            letter-spacing: 0.9px;
            font-weight: 700;
        }

        p:nth-child(2){
            padding: 5px;
            line-height: 1.5;
        }

    }
    
`