import styled from "styled-components";

export const Main = styled.main`
position: relative;
   /* background: yellow; */
    padding-left: ${({ isOpen }) => (isOpen ? "17%" : "0px")};
    transition: all ease-in-out 0.3s;
  @media screen and (max-width:1200px) {
    
padding-left: 0;
  }
`;
