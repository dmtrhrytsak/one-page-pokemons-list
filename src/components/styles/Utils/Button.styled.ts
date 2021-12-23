import styled from "styled-components";

const Button = styled.button`
  width: 80px;
  height: 80px;

  background-color: ${({theme}) => theme.colors.red};
  color: ${({theme}) => theme.colors.white};
`;

export default Button;