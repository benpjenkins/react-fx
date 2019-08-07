import styled from "styled-components";

const Toggle = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  position: absolute;
  bottom: 10px;
  left: 40%;
  right: 40%;
  &:focus {
    outline: 0;
  }
  &:active {
    box-shadow: 0px 0px 4px black;
  }
`;

export default Toggle;
