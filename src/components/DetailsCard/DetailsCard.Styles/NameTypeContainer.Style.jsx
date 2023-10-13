import styled from "styled-components";

export const NameTypeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
   
    h1{
        color: #9d9c9c;
        margin-bottom: 2%;
        font-size: 20px;
        letter-spacing: 0.5px;
    }

    h2{
        text-transform: capitalize;
        font-size: 25px;
        letter-spacing: 0.5px;
        
       
    }

    ul{
        display: flex;
        gap: 10px;
        padding: 10px 0;
    }

     @media (max-width:575px) {
       margin: 0 auto;
       text-align: center;
      

        ul{
            align-items: center;
            justify-content: center;
        }

     }

    
`