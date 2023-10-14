import styled from "styled-components";

export const FieldWrapper = styled.div`
position: relative;
max-width: 350px;    
`

export const SearchForm = styled.form`
    display: flex;
    flex-direction: column;
    text-align: center;

    span {
      color: #fc5454;
      font-size: 13px;
      margin: -8px 0 20px 0;
    }
`

export const SearchField = styled.input`
  position: relative;
  width: 330px;
  padding: 10px 20px;
  margin: 8px 0;
  border: none;
  border: 2px solid #07b2eb;
  border-radius: 20px;
  
  transition: all 0.2s ease-in-out;
 
  
  &:focus {
    border: 2px solid #009933;
    outline: none;
  }

  &::placeholder {
    color:  #0b0b0b85;    
    text-align: center;
  }
`

export const SearchButton = styled.button`
background-color: #FFFFFF;
border: none;
font-size: 20px;
cursor: pointer;
position: absolute;
right: 0.5%;
top: 18%;
width: 55px;
height: 35px;
border-radius: 20px;
`