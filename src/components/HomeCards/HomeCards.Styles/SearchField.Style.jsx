import styled from "styled-components";

export const SearchField = styled.input`
  
  width: 330px;
  padding: 10px 20px;
  margin: 8px 0;
  border: none;
  border: 2px solid #07b2eb;
  border-radius: 20px;
  
  transition: border-bottom 0.3s ease-in-out;
 
  
  &:focus {
    border: 2px solid #009933;
    outline: none;
  }

  &::placeholder {
    color:  #0b0b0b85;    
    text-align: center;
  }

`