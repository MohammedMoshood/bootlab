import styled from "styled-components";

export const Main = styled.main`
transition: 0.7s ease;
 
  width: 100%;
  display: flex;
  padding-left: ${({ isOpen }) => (isOpen ? "17%" : "0")};
  transition: all ease-in-out 0.3s;
`;
