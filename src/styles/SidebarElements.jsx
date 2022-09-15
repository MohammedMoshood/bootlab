import styled from "styled-components";

export const OverallContainer = styled.aside`
  padding: 10px;
  width: 17%;
  background: white;
  height: 100%;
  z-index: 999;
  top: 0;
  color: #0f1322;
  position: fixed;
  transition: 0.6s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;
export const SidebarContainer = styled.div`
  background: white;
  padding: 40px 10px;
  display: grid;
  justify-content: center;
  height: 100%;
`;

export const Top = styled.div`
position: relative;
  display: flex;
  width: 100%;
  height:40px;
  margin:0 auto;
  align-items: center;
  justify-content: center;
`;
export const Logo = styled.h1`
  font-size: 36px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const CloseButton = styled.button`
justify-self: flex-end;
border:1px solid #0f1322;
border-radius: 100px;
font-size: 18px;
width: 50px;
height:50px;
display: grid;
place-items: center;
position: absolute;
right:-70px;
background: white;
cursor:pointer;
transition:all 0.3s ease;
&:hover{
  background: #0f1322;
  color:white;
}

`;
export const ProfileDiv = styled.div`
  padding: 20px;
  display: grid;
  width: 250px;
  height: 280px;
  justify-self: center;
  justify-content: center;
  margin-top: 60px;
  text-align: center;
`;
export const ImgContainer = styled.div`
  background: #0f1322;
  width: 140px;
  justify-self: center;
  height: 140px;
  border-radius: 100px;
`;

export const UserImg = styled.img``;

export const UserName = styled.h3`
  font-size: 24px;
  background: transparent;
`;

export const UserPosition = styled.h5`
  font-size: 18px;
  color: darkgrey;
  font-weight: 400;
  background: transparent;
`;

export const SideMenuDiv = styled.div`
  width: 100%;
  height: 300px;
  padding: 20px;
`;
export const ItemDiv = styled.div`
  margin: 20px 0;
  padding: 0 30px;
  display: flex;
  align-items: center;
  font-size: 20px;
  color: #0f1322;
  width: 100%;
  height: 50px;
  transition: all ease 0.3s;
  cursor: pointer;
  &:hover {
    background: rgba(217, 186, 166, 0.3);
    border-radius: 12px;
  }
`;

export const ItemText = styled.p`
  font-weight: 500;
  margin-left: 10%;
`;
