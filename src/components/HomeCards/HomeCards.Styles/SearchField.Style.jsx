import styled from "styled-components";

export const SearchField = styled.input`
  
  width: 40%;
  padding: 10px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid #0099cc;
  transition: border-bottom 0.3s ease-in-out;
  
  &:focus {
    border-bottom: 2px solid #006699;
    outline: none;
  }

  &::placeholder {
    color: #666;
    opacity: 1;
    text-align: center;
  }

`