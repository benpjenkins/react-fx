import styled from "styled-components";

const Button = styled.button`
  font-size: 18px;
  font-family: AppleGothic;
  border-radius: 15px;

  color: white;
  padding: 1em;
  text-align: center;
  margin: 10px;
  &:hover {
    box-shadow: 0px 0px 10px black;
  }
  &:focus {
    outline: 0;
  }
`;

export default Button;
