import styled from "styled-components";

export const SearchField = styled.input`
  
  width: 40%;
  padding: 10px 20px;
  margin: 8px 0;
  border: none;
  border-bottom: 2px solid #0099cc;
  background-color: transparent;
  transition: border-bottom 0.3s ease-in-out;
 
  
  &:focus {
    border-bottom: 2px solid #006699;
    outline: none;
  }

  &::placeholder {
    color:  #ffffff86;;
    
    text-align: center;
  }

`