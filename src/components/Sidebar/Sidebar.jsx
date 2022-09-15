import React from "react";
import {
  OverallContainer,
  SidebarContainer,
  Logo,
  ProfileDiv,
  ImgContainer,
  UserImg,
  UserName,
  SideMenuDiv,
  UserPosition,
  Top,
  CloseButton
} from "../../styles/SidebarElements";
import { SidebarData } from "./Data";
import MenuItem from "./MenuItem";
import { useGlobalContext } from "../../context";
import { FaArrowRight } from "react-icons/fa";
const Sidebar = () => {
  const { isOpen, toggleOpen, toggleClose } = useGlobalContext();
  return (
    <OverallContainer isOpen={isOpen}>
      <SidebarContainer>
        <Top>
          <Logo> boosto</Logo>
          <CloseButton onClick={toggleClose}>
            <FaArrowRight/>
          </CloseButton>
        </Top>

        <ProfileDiv>
          <ImgContainer>
            <UserImg></UserImg>
          </ImgContainer>
          <UserName>Ayodeji Moshood</UserName>
          <UserPosition> CEO </UserPosition>
        </ProfileDiv>

        <SideMenuDiv>
          {SidebarData.map((item , index) => {
            return <MenuItem key={index} {...item}></MenuItem>;
          })}
        </SideMenuDiv>
      </SidebarContainer>
    </OverallContainer>
  );
};

export default Sidebar;
