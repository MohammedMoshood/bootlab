import styled from "styled-components";

export const Main = styled.main`
position: relative;
transition: 0.7s ease;
  margin: 0 auto;
  max-width: 2200px;
  width: 100%;
  display: flex;
  padding-left: ${({ isOpen }) => (isOpen ? "350px" : "0")};
  transition: all ease-in-out 0.3s;
`;
